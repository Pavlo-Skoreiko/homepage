console.log("Cześć! Moja pierwsza strona");

let img = document.querySelector("img");
let anotherName = document.querySelector(".js-anotherName");

img.onclick = function () {
  let mySrc = img.getAttribute('src');
  if (mySrc === "images/Mikolaj.jpg") {
    img.setAttribute('src', "images/PIK4301.jpg");
  } else {
    img.setAttribute('src', "images/Mikolaj.jpg");
  }
  if (mySrc === "images/Mikolaj.jpg") {
    anotherName.innerText = "Mikołaj";
  } else {
    anotherName.innerText = "elfy"
  }
};





if (mySrc === "himages/Mikolaj.jpg") {
    img.setAttribute("src", "images/PIK4301.jpg");
    anotherName.innerText = "Mikołaj";
  } else {
    img.setAttribute("src", "images/Mikolaj.jpg");
    anotherName.innerText = "elfy";
  }

  //Także osobiście sam warunek zrobiłbym na podstawie anotherName.innerText