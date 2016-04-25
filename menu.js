// begin with a blank/new order
var order = '';
var optionsString = '';
var types = [
    "Drink",
    "Main Food",
    "Meat",
    "Sauce", 
    "Side Order",
    "Dessert"
];

var questions = ["What would you like to drink?",
                "What would you like to eat?",
                "What meat would you like?",
                "What sauce would you like?", 
                "What would you like to drink?", 
                "What would you like for dessert?"
];

var optionsList = [
    ['nothing', 'coke', 'sprite', 'water', 'diet coke'],
    ['nothing', 'burrito', 'taco', 'quesadilla', 'salad'],
    ['nothing', 'chicken', 'pork', 'beef'],
    ['nothing', 'mild', 'medium', 'spicy', 'ay caramba'],
    ['nothing', 'chips'],
    ['nothing', 'cookie', 'muffin', 'cake']   
];



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
var c = 0;
while (c < questions.length) {
    
    question(types[c], questions[c], optionsList[c]);
    c++;
}

// output their order
document.write("<p>You ordered: " + order + "<p>");
