const prixUnitaire = 100; // Prix fixe de 100dh par article

// Récupérer les éléments du DOM
const quantityInput = document.getElementById("quantity");
const totalOutput = document.getElementById("total");

// Ajouter un écouteur pour détecter les changements dans la quantité
quantityInput.addEventListener("input", () => {
  const quantity = parseInt(quantityInput.value) || 0; // Convertir la valeur saisie en entier (0 si vide)
  const total = quantity * prixUnitaire; // Calculer le total
  totalOutput.textContent = `${total} Dh`; // Afficher le total
});