function classifyBMI(bmi, age, gender){
    if(age > 20 && bmi > 25 || bmi < 20){
        return "overweight"
    }
    else{
        return "normal"
    }
}   
module.exports = { classifyBMI };