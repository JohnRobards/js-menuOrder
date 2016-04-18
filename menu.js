// begin with a blank/new order
var order = '';
var optionsString = '';


// build a function to ask questions
function optionsToAString(options) {
    optionsString = '';
    for (var i = 0; i<options.length; i++) {
        if (i == options.length -1) {
            optionsString += options[i];
        }
        else {
            optionsString += options[i] + ", ";
        }
    }
}


function question(type, question, options) {
    optionsToAString(options);
    var request = '';
    var invalidRequest = true;
    
    while (invalidRequest) {
        request = prompt(question + " (" + optionsString + ")");
        for (var c = 0; c<options.length; c++) {
            if (options[c] === request) {
                invalidRequest = false;
            }
        }
        if (invalidRequest) {
            alert("Please choose one of the available options listed after the question!")
        }
    }
    
    
    order += "<p>" + type + ": " + request + "</p>";
}

// call the QUESTION function with the order options
question("Drink", "What would you like to drink?", ['nothing', 'coke', 'sprite', 'water', 'diet coke']);
question("Main Food", "What would you like to eat?", ['nothing', 'burrito', 'taco', 'quesadilla', 'salad']);
question("Meat", "What meat would you like?", ['nothing', 'chicken', 'pork', 'beef']);
question("Sauce", "What sauce would you like?", ['nothing', 'mild', 'medium', 'spicy', 'ay caramba']);
question("Side Order", "What would you like to drink?", ['nothing', 'chips']);
question("Dessert", "What would you like to drink?", ['nothing', 'cookie', 'muffin', 'cake']);


// output their order
document.write("<p>You ordered: " + order + "<p>");
