//let colorBox = [];

//function createBoxes(amount) {
 //   const items = [];
   // for (let i=0; i < amount; i++) {
   //     let hex = getRandomHexColor();
   //     let color = {
   //         hex,
   //         rgb: hexToRgb(hex),
    //      };
        
    //      items.push(color);
   // }

   // colorBox = [...items];
   // renderBoxes(items);
//}

//function renderBoxes(colors) {
 //   refs.container.innerHTML = "";
  //  const boxes = colors.map(({hex}) => {
  //      const div = document.createElement("div");
  //      div.style.backgroundColor = hex;
   //     div.style.width = "30px";
  //      div.style.height = "30px";
   //     div.style.margin = "10px";
   //     return div;
   // });
   // refs.container.append(...boxes);
//}

//function getRandomHexColor() {
 //   return `#${Math.floor(Math.random() * 16777215)
  //    .toString(16)
  //    .padStart(6, 0)}`;
 // }

 // const refs ={
 //   btn: document.querySelector("#controls"),
 //   container: document.querySelector("#boxes"),
 // //};

  //refs.btn.addEventListener("click", () => {
   // const amount = parseInt(document.querySelector("#controls input").value, 1);
   // if (amount <= 100) {
    //    createBoxes(amount);
   // }
 // });

 // let colorBox = []; // Масив для зберігання даних кольорів

  //function createBoxes(amount) {
 //   const items = [];
 //   let size = 30; // Початковий розмір елемента
  
  //  for (let i = 0; i < amount; i++) {
  //    let hex = getRandomHexColor();
 //     const div = document.createElement("div");
  
  //    div.style.backgroundColor = hex;
 //     div.style.width = `${size}px`;
  //    div.style.height = `${size}px`;
  //    div.style.margin = "10px";
  
  //    items.push(div);
 //     size += 10; // Збільшуємо розмір наступного елемента
 //   }
  
  //  refs.container.innerHTML = ""; // Очищаємо попередню колекцію
 // }
  
 // function destroyBoxes() {
 //   refs.container.innerHTML = ""; // Очищаємо контейнер
 // }
  
  //function getRandomHexColor() {
 //   return `#${Math.floor(Math.random() * 16777215)
  //    .toString(16)
 //     .padStart(6, 0)}`;
 // }
  
 // const refs = {
 //   createBtn: document.querySelector("[data-create]"), // Кнопка Create
 //   destroyBtn: document.querySelector("[data-destroy]"), // Кнопка Destroy
 //   input: document.querySelector("#controls input"), // Поле вводу
 //   container: document.querySelector("#boxes"), // Контейнер для елементів
 // };
  
  // Обробник для кнопки Create
  //refs.createBtn.addEventListener("click", () => {
  //  const amount = parseInt(refs.input.value, 10);
  
    // Валідація значення
  //  if (amount >= 1 && amount <= 100) {
  //    createBoxes(amount);
 //     refs.input.value = ""; // Очищаємо значення в input
  //  } else {
 //    alert("Please enter a number between 1 and 100!");
 //   }
 // });
  
  // Обробник для кнопки Destroy
 // refs.destroyBtn.addEventListener("click", destroyBoxes);