const totalCategories = document.querySelectorAll("li.item");
console.log("Numbers of categories:", totalCategories.length);

const categories = document.querySelectorAll("li.item");
categories.forEach((category) => {
    const title = category.querySelector("h2").textContent;
    const elem = category.querySelectorAll("li").length;
    console.log(`Category: ${title}`); 
    console.log(`Elements: ${elem}`);
});