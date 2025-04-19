const utils = require("./modules/bmiCalculator");
const classifier = require("./modules/categoryClassifier");


// enter height(cm) and weight(kg)
// Enter height(foot) and weight(pound) and also "us" to use USunit system
let bmiValue = utils.calculateBMI(185, 85);
console.log(bmiValue);
console.log(utils.getBMICategory(bmiValue));
console.log(classifier.classifyBMI(bmiValue, 20, "male"));