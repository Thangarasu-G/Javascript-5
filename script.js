
//JavaScript Date Methods
//1.Current Date and Time
let today = new Date();
let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
let day = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
//today date
console.log("Current Date:", today);
//full year
console.log("Year:", today.getFullYear());
//month
console.log("Month:", month[today.getMonth()]);
//date
console.log("Date:", today.getDate());
//day
console.log("Day:", day[today.getDay()]);
//hour
console.log("Hours:", today.getHours());
//minutes
console.log("Minutes:", today.getMinutes());


//2.Set the Date
//set Year
today.setFullYear(2001);
//set date
today.setDate(14);
//set month
today.setMonth(5);
//set Hours
today.setHours(12);
//set Minutes
today.setMinutes(54);
//set seconds
today.setSeconds(30);

console.log(today);

//3.Date Formatting
let value = new Date();
console.log(value.toLocaleDateString("en-IN"));
console.log(value.toLocaleTimeString("en-IN"));
console.log(value.toLocaleString("en-IN"));

//Advanced String Methods
//4.trim()
let name = "   Thangarasu G   ";
let result = name.trim();

console.log("Trim :", result);

//5. Convert Uppercase and Lowercase

console.log("Upper Case :",name.toUpperCase());
console.log("Lower Case :",name.toLowerCase());

//6.includes()
let message = "I am learning JavaScript";

console.log("Includes true :",message.includes("JavaScript"));
console.log("Includes False :",message.includes("Python"));

//7.slice()
let name1 = "Thangarasu";

console.log("Slice :",name1.slice(0, 4));
console.log("Slice :",name1.slice(4));

//8. split()
let fruits = "Apple,Banana,Mango,Orange";

const re = fruits.split(",");

console.log("Fruits :",re);

//9.replace() And replaceAll()
let message1 = "Java is good. Java is powerful.";

let result1 = message1.replace("Java", "Script");
let result2 = message1.replaceAll("Java", "JavaScript");

console.log("Replace :",result1);
console.log("Replace All :",result2);

//10.charAt()
let name2 = "Gowtham Bharathi"
console.log(name2.charAt(0));
console.log(name2.charAt(1));
console.log(name2.charAt(4));
console.log(name2.charAt(8));

//11.charCodeAt() => ascii Value of letters
console.log(name2.charCodeAt(0));
console.log(name2.charCodeAt(1));
console.log(name2.charCodeAt(2));
console.log(name2.charCodeAt(3));

//12.length
console.log("Length Of Name :",name2.length);

let message2 = "Hello World";

console.log("Length Of Message :",message.length);

//13.startsWith()
console.log(message2.startsWith("Java"));
console.log(message2.startsWith("Hello"));

//14.endsWith()
console.log(message2.endsWith("Hello"));
console.log(message2.endsWith("World"));

//15.indexOf()
let message3 = "I love JavaScript";

console.log(message3.indexOf("l"));
console.log(message3.indexOf("J"));
console.log(message3.indexOf("a"));
console.log(message3.indexOf("y"));

//Array Higher-Order Methods
//16.forEach() => don't Return the value

let numbers = [10, 20, 30, 40, 50];

numbers.forEach((currentElement,indexNumber,totalArray) => {
    console.log(currentElement);
    console.log("Index :",indexNumber);
    console.log(totalArray);
});

//17.map() => return the value
let newMap = numbers.map((c,i,t) => {
    return (c*2);
})
console.log(newMap);

//18.filter()
let employee = [
    {name2 : "Thangarasu", salary : 100000},
    {name2 : "Gowtham Brathi", salary : 200000},
    {name2 : "Suriya", salary : 370000},
    {name2 : "Kavi Priya", salary : 700000},
    {name2 : "Prathiba", salary : 400000}
]
let newFilter = employee.filter((c,i,t) => {
    return c.salary >= 200000
});
console.log(newFilter);

//19.find()
let newFind = employee.find((c,i,t) => {
    return c.salary <= 100000
});
console.log(newFind);

//18.reduce()
let newReduce = employee.reduce((acc,c,i,t) => {
    return acc + c.salary
},0);
console.log(newReduce);

//19.some()
let num = [12,24,22,2]
let someNum = num.some((c,i,t) => {
    return c % 2 == 0
});
console.log(someNum);

//20.every()
let everyNum = num.every((c,i,t) => {
    return i%2 == 0
});
console.log(everyNum);

//21.sort()
let num1 = [12,76,1,8,0,100,20]

let acc = num1.sort((a,b) => {
    return a-b
    
});
console.log(acc);
let acc1 = num1.sort((a,b) => {
    return b-a
});
console.log(acc1);











