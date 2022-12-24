{
  const welcome = () => {
    console.log("Cześć! Moja pierwsza strona");
  }
  welcome();

  const img = document.querySelector("img");
  const anotherName = document.querySelector(".js-anotherName");

  img.onclick = function () {
    const mySrc = img.getAttribute("src");
    if (mySrc === "images/Mikolaj.jpg") {
      img.setAttribute("src", "images/PIK4301.jpg");
      anotherName.innerText = "Mikołaj";
    } else {
      img.setAttribute("src", "images/Mikolaj.jpg");
      anotherName.innerText = "elfy";
    }
  };
}