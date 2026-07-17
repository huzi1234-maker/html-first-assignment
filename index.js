alert("Welcome to our website!");
alert ("Error! Please enter a valid password.");
alert("Welcome to JS Land...\nHappy Coding!");
alert("Welcome to JS Land...");
alert("Happy Coding!\nPrevent this page from creating additional dialogs.");
var userName;
var myName = "Muhammad Huzaifa Khan";
alert(myName);
var message;
var message = "Hello World";
alert(message);
var studentName = prompt("Enter your name:");
alert("Hello " + studentName);
var age = prompt("Enter your age:");
alert("You are " + age + " years old");
var course = prompt("Enter your course name:");
alert("You have enrolled in " + course);
var age = +prompt("Enter your age:");
alert("You are " + age + " years old");
var visitcount = +prompt("Enter your visit count:");
alert("You have visited this site " + visitcount + " times");
var birthYear = +prompt("Enter your birth year:");
document.write("My birth year is " + birthYear + "<br>" + "Data type of my declared variable is number");
var visitorName = prompt("Enter your name:");
prompt("Enter your product title:");
var quantity = +prompt("Enter your quantity:");
document.write(visitorName + " ordered " + quantity + " T-shirt(s) on XYZ Clothing store");




















var city = +prompt("Enter your city name:");
if (city.toLowerCase()==="Karachi"){
alert("Welcome to city of Lights:");
} 
var gender = +prompt("Enter your gender:");
if (gender.toLowerCase()==="male"){
alert("Good Morning Sir");
}
if (gender.toLowerCase()==="female"){
alert("Good Morning Ma'am");
}
var color = +prompt("Enter the color of traffic signal:");
if (color.toLowerCase()==="red"){
alert("Stop");
}
if (color.toLowerCase()==="yellow"){
alert("Ready to Stop");
}
if (color.toLowerCase()==="green"){
alert("Go");
}
var fuel = +prompt("Enter remaining fuel in car (in litres):");
if (fuel < 0.25){
alert("Please refill the fuel in your car");
}
var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}
var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}
if (true){
alert("True");
}
if (false){
alert("False");
}
