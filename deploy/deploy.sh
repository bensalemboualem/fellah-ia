#!/bin/bash
# ===========================================
# Fellah IA — Script de deploiement VPS
# Domain: fellah.iafactoryalgeria.com
# ===========================================
set -e

# Charger les variables
if [ ! -f .env ]; then
  echo "ERREUR: fichier .env manquant. Copiez .env.example et remplissez les valeurs."
  exit 1
fi
source .env

echo "=== Fellah IA — Deploiement ==="
echo "Domaine: ${DOMAIN}"
echo "Image:   ghcr.io/${GHCR_USER}/lobe-chat:latest"
echo ""

# Pull la derniere image
echo ">>> Pull de l'image..."
docker pull "ghcr.io/${GHCR_USER}/lobe-chat:latest"

# Premier deploiement ou mise a jour ?
if docker compose ps --quiet 2>/dev/null | grep -q .; then
  echo ">>> Mise a jour du service lobe..."
  docker compose up -d --force-recreate --no-build lobe
else
  echo ">>> Premier deploiement — demarrage de tous les services..."
  docker compose up -d
fi

# Attendre que lobe soit up
echo ">>> Verification..."
sleep 10
if docker compose ps lobe | grep -q "Up"; then
  echo ""
  echo "=== Deploiement reussi ==="
  echo "Site: https://${DOMAIN}"
else
  echo ""
  echo "=== ATTENTION: le service lobe ne semble pas demarrer ==="
  echo "Verifiez les logs: docker compose logs lobe --tail 50"
fi
