import loadHome from "./home";
import loadDrinks from "./drinks";
import loadFood from "./food";
import loadAbout from "./about";

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");
    

    header.appendChild(createNav());
    

    return header;
}


function createNav() {
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const homeButton = document.createElement("button");
    homeButton.classList.add("home-nav");
    homeButton.textContent = "La Bella Vita";
    homeButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(homeButton);
        loadHome();
    });

    const drinksButton = document.createElement("button");
    drinksButton.classList.add("button-nav");
    drinksButton.textContent = "Drinks";
    drinksButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(drinksButton);
        loadDrinks();
    });

    const foodButton = document.createElement("button");
    foodButton.classList.add("button-nav");
    foodButton.textContent = "Food";
    foodButton.addEventListener("click", (e) => {
        if (e.target.classList.contains("active")) return;
        setActiveButton(foodButton);
        loadFood();
    });

    const aboutButton = document.createElement("button");
    aboutButton.classList.add("button-nav");
    aboutButton.textContent = "About";
    aboutButton.addEventListener("click", (e) => {
        //if (e.target.classList.contains("active")) return;
        setActiveButton(aboutButton);
        loadAbout();
    });



    nav.appendChild(homeButton);
    nav.appendChild(aboutButton);
    nav.appendChild(foodButton);
    nav.appendChild(drinksButton);

    return nav;
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav, .home-nav");

    buttons.forEach((button) => {
        if (button !== this) {    
            button.classList.remove("active");
        }
    });
    button.classList.add("active");
}

function createMain() {
    const main = document.createElement("main");
    main.classList.add("main");
    main.setAttribute("id", "main");

    return main;
}

function initializeWebsite() {
    const content = document.getElementById("content");

    content.appendChild(createHeader());
    content.appendChild(createMain());

    setActiveButton(document.querySelector(".button-nav"));
    loadHome();
}

export default initializeWebsite;

