const convertor = require("./unitConverter");

const calculateBMI = (height, weight, measureSystem) => {
    let heightMeters, weightKG;

    if(measureSystem === "us"){
        weightKG = convertor.poundToKg(weight);
        const heightCM = convertor.footInCm(height);
        heightMeters = convertor.cmToMeters(heightCM);
    }
    else{
        weightKG = weight;
        heightMeters = convertor.cmToMeters(height);
    }
    return weightKG / (heightMeters ** 2);
}
const getBMICategory = (bmiValue) => {

    if(bmiValue < 18.5){ return "underweight" }
    if(bmiValue < 24.9){ return "normal"; }
    if(bmiValue < 29.9){ return "Overweight"; }

    return "obese";
}
module.exports = { calculateBMI, getBMICategory };