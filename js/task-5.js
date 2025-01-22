const colorChange = document.querySelector(".widget");

colorChange.addEventListener("click", () => {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
});
    
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }