// arithmetic operators = operands (values, variables, etc.)
//                        operators (+ - * /)
//                        ex. 11 = x + 5;

let students = 30;

// ADDITION: students = students + 1;
// SUBTRACTION: students = students - 1;
// MULTIPLICATION: students = students * 2;
// DIVISION: students = students / 2;
// EXPONENT: students = students ** 2;
// MODULO (find remainder): let extraStudents = students % 3;


// AUGMENTED ASSIGNMENT OPERATORS

// ADDITION: students += 2;
// SUBTRACTION: students -= 2;
// MULTIPLICATION : students *= 2;
// DIVISION: students /= 2;
// EXPONENTS: students ** 2;
// MODULO: students %= 2;

// INCREMENT OPERATOR
students++;

// DECREMENT OPERATOR
students--;

/* 
    OPERATOR PRECEDENCE (closest to left is priority)
    1. parenthesis ()
    2. exponents
    3. multiplication & division & modulo 
    4. addition & subtraction
*/

let result = 6 / 2 ** (2 + 5);
console.log(result);