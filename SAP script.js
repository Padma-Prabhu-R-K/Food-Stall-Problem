user_Name = prompt("Enter your Name")
document.write(`Hello ${user_Name}!!. Welcome to our Shop` + "<br>")
let Dish = {
    'dishes': ["VEG FRIED RICE", " EGG FRIED RICE", " MUSHROOM FRIED RICE", " PANEER FRIED RICE", " PRAWN FRIED RICE", " CHICKEN FRIED RICE", " FISH FRIED RICE"],
    'Amount': [180, 200, 230, 225, 210, 220, 240],
    'Sauce': ["TOMATO", "CHILLY"],
    'Juice': ["LEMON JUICE", "ROSE MILK", "SWEET LIME", "WATER MELON JUICE", "MUSKMELON JUICE", "APPLE JUICE", "POMEGRANATE JUICE"],
    'Ingredients': ["Rice,Carrot,Cabbage,Beans,Capsicum", "Egg,Rice,Pepper,Cabbage,Capsicum", "Rice,Mushroom,Carrot,Capsicum", "Rice,Paneer,Capsicum,Carrot,Cabbage",
        "Prawn,Rice,Cabbage,Pepper", "Rice,Chicken,Capsicum,Carrot", "Fish,Rice,Capsicum,Cabbage"],
}
// document.write("Available Dishes:-" + "<br>");
// document.write(Dish.dishes + "<br>");
let Choice = prompt("\n" + Dish.dishes + "\n" + "\n" + "Enter your Dish Name:");
function gettingDishName() {
    for (i = 0; i < Dish.dishes.length; i++) {
        if (Choice.toUpperCase() == Dish.dishes[i] || Choice == i) {
            let dishName = Dish.dishes[i];
            return (dishName);
        }
    }
}

function gettingIngridients() {
    let ingridient = gettingDishName()
    for (i = 0; i < Dish.dishes.length; i++) {
        if (ingridient.toUpperCase() == Dish.dishes[i] || ingridient == i) {
            let ingredientName = Dish.Ingredients[i];
            return ingredientName;
        }
    }
}

function dishAmount() {
    let ingridient = gettingDishName()
    for (i = 0; i < Dish.dishes.length; i++) {
        if (ingridient.toUpperCase() == Dish.dishes[i] || ingridient == i) {
            let Amount = Dish.Amount[i];
            return Amount;
        }
    }
}

function gettingSauce() {
    let select = prompt("Do u need Sauce? ...Enter Yes (or) No")
    if (select.toUpperCase() == 'YES' || select == 1) {
        Sauce = prompt("Tomato Sauce or Chilli Sauce??..Enter sauce name");
        for (i = 0; i < Dish.Sauce.length; i++) {
            if (Sauce.toUpperCase() == Dish.Sauce[i] || Sauce == i) {
                return (Dish.Sauce[i]);
            }
        }
    } else if (select.toUpperCase() == 'NO' || select == 2) {
        return ("none");
    }
}

function gettingJuice() {
    let selectjuice = prompt("Do u need Juice?..Enter Yes (or) No")
    if (selectjuice.toUpperCase() == 'YES' || selectjuice == 1) {
        juice = prompt(Dish.Juice + "\n" + "\n" + "Enter Juice name");
        for (i = 0; i < Dish.Juice.length; i++) {
            if (juice.toUpperCase() == Dish.Juice[i] || juice == i) {
                return (Dish.Juice[i]);
            }
        }
    } else if (selectjuice.toUpperCase() == 'NO' || selectjuice == 2) {
        return ("none");
    }
}


function gettingOrderId() {
    let orderId = (user_Name.slice(0, 3) + Math.floor(Math.random() * 100));
    return (orderId);
}

function result1() {
    let fooditems = { 'FoodName': gettingDishName(), 'Sauce': gettingSauce(), 'Juice': gettingJuice(), 'Ingredient': gettingIngridients() };
    document.write('Foodname:', fooditems['FoodName'] + "<br>");
    document.write('Sauce: ', fooditems['Sauce'] + "<br>");
    document.write('Juice:', fooditems['Juice'] + "<br>");
    document.write('Ingredient:', fooditems['Ingredient'] + "<br>" + "<br>" + "<br>");
}

function result2() {
    let order = { 'orderId': gettingOrderId(), 'Amount': dishAmount() }
    document.write('orderId:', order['orderId'].bold() + "<br>");
    document.write('Amount:', order['Amount'] + "<br>");
}

function suggestion() {
    let selectsuggest = prompt("Do you have any Feedback??...Enter Yes (or) No")
    if (selectsuggest.toUpperCase() == "YES" || selectsuggest == 1) {
        let suggestions = prompt("Enter any feedback:")
        document.write("Your Feedback:-", suggestions);
        document.write("<br>")
        document.write("Thank you, Visit Again")
    }
    else if (selectsuggest.toUpperCase() == "NO" || selectsuggest == 2) {
        document.write("Thank You, Visit Again");
    }

}
setTimeout(() => {
    result1(Choice, Dish);
    setTimeout(() => {
        result2(Dish);
        setTimeout(() => {
            suggestion()
        }, 1000)
    }, 2000);
}, 2000);