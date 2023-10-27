const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.getElementById("ingredients");

for (const ingredient of ingredients) {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = ingredient;
  newIngredient.classList.add("item");
  ingredientsList.appendChild(newIngredient);
}
