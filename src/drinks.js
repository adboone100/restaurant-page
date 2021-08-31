function createDrinks() {
    const menu = document.createElement("div");
    menu.classList.add("drinks");

    menu.appendChild(
        createMenuItem(
          "GARIBALDI",
          "campari & fluffy orange juice 13"
        )
    );
    menu.appendChild(
        createMenuItem(
          "OUR VERMOUTH SERVICE",
          "noilly prat vermouth. s.pellegrino. lemon oils. frozen grapes 12"
        )
    );
    menu.appendChild(
        createMenuItem(
          "GIN & TONIC",
          "fords gin. jack rudy tonic cordial. s.pellegrino. citrus. jasmine mist 16"
        )
    );
    menu.appendChild(
        createMenuItem(
          "EL DIABLO ON TAP",
          "don julio blanco. mezcal vida. meletti. cassis cordial. fever tree grapefruit soda & devil salt 18"
        )
    );
    menu.appendChild(
        createMenuItem(
          "ALL DAY BLOODY MARY",
          "grey goose. cold-pressed vegetables. fennel salt. fresh horseradish. pickles 16"
        )
    );
    menu.appendChild(
        createMenuItem(
          "BELLINI",
          "white peach & prosecco 16"
        )
    );
    menu.appendChild(
        createMenuItem(
          "SUMMER 2021",
          "boatyard gin. lillet rosé. clarified strawberry. rhubarb. cucumber bitters. London Essence white peach & jasmine soda 18"
        )
    );
    menu.appendChild(
        createMenuItem(
          "CLARIFIED PIÑA COLADA",
          "cocchi Americano. banks 5 years. wray & nephew. nardini mandorla. coconut. pineapple 18"
        )
    );
    menu.appendChild(
        createMenuItem(
          "SORRENTO LEMONADE",
          "malfy gin di limone. Dante limoncello. fresh lemon. lemon bitters. lemon leaf. s. pellegrino limonata 18"
        )
    );
    menu.appendChild(
        createMenuItem(
          "FLUFFY MARGARITA ROYALE",
          "olmeca altos. ancho verde. fresh lime. roasted & fluffy pineapple. pineapple soda. green chilli. prosecco 19"
        )
    );
    menu.appendChild(
        createMenuItem(
          "SALTY DOG",
          "absolut. fluffy pink grapefruit juice. black lava salt 15"
        )
    );
    menu.appendChild(
        createMenuItem(
          "OLD FASHIONED WHISKEY COCKTAIL",
          "knob creek rye. amaro montenegro. salted honey. dale’s bitters 18"
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

function loadDrinks() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createDrinks());
}

export default loadDrinks;