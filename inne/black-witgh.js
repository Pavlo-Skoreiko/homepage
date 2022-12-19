let changeBackgroundButton = document.querySelector(".changeBackgroundButton");
let body = document.querySelector(".body");
let nextColorName = document.querySelector(".js-nextColorName");

changeBackgroundButton.addEventListener("click", () => {
  body.classList.toggle("blackBackgraund");
  nextColorName.innerText = body.classList.contains("blackBackgraund") ? "bałe" : "czarne";
});

//<button class="changeBackgroundButton">UStaw <span class="js-nextColorName">biale</span></button>