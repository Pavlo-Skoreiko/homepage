{
  const welcome = () => {
    console.log("Hello world!");
  }
  welcome();

  const image = document.querySelector(".js-image");
  const anotherName = document.querySelector(".js-anotherName");

  image.onclick = () => {
    const replacePicture = image.getAttribute("src");
    if (replacePicture === "images/Mikolaj.jpg") {
      image.setAttribute("src", "images/PIK4301.jpg");
      anotherName.innerText = "Mikołaj";
    } else {
      image.setAttribute("src", "images/Mikolaj.jpg");
      anotherName.innerText = "elfy";
    }
  };
}