interface IQuestion {
    question: string;
    options: {
        label: string;
        is_correct: boolean;
    }[];
    answer_description: string;
    difficulty: 'easy' | 'medium' | 'hard';
    tags: string[]; // must include languages and technologies used
}

const questions: IQuestion[] = [
    {
        "question": "What keyword is used to declare a variable in JavaScript?",
        "options": [
            {
                "label": "`let`",
                "is_correct": true
            },
            {
                "label": "`var`",
                "is_correct": false
            },
            {
                "label": "`const`",
                "is_correct": false
            }
        ],
        "answer_description": "`let` is used to declare a block-scoped variable in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "variables"]
    },
    {
        "question": "What is the result of 5 + '5' in JavaScript?",
        "options": [
            {
                "label": "`'55'`",
                "is_correct": true
            },
            {
                "label": "`10`",
                "is_correct": false
            },
            {
                "label": "`'10'`",
                "is_correct": false
            }
        ],
        "answer_description": "In JavaScript, when you use the `+` operator with a string and a number, the number is coerced into a string and concatenated.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "How do you write 'Hello, World!' in an alert box?",
        "options": [
            {
                "label": "`alert('Hello, World!');`",
                "is_correct": true
            },
            {
                "label": "`msgBox('Hello, World!');`",
                "is_correct": false
            },
            {
                "label": "`prompt('Hello, World!');`",
                "is_correct": false
            }
        ],
        "answer_description": "The `alert()` function is used to display a message in a dialog box.",
        "difficulty": "easy",
        "tags": ["JavaScript", "alert"]
    },
    {
        "question": "What does the `===` operator do in JavaScript?",
        "options": [
            {
                "label": "Compares both value and type",
                "is_correct": true
            },
            {
                "label": "Compares only value",
                "is_correct": false
            },
            {
                "label": "Compares only type",
                "is_correct": false
            }
        ],
        "answer_description": "The `===` operator in JavaScript compares both the value and the type of the operands.",
        "difficulty": "easy",
        "tags": ["JavaScript", "operators"]
    },
    {
        "question": "Which function is used to parse a string to an integer in JavaScript?",
        "options": [
            {
                "label": "`parseInt()`",
                "is_correct": true
            },
            {
                "label": "`parseInteger()`",
                "is_correct": false
            },
            {
                "label": "`toInteger()`",
                "is_correct": false
            }
        ],
        "answer_description": "`parseInt()` is used to parse a string and return an integer.",
        "difficulty": "easy",
        "tags": ["JavaScript", "parsing"]
    },
    {
        "question": "What symbol is used for single-line comments in JavaScript?",
        "options": [
            {
                "label": "`//`",
                "is_correct": true
            },
            {
                "label": "`/* */`",
                "is_correct": false
            },
            {
                "label": "`#`",
                "is_correct": false
            }
        ],
        "answer_description": "`//` is used to begin a single-line comment in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "comments"]
    },
    {
        "question": "Which method is used to add new elements to the end of an array in JavaScript?",
        "options": [
            {
                "label": "`push()`",
                "is_correct": true
            },
            {
                "label": "`add()`",
                "is_correct": false
            },
            {
                "label": "`append()`",
                "is_correct": false
            }
        ],
        "answer_description": "`push()` method adds new elements to the end of an array and returns the new length.",
        "difficulty": "easy",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What keyword is used to exit from a loop in JavaScript?",
        "options": [
            {
                "label": "`break`",
                "is_correct": true
            },
            {
                "label": "`exit`",
                "is_correct": false
            },
            {
                "label": "`continue`",
                "is_correct": false
            }
        ],
        "answer_description": "`break` keyword is used to exit from a loop in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "loops"]
    },
    {
        "question": "Which method is used to convert a JavaScript object to a JSON string?",
        "options": [
            {
                "label": "`JSON.stringify()`",
                "is_correct": true
            },
            {
                "label": "`JSON.parse()`",
                "is_correct": false
            },
            {
                "label": "`objectToJson()`",
                "is_correct": false
            }
        ],
        "answer_description": "`JSON.stringify()` method converts a JavaScript object to a JSON string.",
        "difficulty": "easy",
        "tags": ["JavaScript", "JSON"]
    },
    {
        "question": "Which event occurs when the user clicks on an HTML element?",
        "options": [
            {
                "label": "`click`",
                "is_correct": true
            },
            {
                "label": "`hover`",
                "is_correct": false
            },
            {
                "label": "`keypress`",
                "is_correct": false
            }
        ],
        "answer_description": "`click` event occurs when the user clicks on an HTML element.",
        "difficulty": "easy",
        "tags": ["JavaScript", "events"]
    },
    {
        "question": "How do you access the first element of an array in JavaScript?",
        "options": [
            {
                "label": "`array[0]`",
                "is_correct": true
            },
            {
                "label": "`array.first()`",
                "is_correct": false
            },
            {
                "label": "`array.first`",
                "is_correct": false
            }
        ],
        "answer_description": "To access the first element of an array in JavaScript, you use `array[0]`.",
        "difficulty": "easy",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What method is used to remove the last element from an array in JavaScript?",
        "options": [
            {
                "label": "`pop()`",
                "is_correct": true
            },
            {
                "label": "`removeLast()`",
                "is_correct": false
            },
            {
                "label": "`deleteLast()`",
                "is_correct": false
            }
        ],
        "answer_description": "`pop()` method removes the last element from an array and returns that element.",
        "difficulty": "easy",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "Which operator is used to concatenate strings in JavaScript?",
        "options": [
            {
                "label": "`+`",
                "is_correct": true
            },
            {
                "label": "`&`",
                "is_correct": false
            },
            {
                "label": "`.`",
                "is_correct": false
            }
        ],
        "answer_description": "`+` operator is used to concatenate strings in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What does NaN stand for in JavaScript?",
        "options": [
            {
                "label": "`Not a Number`",
                "is_correct": true
            },
            {
                "label": "`Not a Null`",
                "is_correct": false
            },
            {
                "label": "`Null and None`",
                "is_correct": false
            }
        ],
        "answer_description": "`NaN` stands for 'Not a Number' in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "NaN"]
    },
    {
        "question": "Which function is used to round a number to the nearest integer in JavaScript?",
        "options": [
            {
                "label": "`Math.round()`",
                "is_correct": true
            },
            {
                "label": "`Math.floor()`",
                "is_correct": false
            },
            {
                "label": "`Math.ceil()`",
                "is_correct": false
            }
        ],
        "answer_description": "`Math.round()` function is used to round a number to the nearest integer in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "math"]
    },
    {
        "question": "What does the `typeof` operator return for an array?",
        "options": [
            {
                "label": "`'object'`",
                "is_correct": true
            },
            {
                "label": "`'array'`",
                "is_correct": false
            },
            {
                "label": "`'undefined'`",
                "is_correct": false
            }
        ],
        "answer_description": "`typeof` operator returns `'object'` for an array in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "typeof"]
    },
    {
        "question": "Which keyword is used to declare a function in JavaScript?",
        "options": [
            {
                "label": "`function`",
                "is_correct": true
            },
            {
                "label": "`method`",
                "is_correct": false
            },
            {
                "label": "`func`",
                "is_correct": false
            }
        ],
        "answer_description": "`function` keyword is used to declare a function in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "functions"]
    },
    {
        "question": "What does the `||` operator do in JavaScript?",
        "options": [
            {
                "label": "Logical OR",
                "is_correct": true
            },
            {
                "label": "Logical AND",
                "is_correct": false
            },
            {
                "label": "Logical NOT",
                "is_correct": false
            }
        ],
        "answer_description": "`||` operator performs Logical OR operation in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "operators"]
    },
    {
        "question": "Which method is used to remove the first element from an array in JavaScript?",
        "options": [
            {
                "label": "`shift()`",
                "is_correct": true
            },
            {
                "label": "`removeFirst()`",
                "is_correct": false
            },
            {
                "label": "`deleteFirst()`",
                "is_correct": false
            }
        ],
        "answer_description": "`shift()` method removes the first element from an array and returns that element.",
        "difficulty": "easy",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What is the result of `typeof null` in JavaScript?",
        "options": [
            {
                "label": "`'object'`",
                "is_correct": true
            },
            {
                "label": "`'null'`",
                "is_correct": false
            },
            {
                "label": "`'undefined'`",
                "is_correct": false
            }
        ],
        "answer_description": "`typeof null` returns `'object'` in JavaScript, which is a historical bug.",
        "difficulty": "easy",
        "tags": ["JavaScript", "typeof"]
    },
    {
        "question": "What is the output of `console.log(0 == '0')` in JavaScript?",
        "options": [
            {
                "label": "`true`",
                "is_correct": true
            },
            {
                "label": "`false`",
                "is_correct": false
            },
            {
                "label": "`undefined`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(0 == '0')` outputs `true` because of type coercion in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "What is the purpose of the `this` keyword in JavaScript?",
        "options": [
            {
                "label": "Refers to the current object",
                "is_correct": true
            },
            {
                "label": "Refers to the parent object",
                "is_correct": false
            },
            {
                "label": "Refers to the child object",
                "is_correct": false
            }
        ],
        "answer_description": "The `this` keyword in JavaScript refers to the current object.",
        "difficulty": "easy",
        "tags": ["JavaScript", "this"]
    },
    {
        "question": "What method is used to execute a function after a specified number of milliseconds in JavaScript?",
        "options": [
            {
                "label": "`setTimeout()`",
                "is_correct": true
            },
            {
                "label": "`setInterval()`",
                "is_correct": false
            },
            {
                "label": "`executeAfter()`",
                "is_correct": false
            }
        ],
        "answer_description": "`setTimeout()` method is used to execute a function after a specified number of milliseconds.",
        "difficulty": "easy",
        "tags": ["JavaScript", "timers"]
    },
    {
        "question": "Which function is used to select elements by their class name in JavaScript?",
        "options": [
            {
                "label": "`document.getElementsByClassName()`",
                "is_correct": true
            },
            {
                "label": "`document.getElementById()`",
                "is_correct": false
            },
            {
                "label": "`document.querySelector()`",
                "is_correct": false
            }
        ],
        "answer_description": "`document.getElementsByClassName()` is used to select elements by their class name in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "DOM"]
    },
    {
        "question": "What is the result of `typeof []` in JavaScript?",
        "options": [
            {
                "label": "`'object'`",
                "is_correct": true
            },
            {
                "label": "`'array'`",
                "is_correct": false
            },
            {
                "label": "`'undefined'`",
                "is_correct": false
            }
        ],
        "answer_description": "`typeof []` returns `'object'` in JavaScript, as arrays are considered objects.",
        "difficulty": "easy",
        "tags": ["JavaScript", "typeof"]
    },
    {
        "question": "Which method is used to return the length of a string in JavaScript?",
        "options": [
            {
                "label": "`length` property",
                "is_correct": true
            },
            {
                "label": "`size()` method",
                "is_correct": false
            },
            {
                "label": "`length()` method",
                "is_correct": false
            }
        ],
        "answer_description": "The `length` property is used to return the length of a string in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the result of `console.log(typeof NaN)` in JavaScript?",
        "options": [
            {
                "label": "`'number'`",
                "is_correct": true
            },
            {
                "label": "`'NaN'`",
                "is_correct": false
            },
            {
                "label": "`'undefined'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(typeof NaN)` outputs `'number'` in JavaScript, as `NaN` is considered a number.",
        "difficulty": "easy",
        "tags": ["JavaScript", "typeof"]
    },
    {
        "question": "What does the `&&` operator do in JavaScript?",
        "options": [
            {
                "label": "Logical AND",
                "is_correct": true
            },
            {
                "label": "Logical OR",
                "is_correct": false
            },
            {
                "label": "Logical NOT",
                "is_correct": false
            }
        ],
        "answer_description": "`&&` operator performs Logical AND operation in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "operators"]
    },
    {
        "question": "How do you declare a function in JavaScript using arrow function syntax?",
        "options": [
            {
                "label": "`const myFunc = () => {}`",
                "is_correct": true
            },
            {
                "label": "`function myFunc() {}`",
                "is_correct": false
            },
            {
                "label": "`var myFunc = () => {}`",
                "is_correct": false
            }
        ],
        "answer_description": "Arrow function syntax is used to declare a function in JavaScript as shown: `const myFunc = () => {}`.",
        "difficulty": "easy",
        "tags": ["JavaScript", "functions"]
    },
    {
        "question": "What is the output of `console.log(typeof undefined)` in JavaScript?",
        "options": [
            {
                "label": "`'undefined'`",
                "is_correct": true
            },
            {
                "label": "`'null'`",
                "is_correct": false
            },
            {
                "label": "`'object'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(typeof undefined)` outputs `'undefined'` in JavaScript, as expected.",
        "difficulty": "easy",
        "tags": ["JavaScript", "typeof"]
    },
    {
        "question": "Which function is used to generate a random number between 0 (inclusive) and 1 (exclusive) in JavaScript?",
        "options": [
            {
                "label": "`Math.random()`",
                "is_correct": true
            },
            {
                "label": "`Math.round()`",
                "is_correct": false
            },
            {
                "label": "`Math.floor()`",
                "is_correct": false
            }
        ],
        "answer_description": "`Math.random()` function is used to generate a random number between 0 (inclusive) and 1 (exclusive).",
        "difficulty": "easy",
        "tags": ["JavaScript", "random"]
    },
    {
        "question": "What is the result of `console.log(1 + '1')` in JavaScript?",
        "options": [
            {
                "label": "`'11'`",
                "is_correct": true
            },
            {
                "label": "`2`",
                "is_correct": false
            },
            {
                "label": "`'2'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(1 + '1')` outputs `'11'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to join the elements of an array into a string in JavaScript?",
        "options": [
            {
                "label": "`join()`",
                "is_correct": true
            },
            {
                "label": "`concat()`",
                "is_correct": false
            },
            {
                "label": "`merge()`",
                "is_correct": false
            }
        ],
        "answer_description": "`join()` method is used to join the elements of an array into a string in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "Which method is used to return the index of the first occurrence of a specified value in an array in JavaScript?",
        "options": [
            {
                "label": "`indexOf()`",
                "is_correct": true
            },
            {
                "label": "`findIndex()`",
                "is_correct": false
            },
            {
                "label": "`search()`",
                "is_correct": false
            }
        ],
        "answer_description": "`indexOf()` method is used to return the index of the first occurrence of a specified value in an array.",
        "difficulty": "easy",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What is the output of `console.log(null == undefined)` in JavaScript?",
        "options": [
            {
                "label": "`true`",
                "is_correct": true
            },
            {
                "label": "`false`",
                "is_correct": false
            },
            {
                "label": "`undefined`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(null == undefined)` outputs `true` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "What is the result of `console.log(typeof true)` in JavaScript?",
        "options": [
            {
                "label": "`'boolean'`",
                "is_correct": true
            },
            {
                "label": "`'true'`",
                "is_correct": false
            },
            {
                "label": "`'undefined'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(typeof true)` outputs `'boolean'` in JavaScript, as expected.",
        "difficulty": "easy",
        "tags": ["JavaScript", "typeof"]
    },
    {
        "question": "What is the output of `console.log(1 + true)` in JavaScript?",
        "options": [
            {
                "label": "`2`",
                "is_correct": true
            },
            {
                "label": "`1`",
                "is_correct": false
            },
            {
                "label": "`true`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(1 + true)` outputs `2` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to return the characters in a string beginning from the end?",
        "options": [
            {
                "label": "`slice()`",
                "is_correct": true
            },
            {
                "label": "`substring()`",
                "is_correct": false
            },
            {
                "label": "`substr()`",
                "is_correct": false
            }
        ],
        "answer_description": "`slice()` method is used to return the characters in a string beginning from the end in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 == '5')` in JavaScript?",
        "options": [
            {
                "label": "`true`",
                "is_correct": true
            },
            {
                "label": "`false`",
                "is_correct": false
            },
            {
                "label": "`undefined`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 == '5')` outputs `true` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "What is the output of `console.log(0 == '')` in JavaScript?",
        "options": [
            {
                "label": "`true`",
                "is_correct": true
            },
            {
                "label": "`false`",
                "is_correct": false
            },
            {
                "label": "`undefined`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(0 == '')` outputs `true` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which function is used to convert a string to lowercase in JavaScript?",
        "options": [
            {
                "label": "`toLowerCase()`",
                "is_correct": true
            },
            {
                "label": "`toLower()`",
                "is_correct": false
            },
            {
                "label": "`lowerCase()`",
                "is_correct": false
            }
        ],
        "answer_description": "`toLowerCase()` function is used to convert a string to lowercase in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What does the `typeof` operator return for a function in JavaScript?",
        "options": [
            {
                "label": "`'function'`",
                "is_correct": true
            },
            {
                "label": "`'object'`",
                "is_correct": false
            },
            {
                "label": "`'undefined'`",
                "is_correct": false
            }
        ],
        "answer_description": "`typeof` operator returns `'function'` for a function in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "typeof"]
    },
    {
        "question": "What is the output of `console.log(5 === '5')` in JavaScript?",
        "options": [
            {
                "label": "`false`",
                "is_correct": true
            },
            {
                "label": "`true`",
                "is_correct": false
            },
            {
                "label": "`undefined`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 === '5')` outputs `false` in JavaScript due to type and value comparison.",
        "difficulty": "easy",
        "tags": ["JavaScript", "operators"]
    },
    {
        "question": "What method is used to sort the elements of an array in JavaScript?",
        "options": [
            {
                "label": "`sort()`",
                "is_correct": true
            },
            {
                "label": "`order()`",
                "is_correct": false
            },
            {
                "label": "`arrange()`",
                "is_correct": false
            }
        ],
        "answer_description": "`sort()` method is used to sort the elements of an array in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "Which method is used to execute a function repeatedly, with a fixed time delay between each call, in JavaScript?",
        "options": [
            {
                "label": "`setInterval()`",
                "is_correct": true
            },
            {
                "label": "`setTimeout()`",
                "is_correct": false
            },
            {
                "label": "`executeAfter()`",
                "is_correct": false
            }
        ],
        "answer_description": "`setInterval()` method is used to execute a function repeatedly, with a fixed time delay between each call.",
        "difficulty": "easy",
        "tags": ["JavaScript", "timers"]
    },
    {
        "question": "What is the output of `console.log(1 == true)` in JavaScript?",
        "options": [
            {
                "label": "`true`",
                "is_correct": true
            },
            {
                "label": "`false`",
                "is_correct": false
            },
            {
                "label": "`undefined`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(1 == true)` outputs `true` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to remove elements from an array with a specific index position in JavaScript?",
        "options": [
            {
                "label": "`splice()`",
                "is_correct": true
            },
            {
                "label": "`remove()`",
                "is_correct": false
            },
            {
                "label": "`cut()`",
                "is_correct": false
            }
        ],
        "answer_description": "`splice()` method is used to remove elements from an array with a specific index position in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What is the output of `console.log(1 === true)` in JavaScript?",
        "options": [
            {
                "label": "`false`",
                "is_correct": true
            },
            {
                "label": "`true`",
                "is_correct": false
            },
            {
                "label": "`undefined`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(1 === true)` outputs `false` in JavaScript due to type and value comparison.",
        "difficulty": "easy",
        "tags": ["JavaScript", "operators"]
    },
    {
        "question": "Which function is used to select elements by their ID in JavaScript?",
        "options": [
            {
                "label": "`document.getElementById()`",
                "is_correct": true
            },
            {
                "label": "`document.getElementsByClass()`",
                "is_correct": false
            },
            {
                "label": "`document.querySelector()`",
                "is_correct": false
            }
        ],
        "answer_description": "`document.getElementById()` is used to select elements by their ID in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "DOM"]
    },
    {
        "question": "What is the output of `console.log(1 - '1')` in JavaScript?",
        "options": [
            {
                "label": "`0`",
                "is_correct": true
            },
            {
                "label": "`1`",
                "is_correct": false
            },
            {
                "label": "`'1'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(1 - '1')` outputs `0` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "What is the purpose of the `let` keyword in JavaScript?",
        "options": [
            {
                "label": "Declares block-scoped variables",
                "is_correct": true
            },
            {
                "label": "Declares global variables",
                "is_correct": false
            },
            {
                "label": "Declares constant variables",
                "is_correct": false
            }
        ],
        "answer_description": "The `let` keyword in JavaScript is used to declare block-scoped variables.",
        "difficulty": "easy",
        "tags": ["JavaScript", "variables"]
    },
    {
        "question": "Which method is used to execute a function only once after a specified time has elapsed in JavaScript?",
        "options": [
            {
                "label": "`setTimeout()`",
                "is_correct": true
            },
            {
                "label": "`setInterval()`",
                "is_correct": false
            },
            {
                "label": "`once()`",
                "is_correct": false
            }
        ],
        "answer_description": "`setTimeout()` method is used to execute a function only once after a specified time has elapsed.",
        "difficulty": "easy",
        "tags": ["JavaScript", "timers"]
    },
    {
        "question": "What is the result of `console.log(3 * '3')` in JavaScript?",
        "options": [
            {
                "label": "`9`",
                "is_correct": true
            },
            {
                "label": "`'9'`",
                "is_correct": false
            },
            {
                "label": "`'33'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(3 * '3')` outputs `9` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to uppercase in JavaScript?",
        "options": [
            {
                "label": "`toUpperCase()`",
                "is_correct": true
            },
            {
                "label": "`toUpper()`",
                "is_correct": false
            },
            {
                "label": "`upperCase()`",
                "is_correct": false
            }
        ],
        "answer_description": "`toUpperCase()` method is used to convert a string to uppercase in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the result of `console.log('5' - 1)` in JavaScript?",
        "options": [
            {
                "label": "`4`",
                "is_correct": true
            },
            {
                "label": "`'4'`",
                "is_correct": false
            },
            {
                "label": "`5`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' - 1)` outputs `4` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to an array of substrings in JavaScript?",
        "options": [
            {
                "label": "`split()`",
                "is_correct": true
            },
            {
                "label": "`join()`",
                "is_correct": false
            },
            {
                "label": "`slice()`",
                "is_correct": false
            }
        ],
        "answer_description": "`split()` method is used to convert a string to an array of substrings in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the result of `console.log('5' + 1)` in JavaScript?",
        "options": [
            {
                "label": "`'51'`",
                "is_correct": true
            },
            {
                "label": "`6`",
                "is_correct": false
            },
            {
                "label": "`'6'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + 1)` outputs `'51'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "What is the output of `console.log(1 == 1 && 2 == 2)` in JavaScript?",
        "options": [
            {
                "label": "`true`",
                "is_correct": true
            },
            {
                "label": "`false`",
                "is_correct": false
            },
            {
                "label": "`undefined`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(1 == 1 && 2 == 2)` outputs `true` in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "operators"]
    },
    {
        "question": "What is the result of `console.log(3 + 2 + '5')` in JavaScript?",
        "options": [
            {
                "label": "`'55'`",
                "is_correct": true
            },
            {
                "label": "`'32'`",
                "is_correct": false
            },
            {
                "label": "`'7'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(3 + 2 + '5')` outputs `'55'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to return the square root of a number in JavaScript?",
        "options": [
            {
                "label": "`Math.sqrt()`",
                "is_correct": true
            },
            {
                "label": "`Math.pow()`",
                "is_correct": false
            },
            {
                "label": "`Math.square()`",
                "is_correct": false
            }
        ],
        "answer_description": "`Math.sqrt()` method is used to return the square root of a number in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "math"]
    },
    {
        "question": "What is the output of `console.log('5' + 1 + 1)` in JavaScript?",
        "options": [
            {
                "label": "`'511'`",
                "is_correct": true
            },
            {
                "label": "`'7'`",
                "is_correct": false
            },
            {
                "label": "`'6'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + 1 + 1)` outputs `'511'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to return the smallest integer greater than or equal to a given number in JavaScript?",
        "options": [
            {
                "label": "`Math.ceil()`",
                "is_correct": true
            },
            {
                "label": "`Math.floor()`",
                "is_correct": false
            },
            {
                "label": "`Math.round()`",
                "is_correct": false
            }
        ],
        "answer_description": "`Math.ceil()` method is used to return the smallest integer greater than or equal to a given number in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "math"]
    },
    {
        "question": "What is the output of `console.log('5' - 1 - 1)` in JavaScript?",
        "options": [
            {
                "label": "`3`",
                "is_correct": true
            },
            {
                "label": "`'3'`",
                "is_correct": false
            },
            {
                "label": "`4`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' - 1 - 1)` outputs `3` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to round a number to the nearest integer in JavaScript?",
        "options": [
            {
                "label": "`Math.round()`",
                "is_correct": true
            },
            {
                "label": "`Math.ceil()`",
                "is_correct": false
            },
            {
                "label": "`Math.floor()`",
                "is_correct": false
            }
        ],
        "answer_description": "`Math.round()` method is used to round a number to the nearest integer in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "math"]
    },
    {
        "question": "What is the result of `console.log(5 * 'a')` in JavaScript?",
        "options": [
            {
                "label": "`NaN`",
                "is_correct": true
            },
            {
                "label": "`undefined`",
                "is_correct": false
            },
            {
                "label": "`0`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * 'a')` outputs `NaN` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to round a number down to the nearest integer in JavaScript?",
        "options": [
            {
                "label": "`Math.floor()`",
                "is_correct": true
            },
            {
                "label": "`Math.ceil()`",
                "is_correct": false
            },
            {
                "label": "`Math.round()`",
                "is_correct": false
            }
        ],
        "answer_description": "`Math.floor()` method is used to round a number down to the nearest integer in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "math"]
    },
    {
        "question": "What is the output of `console.log('5' + 1 - 1)` in JavaScript?",
        "options": [
            {
                "label": "`50`",
                "is_correct": true
            },
            {
                "label": "`4`",
                "is_correct": false
            },
            {
                "label": "`'50'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + 1 - 1)` outputs `50` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to check if a string starts with a specified character or substring in JavaScript?",
        "options": [
            {
                "label": "`startsWith()`",
                "is_correct": true
            },
            {
                "label": "`endsWith()`",
                "is_correct": false
            },
            {
                "label": "`contains()`",
                "is_correct": false
            }
        ],
        "answer_description": "`startsWith()` method is used to check if a string starts with a specified character or substring in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' * 2)` in JavaScript?",
        "options": [
            {
                "label": "`10`",
                "is_correct": true
            },
            {
                "label": "`52`",
                "is_correct": false
            },
            {
                "label": "`'10'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' * 2)` outputs `10` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to check if a string contains a specified character or substring in JavaScript?",
        "options": [
            {
                "label": "`includes()`",
                "is_correct": true
            },
            {
                "label": "`contains()`",
                "is_correct": false
            },
            {
                "label": "`indexOf()`",
                "is_correct": false
            }
        ],
        "answer_description": "`includes()` method is used to check if a string contains a specified character or substring in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + 1 * 2)` in JavaScript?",
        "options": [
            {
                "label": "`'512'`",
                "is_correct": true
            },
            {
                "label": "`7`",
                "is_correct": false
            },
            {
                "label": "`'7'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + 1 * 2)` outputs `'512'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to return the characters in a string between two specified indices in JavaScript?",
        "options": [
            {
                "label": "`substring()`",
                "is_correct": true
            },
            {
                "label": "`slice()`",
                "is_correct": false
            },
            {
                "label": "`substr()`",
                "is_correct": false
            }
        ],
        "answer_description": "`substring()` method is used to return the characters in a string between two specified indices in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + 1 + '2')` in JavaScript?",
        "options": [
            {
                "label": "`'512'`",
                "is_correct": true
            },
            {
                "label": "`8`",
                "is_correct": false
            },
            {
                "label": "`'82'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + 1 + '2')` outputs `'512'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to an integer in JavaScript?",
        "options": [
            {
                "label": "`parseInt()`",
                "is_correct": true
            },
            {
                "label": "`convertToInt()`",
                "is_correct": false
            },
            {
                "label": "`toInteger()`",
                "is_correct": false
            }
        ],
        "answer_description": "`parseInt()` method is used to convert a string to an integer in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + 1 + 2)` in JavaScript?",
        "options": [
            {
                "label": "`'512'`",
                "is_correct": true
            },
            {
                "label": "`8`",
                "is_correct": false
            },
            {
                "label": "`'8'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + 1 + 2)` outputs `'512'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a number to a string in JavaScript?",
        "options": [
            {
                "label": "`toString()`",
                "is_correct": true
            },
            {
                "label": "`convertToString()`",
                "is_correct": false
            },
            {
                "label": "`toText()`",
                "is_correct": false
            }
        ],
        "answer_description": "`toString()` method is used to convert a number to a string in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the result of `console.log(5 * '2' + '3')` in JavaScript?",
        "options": [
            {
                "label": "`'103'`",
                "is_correct": true
            },
            {
                "label": "`13`",
                "is_correct": false
            },
            {
                "label": "`'13'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + '3')` outputs `'103'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to remove whitespace from both ends of a string in JavaScript?",
        "options": [
            {
                "label": "`trim()`",
                "is_correct": true
            },
            {
                "label": "`strip()`",
                "is_correct": false
            },
            {
                "label": "`clean()`",
                "is_correct": false
            }
        ],
        "answer_description": "`trim()` method is used to remove whitespace from both ends of a string in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + 1 * '2' + '3')` in JavaScript?",
        "options": [
            {
                "label": "`'513'`",
                "is_correct": true
            },
            {
                "label": "`'16'`",
                "is_correct": false
            },
            {
                "label": "`16`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + 1 * '2' + '3')` outputs `'513'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to a floating-point number in JavaScript?",
        "options": [
            {
                "label": "`parseFloat()`",
                "is_correct": true
            },
            {
                "label": "`toInt()`",
                "is_correct": false
            },
            {
                "label": "`toDecimal()`",
                "is_correct": false
            }
        ],
        "answer_description": "`parseFloat()` method is used to convert a string to a floating-point number in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * 'a' + '2')` in JavaScript?",
        "options": [
            {
                "label": "`NaN2`",
                "is_correct": true
            },
            {
                "label": "`'5a2'`",
                "is_correct": false
            },
            {
                "label": "`'52'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * 'a' + '2')` outputs `NaN2` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a floating-point number to an integer in JavaScript?",
        "options": [
            {
                "label": "`parseInt()`",
                "is_correct": true
            },
            {
                "label": "`toFixed()`",
                "is_correct": false
            },
            {
                "label": "`toInteger()`",
                "is_correct": false
            }
        ],
        "answer_description": "`parseInt()` method is used to convert a floating-point number to an integer in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "numbers"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' - '3')` in JavaScript?",
        "options": [
            {
                "label": "`7`",
                "is_correct": true
            },
            {
                "label": "`10`",
                "is_correct": false
            },
            {
                "label": "`2`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' - '3')` outputs `7` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a number to an exponential notation in JavaScript?",
        "options": [
            {
                "label": "`toExponential()`",
                "is_correct": true
            },
            {
                "label": "`toScientific()`",
                "is_correct": false
            },
            {
                "label": "`toExp()`",
                "is_correct": false
            }
        ],
        "answer_description": "`toExponential()` method is used to convert a number to an exponential notation in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "numbers"]
    },
    {
        "question": "What is the output of `console.log(5 * 'a')` in JavaScript?",
        "options": [
            {
                "label": "`NaN`",
                "is_correct": true
            },
            {
                "label": "`undefined`",
                "is_correct": false
            },
            {
                "label": "`0`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * 'a')` outputs `NaN` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a number to a string, using a specified number of decimals in JavaScript?",
        "options": [
            {
                "label": "`toFixed()`",
                "is_correct": true
            },
            {
                "label": "`toPrecision()`",
                "is_correct": false
            },
            {
                "label": "`toString()`",
                "is_correct": false
            }
        ],
        "answer_description": "`toFixed()` method is used to convert a number to a string, using a specified number of decimals in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "numbers"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' - 'a')` in JavaScript?",
        "options": [
            {
                "label": "`NaN`",
                "is_correct": true
            },
            {
                "label": "`3`",
                "is_correct": false
            },
            {
                "label": "`7`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' - 'a')` outputs `NaN` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a number to a string, rounding the number to the specified number of decimals in JavaScript?",
        "options": [
            {
                "label": "`toPrecision()`",
                "is_correct": true
            },
            {
                "label": "`toFixed()`",
                "is_correct": false
            },
            {
                "label": "`toString()`",
                "is_correct": false
            }
        ],
        "answer_description": "`toPrecision()` method is used to convert a number to a string, rounding the number to the specified number of decimals in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "numbers"]
    },
    {
        "question": "What is the output of `console.log('5' + 1 - '2')` in JavaScript?",
        "options": [
            {
                "label": "`31`",
                "is_correct": true
            },
            {
                "label": "`4`",
                "is_correct": false
            },
            {
                "label": "`'31'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + 1 - '2')` outputs `31` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to a number in JavaScript?",
        "options": [
            {
                "label": "`parseFloat()`",
                "is_correct": true
            },
            {
                "label": "`convertToNumber()`",
                "is_correct": false
            },
            {
                "label": "`toNumber()`",
                "is_correct": false
            }
        ],
        "answer_description": "`parseFloat()` method is used to convert a string to a number in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' * 2 + '3')` in JavaScript?",
        "options": [
            {
                "label": "`'103'`",
                "is_correct": true
            },
            {
                "label": "`8`",
                "is_correct": false
            },
            {
                "label": "`'8'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' * 2 + '3')` outputs `'103'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to an integer, using a specified radix in JavaScript?",
        "options": [
            {
                "label": "`parseInt()`",
                "is_correct": true
            },
            {
                "label": "`toInteger()`",
                "is_correct": false
            },
            {
                "label": "`toInt()`",
                "is_correct": false
            }
        ],
        "answer_description": "`parseInt()` method is used to convert a string to an integer, using a specified radix in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + 1 - 2)` in JavaScript?",
        "options": [
            {
                "label": "`'41'`",
                "is_correct": true
            },
            {
                "label": "`4`",
                "is_correct": false
            },
            {
                "label": "`3`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + 1 - 2)` outputs `'41'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to a floating-point number, specifying a radix in JavaScript?",
        "options": [
            {
                "label": "`parseFloat()`",
                "is_correct": true
            },
            {
                "label": "`toFloat()`",
                "is_correct": false
            },
            {
                "label": "`toFloating()`",
                "is_correct": false
            }
        ],
        "answer_description": "`parseFloat()` method is used to convert a string to a floating-point number, specifying a radix in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + '2' * 2)` in JavaScript?",
        "options": [
            {
                "label": "`'520'`",
                "is_correct": true
            },
            {
                "label": "`'14'`",
                "is_correct": false
            },
            {
                "label": "`7`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + '2' * 2)` outputs `'520'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to a number, specifying a radix in JavaScript?",
        "options": [
            {
                "label": "`parseInt()`",
                "is_correct": true
            },
            {
                "label": "`toFloat()`",
                "is_correct": false
            },
            {
                "label": "`toNumber()`",
                "is_correct": false
            }
        ],
        "answer_description": "`parseInt()` method is used to convert a string to a number, specifying a radix in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * 'a' + 2)` in JavaScript?",
        "options": [
            {
                "label": "`NaN2`",
                "is_correct": true
            },
            {
                "label": "`'5a2'`",
                "is_correct": false
            },
            {
                "label": "`'52'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * 'a' + 2)` outputs `NaN2` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a number to a string, using a fixed number of digits in JavaScript?",
        "options": [
            {
                "label": "`toPrecision()`",
                "is_correct": true
            },
            {
                "label": "`toFixed()`",
                "is_correct": false
            },
            {
                "label": "`toString()`",
                "is_correct": false
            }
        ],
        "answer_description": "`toPrecision()` method is used to convert a number to a string, using a fixed number of digits in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "numbers"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + 'a')` in JavaScript?",
        "options": [
            {
                "label": "`'10a'`",
                "is_correct": true
            },
            {
                "label": "`'52a'`",
                "is_correct": false
            },
            {
                "label": "`'NaNa'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + 'a')` outputs `'10a'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "What is the output of `console.log('5' - '2' + '3')` in JavaScript?",
        "options": [
            {
                "label": "`'53'`",
                "is_correct": true
            },
            {
                "label": "`6`",
                "is_correct": false
            },
            {
                "label": "`'6'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' - '2' + '3')` outputs `'53'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a number to a string in JavaScript, using scientific notation?",
        "options": [
            {
                "label": "`toExponential()`",
                "is_correct": true
            },
            {
                "label": "`toScientific()`",
                "is_correct": false
            },
            {
                "label": "`toExp()`",
                "is_correct": false
            }
        ],
        "answer_description": "`toExponential()` method is used to convert a number to a string in JavaScript, using scientific notation.",
        "difficulty": "easy",
        "tags": ["JavaScript", "numbers"]
    },
    {
        "question": "What is the output of `console.log('5' + 1 + '2' - '3')` in JavaScript?",
        "options": [
            {
                "label": "`'512-3'`",
                "is_correct": true
            },
            {
                "label": "`'7'`",
                "is_correct": false
            },
            {
                "label": "`'5123'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + 1 + '2' - '3')` outputs `'512-3'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to lowercase in JavaScript?",
        "options": [
            {
                "label": "`toLowerCase()`",
                "is_correct": true
            },
            {
                "label": "`toLower()`",
                "is_correct": false
            },
            {
                "label": "`lowerCase()`",
                "is_correct": false
            }
        ],
        "answer_description": "`toLowerCase()` method is used to convert a string to lowercase in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + 1 - '2' * 2)` in JavaScript?",
        "options": [
            {
                "label": "`'51'`",
                "is_correct": true
            },
            {
                "label": "`2`",
                "is_correct": false
            },
            {
                "label": "`'52'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + 1 - '2' * 2)` outputs `'51'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to uppercase in JavaScript?",
        "options": [
            {
                "label": "`toUpperCase()`",
                "is_correct": true
            },
            {
                "label": "`toUpper()`",
                "is_correct": false
            },
            {
                "label": "`upperCase()`",
                "is_correct": false
            }
        ],
        "answer_description": "`toUpperCase()` method is used to convert a string to uppercase in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + '3' - 1)` in JavaScript?",
        "options": [
            {
                "label": "`'102'`",
                "is_correct": true
            },
            {
                "label": "`102`",
                "is_correct": false
            },
            {
                "label": "`'103'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + '3' - 1)` outputs `'102'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to an array in JavaScript?",
        "options": [
            {
                "label": "`split()`",
                "is_correct": true
            },
            {
                "label": "`join()`",
                "is_correct": false
            },
            {
                "label": "`slice()`",
                "is_correct": false
            }
        ],
        "answer_description": "`split()` method is used to convert a string to an array in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + '2' - '1')` in JavaScript?",
        "options": [
            {
                "label": "`51`",
                "is_correct": true
            },
            {
                "label": "`6`",
                "is_correct": false
            },
            {
                "label": "`'6'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + '2' - '1')` outputs `51` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to concatenate two or more strings in JavaScript?",
        "options": [
            {
                "label": "`concat()`",
                "is_correct": true
            },
            {
                "label": "`join()`",
                "is_correct": false
            },
            {
                "label": "`append()`",
                "is_correct": false
            }
        ],
        "answer_description": "`concat()` method is used to concatenate two or more strings in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + '2' * 2 - '3')` in JavaScript?",
        "options": [
            {
                "label": "`52`",
                "is_correct": true
            },
            {
                "label": "`6`",
                "is_correct": false
            },
            {
                "label": "`'6'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + '2' * 2 - '3')` outputs `52` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to extract a section of a string in JavaScript?",
        "options": [
            {
                "label": "`substring()`",
                "is_correct": true
            },
            {
                "label": "`substr()`",
                "is_correct": false
            },
            {
                "label": "`slice()`",
                "is_correct": false
            }
        ],
        "answer_description": "`substring()` method is used to extract a section of a string in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + '2' * '2' - '3')` in JavaScript?",
        "options": [
            {
                "label": "`49`",
                "is_correct": true
            },
            {
                "label": "`6`",
                "is_correct": false
            },
            {
                "label": "`'6'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + '2' * '2' - '3')` outputs `49` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to find the position of a substring within a string in JavaScript?",
        "options": [
            {
                "label": "`indexOf()`",
                "is_correct": true
            },
            {
                "label": "`find()`",
                "is_correct": false
            },
            {
                "label": "`search()`",
                "is_correct": false
            }
        ],
        "answer_description": "`indexOf()` method is used to find the position of a substring within a string in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + '3' * '2')` in JavaScript?",
        "options": [
            {
                "label": "`'106'`",
                "is_correct": true
            },
            {
                "label": "`16`",
                "is_correct": false
            },
            {
                "label": "`'16'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + '3' * '2')` outputs `'106'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to replace a specified value with another value in a string?",
        "options": [
            {
                "label": "`replace()`",
                "is_correct": true
            },
            {
                "label": "`swap()`",
                "is_correct": false
            },
            {
                "label": "`substitute()`",
                "is_correct": false
            }
        ],
        "answer_description": "`replace()` method is used to replace a specified value with another value in a string.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + '2' - '3' * '2')` in JavaScript?",
        "options": [
            {
                "label": "`'106'`",
                "is_correct": true
            },
            {
                "label": "`'14'`",
                "is_correct": false
            },
            {
                "label": "`'16'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + '2' - '3' * '2')` outputs `'106'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to split a string into an array of substrings, and returns the new array?",
        "options": [
            {
                "label": "`split()`",
                "is_correct": true
            },
            {
                "label": "`splice()`",
                "is_correct": false
            },
            {
                "label": "`slice()`",
                "is_correct": false
            }
        ],
        "answer_description": "`split()` method is used to split a string into an array of substrings, and returns the new array.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + 3 - '2')` in JavaScript?",
        "options": [
            {
                "label": "`'104'`",
                "is_correct": true
            },
            {
                "label": "`13`",
                "is_correct": false
            },
            {
                "label": "`'13'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + 3 - '2')` outputs `'104'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to extract a section of a string and returns a new string?",
        "options": [
            {
                "label": "`slice()`",
                "is_correct": true
            },
            {
                "label": "`substring()`",
                "is_correct": false
            },
            {
                "label": "`substr()`",
                "is_correct": false
            }
        ],
        "answer_description": "`slice()` method is used to extract a section of a string and returns a new string.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + '3' * 2)` in JavaScript?",
        "options": [
            {
                "label": "`'1010'`",
                "is_correct": true
            },
            {
                "label": "`13`",
                "is_correct": false
            },
            {
                "label": "`'13'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + '3' * 2)` outputs `'1010'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to return the Unicode value of the character at a specified position in a string?",
        "options": [
            {
                "label": "`charCodeAt()`",
                "is_correct": true
            },
            {
                "label": "`getCharCode()`",
                "is_correct": false
            },
            {
                "label": "`unicodeAt()`",
                "is_correct": false
            }
        ],
        "answer_description": "`charCodeAt()` method is used to return the Unicode value of the character at a specified position in a string.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + '2' * '2' + '3' * 2)` in JavaScript?",
        "options": [
            {
                "label": "`'10610'`",
                "is_correct": true
            },
            {
                "label": "`'1010'`",
                "is_correct": false
            },
            {
                "label": "`'103'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + '2' * '2' + '3' * 2)` outputs `'10610'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to remove the first occurrence of a specified value from a string?",
        "options": [
            {
                "label": "`replace()`",
                "is_correct": true
            },
            {
                "label": "`remove()`",
                "is_correct": false
            },
            {
                "label": "`delete()`",
                "is_correct": false
            }
        ],
        "answer_description": "`replace()` method is used to remove the first occurrence of a specified value from a string.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + '3' * '2' - '1')` in JavaScript?",
        "options": [
            {
                "label": "`'104'`",
                "is_correct": true
            },
            {
                "label": "`'13'`",
                "is_correct": false
            },
            {
                "label": "`104`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + '3' * '2' - '1')` outputs `'104'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to an array of characters in JavaScript?",
        "options": [
            {
                "label": "`split('')`",
                "is_correct": true
            },
            {
                "label": "`toArray()`",
                "is_correct": false
            },
            {
                "label": "`charArray()`",
                "is_correct": false
            }
        ],
        "answer_description": "`split('')` method is used to convert a string to an array of characters in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + 1 + 2 + '3')` in JavaScript?",
        "options": [
            {
                "label": "`'513'`",
                "is_correct": true
            },
            {
                "label": "`11`",
                "is_correct": false
            },
            {
                "label": "`'11'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + 1 + 2 + '3')` outputs `'513'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to an array of words in JavaScript?",
        "options": [
            {
                "label": "`split(' ')`",
                "is_correct": true
            },
            {
                "label": "`toArray()`",
                "is_correct": false
            },
            {
                "label": "`wordArray()`",
                "is_correct": false
            }
        ],
        "answer_description": "`split(' ')` method is used to convert a string to an array of words in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + '3' * '2' - 1)` in JavaScript?",
        "options": [
            {
                "label": "`'105'`",
                "is_correct": true
            },
            {
                "label": "`104`",
                "is_correct": false
            },
            {
                "label": "`'104'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + '3' * '2' - 1)` outputs `'105'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to check whether a string contains a specified string or characters?",
        "options": [
            {
                "label": "`includes()`",
                "is_correct": true
            },
            {
                "label": "`contain()`",
                "is_correct": false
            },
            {
                "label": "`contains()`",
                "is_correct": false
            }
        ],
        "answer_description": "`includes()` method is used to check whether a string contains a specified string or characters.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + '3' * '2' + 1)` in JavaScript?",
        "options": [
            {
                "label": "`'107'`",
                "is_correct": true
            },
            {
                "label": "`'104'`",
                "is_correct": false
            },
            {
                "label": "`'1041'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + '3' * '2' + 1)` outputs `'107'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to pad a string with another string to a certain length?",
        "options": [
            {
                "label": "`padEnd()`",
                "is_correct": true
            },
            {
                "label": "`pad()`",
                "is_correct": false
            },
            {
                "label": "`padStart()`",
                "is_correct": false
            }
        ],
        "answer_description": "`padEnd()` method is used to pad a string with another string to a certain length.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + '3' * 2 - '1')` in JavaScript?",
        "options": [
            {
                "label": "`104`",
                "is_correct": true
            },
            {
                "label": "`'105'`",
                "is_correct": false
            },
            {
                "label": "`'104'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + '3' * 2 - '1')` outputs `104` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to pad a string with spaces at the beginning to a certain length?",
        "options": [
            {
                "label": "`padStart()`",
                "is_correct": true
            },
            {
                "label": "`pad()`",
                "is_correct": false
            },
            {
                "label": "`padEnd()`",
                "is_correct": false
            }
        ],
        "answer_description": "`padStart()` method is used to pad a string with spaces at the beginning to a certain length.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + 3 * '2' - 1)` in JavaScript?",
        "options": [
            {
                "label": "`104`",
                "is_correct": true
            },
            {
                "label": "`105`",
                "is_correct": false
            },
            {
                "label": "`'105'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + 3 * '2' - 1)` outputs `104` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to repeat a string a specified number of times?",
        "options": [
            {
                "label": "`repeat()`",
                "is_correct": true
            },
            {
                "label": "`replay()`",
                "is_correct": false
            },
            {
                "label": "`replicate()`",
                "is_correct": false
            }
        ],
        "answer_description": "`repeat()` method is used to repeat a string a specified number of times.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + '2' * 2 + 3 * '2' - 1)` in JavaScript?",
        "options": [
            {
                "label": "`'112'`",
                "is_correct": true
            },
            {
                "label": "`104`",
                "is_correct": false
            },
            {
                "label": "`'104'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + '2' * 2 + 3 * '2' - 1)` outputs `'112'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to find the last occurrence of a specified value in a string?",
        "options": [
            {
                "label": "`lastIndexOf()`",
                "is_correct": true
            },
            {
                "label": "`findLast()`",
                "is_correct": false
            },
            {
                "label": "`searchLast()`",
                "is_correct": false
            }
        ],
        "answer_description": "`lastIndexOf()` method is used to find the last occurrence of a specified value in a string.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + '3' * 2 + 1)` in JavaScript?",
        "options": [
            {
                "label": "`'112'`",
                "is_correct": true
            },
            {
                "label": "`104`",
                "is_correct": false
            },
            {
                "label": "`'104'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + '3' * 2 + 1)` outputs `'112'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to trim whitespace from both ends of a string?",
        "options": [
            {
                "label": "`trim()`",
                "is_correct": true
            },
            {
                "label": "`strip()`",
                "is_correct": false
            },
            {
                "label": "`clean()`",
                "is_correct": false
            }
        ],
        "answer_description": "`trim()` method is used to trim whitespace from both ends of a string.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + '2' * 2 * '3')` in JavaScript?",
        "options": [
            {
                "label": "`'5126'`",
                "is_correct": true
            },
            {
                "label": "`'106'`",
                "is_correct": false
            },
            {
                "label": "`'103'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + '2' * 2 * '3')` outputs `'5126'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to extract a specified number of characters from the end of a string?",
        "options": [
            {
                "label": "`slice(-n)`",
                "is_correct": true
            },
            {
                "label": "`substring(-n)`",
                "is_correct": false
            },
            {
                "label": "`substr(-n)`",
                "is_correct": false
            }
        ],
        "answer_description": "`slice(-n)` method is used to extract a specified number of characters from the end of a string.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + '3' * '2' + '1')` in JavaScript?",
        "options": [
            {
                "label": "`'1071'`",
                "is_correct": true
            },
            {
                "label": "`'104'`",
                "is_correct": false
            },
            {
                "label": "`1041`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + '3' * '2' + '1')` outputs `'1071'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to compare two strings in a case-insensitive way?",
        "options": [
            {
                "label": "`localeCompare()`",
                "is_correct": true
            },
            {
                "label": "`compare()`",
                "is_correct": false
            },
            {
                "label": "`compareTo()`",
                "is_correct": false
            }
        ],
        "answer_description": "`localeCompare()` method is used to compare two strings in a case-insensitive way.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + '3' * 2 + '1' * 2)` in JavaScript?",
        "options": [
            {
                "label": "`'1072'`",
                "is_correct": true
            },
            {
                "label": "`'104'`",
                "is_correct": false
            },
            {
                "label": "`1042`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + '3' * 2 + '1' * 2)` outputs `'1072'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to check whether a string starts with a specified character or substring?",
        "options": [
            {
                "label": "`startsWith()`",
                "is_correct": true
            },
            {
                "label": "`startWith()`",
                "is_correct": false
            },
            {
                "label": "`beginWith()`",
                "is_correct": false
            }
        ],
        "answer_description": "`startsWith()` method is used to check whether a string starts with a specified character or substring.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + 3 * '2' - '1' * 2)` in JavaScript?",
        "options": [
            {
                "label": "`'104'`",
                "is_correct": true
            },
            {
                "label": "`106`",
                "is_correct": false
            },
            {
                "label": "`'106'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + 3 * '2' - '1' * 2)` outputs `'104'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to convert a string to a template literal in JavaScript?",
        "options": [
            {
                "label": "`String.raw()`",
                "is_correct": true
            },
            {
                "label": "`Template.raw()`",
                "is_correct": false
            },
            {
                "label": "`String.literal()`",
                "is_correct": false
            }
        ],
        "answer_description": "`String.raw()` method is used to convert a string to a template literal in JavaScript.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + '2' * 2 * '3' + '1' * 2)` in JavaScript?",
        "options": [
            {
                "label": "`'1062'`",
                "is_correct": true
            },
            {
                "label": "`'104'`",
                "is_correct": false
            },
            {
                "label": "`1042`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + '2' * 2 * '3' + '1' * 2)` outputs `'1062'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to trim whitespace from the end of a string?",
        "options": [
            {
                "label": "`trimEnd()`",
                "is_correct": true
            },
            {
                "label": "`trimRight()`",
                "is_correct": false
            },
            {
                "label": "`stripEnd()`",
                "is_correct": false
            }
        ],
        "answer_description": "`trimEnd()` method is used to trim whitespace from the end of a string.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log(5 * '2' + '3' * '2' - '1' * 2)` in JavaScript?",
        "options": [
            {
                "label": "`104`",
                "is_correct": true
            },
            {
                "label": "`'105'`",
                "is_correct": false
            },
            {
                "label": "`'104'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log(5 * '2' + '3' * '2' - '1' * 2)` outputs `104` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "Which method is used to trim whitespace from the beginning of a string?",
        "options": [
            {
                "label": "`trimStart()`",
                "is_correct": true
            },
            {
                "label": "`trimLeft()`",
                "is_correct": false
            },
            {
                "label": "`stripStart()`",
                "is_correct": false
            }
        ],
        "answer_description": "`trimStart()` method is used to trim whitespace from the beginning of a string.",
        "difficulty": "easy",
        "tags": ["JavaScript", "strings"]
    },
    {
        "question": "What is the output of `console.log('5' + '2' * 2 * '3' - '1' * 2)` in JavaScript?",
        "options": [
            {
                "label": "`'106'`",
                "is_correct": true
            },
            {
                "label": "`106`",
                "is_correct": false
            },
            {
                "label": "`'104'`",
                "is_correct": false
            }
        ],
        "answer_description": "`console.log('5' + '2' * 2 * '3' - '1' * 2)` outputs `'106'` in JavaScript due to type coercion.",
        "difficulty": "easy",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "What is the purpose of the `this` keyword in JavaScript?",
        "options": [
            {
                "label": "Refers to the current object",
                "is_correct": true
            },
            {
                "label": "Declares a new variable",
                "is_correct": false
            },
            {
                "label": "Refers to the parent object",
                "is_correct": false
            }
        ],
        "answer_description": "In JavaScript, the `this` keyword refers to the current object, the object that owns the currently executing code.",
        "difficulty": "medium",
        "tags": ["JavaScript", "this keyword"]
    },
    {
        "question": "What is the output of `typeof null` in JavaScript?",
        "options": [
            {
                "label": "`object`",
                "is_correct": true
            },
            {
                "label": "`null`",
                "is_correct": false
            },
            {
                "label": "`undefined`",
                "is_correct": false
            }
        ],
        "answer_description": "The `typeof null` in JavaScript returns `'object'`, which is a historical bug and not considered correct.",
        "difficulty": "medium",
        "tags": ["JavaScript", "data types"]
    },
    {
        "question": "What is the purpose of the `splice()` method in JavaScript?",
        "options": [
            {
                "label": "To add or remove elements from an array",
                "is_correct": true
            },
            {
                "label": "To merge two arrays",
                "is_correct": false
            },
            {
                "label": "To sort an array",
                "is_correct": false
            }
        ],
        "answer_description": "The `splice()` method in JavaScript is used to add or remove elements from an array.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What does the `&&` operator do in JavaScript?",
        "options": [
            {
                "label": "Logical AND",
                "is_correct": true
            },
            {
                "label": "Logical OR",
                "is_correct": false
            },
            {
                "label": "Logical NOT",
                "is_correct": false
            }
        ],
        "answer_description": "The `&&` operator in JavaScript performs a logical AND operation.",
        "difficulty": "medium",
        "tags": ["JavaScript", "operators"]
    },
    {
        "question": "What does the `||` operator do in JavaScript?",
        "options": [
            {
                "label": "Logical OR",
                "is_correct": true
            },
            {
                "label": "Logical AND",
                "is_correct": false
            },
            {
                "label": "Logical NOT",
                "is_correct": false
            }
        ],
        "answer_description": "The `||` operator in JavaScript performs a logical OR operation.",
        "difficulty": "medium",
        "tags": ["JavaScript", "operators"]
    },
    {
        "question": "What is the purpose of the `Object.keys()` method in JavaScript?",
        "options": [
            {
                "label": "To return an array of a given object's own enumerable property names",
                "is_correct": true
            },
            {
                "label": "To return an array of a given object's own property names",
                "is_correct": false
            },
            {
                "label": "To return an array of a given object's values",
                "is_correct": false
            }
        ],
        "answer_description": "`Object.keys()` method in JavaScript is used to return an array of a given object's own enumerable property names.",
        "difficulty": "medium",
        "tags": ["JavaScript", "objects"]
    },
    {
        "question": "What is the result of `5 == '5'` in JavaScript?",
        "options": [
            {
                "label": "`true`",
                "is_correct": true
            },
            {
                "label": "`false`",
                "is_correct": false
            },
            {
                "label": "`undefined`",
                "is_correct": false
            }
        ],
        "answer_description": "In JavaScript, `==` operator performs type coercion before comparison. So, `5 == '5'` returns `true` because the string '5' is converted to a number before comparison.",
        "difficulty": "medium",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "What is the difference between `==` and `===` operators in JavaScript?",
        "options": [
            {
                "label": "`==` compares both value and type, `===` compares only value",
                "is_correct": false
            },
            {
                "label": "`==` performs type coercion, `===` does not perform type coercion",
                "is_correct": true
            },
            {
                "label": "`==` is case-sensitive, `===` is not case-sensitive",
                "is_correct": false
            }
        ],
        "answer_description": "`==` operator in JavaScript performs type coercion before comparison, while `===` operator does not perform type coercion.",
        "difficulty": "medium",
        "tags": ["JavaScript", "operators"]
    },
    {
        "question": "What does the `typeof` operator return for functions in JavaScript?",
        "options": [
            {
                "label": "`function`",
                "is_correct": true
            },
            {
                "label": "`object`",
                "is_correct": false
            },
            {
                "label": "`undefined`",
                "is_correct": false
            }
        ],
        "answer_description": "The `typeof` operator returns `'function'` for functions in JavaScript.",
        "difficulty": "medium",
        "tags": ["JavaScript", "functions"]
    },
    {
        "question": "What is the purpose of the `filter()` method in JavaScript arrays?",
        "options": [
            {
                "label": "To create a new array with elements that pass a test",
                "is_correct": true
            },
            {
                "label": "To modify each element of the array",
                "is_correct": false
            },
            {
                "label": "To sort the array",
                "is_correct": false
            }
        ],
        "answer_description": "The `filter()` method in JavaScript arrays is used to create a new array with elements that pass a test implemented by the provided function.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What is the purpose of the `map()` method in JavaScript arrays?",
        "options": [
            {
                "label": "To create a new array with the results of calling a provided function on every element",
                "is_correct": true
            },
            {
                "label": "To modify each element of the array",
                "is_correct": false
            },
            {
                "label": "To sort the array",
                "is_correct": false
            }
        ],
        "answer_description": "The `map()` method in JavaScript arrays is used to create a new array with the results of calling a provided function on every element in the calling array.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What does the `Math.random()` function in JavaScript return?",
        "options": [
            {
                "label": "A random floating-point number between 0 (inclusive) and 1 (exclusive)",
                "is_correct": true
            },
            {
                "label": "A random integer between 0 (inclusive) and 1 (exclusive)",
                "is_correct": false
            },
            {
                "label": "A random floating-point number between 0 (inclusive) and 1 (inclusive)",
                "is_correct": false
            }
        ],
        "answer_description": "`Math.random()` function in JavaScript returns a random floating-point number between 0 (inclusive) and 1 (exclusive).",
        "difficulty": "medium",
        "tags": ["JavaScript", "Math.random()"]
    },
    {
        "question": "What is the purpose of the `reduce()` method in JavaScript arrays?",
        "options": [
            {
                "label": "To reduce the array to a single value by executing a provided function for each value",
                "is_correct": true
            },
            {
                "label": "To create a new array with the results of calling a provided function on every element",
                "is_correct": false
            },
            {
                "label": "To filter the array based on a condition",
                "is_correct": false
            }
        ],
        "answer_description": "The `reduce()` method in JavaScript arrays is used to reduce the array to a single value by executing a provided function for each value of the array.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What is the purpose of the `some()` method in JavaScript arrays?",
        "options": [
            {
                "label": "To test whether at least one element in the array passes the test",
                "is_correct": true
            },
            {
                "label": "To create a new array with the results of calling a provided function on every element",
                "is_correct": false
            },
            {
                "label": "To check if all elements in the array satisfy a condition",
                "is_correct": false
            }
        ],
        "answer_description": "The `some()` method in JavaScript arrays is used to test whether at least one element in the array passes the test implemented by the provided function.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What is the result of `typeof NaN` in JavaScript?",
        "options": [
            {
                "label": "`'number'`",
                "is_correct": true
            },
            {
                "label": "`'NaN'`",
                "is_correct": false
            },
            {
                "label": "`'undefined'`",
                "is_correct": false
            }
        ],
        "answer_description": "`typeof NaN` in JavaScript returns `'number'`, which is misleading because NaN stands for 'Not-a-Number'.",
        "difficulty": "medium",
        "tags": ["JavaScript", "NaN"]
    },
    {
        "question": "What is the purpose of the `find()` method in JavaScript arrays?",
        "options": [
            {
                "label": "To return the value of the first element in the array that satisfies the provided testing function",
                "is_correct": true
            },
            {
                "label": "To create a new array with the results of calling a provided function on every element",
                "is_correct": false
            },
            {
                "label": "To sort the array",
                "is_correct": false
            }
        ],
        "answer_description": "The `find()` method in JavaScript arrays is used to return the value of the first element in the array that satisfies the provided testing function.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What is the purpose of the `findIndex()` method in JavaScript arrays?",
        "options": [
            {
                "label": "To return the index of the first element in the array that satisfies the provided testing function",
                "is_correct": true
            },
            {
                "label": "To create a new array with the results of calling a provided function on every element",
                "is_correct": false
            },
            {
                "label": "To sort the array",
                "is_correct": false
            }
        ],
        "answer_description": "The `findIndex()` method in JavaScript arrays is used to return the index of the first element in the array that satisfies the provided testing function.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What is the purpose of the `forEach()` method in JavaScript arrays?",
        "options": [
            {
                "label": "To execute a provided function once for each array element",
                "is_correct": true
            },
            {
                "label": "To create a new array with the results of calling a provided function on every element",
                "is_correct": false
            },
            {
                "label": "To sort the array",
                "is_correct": false
            }
        ],
        "answer_description": "The `forEach()` method in JavaScript arrays is used to execute a provided function once for each array element.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What is the result of `10 / 0` in JavaScript?",
        "options": [
            {
                "label": "`Infinity`",
                "is_correct": true
            },
            {
                "label": "`0`",
                "is_correct": false
            },
            {
                "label": "`NaN`",
                "is_correct": false
            }
        ],
        "answer_description": "The result of `10 / 0` in JavaScript is `Infinity`.",
        "difficulty": "medium",
        "tags": ["JavaScript", "division"]
    },
    {
        "question": "What is the purpose of the `Promise` object in JavaScript?",
        "options": [
            {
                "label": "To represent a value that may be available now, or in the future, or never",
                "is_correct": true
            },
            {
                "label": "To represent a single value in time",
                "is_correct": false
            },
            {
                "label": "To represent a sequence of values",
                "is_correct": false
            }
        ],
        "answer_description": "The `Promise` object in JavaScript is used to represent a value that may be available now, or in the future, or never.",
        "difficulty": "medium",
        "tags": ["JavaScript", "Promises"]
    },
    {
        "question": "What is the purpose of the `fetch()` function in JavaScript?",
        "options": [
            {
                "label": "To make asynchronous HTTP requests",
                "is_correct": true
            },
            {
                "label": "To sort an array",
                "is_correct": false
            },
            {
                "label": "To create a new array with the results of calling a provided function on every element",
                "is_correct": false
            }
        ],
        "answer_description": "`fetch()` function in JavaScript is used to make asynchronous HTTP requests.",
        "difficulty": "medium",
        "tags": ["JavaScript", "fetch"]
    },
    {
        "question": "What is the result of `2 + '2'` in JavaScript?",
        "options": [
            {
                "label": "`'22'`",
                "is_correct": true
            },
            {
                "label": "`4`",
                "is_correct": false
            },
            {
                "label": "`'4'`",
                "is_correct": false
            }
        ],
        "answer_description": "In JavaScript, when you use the `+` operator with a string and a number, the number is coerced into a string and concatenated.",
        "difficulty": "medium",
        "tags": ["JavaScript", "type coercion"]
    },
    {
        "question": "What does the `isNaN()` function in JavaScript do?",
        "options": [
            {
                "label": "Checks if a value is not a number",
                "is_correct": true
            },
            {
                "label": "Checks if a value is null",
                "is_correct": false
            },
            {
                "label": "Checks if a value is undefined",
                "is_correct": false
            }
        ],
        "answer_description": "`isNaN()` function in JavaScript checks if a value is not a number.",
        "difficulty": "medium",
        "tags": ["JavaScript", "isNaN"]
    },
    {
        "question": "What is the purpose of the `toFixed()` method in JavaScript?",
        "options": [
            {
                "label": "To format a number with a fixed number of digits after the decimal point",
                "is_correct": true
            },
            {
                "label": "To convert a number to a fixed point representation",
                "is_correct": false
            },
            {
                "label": "To round a number to the nearest integer",
                "is_correct": false
            }
        ],
        "answer_description": "`toFixed()` method in JavaScript is used to format a number with a fixed number of digits after the decimal point.",
        "difficulty": "medium",
        "tags": ["JavaScript", "toFixed"]
    },
    {
        "question": "What is the purpose of the `concat()` method in JavaScript arrays?",
        "options": [
            {
                "label": "To merge two or more arrays",
                "is_correct": true
            },
            {
                "label": "To sort an array",
                "is_correct": false
            },
            {
                "label": "To remove elements from an array",
                "is_correct": false
            }
        ],
        "answer_description": "`concat()` method in JavaScript arrays is used to merge two or more arrays.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What does the `splice()` method do when only one argument is passed in JavaScript?",
        "options": [
            {
                "label": "Removes all elements from the start index to the end of the array",
                "is_correct": true
            },
            {
                "label": "Removes the first element of the array",
                "is_correct": false
            },
            {
                "label": "Inserts an element at the start index",
                "is_correct": false
            }
        ],
        "answer_description": "When only one argument is passed to the `splice()` method in JavaScript, it removes all elements from the start index to the end of the array.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays", "splice"]
    },
    {
        "question": "What does the `splice()` method do when three arguments are passed in JavaScript?",
        "options": [
            {
                "label": "Removes elements from the start index and inserts new elements",
                "is_correct": true
            },
            {
                "label": "Removes all elements from the start index to the end of the array",
                "is_correct": false
            },
            {
                "label": "Inserts an element at the start index",
                "is_correct": false
            }
        ],
        "answer_description": "When three arguments are passed to the `splice()` method in JavaScript, it removes elements from the start index and inserts new elements.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays", "splice"]
    },
    {
        "question": "What is the purpose of the `shift()` method in JavaScript arrays?",
        "options": [
            {
                "label": "To remove the first element from an array",
                "is_correct": true
            },
            {
                "label": "To add an element to the beginning of an array",
                "is_correct": false
            },
            {
                "label": "To sort the array",
                "is_correct": false
            }
        ],
        "answer_description": "`shift()` method in JavaScript arrays is used to remove the first element from an array.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What is the purpose of the `unshift()` method in JavaScript arrays?",
        "options": [
            {
                "label": "To add one or more elements to the beginning of an array",
                "is_correct": true
            },
            {
                "label": "To remove the first element from an array",
                "is_correct": false
            },
            {
                "label": "To sort the array",
                "is_correct": false
            }
        ],
        "answer_description": "`unshift()` method in JavaScript arrays is used to add one or more elements to the beginning of an array.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What is the purpose of the `pop()` method in JavaScript arrays?",
        "options": [
            {
                "label": "To remove the last element from an array",
                "is_correct": true
            },
            {
                "label": "To add an element to the end of an array",
                "is_correct": false
            },
            {
                "label": "To sort the array",
                "is_correct": false
            }
        ],
        "answer_description": "`pop()` method in JavaScript arrays is used to remove the last element from an array.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What is the purpose of the `push()` method in JavaScript arrays?",
        "options": [
            {
                "label": "To add one or more elements to the end of an array",
                "is_correct": true
            },
            {
                "label": "To remove the last element from an array",
                "is_correct": false
            },
            {
                "label": "To sort the array",
                "is_correct": false
            }
        ],
        "answer_description": "`push()` method in JavaScript arrays is used to add one or more elements to the end of an array.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What is the purpose of the `reverse()` method in JavaScript arrays?",
        "options": [
            {
                "label": "To reverse the order of the elements in an array",
                "is_correct": true
            },
            {
                "label": "To sort the array in ascending order",
                "is_correct": false
            },
            {
                "label": "To sort the array in descending order",
                "is_correct": false
            }
        ],
        "answer_description": "`reverse()` method in JavaScript arrays is used to reverse the order of the elements in an array.",
        "difficulty": "medium",
        "tags": ["JavaScript", "arrays"]
    },
    {
        "question": "What does the `Math.floor()` function in JavaScript do?",
        "options": [
            {
                "label": "Returns the largest integer less than or equal to a given number",
                "is_correct": true
            },
            {
                "label": "Rounds a number to the nearest integer",
                "is_correct": false
            },
            {
                "label": "Returns the smallest integer greater than or equal to a given number",
                "is_correct": false
            }
        ],
        "answer_description": "`Math.floor()` function in JavaScript returns the largest integer less than or equal to a given number.",
        "difficulty": "medium",
        "tags": ["JavaScript", "Math.floor()"]
    },
    {
        "question": "What does the `Math.ceil()` function in JavaScript do?",
        "options": [
            {
                "label": "Returns the smallest integer greater than or equal to a given number",
                "is_correct": true
            },
            {
                "label": "Rounds a number to the nearest integer",
                "is_correct": false
            },
            {
                "label": "Returns the largest integer less than or equal to a given number",
                "is_correct": false
            }
        ],
        "answer_description": "`Math.ceil()` function in JavaScript returns the smallest integer greater than or equal to a given number.",
        "difficulty": "medium",
        "tags": ["JavaScript", "Math.ceil()"]
    },
    {
        "question": "What is the result of `typeof undefined` in JavaScript?",
        "options": [
            {
                "label": "`'undefined'`",
                "is_correct": true
            },
            {
                "label": "`'null'`",
                "is_correct": false
            },
            {
                "label": "`'object'`",
                "is_correct": false
            }
        ],
        "answer_description": "`typeof undefined` in JavaScript returns `'undefined'`.",
        "difficulty": "medium",
        "tags": ["JavaScript", "data types"]
    },
    {
        "question": "What is the purpose of the `isNaN()` function in JavaScript?",
        "options": [
            {
                "label": "To check if a value is not a number",
                "is_correct": true
            },
            {
                "label": "To check if a value is null",
                "is_correct": false
            },
            {
                "label": "To check if a value is undefined",
                "is_correct": false
            }
        ],
        "answer_description": "`isNaN()` function in JavaScript is used to check if a value is not a number.",
        "difficulty": "medium",
        "tags": ["JavaScript", "isNaN"]
    },
    {
        "question": "What is the purpose of the `parseFloat()` function in JavaScript?",
        "options": [
            {
                "label": "To parse a string and return a floating point number",
                "is_correct": true
            },
            {
                "label": "To parse a string and return an integer",
                "is_correct": false
            },
            {
                "label": "To parse a string and return a boolean",
                "is_correct": false
            }
        ],
        "answer_description": "`parseFloat()` function in JavaScript is used to parse a string and return a floating point number.",
        "difficulty": "medium",
        "tags": ["JavaScript", "parseFloat"]
    },
    {
        "question": "What is the purpose of the `String.prototype.slice()` method in JavaScript?",
        "options": [
            {
                "label": "To extract a section of a string and return it as a new string",
                "is_correct": true
            },
            {
                "label": "To join two or more strings",
                "is_correct": false
            },
            {
                "label": "To search for a specified value within a string",
                "is_correct": false
            }
        ],
        "answer_description": "`String.prototype.slice()` method in JavaScript is used to extract a section of a string and return it as a new string.",
        "difficulty": "medium",
        "tags": ["JavaScript", "String.prototype.slice()"]
    },
    {
        "question": "What is the purpose of the `String.prototype.toUpperCase()` method in JavaScript?",
        "options": [
            {
                "label": "To convert all characters in a string to uppercase",
                "is_correct": true
            },
            {
                "label": "To convert all characters in a string to lowercase",
                "is_correct": false
            },
            {
                "label": "To capitalize the first letter of a string",
                "is_correct": false
            }
        ],
        "answer_description": "`String.prototype.toUpperCase()` method in JavaScript is used to convert all characters in a string to uppercase.",
        "difficulty": "medium",
        "tags": ["JavaScript", "String.prototype.toUpperCase()"]
    },
    {
        "question": "What is the purpose of the `String.prototype.toLowerCase()` method in JavaScript?",
        "options": [
            {
                "label": "To convert all characters in a string to lowercase",
                "is_correct": true
            },
            {
                "label": "To convert all characters in a string to uppercase",
                "is_correct": false
            },
            {
                "label": "To capitalize the first letter of a string",
                "is_correct": false
            }
        ],
        "answer_description": "`String.prototype.toLowerCase()` method in JavaScript is used to convert all characters in a string to lowercase.",
        "difficulty": "medium",
        "tags": ["JavaScript", "String.prototype.toLowerCase()"]
    },
    {
        "question": "What is the purpose of the `String.prototype.trim()` method in JavaScript?",
        "options": [
            {
                "label": "To remove whitespace from both ends of a string",
                "is_correct": true
            },
            {
                "label": "To concatenate two or more strings",
                "is_correct": false
            },
            {
                "label": "To split a string into an array of substrings",
                "is_correct": false
            }
        ],
        "answer_description": "`String.prototype.trim()` method in JavaScript is used to remove whitespace from both ends of a string.",
        "difficulty": "medium",
        "tags": ["JavaScript", "String.prototype.trim()"]
    },
    {
        "question": "What is the result of `3 * 'a'` in JavaScript?",
        "options": [
            {
                "label": "`NaN`",
                "is_correct": true
            },
            {
                "label": "`0`",
                "is_correct": false
            },
            {
                "label": "`undefined`",
                "is_correct": false
            }
        ],
        "answer_description": "The result of `3 * 'a'` in JavaScript is `NaN` (Not-a-Number).",
        "difficulty": "medium",
        "tags": ["JavaScript", "NaN"]
    },
    {
        "question": "What is the result of `null == undefined` in JavaScript?",
        "options": [
            {
                "label": "`true`",
                "is_correct": true
            },
            {
                "label": "`false`",
                "is_correct": false
            },
            {
                "label": "`undefined`",
                "is_correct": false
            }
        ],
        "answer_description": "`null == undefined` in JavaScript returns `true` because they are both considered equal under loose equality comparison.",
        "difficulty": "medium",
        "tags": ["JavaScript", "equality"]
    },
    {
        "question": "What does the `Date.now()` function in JavaScript return?",
        "options": [
            {
                "label": "The number of milliseconds since January 1, 1970, 00:00:00 UTC",
                "is_correct": true
            },
            {
                "label": "The current date and time",
                "is_correct": false
            },
            {
                "label": "The number of seconds since January 1, 1970, 00:00:00 UTC",
                "is_correct": false
            }
        ],
        "answer_description": "`Date.now()` function in JavaScript returns the number of milliseconds since January 1, 1970, 00:00:00 UTC.",
        "difficulty": "medium",
        "tags": ["JavaScript", "Date.now()"]
    },
    {
        "question": "What is the purpose of the `continue` statement in JavaScript?",
        "options": [
            {
                "label": "To skip the rest of the code inside a loop and continue with the next iteration.",
                "is_correct": true
            },
            {
                "label": "To exit the loop immediately.",
                "is_correct": false
            },
            {
                "label": "To restart the loop from the beginning.",
                "is_correct": false
            }
        ],
        "answer_description": "The `continue` statement is used to skip the rest of the code inside a loop for the current iteration and continue with the next iteration of the loop.",
        "difficulty": "hard",
        "tags": ["JavaScript", "loops"]
    },
    {
        "question": "What is a closure in JavaScript?",
        "options": [
            {
                "label": "A function that has access to the outer function's variables even after the outer function has finished executing.",
                "is_correct": true
            },
            {
                "label": "A function that returns another function.",
                "is_correct": false
            },
            {
                "label": "A function declared inside another function.",
                "is_correct": false
            }
        ],
        "answer_description": "A closure is a function that has access to the outer function's variables even after the outer function has finished executing. Closures are created whenever a function is defined within another function.",
        "difficulty": "hard",
        "tags": ["JavaScript", "closures"]
    },
    {
        "question": "What is the difference between `null` and `undefined` in JavaScript?",
        "options": [
            {
                "label": "`null` is an explicit absence of any value, whereas `undefined` means a variable has been declared but has not been assigned a value.",
                "is_correct": true
            },
            {
                "label": "`null` means a variable has been declared but has not been assigned a value, whereas `undefined` is an explicit absence of any value.",
                "is_correct": false
            },
            {
                "label": "`null` and `undefined` are the same thing in JavaScript.",
                "is_correct": false
            }
        ],
        "answer_description": "`null` represents an explicit absence of any value and must be assigned, whereas `undefined` means a variable has been declared but has not been assigned a value.",
        "difficulty": "hard",
        "tags": ["JavaScript", "null", "undefined"]
    },
    {
        "question": "What is the event loop in JavaScript?",
        "options": [
            {
                "label": "A mechanism that allows JavaScript to execute asynchronous code by putting callback functions into an event queue.",
                "is_correct": true
            },
            {
                "label": "A loop that continuously executes JavaScript code.",
                "is_correct": false
            },
            {
                "label": "A loop that handles DOM events.",
                "is_correct": false
            }
        ],
        "answer_description": "The event loop is a mechanism in JavaScript that allows asynchronous code to be executed by putting callback functions into an event queue and executing them in the order they were added, once the call stack is empty.",
        "difficulty": "hard",
        "tags": ["JavaScript", "event loop"]
    },
    {
        "question": "What is a promise in JavaScript?",
        "options": [
            {
                "label": "An object representing the eventual completion or failure of an asynchronous operation.",
                "is_correct": true
            },
            {
                "label": "A function that returns another function.",
                "is_correct": false
            },
            {
                "label": "A built-in JavaScript data type.",
                "is_correct": false
            }
        ],
        "answer_description": "A promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation. It allows you to handle asynchronous operations more easily and cleanly.",
        "difficulty": "hard",
        "tags": ["JavaScript", "promises"]
    },
    {
        "question": "What is the purpose of the `this` keyword in JavaScript?",
        "options": [
            {
                "label": "To refer to the current object.",
                "is_correct": true
            },
            {
                "label": "To refer to the parent object.",
                "is_correct": false
            },
            {
                "label": "To refer to the global object.",
                "is_correct": false
            }
        ],
        "answer_description": "In JavaScript, the `this` keyword is used to refer to the current object. Its value depends on how a function is called.",
        "difficulty": "hard",
        "tags": ["JavaScript", "this keyword"]
    },
    {
        "question": "What is the purpose of the `new` keyword in JavaScript?",
        "options": [
            {
                "label": "To create an instance of a user-defined object type or one of the built-in object types.",
                "is_correct": true
            },
            {
                "label": "To declare a new variable.",
                "is_correct": false
            },
            {
                "label": "To execute a function as a constructor.",
                "is_correct": false
            }
        ],
        "answer_description": "The `new` keyword in JavaScript is used to create an instance of a user-defined object type or one of the built-in object types.",
        "difficulty": "hard",
        "tags": ["JavaScript", "new keyword"]
    },
    {
        "question": "What is the difference between `==` and `===` operators in JavaScript?",
        "options": [
            {
                "label": "`==` compares only values while `===` compares both values and types.",
                "is_correct": true
            },
            {
                "label": "`==` compares both values and types while `===` compares only values.",
                "is_correct": false
            },
            {
                "label": "`==` and `===` are the same thing in JavaScript.",
                "is_correct": false
            }
        ],
        "answer_description": "`==` compares values after converting them to a common type, while `===` compares both values and types without type conversion.",
        "difficulty": "hard",
        "tags": ["JavaScript", "comparison operators"]
    },
    {
        "question": "What is memoization in JavaScript?",
        "options": [
            {
                "label": "A technique used to optimize expensive function calls by caching the results of previous calls.",
                "is_correct": true
            },
            {
                "label": "A technique used to modify object properties.",
                "is_correct": false
            },
            {
                "label": "A technique used to prevent event propagation.",
                "is_correct": false
            }
        ],
        "answer_description": "Memoization is a technique used to optimize expensive function calls by caching the results of previous calls and returning the cached result when the same inputs occur again.",
        "difficulty": "hard",
        "tags": ["JavaScript", "memoization"]
    },
    {
        "question": "What is the purpose of the `bind` method in JavaScript?",
        "options": [
            {
                "label": "To create a new function that, when called, has its `this` keyword set to a specified value.",
                "is_correct": true
            },
            {
                "label": "To attach an event handler function to an element.",
                "is_correct": false
            },
            {
                "label": "To merge the properties of two or more objects.",
                "is_correct": false
            }
        ],
        "answer_description": "The `bind` method in JavaScript is used to create a new function that, when called, has its `this` keyword set to a specified value, with a given sequence of arguments preceding any provided when the new function is called.",
        "difficulty": "hard",
        "tags": ["JavaScript", "bind method"]
    },
    {
        "question": "What is the purpose of the `delete` operator in JavaScript?",
        "options": [
            {
                "label": "To remove a property from an object.",
                "is_correct": true
            },
            {
                "label": "To delete a variable.",
                "is_correct": false
            },
            {
                "label": "To delete an element from an array.",
                "is_correct": false
            }
        ],
        "answer_description": "The `delete` operator in JavaScript is used to remove a property from an object.",
        "difficulty": "hard",
        "tags": ["JavaScript", "delete operator"]
    },
    {
        "question": "What is the purpose of the `hasOwnProperty` method in JavaScript?",
        "options": [
            {
                "label": "To determine whether an object has the specified property as a direct property of that object.",
                "is_correct": true
            },
            {
                "label": "To check if an object has a specific property, regardless of whether it is inherited or not.",
                "is_correct": false
            },
            {
                "label": "To check if an object is empty.",
                "is_correct": false
            }
        ],
        "answer_description": "The `hasOwnProperty` method in JavaScript is used to determine whether an object has the specified property as a direct property of that object.",
        "difficulty": "hard",
        "tags": ["JavaScript", "hasOwnProperty method"]
    },
    {
        "question": "What is the purpose of the `NaN` property in JavaScript?",
        "options": [
            {
                "label": "To represent a value that is 'Not a Number'.",
                "is_correct": true
            },
            {
                "label": "To represent a number that is too large to be represented as a standard JavaScript number.",
                "is_correct": false
            },
            {
                "label": "To represent infinity in JavaScript.",
                "is_correct": false
            }
        ],
        "answer_description": "The `NaN` property in JavaScript is used to represent a value that is 'Not a Number'. It is returned when a mathematical operation cannot produce a meaningful result.",
        "difficulty": "hard",
        "tags": ["JavaScript", "NaN"]
    },
    {
        "question": "What is the purpose of the `Object.keys()` method in JavaScript?",
        "options": [
            {
                "label": "To return an array of a given object's own enumerable property names.",
                "is_correct": true
            },
            {
                "label": "To return an array of a given object's own non-enumerable property names.",
                "is_correct": false
            },
            {
                "label": "To return an array of a given object's prototype chain property names.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Object.keys()` method in JavaScript is used to return an array of a given object's own enumerable property names.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Object.keys method"]
    },
    {
        "question": "What is the purpose of the `Object.freeze()` method in JavaScript?",
        "options": [
            {
                "label": "To freeze an object, preventing new properties from being added to it and existing properties from being removed or changed.",
                "is_correct": true
            },
            {
                "label": "To delete all properties of an object.",
                "is_correct": false
            },
            {
                "label": "To seal an object, preventing new properties from being added to it but allowing existing properties to be removed or changed.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Object.freeze()` method in JavaScript is used to freeze an object, preventing new properties from being added to it and existing properties from being removed or changed.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Object.freeze method"]
    },
    {
        "question": "What is the purpose of the `Function.prototype.bind()` method in JavaScript?",
        "options": [
            {
                "label": "To create a new function with a specified `this` value and initial arguments.",
                "is_correct": true
            },
            {
                "label": "To create a new function that inherits from another function.",
                "is_correct": false
            },
            {
                "label": "To execute a function with a specific `this` value and arguments provided as an array.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Function.prototype.bind()` method in JavaScript is used to create a new function with a specified `this` value and initial arguments.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Function.prototype.bind method"]
    },
    {
        "question": "What is the purpose of the `String.prototype.replace()` method in JavaScript?",
        "options": [
            {
                "label": "To return a new string with some or all matches of a pattern replaced by a replacement.",
                "is_correct": true
            },
            {
                "label": "To remove leading and trailing whitespace from a string.",
                "is_correct": false
            },
            {
                "label": "To split a string into an array of substrings based on a separator string.",
                "is_correct": false
            }
        ],
        "answer_description": "The `String.prototype.replace()` method in JavaScript is used to return a new string with some or all matches of a pattern replaced by a replacement.",
        "difficulty": "hard",
        "tags": ["JavaScript", "String.prototype.replace method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.filter()` method in JavaScript?",
        "options": [
            {
                "label": "To create a new array with all elements that pass the test implemented by the provided function.",
                "is_correct": true
            },
            {
                "label": "To execute a provided function once for each array element.",
                "is_correct": false
            },
            {
                "label": "To return the first element that satisfies the provided testing function.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.filter()` method in JavaScript is used to create a new array with all elements that pass the test implemented by the provided function.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.filter method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.reduce()` method in JavaScript?",
        "options": [
            {
                "label": "To apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.",
                "is_correct": true
            },
            {
                "label": "To create a new array with the results of calling a provided function on every element in the calling array.",
                "is_correct": false
            },
            {
                "label": "To test whether all elements in the array pass the provided function.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.reduce()` method in JavaScript is used to apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.reduce method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.every()` method in JavaScript?",
        "options": [
            {
                "label": "To test whether all elements in the array pass the provided function.",
                "is_correct": true
            },
            {
                "label": "To create a new array with the results of calling a provided function on every element in the calling array.",
                "is_correct": false
            },
            {
                "label": "To create a new array with all elements that pass the test implemented by the provided function.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.every()` method in JavaScript is used to test whether all elements in the array pass the provided function.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.every method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.some()` method in JavaScript?",
        "options": [
            {
                "label": "To test whether at least one element in the array passes the provided function.",
                "is_correct": true
            },
            {
                "label": "To create a new array with the results of calling a provided function on every element in the calling array.",
                "is_correct": false
            },
            {
                "label": "To create a new array with all elements that pass the test implemented by the provided function.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.some()` method in JavaScript is used to test whether at least one element in the array passes the provided function.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.some method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.map()` method in JavaScript?",
        "options": [
            {
                "label": "To create a new array with the results of calling a provided function on every element in the calling array.",
                "is_correct": true
            },
            {
                "label": "To test whether all elements in the array pass the provided function.",
                "is_correct": false
            },
            {
                "label": "To apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.map()` method in JavaScript is used to create a new array with the results of calling a provided function on every element in the calling array.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.map method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.forEach()` method in JavaScript?",
        "options": [
            {
                "label": "To execute a provided function once for each array element.",
                "is_correct": true
            },
            {
                "label": "To create a new array with all elements that pass the test implemented by the provided function.",
                "is_correct": false
            },
            {
                "label": "To apply a function against an accumulator and each element in the array (from left to right) to reduce it to a single value.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.forEach()` method in JavaScript is used to execute a provided function once for each array element.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.forEach method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.includes()` method in JavaScript?",
        "options": [
            {
                "label": "To determine whether an array includes a certain value.",
                "is_correct": true
            },
            {
                "label": "To remove the last element from an array and return that element.",
                "is_correct": false
            },
            {
                "label": "To concatenate the elements of an array into a single string.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.includes()` method in JavaScript is used to determine whether an array includes a certain value, returning `true` or `false` as appropriate.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.includes method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.indexOf()` method in JavaScript?",
        "options": [
            {
                "label": "To return the first index at which a given element can be found in the array, or -1 if it is not present.",
                "is_correct": true
            },
            {
                "label": "To determine whether an array includes a certain value.",
                "is_correct": false
            },
            {
                "label": "To remove the last element from an array and return that element.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.indexOf()` method in JavaScript is used to return the first index at which a given element can be found in the array, or -1 if it is not present.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.indexOf method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.join()` method in JavaScript?",
        "options": [
            {
                "label": "To join all elements of an array into a string.",
                "is_correct": true
            },
            {
                "label": "To add new elements to an array.",
                "is_correct": false
            },
            {
                "label": "To sort the elements of an array.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.join()` method in JavaScript is used to join all elements of an array into a string.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.join method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.reverse()` method in JavaScript?",
        "options": [
            {
                "label": "To reverse the order of the elements in an array.",
                "is_correct": true
            },
            {
                "label": "To sort the elements of an array.",
                "is_correct": false
            },
            {
                "label": "To remove the last element from an array and return that element.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.reverse()` method in JavaScript is used to reverse the order of the elements in an array.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.reverse method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.sort()` method in JavaScript?",
        "options": [
            {
                "label": "To sort the elements of an array.",
                "is_correct": true
            },
            {
                "label": "To join all elements of an array into a string.",
                "is_correct": false
            },
            {
                "label": "To reverse the order of the elements in an array.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.sort()` method in JavaScript is used to sort the elements of an array.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.sort method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.splice()` method in JavaScript?",
        "options": [
            {
                "label": "To change the contents of an array by removing or replacing existing elements and/or adding new elements.",
                "is_correct": true
            },
            {
                "label": "To join all elements of an array into a string.",
                "is_correct": false
            },
            {
                "label": "To reverse the order of the elements in an array.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.splice()` method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.splice method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.concat()` method in JavaScript?",
        "options": [
            {
                "label": "To merge two or more arrays.",
                "is_correct": true
            },
            {
                "label": "To create a new array with all elements that pass the test implemented by the provided function.",
                "is_correct": false
            },
            {
                "label": "To join all elements of an array into a string.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.concat()` method in JavaScript is used to merge two or more arrays, returning a new array without modifying the existing arrays.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.concat method"]
    },
    {
        "question": "What is the purpose of the `Array.prototype.slice()` method in JavaScript?",
        "options": [
            {
                "label": "To extract a section of an array and return a new array.",
                "is_correct": true
            },
            {
                "label": "To join all elements of an array into a string.",
                "is_correct": false
            },
            {
                "label": "To remove the last element from an array and return that element.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.prototype.slice()` method in JavaScript is used to extract a section of an array and return a new array without modifying the original array.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.prototype.slice method"]
    },
    {
        "question": "What is the purpose of the `Array.isArray()` method in JavaScript?",
        "options": [
            {
                "label": "To determine whether a value is an array.",
                "is_correct": true
            },
            {
                "label": "To create a new array with all elements that pass the test implemented by the provided function.",
                "is_correct": false
            },
            {
                "label": "To join all elements of an array into a string.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Array.isArray()` method in JavaScript is used to determine whether a value is an array.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Array.isArray method"]
    },
    {
        "question": "What is the purpose of the `Math.max()` method in JavaScript?",
        "options": [
            {
                "label": "To return the largest of zero or more numbers.",
                "is_correct": true
            },
            {
                "label": "To return the smallest of zero or more numbers.",
                "is_correct": false
            },
            {
                "label": "To round a number to the nearest integer.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Math.max()` method in JavaScript is used to return the largest of zero or more numbers.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Math.max method"]
    },
    {
        "question": "What is the purpose of the `Math.min()` method in JavaScript?",
        "options": [
            {
                "label": "To return the smallest of zero or more numbers.",
                "is_correct": true
            },
            {
                "label": "To return the largest of zero or more numbers.",
                "is_correct": false
            },
            {
                "label": "To round a number to the nearest integer.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Math.min()` method in JavaScript is used to return the smallest of zero or more numbers.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Math.min method"]
    },
    {
        "question": "What is the purpose of the `Math.round()` method in JavaScript?",
        "options": [
            {
                "label": "To round a number to the nearest integer.",
                "is_correct": true
            },
            {
                "label": "To round a number down to the nearest integer.",
                "is_correct": false
            },
            {
                "label": "To round a number up to the nearest integer.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Math.round()` method in JavaScript is used to round a number to the nearest integer.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Math.round method"]
    },
    {
        "question": "What is the purpose of the `Math.floor()` method in JavaScript?",
        "options": [
            {
                "label": "To round a number down to the nearest integer.",
                "is_correct": true
            },
            {
                "label": "To round a number up to the nearest integer.",
                "is_correct": false
            },
            {
                "label": "To round a number to the nearest integer.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Math.floor()` method in JavaScript is used to round a number down to the nearest integer.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Math.floor method"]
    },
    {
        "question": "What is the purpose of the `Math.ceil()` method in JavaScript?",
        "options": [
            {
                "label": "To round a number up to the nearest integer.",
                "is_correct": true
            },
            {
                "label": "To round a number down to the nearest integer.",
                "is_correct": false
            },
            {
                "label": "To round a number to the nearest integer.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Math.ceil()` method in JavaScript is used to round a number up to the nearest integer.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Math.ceil method"]
    },
    {
        "question": "What is the purpose of the `Date.now()` method in JavaScript?",
        "options": [
            {
                "label": "To return the current timestamp in milliseconds.",
                "is_correct": true
            },
            {
                "label": "To return the current date and time as a string.",
                "is_correct": false
            },
            {
                "label": "To return the current date and time as a Date object.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.now()` method in JavaScript is used to return the current timestamp in milliseconds since the Unix epoch.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.now method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.getFullYear()` method in JavaScript?",
        "options": [
            {
                "label": "To return the year of the specified date.",
                "is_correct": true
            },
            {
                "label": "To return the month of the specified date.",
                "is_correct": false
            },
            {
                "label": "To return the day of the week of the specified date.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.getFullYear()` method in JavaScript is used to return the year of the specified date.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.getFullYear method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.getMonth()` method in JavaScript?",
        "options": [
            {
                "label": "To return the month (0-11) of the specified date.",
                "is_correct": true
            },
            {
                "label": "To return the year of the specified date.",
                "is_correct": false
            },
            {
                "label": "To return the day of the week of the specified date.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.getMonth()` method in JavaScript is used to return the month (0-11) of the specified date.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.getMonth method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.getDate()` method in JavaScript?",
        "options": [
            {
                "label": "To return the day of the month (1-31) of the specified date.",
                "is_correct": true
            },
            {
                "label": "To return the year of the specified date.",
                "is_correct": false
            },
            {
                "label": "To return the month (0-11) of the specified date.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.getDate()` method in JavaScript is used to return the day of the month (1-31) of the specified date.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.getDate method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.getDay()` method in JavaScript?",
        "options": [
            {
                "label": "To return the day of the week (0-6) of the specified date.",
                "is_correct": true
            },
            {
                "label": "To return the year of the specified date.",
                "is_correct": false
            },
            {
                "label": "To return the month (0-11) of the specified date.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.getDay()` method in JavaScript is used to return the day of the week (0-6) of the specified date, where Sunday is 0 and Saturday is 6.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.getDay method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.getHours()` method in JavaScript?",
        "options": [
            {
                "label": "To return the hour (0-23) of the specified date.",
                "is_correct": true
            },
            {
                "label": "To return the minute (0-59) of the specified date.",
                "is_correct": false
            },
            {
                "label": "To return the second (0-59) of the specified date.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.getHours()` method in JavaScript is used to return the hour (0-23) of the specified date.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.getHours method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.getMinutes()` method in JavaScript?",
        "options": [
            {
                "label": "To return the minute (0-59) of the specified date.",
                "is_correct": true
            },
            {
                "label": "To return the hour (0-23) of the specified date.",
                "is_correct": false
            },
            {
                "label": "To return the second (0-59) of the specified date.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.getMinutes()` method in JavaScript is used to return the minute (0-59) of the specified date.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.getMinutes method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.getSeconds()` method in JavaScript?",
        "options": [
            {
                "label": "To return the second (0-59) of the specified date.",
                "is_correct": true
            },
            {
                "label": "To return the hour (0-23) of the specified date.",
                "is_correct": false
            },
            {
                "label": "To return the minute (0-59) of the specified date.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.getSeconds()` method in JavaScript is used to return the second (0-59) of the specified date.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.getSeconds method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.getMilliseconds()` method in JavaScript?",
        "options": [
            {
                "label": "To return the milliseconds (0-999) of the specified date.",
                "is_correct": true
            },
            {
                "label": "To return the hour (0-23) of the specified date.",
                "is_correct": false
            },
            {
                "label": "To return the minute (0-59) of the specified date.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.getMilliseconds()` method in JavaScript is used to return the milliseconds (0-999) of the specified date.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.getMilliseconds method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.toString()` method in JavaScript?",
        "options": [
            {
                "label": "To return a string representing the specified date.",
                "is_correct": true
            },
            {
                "label": "To return the current timestamp in milliseconds.",
                "is_correct": false
            },
            {
                "label": "To return the current date and time as a Date object.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.toString()` method in JavaScript is used to return a string representing the specified date.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.toString method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.toDateString()` method in JavaScript?",
        "options": [
            {
                "label": "To return a string representing the date portion of the specified date.",
                "is_correct": true
            },
            {
                "label": "To return the current timestamp in milliseconds.",
                "is_correct": false
            },
            {
                "label": "To return a string representing the time portion of the specified date.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.toDateString()` method in JavaScript is used to return a string representing the date portion of the specified date.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.toDateString method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.toTimeString()` method in JavaScript?",
        "options": [
            {
                "label": "To return a string representing the time portion of the specified date.",
                "is_correct": true
            },
            {
                "label": "To return the current timestamp in milliseconds.",
                "is_correct": false
            },
            {
                "label": "To return a string representing the date portion of the specified date.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.toTimeString()` method in JavaScript is used to return a string representing the time portion of the specified date.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.toTimeString method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.toLocaleString()` method in JavaScript?",
        "options": [
            {
                "label": "To return a string representing the date and time in a localized format.",
                "is_correct": true
            },
            {
                "label": "To return the current timestamp in milliseconds.",
                "is_correct": false
            },
            {
                "label": "To return a string representing the date portion of the specified date.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.toLocaleString()` method in JavaScript is used to return a string representing the date and time in a localized format.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.toLocaleString method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.toLocaleDateString()` method in JavaScript?",
        "options": [
            {
                "label": "To return a string representing the date portion of the specified date in a localized format.",
                "is_correct": true
            },
            {
                "label": "To return the current timestamp in milliseconds.",
                "is_correct": false
            },
            {
                "label": "To return a string representing the time portion of the specified date in a localized format.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.toLocaleDateString()` method in JavaScript is used to return a string representing the date portion of the specified date in a localized format.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.toLocaleDateString method"]
    },
    {
        "question": "What is the purpose of the `Date.prototype.toLocaleTimeString()` method in JavaScript?",
        "options": [
            {
                "label": "To return a string representing the time portion of the specified date in a localized format.",
                "is_correct": true
            },
            {
                "label": "To return the current timestamp in milliseconds.",
                "is_correct": false
            },
            {
                "label": "To return a string representing the date portion of the specified date in a localized format.",
                "is_correct": false
            }
        ],
        "answer_description": "The `Date.prototype.toLocaleTimeString()` method in JavaScript is used to return a string representing the time portion of the specified date in a localized format.",
        "difficulty": "hard",
        "tags": ["JavaScript", "Date.prototype.toLocaleTimeString method"]
    },
    {
        "question": "What does HTML stand for?",
        "options": [
            {"label": "Hyper Text Markup Language", "is_correct": true},
            {"label": "Hyperlink and Text Markup Language", "is_correct": false},
            {"label": "Home Tool Markup Language", "is_correct": false}
        ],
        "answer_description": "HTML stands for Hyper Text Markup Language.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define an unordered list?",
        "options": [
            {"label": "`<ul>`", "is_correct": true},
            {"label": "`<ol>`", "is_correct": false},
            {"label": "`<li>`", "is_correct": false}
        ],
        "answer_description": "`<ul>` tag is used to define an unordered list.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define a hyperlink?",
        "options": [
            {"label": "`<a>`", "is_correct": true},
            {"label": "`<link>`", "is_correct": false},
            {"label": "`<href>`", "is_correct": false}
        ],
        "answer_description": "`<a>` tag is used to define a hyperlink.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `DOCTYPE` declaration do?",
        "options": [
            {"label": "Defines the version of HTML in use", "is_correct": true},
            {"label": "Creates a new HTML document", "is_correct": false},
            {"label": "Declares a comment in HTML", "is_correct": false}
        ],
        "answer_description": "The `DOCTYPE` declaration defines the version of HTML in use.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define a table row?",
        "options": [
            {"label": "`<tr>`", "is_correct": true},
            {"label": "`<td>`", "is_correct": false},
            {"label": "`<table>`", "is_correct": false}
        ],
        "answer_description": "`<tr>` tag is used to define a table row.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify an image URL in HTML?",
        "options": [
            {"label": "`src`", "is_correct": true},
            {"label": "`href`", "is_correct": false},
            {"label": "`url`", "is_correct": false}
        ],
        "answer_description": "`src` attribute is used to specify an image URL in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a line break?",
        "options": [
            {"label": "`<br>`", "is_correct": true},
            {"label": "`<break>`", "is_correct": false},
            {"label": "`<lb>`", "is_correct": false}
        ],
        "answer_description": "`<br>` tag is used to create a line break.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define a paragraph?",
        "options": [
            {"label": "`<p>`", "is_correct": true},
            {"label": "`<par>`", "is_correct": false},
            {"label": "`<paragraph>`", "is_correct": false}
        ],
        "answer_description": "`<p>` tag is used to define a paragraph.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define bold text?",
        "options": [
            {"label": "`<b>`", "is_correct": true},
            {"label": "`<bold>`", "is_correct": false},
            {"label": "`<strong>`", "is_correct": false}
        ],
        "answer_description": "`<b>` tag is used to define bold text.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "What does CSS stand for?",
        "options": [
            {"label": "Cascading Style Sheets", "is_correct": true},
            {"label": "Creative Style Sheets", "is_correct": false},
            {"label": "Computer Style Sheets", "is_correct": false}
        ],
        "answer_description": "CSS stands for Cascading Style Sheets.",
        "difficulty": "easy",
        "tags": ["CSS"]
    },
    {
        "question": "Which attribute is used to specify the width of a table border in HTML?",
        "options": [
            {"label": "`border`", "is_correct": true},
            {"label": "`width`", "is_correct": false},
            {"label": "`border-width`", "is_correct": false}
        ],
        "answer_description": "`border` attribute is used to specify the width of a table border in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the alignment of text within a table cell?",
        "options": [
            {"label": "`align`", "is_correct": true},
            {"label": "`text-align`", "is_correct": false},
            {"label": "`alignment`", "is_correct": false}
        ],
        "answer_description": "`align` attribute is used to specify the alignment of text within a table cell.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a hyperlink to an email address?",
        "options": [
            {"label": "`<a>`", "is_correct": true},
            {"label": "`<email>`", "is_correct": false},
            {"label": "`<mail>`", "is_correct": false}
        ],
        "answer_description": "`<a>` tag is used to create a hyperlink to an email address.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a horizontal rule in HTML?",
        "options": [
            {"label": "`<hr>`", "is_correct": true},
            {"label": "`<rule>`", "is_correct": false},
            {"label": "`<line>`", "is_correct": false}
        ],
        "answer_description": "`<hr>` tag is used to create a horizontal rule in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a checkbox in HTML?",
        "options": [
            {"label": "`<input type='checkbox'>`", "is_correct": true},
            {"label": "`<checkbox>`", "is_correct": false},
            {"label": "`<check>`", "is_correct": false}
        ],
        "answer_description": "`<input type='checkbox'>` tag is used to create a checkbox in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a dropdown list in HTML?",
        "options": [
            {"label": "`<select>`", "is_correct": true},
            {"label": "`<dropdown>`", "is_correct": false},
            {"label": "`<list>`", "is_correct": false}
        ],
        "answer_description": "`<select>` tag is used to create a dropdown list in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to add an image to a webpage in HTML?",
        "options": [
            {"label": "`<img>`", "is_correct": true},
            {"label": "`<image>`", "is_correct": false},
            {"label": "`<picture>`", "is_correct": false}
        ],
        "answer_description": "`<img>` tag is used to add an image to a webpage in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify alternative text for an image in HTML?",
        "options": [
            {"label": "`alt`", "is_correct": true},
            {"label": "`title`", "is_correct": false},
            {"label": "`text`", "is_correct": false}
        ],
        "answer_description": "`alt` attribute is used to specify alternative text for an image in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a hyperlink within the same page?",
        "options": [
            {"label": "`<a>`", "is_correct": true},
            {"label": "`<link>`", "is_correct": false},
            {"label": "`<anchor>`", "is_correct": false}
        ],
        "answer_description": "`<a>` tag is used to create a hyperlink within the same page.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the location of the linked document in HTML?",
        "options": [
            {"label": "`href`", "is_correct": true},
            {"label": "`link`", "is_correct": false},
            {"label": "`source`", "is_correct": false}
        ],
        "answer_description": "`href` attribute is used to specify the location of the linked document in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define a heading in HTML?",
        "options": [
            {"label": "`<h1>`", "is_correct": true},
            {"label": "`<head>`", "is_correct": false},
            {"label": "`<header>`", "is_correct": false}
        ],
        "answer_description": "`<h1>` tag is used to define a heading in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to emphasize text in HTML?",
        "options": [
            {"label": "`<em>`", "is_correct": true},
            {"label": "`<i>`", "is_correct": false},
            {"label": "`<italic>`", "is_correct": false}
        ],
        "answer_description": "`<em>` tag is used to emphasize text in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define an italicized text in HTML?",
        "options": [
            {"label": "`<i>`", "is_correct": true},
            {"label": "`<italic>`", "is_correct": false},
            {"label": "`<em>`", "is_correct": false}
        ],
        "answer_description": "`<i>` tag is used to define an italicized text in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the language of the content in HTML?",
        "options": [
            {"label": "`lang`", "is_correct": true},
            {"label": "`language`", "is_correct": false},
            {"label": "`locale`", "is_correct": false}
        ],
        "answer_description": "`lang` attribute is used to specify the language of the content in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define a line break in HTML?",
        "options": [
            {"label": "`<br>`", "is_correct": true},
            {"label": "`<lb>`", "is_correct": false},
            {"label": "`<break>`", "is_correct": false}
        ],
        "answer_description": "`<br>` tag is used to define a line break in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create an ordered list?",
        "options": [
            {"label": "`<ol>`", "is_correct": true},
            {"label": "`<ul>`", "is_correct": false},
            {"label": "`<list>`", "is_correct": false}
        ],
        "answer_description": "`<ol>` tag is used to create an ordered list.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define an item in a list?",
        "options": [
            {"label": "`<li>`", "is_correct": true},
            {"label": "`<item>`", "is_correct": false},
            {"label": "`<list-item>`", "is_correct": false}
        ],
        "answer_description": "`<li>` tag is used to define an item in a list.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a hyperlink to another webpage?",
        "options": [
            {"label": "`<a>`", "is_correct": true},
            {"label": "`<link>`", "is_correct": false},
            {"label": "`<anchor>`", "is_correct": false}
        ],
        "answer_description": "`<a>` tag is used to create a hyperlink to another webpage.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the target of a hyperlink in HTML?",
        "options": [
            {"label": "`target`", "is_correct": true},
            {"label": "`link`", "is_correct": false},
            {"label": "`href`", "is_correct": false}
        ],
        "answer_description": "`target` attribute is used to specify the target of a hyperlink in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a table in HTML?",
        "options": [
            {"label": "`<table>`", "is_correct": true},
            {"label": "`<tab>`", "is_correct": false},
            {"label": "`<tbl>`", "is_correct": false}
        ],
        "answer_description": "`<table>` tag is used to create a table in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the background color of an element in HTML?",
        "options": [
            {"label": "`bgcolor`", "is_correct": true},
            {"label": "`color`", "is_correct": false},
            {"label": "`background-color`", "is_correct": false}
        ],
        "answer_description": "`bgcolor` attribute is used to specify the background color of an element in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a division or section in HTML?",
        "options": [
            {"label": "`<div>`", "is_correct": true},
            {"label": "`<section>`", "is_correct": false},
            {"label": "`<division>`", "is_correct": false}
        ],
        "answer_description": "`<div>` tag is used to create a division or section in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify an image width in HTML?",
        "options": [
            {"label": "`width`", "is_correct": true},
            {"label": "`size`", "is_correct": false},
            {"label": "`length`", "is_correct": false}
        ],
        "answer_description": "`width` attribute is used to specify an image width in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify an image height in HTML?",
        "options": [
            {"label": "`height`", "is_correct": true},
            {"label": "`size`", "is_correct": false},
            {"label": "`length`", "is_correct": false}
        ],
        "answer_description": "`height` attribute is used to specify an image height in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a clickable button in HTML?",
        "options": [
            {"label": "`<button>`", "is_correct": true},
            {"label": "`<clickable>`", "is_correct": false},
            {"label": "`<click>`", "is_correct": false}
        ],
        "answer_description": "`<button>` tag is used to create a clickable button in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the value of a text input field in HTML?",
        "options": [
            {"label": "`value`", "is_correct": true},
            {"label": "`text`", "is_correct": false},
            {"label": "`val`", "is_correct": false}
        ],
        "answer_description": "`value` attribute is used to specify the value of a text input field in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define a line of text in HTML?",
        "options": [
            {"label": "`<span>`", "is_correct": true},
            {"label": "`<text>`", "is_correct": false},
            {"label": "`<line>`", "is_correct": false}
        ],
        "answer_description": "`<span>` tag is used to define a line of text in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the alignment of an image in HTML?",
        "options": [
            {"label": "`align`", "is_correct": true},
            {"label": "`alignment`", "is_correct": false},
            {"label": "`position`", "is_correct": false}
        ],
        "answer_description": "`align` attribute is used to specify the alignment of an image in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a form in HTML?",
        "options": [
            {"label": "`<form>`", "is_correct": true},
            {"label": "`<input>`", "is_correct": false},
            {"label": "`<form>` and `<input>`", "is_correct": false}
        ],
        "answer_description": "`<form>` tag is used to create a form in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the HTTP method in a form?",
        "options": [
            {"label": "`method`", "is_correct": true},
            {"label": "`action`", "is_correct": false},
            {"label": "`type`", "is_correct": false}
        ],
        "answer_description": "`method` attribute is used to specify the HTTP method in a form.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the destination of a form submission?",
        "options": [
            {"label": "`action`", "is_correct": true},
            {"label": "`method`", "is_correct": false},
            {"label": "`submit`", "is_correct": false}
        ],
        "answer_description": "`action` attribute is used to specify the destination of a form submission.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a text input field in HTML?",
        "options": [
            {"label": "`<input type='text'>`", "is_correct": true},
            {"label": "`<text>`", "is_correct": false},
            {"label": "`<input>`", "is_correct": false}
        ],
        "answer_description": "`<input type='text'>` tag is used to create a text input field in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the maximum number of characters allowed in a text input field?",
        "options": [
            {"label": "`maxlength`", "is_correct": true},
            {"label": "`max`", "is_correct": false},
            {"label": "`length`", "is_correct": false}
        ],
        "answer_description": "`maxlength` attribute is used to specify the maximum number of characters allowed in a text input field.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify whether a form field is required in HTML?",
        "options": [
            {"label": "`required`", "is_correct": true},
            {"label": "`mandatory`", "is_correct": false},
            {"label": "`necessary`", "is_correct": false}
        ],
        "answer_description": "`required` attribute is used to specify whether a form field is required in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to group related form elements in HTML?",
        "options": [
            {"label": "`fieldset`", "is_correct": true},
            {"label": "`group`", "is_correct": false},
            {"label": "`grouping`", "is_correct": false}
        ],
        "answer_description": "`fieldset` attribute is used to group related form elements in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the label for a form element in HTML?",
        "options": [
            {"label": "`for`", "is_correct": true},
            {"label": "`label`", "is_correct": false},
            {"label": "`name`", "is_correct": false}
        ],
        "answer_description": "`for` attribute is used to specify the label for a form element in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a radio button in HTML?",
        "options": [
            {"label": "`<input type='radio'>`", "is_correct": true},
            {"label": "`<radio>`", "is_correct": false},
            {"label": "`<button>`", "is_correct": false}
        ],
        "answer_description": "`<input type='radio'>` tag is used to create a radio button in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to group radio buttons in HTML?",
        "options": [
            {"label": "`name`", "is_correct": true},
            {"label": "`group`", "is_correct": false},
            {"label": "`radio`", "is_correct": false}
        ],
        "answer_description": "`name` attribute is used to group radio buttons in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a submit button in HTML?",
        "options": [
            {"label": "`<input type='submit'>`", "is_correct": true},
            {"label": "`<submit>`", "is_correct": false},
            {"label": "`<button>`", "is_correct": false}
        ],
        "answer_description": "`<input type='submit'>` tag is used to create a submit button in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the initial value of a form field in HTML?",
        "options": [
            {"label": "`value`", "is_correct": true},
            {"label": "`initial`", "is_correct": false},
            {"label": "`default`", "is_correct": false}
        ],
        "answer_description": "`value` attribute is used to specify the initial value of a form field in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a textarea input field in HTML?",
        "options": [
            {"label": "`<textarea>`", "is_correct": true},
            {"label": "`<text>`", "is_correct": false},
            {"label": "`<input type='textarea'>`", "is_correct": false}
        ],
        "answer_description": "`<textarea>` tag is used to create a textarea input field in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the number of visible rows in a textarea?",
        "options": [
            {"label": "`rows`", "is_correct": true},
            {"label": "`visible`", "is_correct": false},
            {"label": "`size`", "is_correct": false}
        ],
        "answer_description": "`rows` attribute is used to specify the number of visible rows in a textarea.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the number of visible columns in a textarea?",
        "options": [
            {"label": "`cols`", "is_correct": true},
            {"label": "`columns`", "is_correct": false},
            {"label": "`size`", "is_correct": false}
        ],
        "answer_description": "`cols` attribute is used to specify the number of visible columns in a textarea.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create an image map in HTML?",
        "options": [
            {"label": "`<map>`", "is_correct": true},
            {"label": "`<imagemap>`", "is_correct": false},
            {"label": "`<image>`", "is_correct": false}
        ],
        "answer_description": "`<map>` tag is used to create an image map in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the shape of an area in an image map?",
        "options": [
            {"label": "`shape`", "is_correct": true},
            {"label": "`area`", "is_correct": false},
            {"label": "`region`", "is_correct": false}
        ],
        "answer_description": "`shape` attribute is used to specify the shape of an area in an image map.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the coordinates of an area in an image map?",
        "options": [
            {"label": "`coords`", "is_correct": true},
            {"label": "`coordinates`", "is_correct": false},
            {"label": "`position`", "is_correct": false}
        ],
        "answer_description": "`coords` attribute is used to specify the coordinates of an area in an image map.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a button in HTML?",
        "options": [
            {"label": "`<button>`", "is_correct": true},
            {"label": "`<clickable>`", "is_correct": false},
            {"label": "`<input type='button'>`", "is_correct": false}
        ],
        "answer_description": "`<button>` tag is used to create a button in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the type of a button in HTML?",
        "options": [
            {"label": "`type`", "is_correct": true},
            {"label": "`button-type`", "is_correct": false},
            {"label": "`button`", "is_correct": false}
        ],
        "answer_description": "`type` attribute is used to specify the type of a button in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a password input field in HTML?",
        "options": [
            {"label": "`<input type='password'>`", "is_correct": true},
            {"label": "`<password>`", "is_correct": false},
            {"label": "`<input type='text' password>`", "is_correct": false}
        ],
        "answer_description": "`<input type='password'>` tag is used to create a password input field in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the maximum number of characters allowed in a password input field?",
        "options": [
            {"label": "`maxlength`", "is_correct": true},
            {"label": "`max`", "is_correct": false},
            {"label": "`length`", "is_correct": false}
        ],
        "answer_description": "`maxlength` attribute is used to specify the maximum number of characters allowed in a password input field.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the placeholder text in an input field in HTML?",
        "options": [
            {"label": "`placeholder`", "is_correct": true},
            {"label": "`text`", "is_correct": false},
            {"label": "`hint`", "is_correct": false}
        ],
        "answer_description": "`placeholder` attribute is used to specify the placeholder text in an input field in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a hidden input field in HTML?",
        "options": [
            {"label": "`<input type='hidden'>`", "is_correct": true},
            {"label": "`<hidden>`", "is_correct": false},
            {"label": "`<input type='hide'>`", "is_correct": false}
        ],
        "answer_description": "`<input type='hidden'>` tag is used to create a hidden input field in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the value of a hidden input field in HTML?",
        "options": [
            {"label": "`value`", "is_correct": true},
            {"label": "`default`", "is_correct": false},
            {"label": "`initial`", "is_correct": false}
        ],
        "answer_description": "`value` attribute is used to specify the value of a hidden input field in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create an image input field in HTML?",
        "options": [
            {"label": "`<input type='image'>`", "is_correct": true},
            {"label": "`<image>`", "is_correct": false},
            {"label": "`<img>`", "is_correct": false}
        ],
        "answer_description": "`<input type='image'>` tag is used to create an image input field in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the source of the image in an image input field in HTML?",
        "options": [
            {"label": "`src`", "is_correct": true},
            {"label": "`source`", "is_correct": false},
            {"label": "`url`", "is_correct": false}
        ],
        "answer_description": "`src` attribute is used to specify the source of the image in an image input field in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the alt text for an image input field in HTML?",
        "options": [
            {"label": "`alt`", "is_correct": true},
            {"label": "`title`", "is_correct": false},
            {"label": "`text`", "is_correct": false}
        ],
        "answer_description": "`alt` attribute is used to specify the alt text for an image input field in HTML.",
        "difficulty": "easy",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the size of an input field in HTML?",
        "options": [
            {"label": "`size`", "is_correct": true},
            {"label": "`width`", "is_correct": false},
            {"label": "`length`", "is_correct": false}
        ],
        "answer_description": "`size` attribute is used to specify the size of an input field in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define an image map?",
        "options": [
            {"label": "`<map>`", "is_correct": true},
            {"label": "`<area>`", "is_correct": false},
            {"label": "`<img>`", "is_correct": false}
        ],
        "answer_description": "`<map>` tag is used to define an image map.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the alternative text for an image in HTML?",
        "options": [
            {"label": "`alt`", "is_correct": true},
            {"label": "`title`", "is_correct": false},
            {"label": "`description`", "is_correct": false}
        ],
        "answer_description": "`alt` attribute is used to specify the alternative text for an image in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `rel` attribute specify in a link tag?",
        "options": [
            {"label": "Relationship between the current document and the linked document", "is_correct": true},
            {"label": "Render type of linked document", "is_correct": false},
            {"label": "Relative path of linked document", "is_correct": false}
        ],
        "answer_description": "The `rel` attribute specifies the relationship between the current document and the linked document in a link tag.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define a section in HTML5?",
        "options": [
            {"label": "`<section>`", "is_correct": true},
            {"label": "`<div>`", "is_correct": false},
            {"label": "`<article>`", "is_correct": false}
        ],
        "answer_description": "`<section>` tag is used to define a section in HTML5.",
        "difficulty": "medium",
        "tags": ["HTML5"]
    },
    {
        "question": "What does the `title` attribute provide in an anchor tag?",
        "options": [
            {"label": "Additional information about the linked document", "is_correct": true},
            {"label": "Defines the title of the anchor element", "is_correct": false},
            {"label": "Specifies the style of the link", "is_correct": false}
        ],
        "answer_description": "The `title` attribute provides additional information about the linked document in an anchor tag.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the alignment of text within a table cell?",
        "options": [
            {"label": "`align`", "is_correct": true},
            {"label": "`text-align`", "is_correct": false},
            {"label": "`vertical-align`", "is_correct": false}
        ],
        "answer_description": "`align` attribute is used to specify the alignment of text within a table cell.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `hidden` attribute do in HTML?",
        "options": [
            {"label": "Hides an element from being displayed", "is_correct": true},
            {"label": "Adds visibility to an element", "is_correct": false},
            {"label": "Changes the opacity of an element", "is_correct": false}
        ],
        "answer_description": "The `hidden` attribute hides an element from being displayed in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define a definition list in HTML?",
        "options": [
            {"label": "`<dl>`", "is_correct": true},
            {"label": "`<dt>`", "is_correct": false},
            {"label": "`<dd>`", "is_correct": false}
        ],
        "answer_description": "`<dl>` tag is used to define a definition list in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define emphasized text?",
        "options": [
            {"label": "`<em>`", "is_correct": true},
            {"label": "`<italic>`", "is_correct": false},
            {"label": "`<strong>`", "is_correct": false}
        ],
        "answer_description": "`<em>` tag is used to define emphasized text.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `charset` attribute specify in the `<meta>` tag?",
        "options": [
            {"label": "Character encoding of the document", "is_correct": true},
            {"label": "Character set used for typography", "is_correct": false},
            {"label": "Character limit of the document", "is_correct": false}
        ],
        "answer_description": "The `charset` attribute specifies the character encoding of the document in the `<meta>` tag.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to define the source URL of a script in HTML?",
        "options": [
            {"label": "`src`", "is_correct": true},
            {"label": "`href`", "is_correct": false},
            {"label": "`link`", "is_correct": false}
        ],
        "answer_description": "`src` attribute is used to define the source URL of a script in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `lang` attribute in HTML?",
        "options": [
            {"label": "Specifies the language of the document", "is_correct": true},
            {"label": "Defines the layout direction of the document", "is_correct": false},
            {"label": "Determines the background color of the document", "is_correct": false}
        ],
        "answer_description": "The `lang` attribute specifies the language of the document in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define a subscripted text?",
        "options": [
            {"label": "`<sub>`", "is_correct": true},
            {"label": "`<sup>`", "is_correct": false},
            {"label": "`<subscript>`", "is_correct": false}
        ],
        "answer_description": "`<sub>` tag is used to define a subscripted text.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `target` attribute specify in an anchor tag?",
        "options": [
            {"label": "Specifies where to open the linked document", "is_correct": true},
            {"label": "Defines the style of the link", "is_correct": false},
            {
                "label": "Specifies the relationship between the current document and the linked document",
                "is_correct": false
            }
        ],
        "answer_description": "The `target` attribute specifies where to open the linked document in an anchor tag.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define an abbreviation in HTML?",
        "options": [
            {"label": "`<abbr>`", "is_correct": true},
            {"label": "`<acronym>`", "is_correct": false},
            {"label": "`<abbrv>`", "is_correct": false}
        ],
        "answer_description": "`<abbr>` tag is used to define an abbreviation in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `async` attribute do in a script tag?",
        "options": [
            {"label": "Specifies that the script should be executed asynchronously", "is_correct": true},
            {"label": "Specifies that the script should be executed synchronously", "is_correct": false},
            {"label": "Defines the script as an external resource", "is_correct": false}
        ],
        "answer_description": "The `async` attribute specifies that the script should be executed asynchronously in a script tag.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to create a horizontal rule in HTML?",
        "options": [
            {"label": "`<hr>`", "is_correct": true},
            {"label": "`<line>`", "is_correct": false},
            {"label": "`<rule>`", "is_correct": false}
        ],
        "answer_description": "`<hr>` tag is used to create a horizontal rule in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `content` attribute in the `<meta>` tag?",
        "options": [
            {"label": "Specifies the value of the metadata", "is_correct": true},
            {"label": "Defines the character encoding of the document", "is_correct": false},
            {"label": "Determines the language of the document", "is_correct": false}
        ],
        "answer_description": "The `content` attribute specifies the value of the metadata in the `<meta>` tag.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `placeholder` attribute do in an input field?",
        "options": [
            {"label": "Provides a hint to the user about the expected value", "is_correct": true},
            {"label": "Specifies the default value for the input", "is_correct": false},
            {"label": "Defines the position of the input field", "is_correct": false}
        ],
        "answer_description": "The `placeholder` attribute provides a hint to the user about the expected value in an input field.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to set the maximum value for an input field?",
        "options": [
            {"label": "`max`", "is_correct": true},
            {"label": "`maximum`", "is_correct": false},
            {"label": "`value-max`", "is_correct": false}
        ],
        "answer_description": "`max` attribute is used to set the maximum value for an input field.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `autocomplete` attribute do in an input field?",
        "options": [
            {"label": "Specifies whether the input field should have autocomplete functionality", "is_correct": true},
            {"label": "Provides suggestions for the input field based on previous inputs", "is_correct": false},
            {"label": "Automatically fills in the input field with a predefined value", "is_correct": false}
        ],
        "answer_description": "The `autocomplete` attribute specifies whether the input field should have autocomplete functionality in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the target window or frame for a hyperlink?",
        "options": [
            {"label": "`target`", "is_correct": true},
            {"label": "`href`", "is_correct": false},
            {"label": "`frame`", "is_correct": false}
        ],
        "answer_description": "`target` attribute is used to specify the target window or frame for a hyperlink.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to group related form elements in HTML?",
        "options": [
            {"label": "`<fieldset>`", "is_correct": true},
            {"label": "`<group>`", "is_correct": false},
            {"label": "`<div>`", "is_correct": false}
        ],
        "answer_description": "`<fieldset>` tag is used to group related form elements in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `required` attribute do in an input field?",
        "options": [
            {
                "label": "Specifies that the input field must be filled out before submitting the form",
                "is_correct": true
            },
            {"label": "Makes the input field optional", "is_correct": false},
            {"label": "Restricts the input field to numeric values only", "is_correct": false}
        ],
        "answer_description": "The `required` attribute specifies that the input field must be filled out before submitting the form in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define a dropdown list in HTML?",
        "options": [
            {"label": "`<select>`", "is_correct": true},
            {"label": "`<dropdown>`", "is_correct": false},
            {"label": "`<list>`", "is_correct": false}
        ],
        "answer_description": "`<select>` tag is used to define a dropdown list in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `multiple` attribute do in a dropdown list?",
        "options": [
            {"label": "Allows the selection of multiple options", "is_correct": true},
            {"label": "Limits the selection to a single option", "is_correct": false},
            {"label": "Displays all options simultaneously", "is_correct": false}
        ],
        "answer_description": "The `multiple` attribute allows the selection of multiple options in a dropdown list in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to specify the number of visible options in a dropdown list?",
        "options": [
            {"label": "`size`", "is_correct": true},
            {"label": "`visible`", "is_correct": false},
            {"label": "`length`", "is_correct": false}
        ],
        "answer_description": "`size` attribute is used to specify the number of visible options in a dropdown list in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define a progress bar in HTML5?",
        "options": [
            {"label": "`<progress>`", "is_correct": true},
            {"label": "`<meter>`", "is_correct": false},
            {"label": "`<status>`", "is_correct": false}
        ],
        "answer_description": "`<progress>` tag is used to define a progress bar in HTML5.",
        "difficulty": "medium",
        "tags": ["HTML5"]
    },
    {
        "question": "What does the `pattern` attribute do in an input field?",
        "options": [
            {"label": "Specifies a regular expression pattern that the input's value must match", "is_correct": true},
            {"label": "Sets a predefined pattern for the input value", "is_correct": false},
            {"label": "Restricts the input to numeric values only", "is_correct": false}
        ],
        "answer_description": "The `pattern` attribute specifies a regular expression pattern that the input's value must match in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to set the initial value of a range input?",
        "options": [
            {"label": "`value`", "is_correct": true},
            {"label": "`initial`", "is_correct": false},
            {"label": "`start`", "is_correct": false}
        ],
        "answer_description": "`value` attribute is used to set the initial value of a range input in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `download` attribute do in an anchor tag?",
        "options": [
            {
                "label": "Specifies that the target will be downloaded when a user clicks on the hyperlink",
                "is_correct": true
            },
            {"label": "Defines the name of the downloaded file", "is_correct": false},
            {"label": "Initiates an automatic download of the target", "is_correct": false}
        ],
        "answer_description": "The `download` attribute specifies that the target will be downloaded when a user clicks on the hyperlink in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define a header for a group of rows or columns in a table?",
        "options": [
            {"label": "`<th>`", "is_correct": true},
            {"label": "`<thead>`", "is_correct": false},
            {"label": "`<header>`", "is_correct": false}
        ],
        "answer_description": "`<th>` tag is used to define a header for a group of rows or columns in a table.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `scope` attribute do in a `<th>` tag?",
        "options": [
            {
                "label": "Specifies the set of data cells for which the current header cell provides header information",
                "is_correct": true
            },
            {"label": "Defines the size of the header cell", "is_correct": false},
            {"label": "Determines the alignment of the header text", "is_correct": false}
        ],
        "answer_description": "The `scope` attribute specifies the set of data cells for which the current header cell provides header information in a `<th>` tag.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to define a footer for a group of rows or columns in a table?",
        "options": [
            {"label": "`<tfoot>`", "is_correct": true},
            {"label": "`<footer>`", "is_correct": false},
            {"label": "`<bottom>`", "is_correct": false}
        ],
        "answer_description": "`<tfoot>` tag is used to define a footer for a group of rows or columns in a table.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `colspan` attribute do in a table cell?",
        "options": [
            {"label": "Specifies the number of columns a cell should span", "is_correct": true},
            {"label": "Determines the width of the cell", "is_correct": false},
            {"label": "Defines the alignment of the cell content", "is_correct": false}
        ],
        "answer_description": "The `colspan` attribute specifies the number of columns a cell should span in a table cell.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which attribute is used to provide a caption for a table in HTML?",
        "options": [
            {"label": "`<caption>`", "is_correct": true},
            {"label": "`caption`", "is_correct": false},
            {"label": "`label`", "is_correct": false}
        ],
        "answer_description": "`<caption>` attribute is used to provide a caption for a table in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `col` element define within a `<colgroup>` tag?",
        "options": [
            {"label": "Defines a column in a table", "is_correct": true},
            {"label": "Groups multiple columns together", "is_correct": false},
            {"label": "Provides styling for a column", "is_correct": false}
        ],
        "answer_description": "The `col` element defines a column in a table within a `<colgroup>` tag in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "Which tag is used to display computer code in HTML?",
        "options": [
            {"label": "`<code>`", "is_correct": true},
            {"label": "`<pre>`", "is_correct": false},
            {"label": "`<var>`", "is_correct": false}
        ],
        "answer_description": "`<code>` tag is used to display computer code in HTML.",
        "difficulty": "medium",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `alt` attribute in the `<img>` tag?",
        "options": [
            {
                "label": "To provide alternative text for screen readers and when the image cannot be displayed",
                "is_correct": true
            },
            {"label": "To specify the alignment of the image", "is_correct": false},
            {"label": "To define the alternative image URL", "is_correct": false}
        ],
        "answer_description": "The `alt` attribute in the `<img>` tag is used to provide alternative text for screen readers and when the image cannot be displayed.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `role` attribute in HTML?",
        "options": [
            {"label": "To define the function of an element for accessibility purposes", "is_correct": true},
            {
                "label": "To specify the relationship between the current document and an external resource",
                "is_correct": false
            },
            {"label": "To declare the primary language of the document", "is_correct": false}
        ],
        "answer_description": "The `role` attribute in HTML is used to define the function of an element for accessibility purposes.",
        "difficulty": "hard",
        "tags": ["HTML", "Accessibility"]
    },
    {
        "question": "What does the `scope` attribute in the `<th>` tag specify?",
        "options": [
            {"label": "Defines the set of columns the current header cell applies to", "is_correct": true},
            {"label": "Specifies the alignment of the content within a table header cell", "is_correct": false},
            {"label": "Determines the visibility of the table header cell", "is_correct": false}
        ],
        "answer_description": "The `scope` attribute in the `<th>` tag specifies the set of columns the current header cell applies to.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `download` attribute in the `<a>` tag?",
        "options": [
            {
                "label": "Specifies that the target will be downloaded when a user clicks on the hyperlink",
                "is_correct": true
            },
            {"label": "Defines a default filename for the downloaded file", "is_correct": false},
            {"label": "Sets the location of the file to be downloaded", "is_correct": false}
        ],
        "answer_description": "The `download` attribute in the `<a>` tag specifies that the target will be downloaded when a user clicks on the hyperlink.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `defer` attribute in the `<script>` tag?",
        "options": [
            {
                "label": "Delays the execution of the script until the HTML document has been fully parsed",
                "is_correct": true
            },
            {"label": "Specifies the location of an external script file", "is_correct": false},
            {"label": "Defines whether the script should be executed asynchronously", "is_correct": false}
        ],
        "answer_description": "The `defer` attribute in the `<script>` tag delays the execution of the script until the HTML document has been fully parsed.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `translate` attribute in HTML?",
        "options": [
            {"label": "Indicates whether the element's content should be translated", "is_correct": true},
            {"label": "Specifies the language of the content within the element", "is_correct": false},
            {"label": "Determines the visibility of the element", "is_correct": false}
        ],
        "answer_description": "The `translate` attribute in HTML indicates whether the element's content should be translated.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `accesskey` attribute in HTML?",
        "options": [
            {"label": "Specifies a shortcut key to activate or focus an element", "is_correct": true},
            {"label": "Defines the access level required to interact with an element", "is_correct": false},
            {"label": "Determines the order in which elements are accessed by keyboard navigation", "is_correct": false}
        ],
        "answer_description": "The `accesskey` attribute in HTML specifies a shortcut key to activate or focus an element.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `hidden` attribute in HTML?",
        "options": [
            {"label": "Specifies that an element is not yet, or is no longer, relevant", "is_correct": true},
            {"label": "Hides the element from the document flow without affecting its visibility", "is_correct": false},
            {"label": "Prevents an element from being selectable or editable by the user", "is_correct": false}
        ],
        "answer_description": "The `hidden` attribute in HTML specifies that an element is not yet, or is no longer, relevant.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `async` attribute in the `<script>` tag do?",
        "options": [
            {"label": "Specifies that the script should be executed asynchronously", "is_correct": true},
            {
                "label": "Delays the execution of the script until the HTML document has been fully parsed",
                "is_correct": false
            },
            {"label": "Loads the script from an external file", "is_correct": false}
        ],
        "answer_description": "The `async` attribute in the `<script>` tag specifies that the script should be executed asynchronously.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `sandbox` attribute in the `<iframe>` tag?",
        "options": [
            {"label": "Restricts the content of the iframe to prevent malicious actions", "is_correct": true},
            {"label": "Specifies the URL of the content to be displayed in the iframe", "is_correct": false},
            {"label": "Defines the dimensions of the iframe", "is_correct": false}
        ],
        "answer_description": "The `sandbox` attribute in the `<iframe>` tag restricts the content of the iframe to prevent malicious actions.",
        "difficulty": "hard",
        "tags": ["HTML", "Security"]
    },
    {
        "question": "What is the purpose of the `contenteditable` attribute in HTML?",
        "options": [
            {"label": "Specifies whether the content of an element is editable by the user", "is_correct": true},
            {"label": "Defines the character encoding of the document", "is_correct": false},
            {"label": "Specifies the text direction of the element", "is_correct": false}
        ],
        "answer_description": "The `contenteditable` attribute in HTML specifies whether the content of an element is editable by the user.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `rel` attribute in the `<a>` tag define?",
        "options": [
            {
                "label": "Defines the relationship between the current document and the linked document",
                "is_correct": true
            },
            {"label": "Specifies the location of the linked document", "is_correct": false},
            {"label": "Determines the type of content in the linked document", "is_correct": false}
        ],
        "answer_description": "The `rel` attribute in the `<a>` tag defines the relationship between the current document and the linked document.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `datetime` attribute in the `<time>` tag?",
        "options": [
            {"label": "Specifies the date and time associated with the element", "is_correct": true},
            {"label": "Defines the duration of time in the element", "is_correct": false},
            {"label": "Determines the time zone of the element", "is_correct": false}
        ],
        "answer_description": "The `datetime` attribute in the `<time>` tag specifies the date and time associated with the element.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `download` attribute in the `<a>` tag do when its value is an empty string?",
        "options": [
            {"label": "Downloads the resource with the same filename as the linked document", "is_correct": true},
            {"label": "Prevents the linked document from being downloaded", "is_correct": false},
            {"label": "Prompts the user to specify a filename for the downloaded resource", "is_correct": false}
        ],
        "answer_description": "When the `download` attribute in the `<a>` tag has an empty string as its value, it downloads the resource with the same filename as the linked document.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `autofocus` attribute in HTML?",
        "options": [
            {"label": "Automatically focuses on the specified element when the page loads", "is_correct": true},
            {"label": "Defines the default focus order of elements on the page", "is_correct": false},
            {"label": "Specifies the automatic scrolling behavior of the page", "is_correct": false}
        ],
        "answer_description": "The `autofocus` attribute in HTML automatically focuses on the specified element when the page loads.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `form` attribute in the `<button>` tag?",
        "options": [
            {"label": "Associates the button with a form element", "is_correct": true},
            {"label": "Specifies the action to be performed when the button is clicked", "is_correct": false},
            {"label": "Defines the appearance of the button", "is_correct": false}
        ],
        "answer_description": "The `form` attribute in the `<button>` tag associates the button with a form element.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `nonce` attribute in HTML?",
        "options": [
            {
                "label": "Specifies a cryptographic nonce that can be used by the server to validate a submitted form",
                "is_correct": true
            },
            {"label": "Determines the permissions required to access a resource", "is_correct": false},
            {
                "label": "Defines the number of times a resource can be accessed within a certain time frame",
                "is_correct": false
            }
        ],
        "answer_description": "The `nonce` attribute in HTML specifies a cryptographic nonce that can be used by the server to validate a submitted form.",
        "difficulty": "hard",
        "tags": ["HTML", "Security"]
    },
    {
        "question": "What is the purpose of the `high` and `low` attributes in the `<meter>` tag?",
        "options": [
            {"label": "Specifies the upper and lower bounds of the range represented by the meter", "is_correct": true},
            {"label": "Defines the highest and lowest values displayed by the meter", "is_correct": false},
            {"label": "Determines the color gradient used to fill the meter", "is_correct": false}
        ],
        "answer_description": "The `high` and `low` attributes in the `<meter>` tag specify the upper and lower bounds of the range represented by the meter.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `scoped` attribute in the `<style>` tag?",
        "options": [
            {
                "label": "Specifies that the styles defined within the `<style>` tag only apply to the parent element and its children",
                "is_correct": true
            },
            {
                "label": "Defines the priority level of the styles declared within the `<style>` tag",
                "is_correct": false
            },
            {"label": "Determines the rendering engine used to apply the styles", "is_correct": false}
        ],
        "answer_description": "The `scoped` attribute in the `<style>` tag specifies that the styles defined within the tag only apply to the parent element and its children.",
        "difficulty": "hard",
        "tags": ["HTML", "CSS"]
    },
    {
        "question": "What is the purpose of the `required` attribute in HTML?",
        "options": [
            {"label": "Specifies that an input field must be filled out before submitting a form", "is_correct": true},
            {"label": "Defines the default value for an input field", "is_correct": false},
            {
                "label": "Determines the maximum length of text that can be entered into an input field",
                "is_correct": false
            }
        ],
        "answer_description": "The `required` attribute in HTML specifies that an input field must be filled out before submitting a form.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `contenteditable` attribute in HTML?",
        "options": [
            {"label": "Specifies whether the content of an element is editable by the user", "is_correct": true},
            {"label": "Defines the character encoding of the document", "is_correct": false},
            {"label": "Specifies the text direction of the element", "is_correct": false}
        ],
        "answer_description": "The `contenteditable` attribute in HTML specifies whether the content of an element is editable by the user.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `rel` attribute in the `<a>` tag define?",
        "options": [
            {
                "label": "Defines the relationship between the current document and the linked document",
                "is_correct": true
            },
            {"label": "Specifies the location of the linked document", "is_correct": false},
            {"label": "Determines the type of content in the linked document", "is_correct": false}
        ],
        "answer_description": "The `rel` attribute in the `<a>` tag defines the relationship between the current document and the linked document.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `datetime` attribute in the `<time>` tag?",
        "options": [
            {"label": "Specifies the date and time associated with the element", "is_correct": true},
            {"label": "Defines the duration of time in the element", "is_correct": false},
            {"label": "Determines the time zone of the element", "is_correct": false}
        ],
        "answer_description": "The `datetime` attribute in the `<time>` tag specifies the date and time associated with the element.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What does the `download` attribute in the `<a>` tag do when its value is an empty string?",
        "options": [
            {"label": "Downloads the resource with the same filename as the linked document", "is_correct": true},
            {"label": "Prevents the linked document from being downloaded", "is_correct": false},
            {"label": "Prompts the user to specify a filename for the downloaded resource", "is_correct": false}
        ],
        "answer_description": "When the `download` attribute in the `<a>` tag has an empty string as its value, it downloads the resource with the same filename as the linked document.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `autofocus` attribute in HTML?",
        "options": [
            {"label": "Automatically focuses on the specified element when the page loads", "is_correct": true},
            {"label": "Defines the default focus order of elements on the page", "is_correct": false},
            {"label": "Specifies the automatic scrolling behavior of the page", "is_correct": false}
        ],
        "answer_description": "The `autofocus` attribute in HTML automatically focuses on the specified element when the page loads.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `form` attribute in the `<button>` tag?",
        "options": [
            {"label": "Associates the button with a form element", "is_correct": true},
            {"label": "Specifies the action to be performed when the button is clicked", "is_correct": false},
            {"label": "Defines the appearance of the button", "is_correct": false}
        ],
        "answer_description": "The `form` attribute in the `<button>` tag associates the button with a form element.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `nonce` attribute in HTML?",
        "options": [
            {
                "label": "Specifies a cryptographic nonce that can be used by the server to validate a submitted form",
                "is_correct": true
            },
            {"label": "Determines the permissions required to access a resource", "is_correct": false},
            {
                "label": "Defines the number of times a resource can be accessed within a certain time frame",
                "is_correct": false
            }
        ],
        "answer_description": "The `nonce` attribute in HTML specifies a cryptographic nonce that can be used by the server to validate a submitted form.",
        "difficulty": "hard",
        "tags": ["HTML", "Security"]
    },
    {
        "question": "What is the purpose of the `high` and `low` attributes in the `<meter>` tag?",
        "options": [
            {"label": "Specifies the upper and lower bounds of the range represented by the meter", "is_correct": true},
            {"label": "Defines the highest and lowest values displayed by the meter", "is_correct": false},
            {"label": "Determines the color gradient used to fill the meter", "is_correct": false}
        ],
        "answer_description": "The `high` and `low` attributes in the `<meter>` tag specify the upper and lower bounds of the range represented by the meter.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "What is the purpose of the `scoped` attribute in the `<style>` tag?",
        "options": [
            {
                "label": "Specifies that the styles defined within the `<style>` tag only apply to the parent element and its children",
                "is_correct": true
            },
            {
                "label": "Defines the priority level of the styles declared within the `<style>` tag",
                "is_correct": false
            },
            {"label": "Determines the rendering engine used to apply the styles", "is_correct": false}
        ],
        "answer_description": "The `scoped` attribute in the `<style>` tag specifies that the styles defined within the tag only apply to the parent element and its children.",
        "difficulty": "hard",
        "tags": ["HTML", "CSS"]
    },
    {
        "question": "What is the purpose of the `required` attribute in HTML?",
        "options": [
            {"label": "Specifies that an input field must be filled out before submitting a form", "is_correct": true},
            {"label": "Defines the default value for an input field", "is_correct": false},
            {
                "label": "Determines the maximum length of text that can be entered into an input field",
                "is_correct": false
            }
        ],
        "answer_description": "The `required` attribute in HTML specifies that an input field must be filled out before submitting a form.",
        "difficulty": "hard",
        "tags": ["HTML"]
    },
    {
        "question": "How do you select an element with id 'example' in CSS?",
        "options": [
            {
                "label": "`#example`",
                "is_correct": true
            },
            {
                "label": "`.example`",
                "is_correct": false
            },
            {
                "label": "`example`",
                "is_correct": false
            }
        ],
        "answer_description": "In CSS, you use the hash (#) symbol followed by the id name to select an element by its id.",
        "difficulty": "easy",
        "tags": ["CSS", "HTML", "Web Development"]
    },
    {
        "question": "How do you change the text color of an element to red in CSS?",
        "options": [
            {
                "label": "`color: red;`",
                "is_correct": true
            },
            {
                "label": "`text-color: red;`",
                "is_correct": false
            },
            {
                "label": "`font-color: red;`",
                "is_correct": false
            }
        ],
        "answer_description": "To change the text color of an element in CSS, you use the 'color' property followed by the desired color value.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which property is used to change the font size of an element in CSS?",
        "options": [
            {
                "label": "`font-size`",
                "is_correct": true
            },
            {
                "label": "`text-size`",
                "is_correct": false
            },
            {
                "label": "`size`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'font-size' property is used to change the font size of an element in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you make text bold in CSS?",
        "options": [
            {
                "label": "`font-weight: bold;`",
                "is_correct": true
            },
            {
                "label": "`bold: true;`",
                "is_correct": false
            },
            {
                "label": "`text-style: bold;`",
                "is_correct": false
            }
        ],
        "answer_description": "To make text bold in CSS, you use the 'font-weight' property with a value of 'bold'.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you center an element horizontally in CSS?",
        "options": [
            {
                "label": "`margin: 0 auto;`",
                "is_correct": true
            },
            {
                "label": "`align: center;`",
                "is_correct": false
            },
            {
                "label": "`center: true;`",
                "is_correct": false
            }
        ],
        "answer_description": "To center an element horizontally in CSS, you can set the left and right margins to 'auto' and the element will be centered within its containing element.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you include comments in CSS?",
        "options": [
            {
                "label": "`/* This is a comment */`",
                "is_correct": true
            },
            {
                "label": "`// This is a comment //`",
                "is_correct": false
            },
            {
                "label": "`<!-- This is a comment -->`",
                "is_correct": false
            }
        ],
        "answer_description": "In CSS, comments are enclosed within /* and */.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to change the background color of an element?",
        "options": [
            {
                "label": "`background-color`",
                "is_correct": true
            },
            {
                "label": "`color`",
                "is_correct": false
            },
            {
                "label": "`bgcolor`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'background-color' property is used to change the background color of an element in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to set the text alignment of an element?",
        "options": [
            {
                "label": "`text-align`",
                "is_correct": true
            },
            {
                "label": "`align-text`",
                "is_correct": false
            },
            {
                "label": "`text-style`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'text-align' property is used to set the text alignment of an element in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you add a border to an element in CSS?",
        "options": [
            {
                "label": "`border: 1px solid black;`",
                "is_correct": true
            },
            {
                "label": "`border-style: solid; border-width: 1px; border-color: black;`",
                "is_correct": false
            },
            {
                "label": "`border-color: black; border-width: 1px; border-style: solid;`",
                "is_correct": false
            }
        ],
        "answer_description": "To add a border to an element in CSS, you can use the 'border' shorthand property with values for width, style, and color.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to control the space between lines of text?",
        "options": [
            {
                "label": "`line-height`",
                "is_correct": true
            },
            {
                "label": "`text-spacing`",
                "is_correct": false
            },
            {
                "label": "`line-spacing`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'line-height' property is used to control the space between lines of text in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to change the font family of an element?",
        "options": [
            {
                "label": "`font-family`",
                "is_correct": true
            },
            {
                "label": "`text-font`",
                "is_correct": false
            },
            {
                "label": "`font-style`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'font-family' property is used to change the font family of an element in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you make text italicized in CSS?",
        "options": [
            {
                "label": "`font-style: italic;`",
                "is_correct": true
            },
            {
                "label": "`italic: true;`",
                "is_correct": false
            },
            {
                "label": "`text-style: italic;`",
                "is_correct": false
            }
        ],
        "answer_description": "To make text italicized in CSS, you use the 'font-style' property with a value of 'italic'.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you hide an element in CSS?",
        "options": [
            {
                "label": "`display: none;`",
                "is_correct": true
            },
            {
                "label": "`visibility: hidden;`",
                "is_correct": false
            },
            {
                "label": "`hidden: true;`",
                "is_correct": false
            }
        ],
        "answer_description": "To hide an element in CSS, you use the 'display' property with a value of 'none'.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you add padding to all sides of an element in CSS?",
        "options": [
            {
                "label": "`padding: 10px;`",
                "is_correct": true
            },
            {
                "label": "`padding-top: 10px; padding-right: 10px; padding-bottom: 10px; padding-left: 10px;`",
                "is_correct": false
            },
            {
                "label": "`padding-horizontal: 10px; padding-vertical: 10px;`",
                "is_correct": false
            }
        ],
        "answer_description": "To add padding to all sides of an element in CSS, you use the 'padding' shorthand property with a single value for all sides.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you make an image a background image in CSS?",
        "options": [
            {
                "label": "`background-image: url('image.jpg');`",
                "is_correct": true
            },
            {
                "label": "`background: url('image.jpg');`",
                "is_correct": false
            },
            {
                "label": "`image: background('image.jpg');`",
                "is_correct": false
            }
        ],
        "answer_description": "To make an image a background image in CSS, you use the 'background-image' property with the URL of the image.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you change the opacity of an element in CSS?",
        "options": [
            {
                "label": "`opacity: 0.5;`",
                "is_correct": true
            },
            {
                "label": "`transparent: 0.5;`",
                "is_correct": false
            },
            {
                "label": "`visibility: 0.5;`",
                "is_correct": false
            }
        ],
        "answer_description": "To change the opacity of an element in CSS, you use the 'opacity' property with a value between 0 and 1.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you specify a class selector in CSS?",
        "options": [
            {
                "label": "`.classname`",
                "is_correct": true
            },
            {
                "label": "`#classname`",
                "is_correct": false
            },
            {
                "label": "`classname`",
                "is_correct": false
            }
        ],
        "answer_description": "In CSS, you specify a class selector by prefixing the class name with a period (.)",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you specify an element with a specific class in CSS?",
        "options": [
            {
                "label": "`element.classname`",
                "is_correct": true
            },
            {
                "label": "`#classname`",
                "is_correct": false
            },
            {
                "label": "`.classname`",
                "is_correct": false
            }
        ],
        "answer_description": "In CSS, you specify an element with a specific class by combining the element name with the class name, separated by a dot (.).",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to make text uppercase?",
        "options": [
            {
                "label": "`text-transform: uppercase;`",
                "is_correct": true
            },
            {
                "label": "`text-style: uppercase;`",
                "is_correct": false
            },
            {
                "label": "`uppercase: true;`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'text-transform' property with a value of 'uppercase' is used to make text uppercase in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to make text lowercase?",
        "options": [
            {
                "label": "`text-transform: lowercase;`",
                "is_correct": true
            },
            {
                "label": "`text-style: lowercase;`",
                "is_correct": false
            },
            {
                "label": "`lowercase: true;`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'text-transform' property with a value of 'lowercase' is used to make text lowercase in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to make text capitalize each word?",
        "options": [
            {
                "label": "`text-transform: capitalize;`",
                "is_correct": true
            },
            {
                "label": "`text-style: capitalize;`",
                "is_correct": false
            },
            {
                "label": "`capitalize: true;`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'text-transform' property with a value of 'capitalize' is used to capitalize each word in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to make text underlined?",
        "options": [
            {
                "label": "`text-decoration: underline;`",
                "is_correct": true
            },
            {
                "label": "`underline: true;`",
                "is_correct": false
            },
            {
                "label": "`text-style: underline;`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'text-decoration' property with a value of 'underline' is used to make text underlined in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you specify multiple classes for an element in CSS?",
        "options": [
            {
                "label": "`class=\"class1 class2\"`",
                "is_correct": true
            },
            {
                "label": "`class=\"class1, class2\"`",
                "is_correct": false
            },
            {
                "label": "`class=\"class1+class2\"`",
                "is_correct": false
            }
        ],
        "answer_description": "To specify multiple classes for an element in HTML, you separate the class names with spaces.",
        "difficulty": "easy",
        "tags": ["CSS", "HTML", "Web Development"]
    },
    {
        "question": "Which CSS property is used to add a shadow effect to an element?",
        "options": [
            {
                "label": "`box-shadow`",
                "is_correct": true
            },
            {
                "label": "`shadow-effect`",
                "is_correct": false
            },
            {
                "label": "`text-shadow`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'box-shadow' property is used to add a shadow effect to an element in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you make a text element not wrap to the next line in CSS?",
        "options": [
            {
                "label": "`white-space: nowrap;`",
                "is_correct": true
            },
            {
                "label": "`text-wrap: none;`",
                "is_correct": false
            },
            {
                "label": "`no-wrap: true;`",
                "is_correct": false
            }
        ],
        "answer_description": "To make a text element not wrap to the next line in CSS, you use the 'white-space' property with a value of 'nowrap'.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you specify a descendant selector in CSS?",
        "options": [
            {
                "label": "`parent descendant`",
                "is_correct": true
            },
            {
                "label": "`descendant > parent`",
                "is_correct": false
            },
            {
                "label": "`descendant parent`",
                "is_correct": false
            }
        ],
        "answer_description": "In CSS, you specify a descendant selector by listing the ancestor followed by a space and then the descendant.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you specify a direct child selector in CSS?",
        "options": [
            {
                "label": "`parent > child`",
                "is_correct": true
            },
            {
                "label": "`child parent`",
                "is_correct": false
            },
            {
                "label": "`parent child`",
                "is_correct": false
            }
        ],
        "answer_description": "In CSS, you specify a direct child selector by listing the parent followed by a greater-than sign (>) and then the child.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to control the order of elements?",
        "options": [
            {
                "label": "`order`",
                "is_correct": true
            },
            {
                "label": "`z-index`",
                "is_correct": false
            },
            {
                "label": "`position`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'order' property is used with flexbox to control the order of flex items.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Flexbox"]
    },
    {
        "question": "How do you create a CSS class named 'button'?",
        "options": [
            {
                "label": "`.button {}`",
                "is_correct": true
            },
            {
                "label": "`button {}`",
                "is_correct": false
            },
            {
                "label": "`#button {}`",
                "is_correct": false
            }
        ],
        "answer_description": "To create a CSS class named 'button', you prefix the class name with a period (.)",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to control the space between columns in a multi-column layout?",
        "options": [
            {
                "label": "`column-gap`",
                "is_correct": true
            },
            {
                "label": "`gap`",
                "is_correct": false
            },
            {
                "label": "`column-space`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'column-gap' property is used to control the space between columns in a multi-column layout.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Layout"]
    },
    {
        "question": "How do you specify the direction of flex items in a flex container?",
        "options": [
            {
                "label": "`flex-direction`",
                "is_correct": true
            },
            {
                "label": "`flex-flow`",
                "is_correct": false
            },
            {
                "label": "`flex-wrap`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'flex-direction' property is used to specify the direction of flex items in a flex container.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Flexbox"]
    },
    {
        "question": "How do you create a CSS id named 'header'?",
        "options": [
            {
                "label": "`#header {}`",
                "is_correct": true
            },
            {
                "label": "`header {}`",
                "is_correct": false
            },
            {
                "label": "`.header {}`",
                "is_correct": false
            }
        ],
        "answer_description": "To create a CSS id named 'header', you prefix the id name with a hash (#)",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you create a CSS rule that applies only when printing the page?",
        "options": [
            {
                "label": "`@media print {}`",
                "is_correct": true
            },
            {
                "label": "`@media screen {}`",
                "is_correct": false
            },
            {
                "label": "`@media print-only {}`",
                "is_correct": false
            }
        ],
        "answer_description": "To create a CSS rule that applies only when printing the page, you use the '@media print' rule.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you align text vertically in CSS?",
        "options": [
            {
                "label": "`vertical-align`",
                "is_correct": true
            },
            {
                "label": "`text-align`",
                "is_correct": false
            },
            {
                "label": "`align-items`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'vertical-align' property is used to align text vertically within its container.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you create a CSS animation?",
        "options": [
            {
                "label": "`@keyframes`",
                "is_correct": true
            },
            {
                "label": "`@animation`",
                "is_correct": false
            },
            {
                "label": "`@animate`",
                "is_correct": false
            }
        ],
        "answer_description": "To create a CSS animation, you use the '@keyframes' rule.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to specify the size of an element relative to its parent?",
        "options": [
            {
                "label": "`width`",
                "is_correct": true
            },
            {
                "label": "`height`",
                "is_correct": false
            },
            {
                "label": "`size`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'width' property is used to specify the size of an element relative to its parent in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to specify the height of an element?",
        "options": [
            {
                "label": "`height`",
                "is_correct": true
            },
            {
                "label": "`size`",
                "is_correct": false
            },
            {
                "label": "`width`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'height' property is used to specify the height of an element in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you center an image horizontally in CSS?",
        "options": [
            {
                "label": "`display: block; margin: 0 auto;`",
                "is_correct": true
            },
            {
                "label": "`margin: auto;`",
                "is_correct": false
            },
            {
                "label": "`text-align: center;`",
                "is_correct": false
            }
        ],
        "answer_description": "To center an image horizontally in CSS, you set its display property to block and use auto margins.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you specify the height and width of an element in CSS?",
        "options": [
            {
                "label": "`height` and `width`",
                "is_correct": true
            },
            {
                "label": "`size`",
                "is_correct": false
            },
            {
                "label": "`dimensions`",
                "is_correct": false
            }
        ],
        "answer_description": "To specify the height and width of an element in CSS, you use the 'height' and 'width' properties.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to control the layout of an element?",
        "options": [
            {
                "label": "`display`",
                "is_correct": true
            },
            {
                "label": "`layout`",
                "is_correct": false
            },
            {
                "label": "`position`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'display' property is used to control the layout of an element in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you make a navigation bar horizontal in CSS?",
        "options": [
            {
                "label": "`display: inline-block;`",
                "is_correct": true
            },
            {
                "label": "`display: block;`",
                "is_correct": false
            },
            {
                "label": "`display: inline;`",
                "is_correct": false
            }
        ],
        "answer_description": "To make a navigation bar horizontal in CSS, you use 'display: inline-block;' on the list items.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to specify the background image of an element?",
        "options": [
            {
                "label": "`background-image`",
                "is_correct": true
            },
            {
                "label": "`background`",
                "is_correct": false
            },
            {
                "label": "`image`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'background-image' property is used to specify the background image of an element in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you create a CSS rule that applies only when the mouse is over an element?",
        "options": [
            {
                "label": "`:hover`",
                "is_correct": true
            },
            {
                "label": "`:active`",
                "is_correct": false
            },
            {
                "label": "`:focus`",
                "is_correct": false
            }
        ],
        "answer_description": "To create a CSS rule that applies only when the mouse is over an element, you use the ':hover' pseudo-class.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you specify the font size using pixels in CSS?",
        "options": [
            {
                "label": "`font-size: 16px;`",
                "is_correct": true
            },
            {
                "label": "`size: 16px;`",
                "is_correct": false
            },
            {
                "label": "`font: 16px;`",
                "is_correct": false
            }
        ],
        "answer_description": "To specify the font size using pixels in CSS, you use the 'font-size' property followed by the desired size and 'px'.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you specify the font size using em units in CSS?",
        "options": [
            {
                "label": "`font-size: 1.5em;`",
                "is_correct": true
            },
            {
                "label": "`size: 1.5em;`",
                "is_correct": false
            },
            {
                "label": "`font: 1.5em;`",
                "is_correct": false
            }
        ],
        "answer_description": "To specify the font size using em units in CSS, you use the 'font-size' property followed by the desired size and 'em'.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you specify the font size using percentages in CSS?",
        "options": [
            {
                "label": "`font-size: 150%;`",
                "is_correct": true
            },
            {
                "label": "`size: 150%;`",
                "is_correct": false
            },
            {
                "label": "`font: 150%;`",
                "is_correct": false
            }
        ],
        "answer_description": "To specify the font size using percentages in CSS, you use the 'font-size' property followed by the desired percentage value.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you specify the font size using rem units in CSS?",
        "options": [
            {
                "label": "`font-size: 1.5rem;`",
                "is_correct": true
            },
            {
                "label": "`size: 1.5rem;`",
                "is_correct": false
            },
            {
                "label": "`font: 1.5rem;`",
                "is_correct": false
            }
        ],
        "answer_description": "To specify the font size using rem units in CSS, you use the 'font-size' property followed by the desired size and 'rem'.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to specify the font weight?",
        "options": [
            {
                "label": "`font-weight`",
                "is_correct": true
            },
            {
                "label": "`weight`",
                "is_correct": false
            },
            {
                "label": "`bold`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'font-weight' property is used to specify the font weight in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you specify a background color in CSS?",
        "options": [
            {
                "label": "`background-color`",
                "is_correct": true
            },
            {
                "label": "`color`",
                "is_correct": false
            },
            {
                "label": "`bgcolor`",
                "is_correct": false
            }
        ],
        "answer_description": "To specify a background color in CSS, you use the 'background-color' property followed by the desired color value.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you specify a border color in CSS?",
        "options": [
            {
                "label": "`border-color`",
                "is_correct": true
            },
            {
                "label": "`color`",
                "is_correct": false
            },
            {
                "label": "`border`",
                "is_correct": false
            }
        ],
        "answer_description": "To specify a border color in CSS, you use the 'border-color' property followed by the desired color value.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you specify a border width in CSS?",
        "options": [
            {
                "label": "`border-width`",
                "is_correct": true
            },
            {
                "label": "`width`",
                "is_correct": false
            },
            {
                "label": "`border`",
                "is_correct": false
            }
        ],
        "answer_description": "To specify a border width in CSS, you use the 'border-width' property followed by the desired width value.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to specify the border style?",
        "options": [
            {
                "label": "`border-style`",
                "is_correct": true
            },
            {
                "label": "`style`",
                "is_correct": false
            },
            {
                "label": "`border`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'border-style' property is used to specify the border style in CSS.",
        "difficulty": "easy",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you select all paragraphs within a div element with class 'container' in CSS?",
        "options": [
            {
                "label": "`.container p`",
                "is_correct": true
            },
            {
                "label": "`div.container p`",
                "is_correct": false
            },
            {
                "label": "`#container p`",
                "is_correct": false
            }
        ],
        "answer_description": "To select all paragraphs within a div element with class 'container' in CSS, you use the class selector followed by the descendant selector for paragraphs.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Selectors"]
    },
    {
        "question": "How do you create a fixed navigation bar at the top of the page in CSS?",
        "options": [
            {
                "label": "`position: fixed; top: 0; left: 0; width: 100%;`",
                "is_correct": true
            },
            {
                "label": "`position: absolute; top: 0; left: 0; width: 100%;`",
                "is_correct": false
            },
            {
                "label": "`position: relative; top: 0; left: 0; width: 100%;`",
                "is_correct": false
            }
        ],
        "answer_description": "To create a fixed navigation bar at the top of the page in CSS, you use the 'position: fixed;' property with 'top: 0;' to stick it to the top of the viewport.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Layout"]
    },
    {
        "question": "Which CSS property is used to add shadow effects to elements?",
        "options": [
            {
                "label": "`box-shadow`",
                "is_correct": true
            },
            {
                "label": "`shadow`",
                "is_correct": false
            },
            {
                "label": "`text-shadow`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'box-shadow' property is used to add shadow effects to elements in CSS.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you set a background image for an element in CSS?",
        "options": [
            {
                "label": "`background-image: url('image.jpg');`",
                "is_correct": true
            },
            {
                "label": "`image: url('image.jpg');`",
                "is_correct": false
            },
            {
                "label": "`background: url('image.jpg');`",
                "is_correct": false
            }
        ],
        "answer_description": "To set a background image for an element in CSS, you use the 'background-image' property followed by the URL of the image.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you make an element's background image fixed while scrolling in CSS?",
        "options": [
            {
                "label": "`background-attachment: fixed;`",
                "is_correct": true
            },
            {
                "label": "`background-fixed: true;`",
                "is_correct": false
            },
            {
                "label": "`background-scroll: none;`",
                "is_correct": false
            }
        ],
        "answer_description": "To make an element's background image fixed while scrolling in CSS, you use the 'background-attachment: fixed;' property.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you set the opacity of an element in CSS?",
        "options": [
            {
                "label": "`opacity: 0.5;`",
                "is_correct": true
            },
            {
                "label": "`opacity: 50%;`",
                "is_correct": false
            },
            {
                "label": "`opacity: 50;`",
                "is_correct": false
            }
        ],
        "answer_description": "To set the opacity of an element in CSS, you use the 'opacity' property with a value between 0 (fully transparent) and 1 (fully opaque).",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to create rounded corners on elements?",
        "options": [
            {
                "label": "`border-radius`",
                "is_correct": true
            },
            {
                "label": "`corner-radius`",
                "is_correct": false
            },
            {
                "label": "`rounded-corners`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'border-radius' property is used to create rounded corners on elements in CSS.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you horizontally align text within an element in CSS?",
        "options": [
            {
                "label": "`text-align: center;`",
                "is_correct": true
            },
            {
                "label": "`align: center;`",
                "is_correct": false
            },
            {
                "label": "`horizontal-align: center;`",
                "is_correct": false
            }
        ],
        "answer_description": "To horizontally align text within an element in CSS, you use the 'text-align' property with a value of 'center'.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to control the space between individual characters?",
        "options": [
            {
                "label": "`letter-spacing`",
                "is_correct": true
            },
            {
                "label": "`character-spacing`",
                "is_correct": false
            },
            {
                "label": "`word-spacing`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'letter-spacing' property is used to control the space between individual characters in CSS.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you make an element invisible but still occupy space on the page in CSS?",
        "options": [
            {
                "label": "`visibility: hidden;`",
                "is_correct": true
            },
            {
                "label": "`display: none;`",
                "is_correct": false
            },
            {
                "label": "`opacity: 0;`",
                "is_correct": false
            }
        ],
        "answer_description": "To make an element invisible but still occupy space on the page in CSS, you use the 'visibility: hidden;' property.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you apply multiple CSS styles to an element using a class?",
        "options": [
            {
                "label": "`<div class='style1 style2'></div>`",
                "is_correct": true
            },
            {
                "label": "`<div class='style1, style2'></div>`",
                "is_correct": false
            },
            {
                "label": "`<div class='style1; style2'></div>`",
                "is_correct": false
            }
        ],
        "answer_description": "To apply multiple CSS styles to an element using a class, you separate the class names with spaces within the class attribute.",
        "difficulty": "medium",
        "tags": ["CSS", "HTML", "Styling"]
    },
    {
        "question": "How do you make text italic in CSS?",
        "options": [
            {
                "label": "`font-style: italic;`",
                "is_correct": true
            },
            {
                "label": "`text-style: italic;`",
                "is_correct": false
            },
            {
                "label": "`italic: true;`",
                "is_correct": false
            }
        ],
        "answer_description": "To make text italic in CSS, you use the 'font-style' property with a value of 'italic'.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which property is used to change the font family of an element in CSS?",
        "options": [
            {
                "label": "`font-family`",
                "is_correct": true
            },
            {
                "label": "`typeface`",
                "is_correct": false
            },
            {
                "label": "`font-type`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'font-family' property is used to change the font family of an element in CSS.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you remove the underline from a hyperlink in CSS?",
        "options": [
            {
                "label": "`text-decoration: none;`",
                "is_correct": true
            },
            {
                "label": "`text-decoration: underline;`",
                "is_correct": false
            },
            {
                "label": "`underline: none;`",
                "is_correct": false
            }
        ],
        "answer_description": "To remove the underline from a hyperlink in CSS, you use the 'text-decoration' property with a value of 'none'.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you change the cursor to a pointer when hovering over an element in CSS?",
        "options": [
            {
                "label": "`cursor: pointer;`",
                "is_correct": true
            },
            {
                "label": "`mouse-pointer: pointer;`",
                "is_correct": false
            },
            {
                "label": "`pointer: cursor;`",
                "is_correct": false
            }
        ],
        "answer_description": "To change the cursor to a pointer when hovering over an element in CSS, you use the 'cursor' property with a value of 'pointer'.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you make an image responsive in CSS?",
        "options": [
            {
                "label": "`max-width: 100%; height: auto;`",
                "is_correct": true
            },
            {
                "label": "`width: 100%; height: auto;`",
                "is_correct": false
            },
            {
                "label": "`width: auto; height: 100%;`",
                "is_correct": false
            }
        ],
        "answer_description": "To make an image responsive in CSS, you set the 'max-width' property to '100%' and the 'height' property to 'auto'.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you make a background image cover the entire element in CSS?",
        "options": [
            {
                "label": "`background-size: cover;`",
                "is_correct": true
            },
            {
                "label": "`background-size: contain;`",
                "is_correct": false
            },
            {
                "label": "`background-size: auto;`",
                "is_correct": false
            }
        ],
        "answer_description": "To make a background image cover the entire element in CSS, you use the 'background-size' property with a value of 'cover'.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you add padding to all sides of an element in CSS?",
        "options": [
            {
                "label": "`padding: 10px;`",
                "is_correct": true
            },
            {
                "label": "`padding: 10px 20px;`",
                "is_correct": false
            },
            {
                "label": "`padding: 10px 20px 30px;`",
                "is_correct": false
            }
        ],
        "answer_description": "To add padding to all sides of an element in CSS, you use the 'padding' property followed by the desired padding value.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to specify the amount of space between the border of the element and its content?",
        "options": [
            {
                "label": "`padding`",
                "is_correct": true
            },
            {
                "label": "`margin`",
                "is_correct": false
            },
            {
                "label": "`spacing`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'padding' property is used to specify the amount of space between the border of the element and its content in CSS.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "How do you align an element vertically within its parent container in CSS?",
        "options": [
            {
                "label": "`align-items: center;`",
                "is_correct": true
            },
            {
                "label": "`vertical-align: middle;`",
                "is_correct": false
            },
            {
                "label": "`justify-content: center;`",
                "is_correct": false
            }
        ],
        "answer_description": "To align an element vertically within its parent container in CSS, you use the 'align-items' property with a value of 'center' on the parent container.",
        "difficulty": "medium",
        "tags": ["CSS", "Web Development", "Layout"]
    },
    {
        "question": "What is the CSS property used to create space between the element's border and its content?",
        "options": [
            {
                "label": "`padding`",
                "is_correct": true
            },
            {
                "label": "`margin`",
                "is_correct": false
            },
            {
                "label": "`spacing`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'padding' property is used to create space between the element's border and its content in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to create rounded corners on an element?",
        "options": [
            {
                "label": "`border-radius`",
                "is_correct": true
            },
            {
                "label": "`corner-radius`",
                "is_correct": false
            },
            {
                "label": "`round-corner`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'border-radius' property is used to create rounded corners on an element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to control the order of elements in a flex container?",
        "options": [
            {
                "label": "`order`",
                "is_correct": true
            },
            {
                "label": "`flex-order`",
                "is_correct": false
            },
            {
                "label": "`order-index`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'order' property is used to control the order of elements in a flex container in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Flexbox"]
    },
    {
        "question": "Which CSS property is used to specify the size of a generated content, such as before or after an element?",
        "options": [
            {
                "label": "`content`",
                "is_correct": true
            },
            {
                "label": "`size`",
                "is_correct": false
            },
            {
                "label": "`text-content`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'content' property is used to specify the size of generated content in CSS, such as before or after an element.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to create a shadow effect around an element's box?",
        "options": [
            {
                "label": "`box-shadow`",
                "is_correct": true
            },
            {
                "label": "`shadow`",
                "is_correct": false
            },
            {
                "label": "`element-shadow`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'box-shadow' property is used to create a shadow effect around an element's box in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to set the minimum width of an element?",
        "options": [
            {
                "label": "`min-width`",
                "is_correct": true
            },
            {
                "label": "`width-min`",
                "is_correct": false
            },
            {
                "label": "`minimum-width`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'min-width' property is used to set the minimum width of an element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to control the appearance of an element when it is being hovered over?",
        "options": [
            {
                "label": "`:hover`",
                "is_correct": true
            },
            {
                "label": "`hover-effect`",
                "is_correct": false
            },
            {
                "label": "`hover-style`",
                "is_correct": false
            }
        ],
        "answer_description": "The ':hover' pseudo-class is used to control the appearance of an element when it is being hovered over in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to set the opacity level of an element?",
        "options": [
            {
                "label": "`opacity`",
                "is_correct": true
            },
            {
                "label": "`transparency`",
                "is_correct": false
            },
            {
                "label": "`alpha`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'opacity' property is used to set the opacity level of an element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to control the stacking order of elements?",
        "options": [
            {
                "label": "`z-index`",
                "is_correct": true
            },
            {
                "label": "`stack-order`",
                "is_correct": false
            },
            {
                "label": "`order`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'z-index' property is used to control the stacking order of elements in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to specify whether an element should be floating or not?",
        "options": [
            {
                "label": "`float`",
                "is_correct": true
            },
            {
                "label": "`position`",
                "is_correct": false
            },
            {
                "label": "`layout`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'float' property is used to specify whether an element should be floating or not in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to create a transition effect for an element?",
        "options": [
            {
                "label": "`transition`",
                "is_correct": true
            },
            {
                "label": "`animation`",
                "is_correct": false
            },
            {
                "label": "`transform`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'transition' property is used to create a transition effect for an element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to control the layout of multiple columns in a container?",
        "options": [
            {
                "label": "`column-count`",
                "is_correct": true
            },
            {
                "label": "`column-layout`",
                "is_correct": false
            },
            {
                "label": "`columns`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'column-count' property is used to control the layout of multiple columns in a container in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to create a transition effect between property changes?",
        "options": [
            {
                "label": "`transition-property`",
                "is_correct": true
            },
            {
                "label": "`transition-effect`",
                "is_correct": false
            },
            {
                "label": "`transition-style`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'transition-property' property is used to create a transition effect between property changes in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to specify the order of flexible items inside a flex container?",
        "options": [
            {
                "label": "`order`",
                "is_correct": true
            },
            {
                "label": "`flex-order`",
                "is_correct": false
            },
            {
                "label": "`flex-flow`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'order' property is used to specify the order of flexible items inside a flex container in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Flexbox"]
    },
    {
        "question": "Which CSS property is used to create an effect of elements sticking to the top of the viewport as the user scrolls down the page?",
        "options": [
            {
                "label": "`position: sticky;`",
                "is_correct": true
            },
            {
                "label": "`position: fixed;`",
                "is_correct": false
            },
            {
                "label": "`position: relative;`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'position: sticky;' property is used to create an effect of elements sticking to the top of the viewport as the user scrolls down the page in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to create an effect of rotating an element?",
        "options": [
            {
                "label": "`transform: rotate();`",
                "is_correct": true
            },
            {
                "label": "`rotate: transform();`",
                "is_correct": false
            },
            {
                "label": "`rotation: transform();`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'transform: rotate();' property is used to create an effect of rotating an element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to create an effect of scaling an element?",
        "options": [
            {
                "label": "`transform: scale();`",
                "is_correct": true
            },
            {
                "label": "`scale: transform();`",
                "is_correct": false
            },
            {
                "label": "`scaling: transform();`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'transform: scale();' property is used to create an effect of scaling an element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to create an effect of skewing an element?",
        "options": [
            {
                "label": "`transform: skew();`",
                "is_correct": true
            },
            {
                "label": "`skew: transform();`",
                "is_correct": false
            },
            {
                "label": "`skewing: transform();`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'transform: skew();' property is used to create an effect of skewing an element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to set the initial letter styling in a block of text?",
        "options": [
            {
                "label": "`initial-letter`",
                "is_correct": true
            },
            {
                "label": "`initial-character`",
                "is_correct": false
            },
            {
                "label": "`first-letter`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'initial-letter' property is used to set the initial letter styling in a block of text in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to set the display behavior of an element as a table?",
        "options": [
            {
                "label": "`display: table;`",
                "is_correct": true
            },
            {
                "label": "`display: block;`",
                "is_correct": false
            },
            {
                "label": "`display: inline;`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'display: table;' property is used to set the display behavior of an element as a table in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to specify the distance between the lines of text in a block element?",
        "options": [
            {
                "label": "`line-height`",
                "is_correct": true
            },
            {
                "label": "`spacing`",
                "is_correct": false
            },
            {
                "label": "`line-spacing`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'line-height' property is used to specify the distance between the lines of text in a block element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to create an effect of rotating an element around a specified point?",
        "options": [
            {
                "label": "`transform-origin`",
                "is_correct": true
            },
            {
                "label": "`rotation-origin`",
                "is_correct": false
            },
            {
                "label": "`origin-transform`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'transform-origin' property is used to create an effect of rotating an element around a specified point in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to specify the type of cursor to be displayed when hovering over an element?",
        "options": [
            {
                "label": "`cursor`",
                "is_correct": true
            },
            {
                "label": "`pointer`",
                "is_correct": false
            },
            {
                "label": "`hover-cursor`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'cursor' property is used to specify the type of cursor to be displayed when hovering over an element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to create an effect of rotating an element in 3D space?",
        "options": [
            {
                "label": "`rotate3d()`",
                "is_correct": true
            },
            {
                "label": "`transform-3d()`",
                "is_correct": false
            },
            {
                "label": "`rotateZ()`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'rotate3d()' function is used to create an effect of rotating an element in 3D space in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to set the perspective from which all child elements of an element are viewed?",
        "options": [
            {
                "label": "`perspective`",
                "is_correct": true
            },
            {
                "label": "`view-perspective`",
                "is_correct": false
            },
            {
                "label": "`perspective-origin`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'perspective' property is used to set the perspective from which all child elements of an element are viewed in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to control the position of the perspective origin for the 3D transformations?",
        "options": [
            {
                "label": "`perspective-origin`",
                "is_correct": true
            },
            {
                "label": "`transform-origin`",
                "is_correct": false
            },
            {
                "label": "`view-origin`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'perspective-origin' property is used to control the position of the perspective origin for the 3D transformations in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to set the color of the text shadow?",
        "options": [
            {
                "label": "`text-shadow`",
                "is_correct": true
            },
            {
                "label": "`shadow-color`",
                "is_correct": false
            },
            {
                "label": "`color-shadow`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'text-shadow' property is used to set the color of the text shadow in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to specify the size of the text shadow?",
        "options": [
            {
                "label": "`text-shadow`",
                "is_correct": false
            },
            {
                "label": "`shadow-size`",
                "is_correct": false
            },
            {
                "label": "`shadow-offset`",
                "is_correct": true
            }
        ],
        "answer_description": "The 'text-shadow' property is used to specify the size of the text shadow in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to set the blur radius of the text shadow?",
        "options": [
            {
                "label": "`text-shadow`",
                "is_correct": false
            },
            {
                "label": "`shadow-blur`",
                "is_correct": false
            },
            {
                "label": "`blur-radius`",
                "is_correct": true
            }
        ],
        "answer_description": "The 'text-shadow' property is used to set the blur radius of the text shadow in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to specify the spread radius of the text shadow?",
        "options": [
            {
                "label": "`text-shadow`",
                "is_correct": false
            },
            {
                "label": "`shadow-spread`",
                "is_correct": true
            },
            {
                "label": "`spread-radius`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'text-shadow' property is used to specify the spread radius of the text shadow in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to create a grid container?",
        "options": [
            {
                "label": "`display: grid;`",
                "is_correct": true
            },
            {
                "label": "`grid: container;`",
                "is_correct": false
            },
            {
                "label": "`display: flex;`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'display: grid;' property is used to create a grid container in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Grid Layout"]
    },
    {
        "question": "Which CSS property is used to define the size of columns in a grid layout?",
        "options": [
            {
                "label": "`grid-template-columns`",
                "is_correct": true
            },
            {
                "label": "`grid-columns`",
                "is_correct": false
            },
            {
                "label": "`grid-column-size`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'grid-template-columns' property is used to define the size of columns in a grid layout in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Grid Layout"]
    },
    {
        "question": "What is the CSS property used to define the size of rows in a grid layout?",
        "options": [
            {
                "label": "`grid-template-rows`",
                "is_correct": true
            },
            {
                "label": "`grid-rows`",
                "is_correct": false
            },
            {
                "label": "`grid-row-size`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'grid-template-rows' property is used to define the size of rows in a grid layout in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Grid Layout"]
    },
    {
        "question": "Which CSS property is used to specify the alignment of items inside a grid container?",
        "options": [
            {
                "label": "`align-items`",
                "is_correct": true
            },
            {
                "label": "`justify-items`",
                "is_correct": false
            },
            {
                "label": "`grid-align`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'align-items' property is used to specify the alignment of items inside a grid container in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Grid Layout"]
    },
    {
        "question": "What is the CSS property used to specify the alignment of grid lines inside a grid container?",
        "options": [
            {
                "label": "`justify-content`",
                "is_correct": true
            },
            {
                "label": "`align-content`",
                "is_correct": false
            },
            {
                "label": "`grid-align`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'justify-content' property is used to specify the alignment of grid lines inside a grid container in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Grid Layout"]
    },
    {
        "question": "Which CSS property is used to create a filter effect, such as blur or grayscale, on an element?",
        "options": [
            {
                "label": "`filter`",
                "is_correct": true
            },
            {
                "label": "`effect`",
                "is_correct": false
            },
            {
                "label": "`transform`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'filter' property is used to create a filter effect, such as blur or grayscale, on an element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to create a blur effect on an element?",
        "options": [
            {
                "label": "`blur()`",
                "is_correct": true
            },
            {
                "label": "`filter-blur()`",
                "is_correct": false
            },
            {
                "label": "`effect-blur()`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'blur()' function within the 'filter' property is used to create a blur effect on an element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to create a grayscale effect on an element?",
        "options": [
            {
                "label": "`grayscale()`",
                "is_correct": true
            },
            {
                "label": "`filter-grayscale()`",
                "is_correct": false
            },
            {
                "label": "`effect-grayscale()`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'grayscale()' function within the 'filter' property is used to create a grayscale effect on an element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "What is the CSS property used to create a sepia effect on an element?",
        "options": [
            {
                "label": "`sepia()`",
                "is_correct": true
            },
            {
                "label": "`filter-sepia()`",
                "is_correct": false
            },
            {
                "label": "`effect-sepia()`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'sepia()' function within the 'filter' property is used to create a sepia effect on an element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    },
    {
        "question": "Which CSS property is used to create a drop shadow effect on an element?",
        "options": [
            {
                "label": "`box-shadow`",
                "is_correct": true
            },
            {
                "label": "`drop-shadow`",
                "is_correct": false
            },
            {
                "label": "`shadow`",
                "is_correct": false
            }
        ],
        "answer_description": "The 'box-shadow' property is used to create a drop shadow effect on an element in CSS.",
        "difficulty": "hard",
        "tags": ["CSS", "Web Development", "Styling"]
    }


];


export default questions