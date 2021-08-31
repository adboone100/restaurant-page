function createFood() {
    const menu = document.createElement("div");
    menu.classList.add("food");

    menu.appendChild(
        createMenuItem(
          "BREAD & BUTTER",
          "acme sesame levain, cultured butter 5"
        )
    );
    menu.appendChild(
        createMenuItem(
          "MARINATED OLIVES",
          "mandarin, herbs, olive oil 5"
        )
    );
    menu.appendChild(
        createMenuItem(
          "CRUDITÉ",
          "perfect veggies, savory mayo 14"
        )
    );
    menu.appendChild(
        createMenuItem(
          "CHEESE PLATE",
          "selection of 3 cheeses 25"
        )
    );
    menu.appendChild(
        createMenuItem(
          "CHARCUTERIE PLATE",
          "selection of 3 meats 25"
        )
    );
    menu.appendChild(
        createMenuItem(
          "SQUASH SALAD",
          "fromage blanc, nectarine, hazelnut 16"
        )
    );
    menu.appendChild(
        createMenuItem(
          "PAN CON TOMATE",
          "mangalitsa lardo, early girl tomato, sesame levain 14"
        )
    );
    menu.appendChild(
        createMenuItem(
          "FINGERLING POTATO",
          "mt tam cheese sauce, iberico ham, black garlic vin 15"
        )
    );
    menu.appendChild(
        createMenuItem(
          "AREPAS",
          "brokaw avocado, bay shrimp, peanut chili salsa, herbs 16"
        )
    );
    menu.appendChild(
        createMenuItem(
          "SNAILS",
          "cashew miso, garlic confit butter, kumquat 20"
        )
    );
    menu.appendChild(
        createMenuItem(
          "HAM & CHEESE",
          "jambon de paris, alpine cheese, dijon 15"
        )
    );
    menu.appendChild(
        createMenuItem(
          "SAKE KASU CUSTARD",
          "berries, olive oil, citrus marigold 9"
        )
    );

    return menu;
}



function createMenuItem(name, description) {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");
    
    const itemName = document.createElement("h2");
    itemName.textContent = name;

    const itemDescription = document.createElement("p");
    itemDescription.textContent = description;



   // menuItem.appendChild(drinkImage);
    menuItem.appendChild(itemName);
    menuItem.appendChild(itemDescription);

    return menuItem;
}

function loadFood() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createFood());
}

export default loadFood;