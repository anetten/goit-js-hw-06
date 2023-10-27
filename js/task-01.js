const h2 = document.querySelectorAll("h2").length;
const ul = document.querySelector("ul");
const items = document.querySelectorAll("li");
// console.log(h2);
// console.log(items);
items.forEach((item) => {});

const categoriesList = document.querySelectorAll("ul#categories li.item");
console.log("Number of categories:", categoriesList.length);

categoriesList.forEach(function (category) {
  const categoryName = category.querySelector("h2");
  const categoryItem = category.querySelectorAll("li");

  console.log("Category:", categoryName.textContent);
  console.log("Elements:", categoryItem.length);
});
