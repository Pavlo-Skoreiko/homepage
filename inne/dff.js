console.log("Cześć! ");


let select = document.querySelector("select");
let html = document.querySelector("html");
document.body.style.padding = "10px";

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function () {
  (select.value === "black") ? update("black", "white") : update("white", "black");
}


let button = document.querySelector(".js-button");
let image = document.querySelector(".js-image");
let anotherName = document.querySelector(".js-anotherName");

button.addEventListener("click", () => {
  switch (anotherName.innerText) {
    case "elfy":
      image.src = "https://i.postimg.cc/QdVvnjF1/PIK4301.jpg";
      anotherName.innerText = "Mikolaj";
      break;

    case "Mikolaj":
      image.src = "https://i.postimg.cc/BbFqXf3r/Mikolaj.jpg";
      anotherName.innerText = "elfy";
      break;
  }
})



// let button = document.querySelector(".js-button");
// let image = document.querySelector(".js-image");
// let anotherName = document.querySelector(".js-anotherName");

// button.addEventListener("click", () => {
//   switch (image.alt) {
//     case "Święty Mikołaj":
//       image.src = "https://i.postimg.cc/QdVvnjF1/PIK4301.jpg";
//       image.alt = "Elfy";
//       anotherName.innerText = "Mikolaj";
//       break;

//     case "Elfy":
//       image.src = "https://i.postimg.cc/BbFqXf3r/Mikolaj.jpg";
//       image.alt = "Święty Mikołaj";
//       anotherName.innerText = "elfy";
//       break;
//   }
// })
