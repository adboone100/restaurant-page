function createAbout() {

    const about = document.createElement("div");
    about.classList.add("about");

    about.appendChild(createParagraph("Now in its latest incarnation as La Vita Bella, its new owners, all lifelong industry professionals, and old friends, have breathed new life into this iconic space. Its historical integrity and sense of community remain firmly intact but now complemented by an elevated collection of local simple yet delightfully executed cuisine, world-class cocktails, and an award-winning bar program. Welcome to La Vita Bella, where everything old is new again."));

    return about;
}


function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
}

function loadAbout() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createAbout());
}

export default loadAbout;