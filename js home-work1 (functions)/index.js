// დავალება #1 ფუნქციების შექმნა და გამოძახება სხვადასხვა მეთოდით;
function basicFun(){
    return "hello from fun0";
}
const funExpressionNamed = function funName(){
    return "bye from fun1";
}
const funExpressionAnonymous = function(){
    return "hello from fun1"
}
const anonymousArrowFunExpression = () => {
    return "hello, from fun 3";
}
const anonymousArrowFunExpressionOneLiner = () => "hello from fun2";

console.log(basicFun());
console.log(funExpressionNamed());
console.log(funExpressionAnonymous());
console.log(anonymousArrowFunExpression());
console.log(anonymousArrowFunExpressionOneLiner());

// დავალება #2 შექმენით ფუნქცია პარამეტრებით და ნაგულისხმევი მნიშვნელობებით.
function temperature(celsius = 20){
    let weather;
    if(celsius > 20){
        weather = "მეტია 20°-ზე"
    }
    else{
        weather = "ნაკლებია 20°-ზე"
    }
    return weather;
}
console.log(temperature(25));

// დავალება #3 გამოიყენეთ rest პარამეტრები ფუნქციაში ცვლადი რაოდენობის არგუმენტების მისაღებად.
// reduce()
function numsSum(...values){
    return values.reduce((total, num) => total + num);
}
console.log(numsSum(10, 10, 10, 7, 8, " is age of", " jason momoa "));
// უბრალოდ rest ტიპის გადაცემა არგუმენტად
function getUser(name, age, ...hobbies){
    return {name, age, hobbies};
}
const result = getUser("likuna", 24, "xatva", "wera", "sirbili");
console.log(result);

// დავალება #4 შექმენით ფუნქცია, რომელიც აბრუნებს მნიშვნელობას და გამოიყენეთ ეს მნიშვნელობა
// იყენებეს დაბრუნებულ მნიშვნელობას
function yesOrNo(adulthoodAge){
    let permision;
    if(adulthoodAge >= 18){
        permision = true;
    }
    else{
        permision = false;
    }
    return permision;
}
// შევქმენი ფუნქცია, რომელიც აბრუნებს მნიშვნელობას
function fun(age){
    return age; // age - მნიშვნელობა
}
const adulthoodAge = fun(18); // მივანიჭე დაბრუნებული მნიშვნელობა
console.log(yesOrNo(adulthoodAge)); // გამოვიყენე დაბრუნებული მნიშვნელობა

// დავალება #5  დაწერეთ closure ფუნქცია, რომელიც ინახავს მდგომარეობას
function outerFun(weight){ // გარე ფუნქცია
    let monkeyWeight = weight;
    return{
        name: "aleksandre",
        incrementWeight: function(){ // შიდა ფუნქცია
            monkeyWeight++; // შიდა ფუნქციამ დაიმახსოვრა გარე ფუნცქიის ცვლადი და შეცვალა იგი
        },
        decrementWeight: function(){ // შიდა ფუნქცია
            monkeyWeight--; // შიდა ფუნქციამ დაიმახსოვრა გარე ფუნცქიის ცვლადი და შეცვალა იგი
        },
        getWeight: function(){  // შიდა ფუნქცია
            return "monkey weight is: " + monkeyWeight + "kg";
        }
    };
}
const monkey = outerFun(30); // ცვლადს მივანიჭეთ გარე ფუნქციის მნიშვნელობა, ანუ return ში არსებული მეთოდები, რაც ნიშნავს რომ ეს ცვლადი გახდა ობიექტი
monkey.incrementWeight(); // ვზრდით წონას
monkey.incrementWeight(); // ვზრდით წონას
monkey.decrementWeight(); // ვამცირებთ წონას
console.log(monkey.getWeight()); // გამოგვაქ წონა
console.log(monkey) // გამოქვაქ ობიექტი

// დავალება #6 შექმენით რეკურსიული ფუნქცია
function factorial(x){
    if(x <= 1){
        return 1;
    }
    return x * factorial(x - 1); // x(5) * x(4) * x(3) * x(2)
}
console.log(factorial(5));
// რეკურსიული ფუნქცია მასივის ელემენტების ჯამის გამოსათვლელად
function arrayrecurse(array, index){
    if(index >= array.length){
        return 0;
    }
    return array[index] + arrayrecurse(array, index + 1); 
}
let array = [3, 3, 4, 5, 6];
console.log(arrayrecurse(array, 0));

// დავალება #7 გამოიყენეთ callback ფუნქცია, როგორც არგუმენტი
function getCircleArea(callback){ // არგუმენტი ხდება წრისფართობის გამოსათვლელი ფუნქცია 
    return callback(5); // ვიძახებთ ფუნქციას რომელიც იანგარიშებს წრის ფართბს
}
function calculateCircleArea(radius){
    return Math.PI * radius**2; // ვიანგარიშებთ წრის ფართობს
}
console.log("Circle are is: " + getCircleArea(calculateCircleArea)); // ერთ ფუნქციას არგუმენტად გადავცემთ მეორე ფუნქციას

function fillArray(array, callback){ // ავსებს არეის და იძახებს ქოლბეკ ფუნქციას რომელიც აორმაგებს ერეიში არსუბულ ელემენტების მნიშვნელობას
    for (let i = 0; i <= 5; i++) {
        array[i] = i;
    }
    return callback(array); // იძახებს callback ფუნქციას
}
function doubledArrayNums(array){
    let result = [];
    for (let i = 1; i < array.length; i++) {
        result.push(array[i] * 2);        
    }
    return result;
}
let numbers = [];
console.log(fillArray(numbers, doubledArrayNums));

// დავალება #8 შექმენით ფუნქცია, რომელიც იყენებს this კონტექსტს და გამოიყენეთ call, apply, და bind მეთოდები
person = {
    firstname: "luka",
    lastname: "gulikashvili",
    age: 20,
    greeting: function(greeting, punctuation, callback) {
        const fullname = callback();
        return greeting + fullname + punctuation;
    },
    fullname: function(){
        return this.firstname + " " + this.lastname;
    }
}
anotherPerson = {
    firstname: "Anna",
    lastname: "Smith"
}
console.log(person.fullname.call(anotherPerson)); // fullname-ს ვეუბნებით რომ მისი this გამოიყენებს anotherPerson-ის ველებს
console.log(person.greeting("გამარჯობა ", "!", person.fullname.bind(person))); // fullname-ის ვეუბნებით ბოლო არგუმენტად მიიღოს ობიექტის მეთოდი რომლის this იქნება დაკავშირებული anotherPerson ობიექტის ველებთან.

console.log(person.greeting.apply(anotherPerson, ["hello ", " !", person.fullname.bind(person)])); // ვიყენებთ apply-ის რაც გვაძლევს არგუმენტად მასივის გადაწოდებას

const saySalamtoLuka = person.fullname.bind(person); // fullname მეთოდს ვანიჭებთ ცვლადს
console.log(person.greeting("სალამი ", "! ", saySalamtoLuka)); // ვიძახებთ მეთოდს რომლსაც ვაწცდით ზემოთ აღწერილ ცვლადს callback არგუმენტად;