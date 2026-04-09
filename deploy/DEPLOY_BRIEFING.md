# Fellah IA — Briefing Deploiement VPS

## Contexte
Fellah IA est un fork de LobeChat rebrande pour le secteur agricole algerien.
Domaine cible: **fellah.iafactoryalgeria.com**

## Architecture (7 services Docker)

```
Internet --> Caddy (HTTPS auto, ports 80/443)
               |
               +---> lobe (:3210) — app principale
               +---> minio (:9000) — stockage S3 via /s3/*
               +---> casdoor (:8000) — auth SSO via /casdoor/*
               |
               lobe ---> postgresql (pgvector :5432)
               lobe ---> redis (:6379)
               lobe ---> searxng (:8080)
               minio-init (one-shot) — cree le bucket
```

## Procedure pas-a-pas

### 1. Preparer le VPS
```bash
curl -fsSL https://get.docker.com | sh
sudo usermod -aG docker $USER
sudo mkdir -p /opt/fellah-ia && sudo chown $USER:$USER /opt/fellah-ia
```

### 2. Transferer les fichiers
```bash
scp -r deploy/* user@VPS_IP:/opt/fellah-ia/
```

### 3. DNS — enregistrement A
```
fellah.iafactoryalgeria.com  -->  IP_DU_VPS
```

### 4. Configurer le .env
```bash
cd /opt/fellah-ia
cp .env.example .env
# Generer les secrets
sed -i "s|^POSTGRES_PASSWORD=.*|POSTGRES_PASSWORD=$(openssl rand -base64 24)|" .env
sed -i "s|^MINIO_ROOT_PASSWORD=.*|MINIO_ROOT_PASSWORD=$(openssl rand -base64 24)|" .env
sed -i "s|^KEY_VAULTS_SECRET=.*|KEY_VAULTS_SECRET=$(openssl rand -base64 32)|" .env
sed -i "s|^AUTH_SECRET=.*|AUTH_SECRET=$(openssl rand -base64 32)|" .env
# Ajouter les cles API
nano .env
```

### 5. Login GHCR + pull
```bash
echo "GITHUB_TOKEN" | docker login ghcr.io -u bensalemboualem --password-stdin
docker pull ghcr.io/bensalemboualem/fellah-ia:latest
```

### 6. Lancer
```bash
chmod +x deploy.sh
./deploy.sh
```

### 7. Verifier
```bash
docker compose ps                    # tous "Up"
docker compose logs lobe --tail 50   # pas d'erreur
curl -I https://fellah.iafactoryalgeria.com  # HTTP/2 200
```

## Maintenance
```bash
docker compose logs lobe -f --tail 100
docker compose restart lobe
docker compose exec postgresql pg_dump -U postgres fellah_ia > backup_$(date +%Y%m%d).sql
docker pull ghcr.io/bensalemboualem/fellah-ia:latest && docker compose up -d --force-recreate --no-build lobe
```

## Securite
- Casdoor `runmode: prod` (configure)
- Regenerer clientId/clientSecret Casdoor apres premier demarrage
- Firewall: seuls ports 80/443 ouverts
- Ne jamais committer le .env
