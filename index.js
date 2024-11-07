// Number 1
let number = prompt("Enter a number:");
document.write("Output: " + number);

// Number 2 
let number = prompt("Enter a number:");
number = Number(number);
if (number % 3 === 0 && number % 4 === 0) {
    console.log("Output: Yes");
    document.write("Yes");
} else {
    console.log("Output: No");
    document.write("No");

}

// Number 3 
let num1 = prompt("Enter the first integer:");
let num2 = prompt("Enter the second integer:");
num1 = Number(num1);
num2 = Number(num2);
let max = num1 > num2 ? num1 : num2;
console.log("Output:", max);
document.write(max);

// Number 4 
let number = prompt("Enter an integer:");
number = Number(number);
if (number < 0) {
    console.log("Output: negative");
    document.write("negative");
} else {
    console.log("Output: positive");
    document.write("positive");
}

// Number 5 
let num1 = Number(prompt("Enter the first integer:"));
let num2 = Number(prompt("Enter the second integer:"));
let num3 = Number(prompt("Enter the third integer:"));
// Determine the maximum element
let max;
if (num1 >= num2 && num1 >= num3) {
    max = num1;
} else if (num2 >= num1 && num2 >= num3) {
    max = num2;
} else {
    max = num3;
}
Determine the minimum element
let min;
if (num1 <= num2 && num1 <= num3) {
    min = num1;
} else if (num2 <= num1 && num2 <= num3) {
    min = num2;
} else {
    min = num3;
}
console.log("Max element =", max);
console.log("Min element =", min);
document.write("Max element: " + max + "<br>");
document.write("Min element: " + min);

// Number 6
let number = Number(prompt("Enter an integer:"));
if (number % 2 === 0) {
    console.log("Output: even");
    document.write("Even");
} else {
    console.log("Output: odd");
    document.write("Odd");
}

// Number 7 
let character = prompt("Enter a character:");
let lowerChar = character.toLowerCase();
if (lowerChar === 'a' || lowerChar === 'e' || lowerChar === 'i' || lowerChar === 'o' || lowerChar === 'u') {
    console.log("Output: vowel");
    document.write("vowel");
} else {
    console.log("Output: consonant");
    document.write("consnant");
}

// Number 8 
let number = Number(prompt("Enter an integer:"));
let output = "";
for (let i = 1; i <= number; i++) {
    if (i === number) {
        output += i;  
    } 
    else {
        output += i + ", "; 
    }
}
console.log("Output: " + output);
document.write(output);

// Number 9 
let number = Number(prompt("Enter an integer:"));
let output = "";
for (let i = 1; i <= 12; i++) {
    let product = number * i;
    if (i === 12) {
        output += product;  
    } 
    else {
        output += product + " ";  
    }
}
console.log("Output: " + output);
document.write(output);

// Number 10 
let number = Number(prompt("Enter a number:"));
let output = "";
for (let i = 2; i <= number; i += 2) {
    if (i === number || i + 2 > number) {
        output += i;  
    } 
    else {
        output += i + " "; 
    }
}
console.log("Output: " + output);
document.write(output);

// Number 11
let base = Number(prompt("Enter the base number:"));
let exponent = Number(prompt("Enter the exponent:"));
let result = 1;
for (let i = 1; i <= exponent; i++) {
    result *= base;
}
console.log("Output: " + result);
document.write(result);

// Number 12 
let marks1 = Number(prompt("Enter marks for subject 1:"));
let marks2 = Number(prompt("Enter marks for subject 2:"));
let marks3 = Number(prompt("Enter marks for subject 3:"));
let marks4 = Number(prompt("Enter marks for subject 4:"));
let marks5 = Number(prompt("Enter marks for subject 5:"));
let total = marks1 + marks2 + marks3 + marks4 + marks5;
let average = total / 5;
let percentage = (total / 500) * 100;
console.log("Total marks = " + total);
console.log("Average marks = " + average);
console.log("Percentage = " + percentage + "%");
document.write("Total marks = " + total + "<br>");
document.write("Average marks = " + average + "<br>");
document.write("Percentage = " + percentage + "%" + "<br>");

// Number 13
let monthNumber = Number(prompt("Enter month number (1-12):"));
let daysInMonth;
if (monthNumber === 1 || monthNumber === 3 || monthNumber === 5 || monthNumber === 7 || 
    monthNumber === 8 || monthNumber === 10 || monthNumber === 12) {
    daysInMonth = 31;  // Months 31 days
}
 else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {
    daysInMonth = 30;  // Months  30 days
} 
else if (monthNumber === 2) {
    daysInMonth = 28;  // Assuming February has 28 days (not considering leap year)
} 
else {
    daysInMonth = "Invalid month number";  // If the month number is not between 1 and 12
}
console.log("Days in Month: " + daysInMonth);
document.write("Days in Month: " + daysInMonth);

// Number 14 
let physics = Number(prompt("Enter marks for Physics:"));
let chemistry = Number(prompt("Enter marks for Chemistry:"));
let biology = Number(prompt("Enter marks for Biology:"));
let mathematics = Number(prompt("Enter marks for Mathematics:"));
let computer = Number(prompt("Enter marks for Computer:"));
let totalMarks = physics + chemistry + biology + mathematics + computer;
let percentage = (totalMarks / 500) * 100;
let grade;
if (percentage >= 90) {
    grade = "A";
} 
else if (percentage >= 80) {
    grade = "B";
} 
else if (percentage >= 70) {
    grade = "C";
} 
else if (percentage >= 60) {
    grade = "D";
} 
else if (percentage >= 40) {
    grade = "E";
} 
else {
    grade = "F";
}
document.write("Total Marks = " + totalMarks + "<br>");
document.write("Percentage = " + percentage + "%<br>");
document.write("Grade = " + grade);

// Switch Cases 
// N0.1 
let monthNumber = Number(prompt("Enter month number (1-12):"));
let daysInMonth;

switch (monthNumber) {
    case 1:  
    case 3:  
    case 5:  
    case 7:  
    case 8:  
    case 10: 
    case 12: 
        daysInMonth = 31;
        break;
    case 4:  
    case 6: 
    case 9:  
    case 11: 
        daysInMonth = 30;
        break;
    case 2:  // February
        daysInMonth = 28; // Assuming no leap year (you can add leap year logic if needed)
        break;
    default:
        daysInMonth = "Invalid month number"; // For invalid month numbers
}
document.write("Days in Month: " + daysInMonth);


// NO.2
let character = prompt("Enter an alphabet:").toLowerCase(); 
let result;
switch (character) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        result = "Vowel";
        break;
    default:
        if (character >= 'a' && character <= 'z') { 
            result = "Consonant";
        } else {
            result = "Invalid input, please enter a valid alphabet.";
        }
}
document.write("The character " + character + " is a " + result);

// NO.3
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let max;

switch (true) {
    case (num1 > num2):
        max = num1;
        break;
    case (num2 > num1):
        max = num2;
        break;
    default:
        max = "Both numbers are equal";
}
document.write("The maximum number is: " + max);

// NO.4
let number = Number(prompt("Enter a number:"));
let result;
switch (number % 2) {
    case 0:
        result = "even";
        break;
    case 1:
        result = "odd";
        break;
    default:
        result = "Invalid input";
}
document.write("The number " + number + " is " + result + ".");

// NO.5
let number = Number(prompt("Enter a number:"));
let result;
switch (true) {
    case (number > 0):
        result = "positive";
        break;
    case (number < 0):
        result = "negative";
        break;
    case (number === 0):
        result = "zero";
        break;
    default:
        result = "Invalid input";
}
document.write("The number " + number + " is " + result + ".");

// NO.6
let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));
let operation = prompt("Enter operation (+, -, *, /):");
let result;
switch (operation) {
    case "+":
        result = num1 + num2;
        break;
    case "-":
        result = num1 - num2;
        break;
    case "*":
        result = num1 * num2;
        break;
    case "/":
        // Check if dividing by zero
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero is not allowed!";
        }
        break;
    default:
        result = "Invalid operation. Please enter one of (+, -, *, /).";
}
document.write("Result: " + result);





