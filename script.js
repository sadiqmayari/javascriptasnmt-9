
document.write("<h1>Muhammad Sadiq CCO-116650</h1>")


let sutdentLitrelNotation = [];
let studentObjectNotaion = new Array();

let stringArray = ["sadiq","saad","madani"];
let numberArray = [1,2,3,4];
let booleanArray = [true,false,true,false];
let mixedArray = ["sadiq", 1, true,];

document.write(stringArray+"<br>");
document.write(numberArray+"<br>");
document.write(booleanArray+"<br>");
document.write(mixedArray+"<br>");

let qualification = ["SSC", "HSC", "BCS",
    "BS", "BCOM", "MS", "M.Phil.", "PhD"];

    document.write("<h2>Qualifications:</h2>"+"<br>");
    for (i=0; i <
         qualification.length ; i++){
        document.write("<li> "+qualification[i]+"</li>")
    }


document.write("<br><br><br>")

// let studentOne = prompt("Write the name of the first Student:");
// let studentOneMarks = +prompt("How Much Total Marks did "+studentOne+" Get ?");
// let studentTwo = prompt("Write the name of the second Student:");
// let studentTwoMarks = +prompt("How Much Total Marks did "+studentTwo+" Get ?");
// let studentThree = prompt("Write the name of the third Student:");
// let studentThreeMarks = +prompt("How Much Total Marks did "+studentThree+" Get ?");
// let totalMarks = 500;


// let studentNameArray = [studentOne, studentTwo, studentThree];
// let StudentMarksArray = [studentOneMarks, studentTwoMarks,studentThreeMarks];

// document.write("<h2>score of " + studentNameArray[0] + " is " + StudentMarksArray[0] + ". Percentage: " + (StudentMarksArray[0]/totalMarks)*100 +"%</h2>")
// document.write("<h2>score of " + studentNameArray[1] + " is " + StudentMarksArray[1] + ". Percentage: " + (StudentMarksArray[1]/totalMarks)*100 +"%</h2>")
// document.write("<h2>score of " + studentNameArray[2] + " is " + StudentMarksArray[2] + ". Percentage: " + (StudentMarksArray[2]/totalMarks)*100 +"%</h2>")

let totalStudents = 3;
let totalMarks = 500;

let studentNameArray = [];
let studentMarksArray = [];

for (let i = 0; i < totalStudents; i++) {
    let studentName = prompt("Write the name of Student " + (i + 1) + ":");
    let studentMarks = +prompt("How Much Total Marks did " + studentName + " Get ?");
    
    studentNameArray.push(studentName);
    studentMarksArray.push(studentMarks);
    
    document.write("<h2>score of " + studentNameArray[i] + " is " + studentMarksArray[i] + ". Percentage: " + (studentMarksArray[i] / totalMarks) * 100 + "%</h2>");
};


document.write("<br><br><br>");

//initail array
let colours = ["red","blue","orange"];
document.write("first Array ====> "+ colours+"<br>");

//user input in beging of array
let userColour1 = prompt("what Colour You want to add in the begining of the Array?");
colours.unshift(userColour1);
document.write("updated array ====> "+colours+"<br>");

//user input for end of array
let userColour2 = prompt("what colour you want to add at the end of the array?")
colours.push(userColour2);
document.write("updated array ====> "+ colours+"<br>");

//add two new colour in array
colours.unshift("Aqua","Copper");
document.write("Two Colours Added ====> "+colours+"<br>");

//delete first item in array
colours.shift();
document.write("First item Deleted ====>"+ colours +"<br>");

//delete last item in array
colours.pop();
document.write("last item deleted in array ====> "+colours+"<br>");


//user desired index input 
let userIndex = +prompt("What Index Number You Want to add Colour?") 
let userColour3 = prompt("What colour you want to add?")
colours.splice( userIndex,0, userColour3);
document.write("user input updated array ===>"+ colours+"<br>");




document.write("<br><br><br>");

// Create an array to store student scores
let studentScores = [85, 92, 78, 95, 88];

document.write("Original Scores: " + studentScores);

// Sort the array in ascending order
studentScores.sort(function(a, b) {
    return a - b;
});

document.write("<br>Sorted Scores (Ascending Order): " + studentScores);

document.write("<br><br><br>");


//selected cities in new array
var cities = ["karachi","lahore","islamabad","quetta","peshawar"];
document.write("Original Cities==>", cities+"<br>")
var selectedCities = cities.slice(0,3);
document.write("Selected Cities ==> " + selectedCities)

document.write("<br><br><br>");

//joining array
var arr = ["This ", " is ", " my ", " cat"];

var arrayString = arr.join(" ")
document.write(arrayString);


document.write("<br><br><br>");

// FIFO Program
document.write("<h2>FIFO Programe</h2>");
let array=[]

array.push("sadiq");
array.push("saad");
array.push("madani");
array.push("faizan");
array.push("noman");

document.write(array+"<br>")

array.shift()
document.write(array+"<br>")
array.shift()
document.write(array+"<br>")
array.shift()
document.write(array+"<br>")

document.write("<br><br><br>");

// LIFO Program
document.write("<h2>LIFO Programe</h2>");
let array2=[]

array2.push("keyboard");
array2.push("mouse");
array2.push("printer");
array2.push("monitor");

document.write(array2+"<br>")

array2.pop()
document.write(array2+"<br>")
array2.pop()
document.write(array2+"<br>")
array2.pop()
document.write(array2+"<br>")

document.write("<br><br><br>");
