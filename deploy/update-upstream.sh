#!/bin/bash
# ===========================================
# Fellah IA — Mise a jour depuis LobeHub upstream
# Usage: ./update-upstream.sh
# ===========================================
set -e

echo "=== Fellah IA — Sync upstream ==="

# Verifier qu'on est sur la bonne branche
BRANCH=$(git branch --show-current)
if [ "$BRANCH" != "fellah-ia" ]; then
  echo "ERREUR: tu dois etre sur la branche fellah-ia (actuellement: $BRANCH)"
  exit 1
fi

# Verifier qu'il n'y a pas de changements non commites
if ! git diff --quiet || ! git diff --cached --quiet; then
  echo "ERREUR: il y a des changements non commites. Commite ou stash d'abord."
  exit 1
fi

# Fetch upstream
echo ">>> Fetch upstream (lobehub/lobehub)..."
git fetch upstream

# Merge upstream canary dans fellah-ia
echo ">>> Merge upstream/canary dans fellah-ia..."
if git merge upstream/canary --no-edit; then
  echo ""
  echo "=== Merge reussi sans conflit ==="
  echo "Verifie les changements avec: git log --oneline -10"
  echo "Puis push avec: git push origin fellah-ia"
else
  echo ""
  echo "=== CONFLITS DETECTES ==="
  echo "Resous les conflits, puis:"
  echo "  git add ."
  echo "  git commit"
  echo "  git push origin fellah-ia"
fi
