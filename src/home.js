function createHome() {

    const home = document.createElement("div");
    home.classList.add("home");

    const restaurantName = document.createElement("h1");
    restaurantName.classList.add("restaurant-name")
    restaurantName.textContent = "La Vita Bella";

    home.appendChild(restaurantName);

    home.appendChild(createParagraph("1010 WALLER ST"));
    home.appendChild(createParagraph("SAN FRANCSICO, CA 94110"));
    home.appendChild(createParagraph("TUESDAY - SUNDAY"));
    home.appendChild(createParagraph("NOON - LATE"));

    return home;
}


function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
}

export default loadHome;