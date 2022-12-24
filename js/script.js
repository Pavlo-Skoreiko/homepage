{
  const welcome = () => {
    console.log("Hello world!");
  }
  welcome();

  const img = document.querySelector("img");
  const anotherName = document.querySelector(".js-anotherName");

  img.onclick = () => {
    const replacePicture = img.getAttribute("src");
    if (replacePicture === "images/Mikolaj.jpg") {
      img.setAttribute("src", "images/PIK4301.jpg");
      anotherName.innerText = "Mikołaj";
    } else {
      img.setAttribute("src", "images/Mikolaj.jpg");
      anotherName.innerText = "elfy";
    }
  };
}