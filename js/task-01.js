const h2 = document.querySelectorAll("h2").length;
const ul = document.querySelector("ul");
const items = document.querySelectorAll("li");
// console.log(h2);
// console.log(items);

const categoriesList = document.querySelectorAll("ul#categories li.item");
console.log("Number of categories:", categoriesList.length);

categoriesList.forEach(function (category) {
  const firstItem = category.firstElementChild.textContent;
  const lastItem = category.lastElementChild.childElementCount;

  console.log("Category:", firstItem);
  console.log("Elements:", lastItem);
});
