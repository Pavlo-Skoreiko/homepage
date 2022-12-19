console.log("Cześć!")

let changeCharacter = document.querySelector(".changeCharacter");
let gender = document.querySelector(".gender");
let image = document.querySelector(".image");


changeCharacter.addEventListener("click", () => {
    switch (image.alt) {
        case "Postać żeńska":
            image.src = "https://static1.millenium.org/articles/1/37/73/41/@/1473695-assassins-creed-valhalla-ordre-des-ancien-1-article_m-1.jpg";
            image.alt = "Postać męska";
            gender.innerText = "Postać żeńska";
            break;

        case "Postać męska":
            image.src = "https://www.actina.pl/wp-content/uploads/2022/05/AC-Valhalla-key-art.jpg";
            image.alt = "Postać żeńska";
            gender.innerText = "Postać męska";
            break;
    }
})

