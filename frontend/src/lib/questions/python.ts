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
        "question": "What is the output of `print(2 + 3)` in Python?",
        "options": [
            { "label": "5", "is_correct": true },
            { "label": "23", "is_correct": false },
            { "label": "Error", "is_correct": false }
        ],
        "answer_description": "The `+` operator adds the two numbers 2 and 3 together, resulting in 5.",
        "difficulty": "easy",
        "tags": ["Python", "Arithmetic"]
    },
    {
        "question": "How do you create a list in Python?",
        "options": [
            { "label": "[]", "is_correct": true },
            { "label": "{}", "is_correct": false },
            { "label": "()", "is_correct": false }
        ],
        "answer_description": "Lists in Python are created using square brackets `[]`.",
        "difficulty": "easy",
        "tags": ["Python", "Data Structures"]
    },
    {
        "question": "What function is used to output text to the console in Python?",
        "options": [
            { "label": "print()", "is_correct": true },
            { "label": "console.log()", "is_correct": false },
            { "label": "echo()", "is_correct": false }
        ],
        "answer_description": "The `print()` function is used to display text or variables to the console in Python.",
        "difficulty": "easy",
        "tags": ["Python", "I/O"]
    },
    {
        "question": "Which of the following is a Python keyword?",
        "options": [
            { "label": "def", "is_correct": true },
            { "label": "function", "is_correct": false },
            { "label": "method", "is_correct": false }
        ],
        "answer_description": "`def` is a keyword in Python used to define a function.",
        "difficulty": "easy",
        "tags": ["Python", "Keywords"]
    },
    {
        "question": "What is the output of `len('Hello')`?",
        "options": [
            { "label": "5", "is_correct": true },
            { "label": "4", "is_correct": false },
            { "label": "6", "is_correct": false }
        ],
        "answer_description": "`len()` returns the number of characters in a string, which is 5 for 'Hello'.",
        "difficulty": "easy",
        "tags": ["Python", "Strings"]
    },
    {
        "question": "What is the index of the first element in a Python list?",
        "options": [
            { "label": "0", "is_correct": true },
            { "label": "1", "is_correct": false },
            { "label": "-1", "is_correct": false }
        ],
        "answer_description": "Python uses zero-based indexing, so the first element of a list has index 0.",
        "difficulty": "easy",
        "tags": ["Python", "Data Structures"]
    },
    {
        "question": "What is the correct syntax for a comment in Python?",
        "options": [
            { "label": "# This is a comment", "is_correct": true },
            { "label": "// This is a comment", "is_correct": false },
            { "label": "/* This is a comment */", "is_correct": false }
        ],
        "answer_description": "Comments in Python begin with a `#` symbol.",
        "difficulty": "easy",
        "tags": ["Python", "Syntax"]
    },
    {
        "question": "Which of the following data types is immutable in Python?",
        "options": [
            { "label": "tuple", "is_correct": true },
            { "label": "list", "is_correct": false },
            { "label": "dict", "is_correct": false }
        ],
        "answer_description": "Tuples in Python are immutable, meaning their contents cannot be changed after creation.",
        "difficulty": "easy",
        "tags": ["Python", "Data Types"]
    },
    {
        "question": "What is the purpose of the `range()` function in Python?",
        "options": [
            { "label": "To generate a sequence of numbers", "is_correct": true },
            { "label": "To create a list", "is_correct": false },
            { "label": "To reverse a string", "is_correct": false }
        ],
        "answer_description": "`range()` generates a sequence of numbers, commonly used in loops.",
        "difficulty": "easy",
        "tags": ["Python", "Loops"]
    },
    {
        "question": "Which of the following is used to create a dictionary in Python?",
        "options": [
            { "label": "{}", "is_correct": true },
            { "label": "[]", "is_correct": false },
            { "label": "()", "is_correct": false }
        ],
        "answer_description": "Dictionaries in Python are created using curly braces `{}`.",
        "difficulty": "easy",
        "tags": ["Python", "Data Structures"]
    },
    {
        "question": "How do you start a function definition in Python?",
        "options": [
            { "label": "def", "is_correct": true },
            { "label": "function", "is_correct": false },
            { "label": "func", "is_correct": false }
        ],
        "answer_description": "Functions in Python are defined using the `def` keyword.",
        "difficulty": "easy",
        "tags": ["Python", "Functions"]
    },
    {
        "question": "What is the correct syntax for an `if` statement in Python?",
        "options": [
            { "label": "if condition:", "is_correct": true },
            { "label": "if (condition) {}", "is_correct": false },
            { "label": "if condition then", "is_correct": false }
        ],
        "answer_description": "An `if` statement in Python is written as `if condition:`.",
        "difficulty": "easy",
        "tags": ["Python", "Control Flow"]
    },
    {
        "question": "What keyword is used to handle exceptions in Python?",
        "options": [
            { "label": "try", "is_correct": false },
            { "label": "catch", "is_correct": false },
            { "label": "except", "is_correct": true }
        ],
        "answer_description": "The `except` keyword is used to handle exceptions in Python, following a `try` block.",
        "difficulty": "easy",
        "tags": ["Python", "Error Handling"]
    },
    {
        "question": "How do you create a variable in Python?",
        "options": [
            { "label": "variable_name = value", "is_correct": true },
            { "label": "var variable_name : value", "is_correct": false },
            { "label": "create variable_name as value", "is_correct": false }
        ],
        "answer_description": "Variables in Python are created by assigning a value to a variable name using `variable_name = value`.",
        "difficulty": "easy",
        "tags": ["Python", "Variables"]
    },
    {
        "question": "How do you concatenate two strings in Python?",
        "options": [
            { "label": "string1 + string2", "is_correct": true },
            { "label": "string1 & string2", "is_correct": false },
            { "label": "string1.concat(string2)", "is_correct": false }
        ],
        "answer_description": "Strings in Python are concatenated using the `+` operator.",
        "difficulty": "easy",
        "tags": ["Python", "Strings"]
    },
    {
        "question": "Which method is used to add an item to the end of a list in Python?",
        "options": [
            { "label": "append()", "is_correct": true },
            { "label": "add()", "is_correct": false },
            { "label": "insert()", "is_correct": false }
        ],
        "answer_description": "The `append()` method is used to add an item to the end of a list.",
        "difficulty": "easy",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "What is the default return value of a function in Python if no return statement is present?",
        "options": [
            { "label": "None", "is_correct": true },
            { "label": "0", "is_correct": false },
            { "label": "False", "is_correct": false }
        ],
        "answer_description": "If no return statement is present in a function, it returns `None` by default.",
        "difficulty": "easy",
        "tags": ["Python", "Functions"]
    },
    {
        "question": "How do you access the first character of a string in Python?",
        "options": [
            { "label": "string[0]", "is_correct": true },
            { "label": "string[1]", "is_correct": false },
            { "label": "string.first()", "is_correct": false }
        ],
        "answer_description": "The first character of a string is accessed using index `0`, like `string[0]`.",
        "difficulty": "easy",
        "tags": ["Python", "Strings"]
    },
    {
        "question": "Which Python statement is used to exit a loop early?",
        "options": [
            { "label": "break", "is_correct": true },
            { "label": "continue", "is_correct": false },
            { "label": "exit", "is_correct": false }
        ],
        "answer_description": "The `break` statement is used to exit a loop prematurely.",
        "difficulty": "easy",
        "tags": ["Python", "Loops"]
    },
    {
        "question": "What does `import math` do in Python?",
        "options": [
            { "label": "Imports the math module", "is_correct": true },
            { "label": "Creates a math object", "is_correct": false },
            { "label": "Defines math functions", "is_correct": false }
        ],
        "answer_description": "The `import math` statement imports the math module, allowing access to mathematical functions.",
        "difficulty": "easy",
        "tags": ["Python", "Modules"]
    },
    {
        "question": "What method is used to remove whitespace from the beginning and end of a string in Python?",
        "options": [
            { "label": "strip()", "is_correct": true },
            { "label": "trim()", "is_correct": false },
            { "label": "clean()", "is_correct": false }
        ],
        "answer_description": "The `strip()` method removes whitespace from both the beginning and end of a string.",
        "difficulty": "easy",
        "tags": ["Python", "Strings"]
    },
    {
        "question": "How do you define a class in Python?",
        "options": [
            { "label": "class ClassName:", "is_correct": true },
            { "label": "def ClassName:", "is_correct": false },
            { "label": "create ClassName:", "is_correct": false }
        ],
        "answer_description": "A class in Python is defined using the `class` keyword followed by the class name and a colon.",
        "difficulty": "easy",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "Which of the following is used to check if a value exists in a list?",
        "options": [
            { "label": "in", "is_correct": true },
            { "label": "exists", "is_correct": false },
            { "label": "find", "is_correct": false }
        ],
        "answer_description": "The `in` keyword is used to check if a value exists in a list or other iterable.",
        "difficulty": "easy",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "What does the `len()` function return for a list in Python?",
        "options": [
            { "label": "The number of items in the list", "is_correct": true },
            { "label": "The sum of the items in the list", "is_correct": false },
            { "label": "The average of the items in the list", "is_correct": false }
        ],
        "answer_description": "The `len()` function returns the number of items in a list.",
        "difficulty": "easy",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "What is the purpose of the `pass` statement in Python?",
        "options": [
            { "label": "To create a placeholder for future code", "is_correct": true },
            { "label": "To exit a loop", "is_correct": false },
            { "label": "To handle exceptions", "is_correct": false }
        ],
        "answer_description": "The `pass` statement is used as a placeholder for future code, allowing the code to run without errors.",
        "difficulty": "easy",
        "tags": ["Python", "Syntax"]
    },
    {
        "question": "How do you concatenate lists in Python?",
        "options": [
            { "label": "Using the `+` operator", "is_correct": true },
            { "label": "Using the `append()` method", "is_correct": false },
            { "label": "Using the `extend()` method", "is_correct": false }
        ],
        "answer_description": "Lists can be concatenated using the `+` operator.",
        "difficulty": "easy",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "How do you create a set in Python?",
        "options": [
            { "label": "set()", "is_correct": true },
            { "label": "[]", "is_correct": false },
            { "label": "{}{}", "is_correct": false }
        ],
        "answer_description": "Sets in Python are created using the `set()` function.",
        "difficulty": "easy",
        "tags": ["Python", "Data Structures"]
    },
    {
        "question": "What does the `type()` function do in Python?",
        "options": [
            { "label": "Returns the type of an object", "is_correct": true },
            { "label": "Returns the length of an object", "is_correct": false },
            { "label": "Returns the value of an object", "is_correct": false }
        ],
        "answer_description": "The `type()` function returns the type of an object.",
        "difficulty": "easy",
        "tags": ["Python", "Data Types"]
    },
    {
        "question": "How do you access the value associated with a key in a Python dictionary?",
        "options": [
            { "label": "dictionary[key]", "is_correct": true },
            { "label": "dictionary.key", "is_correct": false },
            { "label": "dictionary.get(key)", "is_correct": true }
        ],
        "answer_description": "Values in a dictionary are accessed using `dictionary[key]` or `dictionary.get(key)`.",
        "difficulty": "easy",
        "tags": ["Python", "Dictionaries"]
    },
    {
        "question": "What does the `sorted()` function do in Python?",
        "options": [
            { "label": "Sorts an iterable", "is_correct": true },
            { "label": "Creates a new list", "is_correct": false },
            { "label": "Reverses an iterable", "is_correct": false }
        ],
        "answer_description": "The `sorted()` function returns a new sorted list from the elements of any iterable.",
        "difficulty": "easy",
        "tags": ["Python", "Sorting"]
    },
    {
        "question": "How do you remove an item from a list by index in Python?",
        "options": [
            { "label": "Using the `del` statement", "is_correct": true },
            { "label": "Using the `remove()` method", "is_correct": false },
            { "label": "Using the `pop()` method", "is_correct": true }
        ],
        "answer_description": "The `del` statement and `pop()` method can be used to remove an item from a list by its index.",
        "difficulty": "easy",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "What is the output of `5 ** 2` in Python?",
        "options": [
            { "label": "25", "is_correct": true },
            { "label": "10", "is_correct": false },
            { "label": "Error", "is_correct": false }
        ],
        "answer_description": "`**` is the exponentiation operator, so `5 ** 2` equals 25.",
        "difficulty": "easy",
        "tags": ["Python", "Arithmetic"]
    },
    {
        "question": "How do you start a multi-line string in Python?",
        "options": [
            { "label": "Using triple quotes `'''` or `\"\"\"", "is_correct": true },
            { "label": "Using double quotes `\"\"`", "is_correct": false },
            { "label": "Using single quotes `''`", "is_correct": false }
        ],
        "answer_description": "Multi-line strings in Python are enclosed in triple quotes `'''` or `\"\"\"`.",
        "difficulty": "easy",
        "tags": ["Python", "Strings"]
    },
    {
        "question": "Which operator is used for string formatting in Python?",
        "options": [
            { "label": "%", "is_correct": true },
            { "label": "&", "is_correct": false },
            { "label": "#", "is_correct": false }
        ],
        "answer_description": "The `%` operator is used for string formatting in Python.",
        "difficulty": "easy",
        "tags": ["Python", "Strings"]
    },
    {
        "question": "How do you create a Python generator function?",
        "options": [
            { "label": "Using the `yield` keyword", "is_correct": true },
            { "label": "Using the `return` keyword", "is_correct": false },
            { "label": "Using the `def` keyword", "is_correct": false }
        ],
        "answer_description": "Generator functions in Python are created using the `yield` keyword instead of `return`.",
        "difficulty": "easy",
        "tags": ["Python", "Generators"]
    },
    {
        "question": "What does the `isinstance()` function do in Python?",
        "options": [
            { "label": "Checks if an object is an instance of a specified class", "is_correct": true },
            { "label": "Checks if a variable is defined", "is_correct": false },
            { "label": "Checks if an object is callable", "is_correct": false }
        ],
        "answer_description": "The `isinstance()` function checks if an object is an instance of a specified class or data type.",
        "difficulty": "easy",
        "tags": ["Python", "Type Checking"]
    },
    {
        "question": "Which method is used to sort a list in place in Python?",
        "options": [
            { "label": "sort()", "is_correct": true },
            { "label": "sorted()", "is_correct": false },
            { "label": "order()", "is_correct": false }
        ],
        "answer_description": "The `sort()` method sorts a list in place, meaning it modifies the original list.",
        "difficulty": "easy",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "How do you convert a string to an integer in Python?",
        "options": [
            { "label": "Using the `int()` function", "is_correct": true },
            { "label": "Using the `convert()` function", "is_correct": false },
            { "label": "Using the `str()` function", "is_correct": false }
        ],
        "answer_description": "The `int()` function is used to convert a string to an integer in Python.",
        "difficulty": "easy",
        "tags": ["Python", "Type Conversion"]
    },
    {
        "question": "What does the `zip()` function do in Python?",
        "options": [
            { "label": "Combines multiple iterables into tuples", "is_correct": true },
            { "label": "Extracts items from a list", "is_correct": false },
            { "label": "Sorts a list", "is_correct": false }
        ],
        "answer_description": "The `zip()` function combines multiple iterables (like lists) into tuples.",
        "difficulty": "easy",
        "tags": ["Python", "Iterables"]
    },
    {
        "question": "How do you create a lambda function in Python?",
        "options": [
            { "label": "Using the `lambda` keyword", "is_correct": true },
            { "label": "Using the `def` keyword", "is_correct": false },
            { "label": "Using the `func` keyword", "is_correct": false }
        ],
        "answer_description": "Lambda functions are created using the `lambda` keyword followed by a function definition.",
        "difficulty": "easy",
        "tags": ["Python", "Functions"]
    },
    {
        "question": "What is the purpose of the `self` keyword in Python class methods?",
        "options": [
            { "label": "Refers to the instance of the class", "is_correct": true },
            { "label": "Refers to the class itself", "is_correct": false },
            { "label": "Refers to a parent class", "is_correct": false }
        ],
        "answer_description": "The `self` keyword refers to the instance of the class in methods, allowing access to instance attributes and methods.",
        "difficulty": "easy",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What is the output of `True + True` in Python?",
        "options": [
            { "label": "2", "is_correct": true },
            { "label": "True", "is_correct": false },
            { "label": "Error", "is_correct": false }
        ],
        "answer_description": "In Python, `True` is treated as `1` and `False` as `0`, so `True + True` equals `2`.",
        "difficulty": "easy",
        "tags": ["Python", "Boolean"]
    },
    {
        "question": "What does the `continue` statement do in a loop?",
        "options": [
            { "label": "Skips the rest of the current loop iteration", "is_correct": true },
            { "label": "Exits the loop", "is_correct": false },
            { "label": "Starts a new loop", "is_correct": false }
        ],
        "answer_description": "The `continue` statement skips the rest of the current loop iteration and proceeds to the next iteration.",
        "difficulty": "easy",
        "tags": ["Python", "Loops"]
    },
    {
        "question": "What is the default value of a function argument in Python?",
        "options": [
            { "label": "None", "is_correct": true },
            { "label": "0", "is_correct": false },
            { "label": "Empty string", "is_correct": false }
        ],
        "answer_description": "The default value of a function argument in Python is `None` if no value is provided.",
        "difficulty": "easy",
        "tags": ["Python", "Functions"]
    },
    {
        "question": "Which function is used to read a line of input from the user in Python?",
        "options": [
            { "label": "input()", "is_correct": true },
            { "label": "read()", "is_correct": false },
            { "label": "getline()", "is_correct": false }
        ],
        "answer_description": "The `input()` function is used to read a line of input from the user.",
        "difficulty": "easy",
        "tags": ["Python", "I/O"]
    },
    {
        "question": "How do you access the last element of a list in Python?",
        "options": [
            { "label": "Using index -1", "is_correct": true },
            { "label": "Using index 0", "is_correct": false },
            { "label": "Using index length-1", "is_correct": true }
        ],
        "answer_description": "The last element of a list can be accessed using index `-1`.",
        "difficulty": "easy",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "What is the purpose of the `import` statement in Python?",
        "options": [
            { "label": "To include external modules or libraries", "is_correct": true },
            { "label": "To define new variables", "is_correct": false },
            { "label": "To create functions", "is_correct": false }
        ],
        "answer_description": "The `import` statement is used to include external modules or libraries into your Python script.",
        "difficulty": "easy",
        "tags": ["Python", "Modules"]
    },
    {
        "question": "How do you check if a dictionary contains a specific key?",
        "options": [
            { "label": "Using the `in` keyword", "is_correct": true },
            { "label": "Using the `exists` method", "is_correct": false },
            { "label": "Using the `has_key()` method", "is_correct": false }
        ],
        "answer_description": "You can check if a dictionary contains a specific key using the `in` keyword.",
        "difficulty": "easy",
        "tags": ["Python", "Dictionaries"]
    },
    {
        "question": "What is the output of `3 * 'a'` in Python?",
        "options": [
            { "label": "aaa", "is_correct": true },
            { "label": "3a", "is_correct": false },
            { "label": "Error", "is_correct": false }
        ],
        "answer_description": "In Python, multiplying a string by an integer repeats the string that many times, so `3 * 'a'` results in `aaa`.",
        "difficulty": "easy",
        "tags": ["Python", "Strings"]
    },
    {
        "question": "Which method is used to find the index of an element in a list?",
        "options": [
            { "label": "index()", "is_correct": true },
            { "label": "find()", "is_correct": false },
            { "label": "locate()", "is_correct": false }
        ],
        "answer_description": "The `index()` method is used to find the index of an element in a list.",
        "difficulty": "easy",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "What is the output of `['a', 'b'] * 2` in Python?",
        "options": [
            { "label": "['a', 'b', 'a', 'b']", "is_correct": true },
            { "label": "['a', 'b', 2]", "is_correct": false },
            { "label": "['a', 'b', 'a', 'b', 'a', 'b']", "is_correct": false }
        ],
        "answer_description": "Multiplying a list by an integer in Python repeats the list that many times, so `['a', 'b'] * 2` results in `['a', 'b', 'a', 'b']`.",
        "difficulty": "easy",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "What is the result of `4 / 2` in Python 3?",
        "options": [
            { "label": "2.0", "is_correct": true },
            { "label": "2", "is_correct": false },
            { "label": "Error", "is_correct": false }
        ],
        "answer_description": "In Python 3, the `/` operator performs true division and returns a float, so `4 / 2` results in `2.0`.",
        "difficulty": "easy",
        "tags": ["Python", "Arithmetic"]
    },
    {
        "question": "How do you create a tuple in Python?",
        "options": [
            { "label": "Using parentheses `()`", "is_correct": true },
            { "label": "Using square brackets `[]`", "is_correct": false },
            { "label": "Using curly braces `{}`", "is_correct": false }
        ],
        "answer_description": "Tuples are created using parentheses `()` in Python.",
        "difficulty": "easy",
        "tags": ["Python", "Data Structures"]
    },
    {
        "question": "Which of the following is a mutable data type in Python?",
        "options": [
            { "label": "List", "is_correct": true },
            { "label": "Tuple", "is_correct": false },
            { "label": "String", "is_correct": false }
        ],
        "answer_description": "Lists are mutable data types in Python, meaning their contents can be changed after creation.",
        "difficulty": "easy",
        "tags": ["Python", "Data Structures"]
    },
    {
        "question": "How do you define a default value for a function parameter in Python?",
        "options": [
            { "label": "Using an equal sign `=`", "is_correct": true },
            { "label": "Using a colon `:`", "is_correct": false },
            { "label": "Using a question mark `?`", "is_correct": false }
        ],
        "answer_description": "Default values for function parameters are defined using the equal sign `=`.",
        "difficulty": "easy",
        "tags": ["Python", "Functions"]
    },
    {
        "question": "What method is used to add an item to the end of a list in Python?",
        "options": [
            { "label": "append()", "is_correct": true },
            { "label": "add()", "is_correct": false },
            { "label": "insert()", "is_correct": false }
        ],
        "answer_description": "The `append()` method adds an item to the end of a list.",
        "difficulty": "easy",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "Which keyword is used to handle exceptions in Python?",
        "options": [
            { "label": "try", "is_correct": true },
            { "label": "catch", "is_correct": false },
            { "label": "error", "is_correct": false }
        ],
        "answer_description": "The `try` keyword is used to handle exceptions in Python, along with `except` to catch the exceptions.",
        "difficulty": "easy",
        "tags": ["Python", "Exceptions"]
    },
    {
        "question": "What does the `pop()` method do when used on a dictionary?",
        "options": [
            { "label": "Removes a key-value pair", "is_correct": true },
            { "label": "Returns a list of keys", "is_correct": false },
            { "label": "Adds a new key-value pair", "is_correct": false }
        ],
        "answer_description": "The `pop()` method removes a key-value pair from a dictionary and returns the value associated with the key.",
        "difficulty": "easy",
        "tags": ["Python", "Dictionaries"]
    },
    {
        "question": "How do you define a class method that takes an instance as its first argument?",
        "options": [
            { "label": "Using `self` as the first parameter", "is_correct": true },
            { "label": "Using `cls` as the first parameter", "is_correct": false },
            { "label": "Using `this` as the first parameter", "is_correct": false }
        ],
        "answer_description": "Instance methods in classes are defined with `self` as the first parameter to refer to the instance.",
        "difficulty": "easy",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What is the result of `list('abc')` in Python?",
        "options": [
            { "label": "['a', 'b', 'c']", "is_correct": true },
            { "label": "['abc']", "is_correct": false },
            { "label": "Error", "is_correct": false }
        ],
        "answer_description": "The `list()` function converts an iterable, such as a string, into a list of its characters.",
        "difficulty": "easy",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "How do you iterate over the keys of a dictionary in Python?",
        "options": [
            { "label": "Using `dict.keys()`", "is_correct": true },
            { "label": "Using `dict.items()`", "is_correct": false },
            { "label": "Using `dict.values()`", "is_correct": false }
        ],
        "answer_description": "The `dict.keys()` method returns an iterable view of the dictionary's keys.",
        "difficulty": "easy",
        "tags": ["Python", "Dictionaries"]
    },
    {
        "question": "What will `set([1, 2, 2])` return in Python?",
        "options": [
            { "label": "{1, 2}", "is_correct": true },
            { "label": "[1, 2, 2]", "is_correct": false },
            { "label": "{1, 2, 2}", "is_correct": false }
        ],
        "answer_description": "Sets in Python are collections of unique elements, so `set([1, 2, 2])` results in `{1, 2}`.",
        "difficulty": "easy",
        "tags": ["Python", "Sets"]
    },
    {
        "question": "What is the output of `list(range(3))`?",
        "options": [
            { "label": "[0, 1, 2]", "is_correct": true },
            { "label": "range(0, 3)", "is_correct": false },
            { "label": "[1, 2, 3]", "is_correct": false }
        ],
        "answer_description": "The `range()` function generates numbers starting from 0 up to, but not including, the specified end value. `list(range(3))` results in `[0, 1, 2]`.",
        "difficulty": "medium",
        "tags": ["Python", "Range"]
    },
    {
        "question": "What does the `@staticmethod` decorator do in a Python class?",
        "options": [
            { "label": "Defines a method that does not receive the instance as the first parameter", "is_correct": true },
            { "label": "Defines a method that is bound to the class rather than the instance", "is_correct": false },
            { "label": "Defines a method that can be overridden in subclasses", "is_correct": false }
        ],
        "answer_description": "The `@staticmethod` decorator defines a method that does not receive the instance (`self`) as its first parameter and is bound to the class, not the instance.",
        "difficulty": "medium",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How do you handle multiple exceptions in a single `except` block?",
        "options": [
            { "label": "By using a tuple of exception types", "is_correct": true },
            { "label": "By using multiple `except` blocks", "is_correct": false },
            { "label": "By using a list of exception types", "is_correct": false }
        ],
        "answer_description": "Multiple exceptions can be handled in a single `except` block by using a tuple of exception types.",
        "difficulty": "medium",
        "tags": ["Python", "Exceptions"]
    },
    {
        "question": "What will `sorted([3, 1, 2], reverse=True)` return?",
        "options": [
            { "label": "[3, 2, 1]", "is_correct": true },
            { "label": "[1, 2, 3]", "is_correct": false },
            { "label": "[2, 1, 3]", "is_correct": false }
        ],
        "answer_description": "The `sorted()` function returns a new list that is sorted in the specified order. `reverse=True` sorts the list in descending order.",
        "difficulty": "medium",
        "tags": ["Python", "Sorting"]
    },
    {
        "question": "How can you make a class method a class method rather than an instance method?",
        "options": [
            { "label": "Use the `@classmethod` decorator", "is_correct": true },
            { "label": "Use the `@staticmethod` decorator", "is_correct": false },
            { "label": "Use the `@property` decorator", "is_correct": false }
        ],
        "answer_description": "The `@classmethod` decorator is used to define a class method that receives the class as its first argument.",
        "difficulty": "medium",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How do you concatenate two dictionaries in Python 3.9 or later?",
        "options": [
            { "label": "Using the `|` operator", "is_correct": true },
            { "label": "Using the `update()` method", "is_correct": false },
            { "label": "Using the `+` operator", "is_correct": false }
        ],
        "answer_description": "In Python 3.9 or later, dictionaries can be concatenated using the `|` operator.",
        "difficulty": "medium",
        "tags": ["Python", "Dictionaries"]
    },
    {
        "question": "What is the purpose of the `__init__` method in a Python class?",
        "options": [
            { "label": "To initialize a new instance of the class", "is_correct": true },
            { "label": "To create a class method", "is_correct": false },
            { "label": "To define a static method", "is_correct": false }
        ],
        "answer_description": "The `__init__` method is called when a new instance of the class is created and is used to initialize the instance's attributes.",
        "difficulty": "medium",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How do you create a generator expression in Python?",
        "options": [
            { "label": "Using parentheses `()`", "is_correct": true },
            { "label": "Using square brackets `[]`", "is_correct": false },
            { "label": "Using curly braces `{}`", "is_correct": false }
        ],
        "answer_description": "Generator expressions are created using parentheses `()` in Python.",
        "difficulty": "medium",
        "tags": ["Python", "Generators"]
    },
    {
        "question": "What does the `with` statement do in Python?",
        "options": [
            { "label": "Manages resources by ensuring cleanup after usage", "is_correct": true },
            { "label": "Defines a block of code to be executed", "is_correct": false },
            { "label": "Creates a context manager", "is_correct": false }
        ],
        "answer_description": "The `with` statement is used to manage resources and ensure that cleanup is performed after usage, typically used with file operations.",
        "difficulty": "medium",
        "tags": ["Python", "Context Management"]
    },
    {
        "question": "How do you specify that a function can accept an arbitrary number of positional arguments?",
        "options": [
            { "label": "Use the `*args` syntax", "is_correct": true },
            { "label": "Use the `**kwargs` syntax", "is_correct": false },
            { "label": "Use the `...` syntax", "is_correct": false }
        ],
        "answer_description": "The `*args` syntax allows a function to accept an arbitrary number of positional arguments.",
        "difficulty": "medium",
        "tags": ["Python", "Functions"]
    },
    {
        "question": "What does the `json.loads()` function do in Python?",
        "options": [
            { "label": "Parses a JSON formatted string and returns a Python dictionary", "is_correct": true },
            { "label": "Serializes a Python dictionary to a JSON formatted string", "is_correct": false },
            { "label": "Reads a JSON file", "is_correct": false }
        ],
        "answer_description": "The `json.loads()` function parses a JSON formatted string and returns a Python dictionary.",
        "difficulty": "medium",
        "tags": ["Python", "JSON"]
    },
    {
        "question": "How do you handle named arguments when calling a function in Python?",
        "options": [
            { "label": "By specifying the argument names along with their values", "is_correct": true },
            { "label": "By using positional arguments only", "is_correct": false },
            { "label": "By using the `*args` syntax", "is_correct": false }
        ],
        "answer_description": "Named arguments are handled by specifying the argument names and their values when calling a function, allowing for more clarity and flexibility.",
        "difficulty": "medium",
        "tags": ["Python", "Functions"]
    },
    {
        "question": "What is the output of `type([]) == list`?",
        "options": [
            { "label": "True", "is_correct": true },
            { "label": "False", "is_correct": false },
            { "label": "Error", "is_correct": false }
        ],
        "answer_description": "The `type([])` function returns `<class 'list'>`, which is equivalent to `list`, so `type([]) == list` evaluates to `True`.",
        "difficulty": "medium",
        "tags": ["Python", "Data Types"]
    },
    {
        "question": "What is a lambda function in Python?",
        "options": [
            { "label": "A small anonymous function defined with `lambda` keyword", "is_correct": true },
            { "label": "A function with no parameters", "is_correct": false },
            { "label": "A function that always returns `None`", "is_correct": false }
        ],
        "answer_description": "A lambda function is a small anonymous function defined with the `lambda` keyword. It can have any number of arguments but only one expression.",
        "difficulty": "medium",
        "tags": ["Python", "Functions"]
    },
    {
        "question": "How can you create a new Python set from a list while removing duplicates?",
        "options": [
            { "label": "Using the `set()` function", "is_correct": true },
            { "label": "Using the `unique()` function", "is_correct": false },
            { "label": "Using the `remove_duplicates()` function", "is_correct": false }
        ],
        "answer_description": "The `set()` function can be used to create a new set from a list, automatically removing any duplicate values.",
        "difficulty": "medium",
        "tags": ["Python", "Sets"]
    },
    {
        "question": "What is the purpose of the `__str__` method in a Python class?",
        "options": [
            { "label": "Defines the string representation of an instance", "is_correct": true },
            { "label": "Defines the instance's attributes", "is_correct": false },
            { "label": "Defines the class's constructor", "is_correct": false }
        ],
        "answer_description": "The `__str__` method is used to define the string representation of an instance, which is returned by the `str()` function.",
        "difficulty": "medium",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What does `filter(None, [0, '', None, 'Hello'])` return?",
        "options": [
            { "label": "['Hello']", "is_correct": true },
            { "label": "[0, '', None, 'Hello']", "is_correct": false },
            { "label": "['Hello', None]", "is_correct": false }
        ],
        "answer_description": "The `filter()` function with `None` as the first argument removes all falsy values, so the result is `['Hello']`.",
        "difficulty": "medium",
        "tags": ["Python", "Functions"]
    },
    {
        "question": "How do you check if a string contains another substring?",
        "options": [
            { "label": "Using the `in` keyword", "is_correct": true },
            { "label": "Using the `contains()` method", "is_correct": false },
            { "label": "Using the `find()` method", "is_correct": false }
        ],
        "answer_description": "To check if a string contains another substring, use the `in` keyword.",
        "difficulty": "medium",
        "tags": ["Python", "Strings"]
    },
    {
        "question": "What will `len('hello')` return?",
        "options": [
            { "label": "5", "is_correct": true },
            { "label": "4", "is_correct": false },
            { "label": "Error", "is_correct": false }
        ],
        "answer_description": "The `len()` function returns the number of characters in a string, so `len('hello')` returns `5`.",
        "difficulty": "medium",
        "tags": ["Python", "Strings"]
    },
    {
        "question": "What is the result of `dict.get('key', 'default')` when `'key'` is not in the dictionary?",
        "options": [
            { "label": "'default'", "is_correct": true },
            { "label": "None", "is_correct": false },
            { "label": "Error", "is_correct": false }
        ],
        "answer_description": "The `dict.get()` method returns the default value if the key is not present in the dictionary. In this case, it returns `'default'`.",
        "difficulty": "medium",
        "tags": ["Python", "Dictionaries"]
    },
    {
        "question": "How can you create a list of squares of numbers from 0 to 4 using a list comprehension?",
        "options": [
            { "label": "[x**2 for x in range(5)]", "is_correct": true },
            { "label": "[x^2 for x in range(5)]", "is_correct": false },
            { "label": "[x*2 for x in range(5)]", "is_correct": false }
        ],
        "answer_description": "The list comprehension `[x**2 for x in range(5)]` creates a list of squares of numbers from 0 to 4.",
        "difficulty": "medium",
        "tags": ["Python", "List Comprehensions"]
    },
    {
        "question": "How do you access the first character of a string in Python?",
        "options": [
            { "label": "Using index 0", "is_correct": true },
            { "label": "Using index 1", "is_correct": false },
            { "label": "Using index -1", "is_correct": false }
        ],
        "answer_description": "The first character of a string is accessed using index `0`.",
        "difficulty": "medium",
        "tags": ["Python", "Strings"]
    },
    {
        "question": "What does the `re.sub()` function do in the `re` module?",
        "options": [
            { "label": "Replaces occurrences of a pattern with a replacement string", "is_correct": true },
            { "label": "Finds all occurrences of a pattern", "is_correct": false },
            { "label": "Splits a string by a pattern", "is_correct": false }
        ],
        "answer_description": "The `re.sub()` function replaces occurrences of a pattern with a replacement string.",
        "difficulty": "medium",
        "tags": ["Python", "Regular Expressions"]
    },
    {
        "question": "What is the difference between `deepcopy` and `copy` in Python?",
        "options": [
            { "label": "`deepcopy` creates a new object and recursively copies all objects found", "is_correct": true },
            { "label": "`deepcopy` creates a shallow copy, while `copy` is a deep copy", "is_correct": false },
            { "label": "`copy` creates a new object and recursively copies all objects found", "is_correct": false }
        ],
        "answer_description": "`deepcopy` creates a new object and recursively copies all objects found in the original object, whereas `copy` creates a shallow copy of the object.",
        "difficulty": "medium",
        "tags": ["Python", "Copying"]
    },
    {
        "question": "How can you merge two dictionaries in Python 3.9 or later?",
        "options": [
            { "label": "Using the `|` operator", "is_correct": true },
            { "label": "Using the `update()` method", "is_correct": false },
            { "label": "Using the `merge()` function", "is_correct": false }
        ],
        "answer_description": "In Python 3.9 or later, dictionaries can be merged using the `|` operator.",
        "difficulty": "medium",
        "tags": ["Python", "Dictionaries"]
    },
    {
        "question": "How do you create an empty set in Python?",
        "options": [
            { "label": "Using `set()`", "is_correct": true },
            { "label": "Using `[]`", "is_correct": false },
            { "label": "Using `{}`", "is_correct": false }
        ],
        "answer_description": "An empty set in Python is created using the `set()` function. `{}` creates an empty dictionary instead.",
        "difficulty": "medium",
        "tags": ["Python", "Sets"]
    },
    {
        "question": "What does the `enumerate()` function do in Python?",
        "options": [
            { "label": "Adds a counter to an iterable", "is_correct": true },
            { "label": "Creates a list of unique elements", "is_correct": false },
            { "label": "Filters elements of an iterable", "is_correct": false }
        ],
        "answer_description": "The `enumerate()` function adds a counter to an iterable and returns it as an enumerate object.",
        "difficulty": "medium",
        "tags": ["Python", "Iterables"]
    },
    {
        "question": "What will the `zip()` function return when applied to two lists?",
        "options": [
            { "label": "An iterator of tuples", "is_correct": true },
            { "label": "A single concatenated list", "is_correct": false },
            { "label": "A dictionary", "is_correct": false }
        ],
        "answer_description": "The `zip()` function returns an iterator of tuples, where each tuple contains elements from the corresponding positions of the input iterables.",
        "difficulty": "medium",
        "tags": ["Python", "Iterables"]
    },
    {
        "question": "What does `map()` do in Python?",
        "options": [
            { "label": "Applies a function to all items in an iterable", "is_correct": true },
            { "label": "Creates a new dictionary from an iterable", "is_correct": false },
            { "label": "Filters items in an iterable based on a function", "is_correct": false }
        ],
        "answer_description": "The `map()` function applies a specified function to all items in an iterable and returns an iterator of the results.",
        "difficulty": "medium",
        "tags": ["Python", "Functions"]
    },
    {
        "question": "How can you check if a key exists in a dictionary?",
        "options": [
            { "label": "Using the `in` keyword", "is_correct": true },
            { "label": "Using the `exists()` method", "is_correct": false },
            { "label": "Using the `has_key()` method", "is_correct": false }
        ],
        "answer_description": "The `in` keyword is used to check if a key exists in a dictionary.",
        "difficulty": "medium",
        "tags": ["Python", "Dictionaries"]
    },
    {
        "question": "How do you define a class variable in Python?",
        "options": [
            { "label": "By defining it outside any method", "is_correct": true },
            { "label": "By defining it inside the `__init__` method", "is_correct": false },
            { "label": "By defining it inside a method but outside a class", "is_correct": false }
        ],
        "answer_description": "Class variables are defined directly within the class body, outside of any methods.",
        "difficulty": "medium",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What is the purpose of the `__repr__` method in a Python class?",
        "options": [
            { "label": "Provides an official string representation of the instance", "is_correct": true },
            { "label": "Defines the instance's attributes", "is_correct": false },
            { "label": "Creates a new instance of the class", "is_correct": false }
        ],
        "answer_description": "The `__repr__` method is used to provide an official string representation of an instance, which should be unambiguous and suitable for debugging.",
        "difficulty": "medium",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How can you iterate over both index and value of a list simultaneously?",
        "options": [
            { "label": "Using `enumerate()` function", "is_correct": true },
            { "label": "Using `zip()` function", "is_correct": false },
            { "label": "Using `range()` function", "is_correct": false }
        ],
        "answer_description": "The `enumerate()` function allows you to iterate over both the index and value of a list simultaneously.",
        "difficulty": "medium",
        "tags": ["Python", "Iterables"]
    },
    {
        "question": "What will `sorted('hello')` return?",
        "options": [
            { "label": "['e', 'h', 'l', 'l', 'o']", "is_correct": true },
            { "label": "'ehllo'", "is_correct": false },
            { "label": "['h', 'e', 'l', 'l', 'o']", "is_correct": false }
        ],
        "answer_description": "The `sorted()` function returns a list of characters sorted in ascending order, so `sorted('hello')` results in `['e', 'h', 'l', 'l', 'o']`.",
        "difficulty": "medium",
        "tags": ["Python", "Sorting"]
    },
    {
        "question": "What will `list(map(str, [1, 2, 3]))` return?",
        "options": [
            { "label": "['1', '2', '3']", "is_correct": true },
            { "label": "[1, 2, 3]", "is_correct": false },
            { "label": "['1', 2, 3]", "is_correct": false }
        ],
        "answer_description": "The `map()` function applies `str` to each item in the list, converting each integer to a string. `list(map(str, [1, 2, 3]))` results in `['1', '2', '3']`.",
        "difficulty": "medium",
        "tags": ["Python", "Functions"]
    },
    {
        "question": "How do you create a Python generator?",
        "options": [
            { "label": "Using a function with `yield` statements", "is_correct": true },
            { "label": "Using a function with `return` statements", "is_correct": false },
            { "label": "Using a list comprehension", "is_correct": false }
        ],
        "answer_description": "A Python generator is created using a function with `yield` statements, which produces values one at a time.",
        "difficulty": "medium",
        "tags": ["Python", "Generators"]
    },
    {
        "question": "What does the `__contains__` method do in a Python class?",
        "options": [
            { "label": "Defines behavior for the `in` operator", "is_correct": true },
            { "label": "Defines behavior for equality comparisons", "is_correct": false },
            { "label": "Defines behavior for string representations", "is_correct": false }
        ],
        "answer_description": "The `__contains__` method defines the behavior of the `in` operator, allowing custom container membership checks.",
        "difficulty": "medium",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How do you create a new file in Python and write to it?",
        "options": [
            { "label": "Using `open('filename', 'w')` and `file.write()`", "is_correct": true },
            { "label": "Using `open('filename', 'r+')` and `file.write()`", "is_correct": false },
            { "label": "Using `write('filename', 'w')`", "is_correct": false }
        ],
        "answer_description": "To create a new file and write to it, use `open('filename', 'w')` to open the file in write mode and then use `file.write()`.",
        "difficulty": "medium",
        "tags": ["Python", "File Handling"]
    },
    {
        "question": "What is the output of `1 / 2` in Python 3.x?",
        "options": [
            { "label": "0.5", "is_correct": true },
            { "label": "0", "is_correct": false },
            { "label": "0.0", "is_correct": false }
        ],
        "answer_description": "In Python 3.x, division using `/` results in a float, so `1 / 2` returns `0.5`.",
        "difficulty": "medium",
        "tags": ["Python", "Arithmetic"]
    },
    {
        "question": "What does the `itertools` module provide in Python?",
        "options": [
            { "label": "Functions for creating and working with iterators", "is_correct": true },
            { "label": "Functions for handling regular expressions", "is_correct": false },
            { "label": "Functions for managing dates and times", "is_correct": false }
        ],
        "answer_description": "The `itertools` module provides functions for creating and working with iterators, including tools for iteration and combinatorial operations.",
        "difficulty": "medium",
        "tags": ["Python", "Modules"]
    },
    {
        "question": "How can you specify a default value for a keyword argument in a Python function?",
        "options": [
            { "label": "By assigning a value in the function definition", "is_correct": true },
            { "label": "By using `default` keyword", "is_correct": false },
            { "label": "By using `None` as the default value", "is_correct": false }
        ],
        "answer_description": "A default value for a keyword argument is specified by assigning a value in the function definition.",
        "difficulty": "medium",
        "tags": ["Python", "Functions"]
    },
    {
        "question": "What does the `try...except...finally` block do in Python?",
        "options": [
            { "label": "Handles exceptions and executes cleanup code", "is_correct": true },
            { "label": "Catches exceptions and ignores them", "is_correct": false },
            { "label": "Executes code only if no exceptions occur", "is_correct": false }
        ],
        "answer_description": "`try...except...finally` handles exceptions with `except` and ensures that cleanup code in `finally` is always executed, regardless of whether an exception occurred.",
        "difficulty": "medium",
        "tags": ["Python", "Exceptions"]
    },
    {
        "question": "What is a Python `dict` comprehension?",
        "options": [
            { "label": "A way to create dictionaries using an expression", "is_correct": true },
            { "label": "A way to filter dictionary items", "is_correct": false },
            { "label": "A way to iterate over dictionary keys and values", "is_correct": false }
        ],
        "answer_description": "A `dict` comprehension is a concise way to create dictionaries using an expression, similar to list comprehensions but for dictionaries.",
        "difficulty": "medium",
        "tags": ["Python", "Comprehensions"]
    },
    {
        "question": "What is the purpose of the `__del__` method in a Python class?",
        "options": [
            { "label": "Defines behavior when an instance is about to be destroyed", "is_correct": true },
            { "label": "Defines behavior for attribute access", "is_correct": false },
            { "label": "Defines behavior for instance creation", "is_correct": false }
        ],
        "answer_description": "The `__del__` method is used to define behavior when an instance is about to be destroyed, often for cleanup purposes.",
        "difficulty": "medium",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How do you get the last element of a list in Python?",
        "options": [
            { "label": "Using index `-1`", "is_correct": true },
            { "label": "Using index `0`", "is_correct": false },
            { "label": "Using the `pop()` method", "is_correct": false }
        ],
        "answer_description": "The last element of a list can be accessed using index `-1`.",
        "difficulty": "medium",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "What does the `input()` function do in Python?",
        "options": [
            { "label": "Reads a line of text from user input", "is_correct": true },
            { "label": "Prints text to the console", "is_correct": false },
            { "label": "Reads text from a file", "is_correct": false }
        ],
        "answer_description": "The `input()` function reads a line of text from user input and returns it as a string.",
        "difficulty": "medium",
        "tags": ["Python", "Input"]
    },
    {
        "question": "What will `dict.fromkeys(['a', 'b'], 1)` return?",
        "options": [
            { "label": "{'a': 1, 'b': 1}", "is_correct": true },
            { "label": "{'a': 1, 'b': 0}", "is_correct": false },
            { "label": "{'a': None, 'b': None}", "is_correct": false }
        ],
        "answer_description": "The `dict.fromkeys()` method creates a new dictionary with keys from the provided iterable and a default value. `dict.fromkeys(['a', 'b'], 1)` returns `{'a': 1, 'b': 1}`.",
        "difficulty": "medium",
        "tags": ["Python", "Dictionaries"]
    },
    {
        "question": "What does the `re.match()` function do in Python?",
        "options": [
            { "label": "Attempts to match a pattern at the beginning of a string", "is_correct": true },
            { "label": "Finds all matches of a pattern in a string", "is_correct": false },
            { "label": "Replaces occurrences of a pattern with a new string", "is_correct": false }
        ],
        "answer_description": "The `re.match()` function attempts to match a pattern at the beginning of a string. It returns a match object if the pattern is found at the start of the string.",
        "difficulty": "medium",
        "tags": ["Python", "Regular Expressions"]
    },
    {
        "question": "How do you remove whitespace from the beginning and end of a string?",
        "options": [
            { "label": "Using the `strip()` method", "is_correct": true },
            { "label": "Using the `trim()` method", "is_correct": false },
            { "label": "Using the `remove()` method", "is_correct": false }
        ],
        "answer_description": "The `strip()` method removes whitespace from both the beginning and end of a string.",
        "difficulty": "medium",
        "tags": ["Python", "Strings"]
    },
    {
        "question": "How can you handle exceptions in Python?",
        "options": [
            { "label": "Using `try...except` blocks", "is_correct": true },
            { "label": "Using `catch` blocks", "is_correct": false },
            { "label": "Using `finally` blocks only", "is_correct": false }
        ],
        "answer_description": "Exceptions in Python are handled using `try...except` blocks, allowing you to catch and manage errors that occur during execution.",
        "difficulty": "medium",
        "tags": ["Python", "Exceptions"]
    },
    {
        "question": "What does the `__iter__` method do in a Python class?",
        "options": [
            { "label": "Defines behavior for iteration over an object", "is_correct": true },
            { "label": "Defines behavior for equality comparison", "is_correct": false },
            { "label": "Defines behavior for instance creation", "is_correct": false }
        ],
        "answer_description": "The `__iter__` method is used to define the behavior for iteration over an object, making it iterable.",
        "difficulty": "medium",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What does the `defaultdict` class from the `collections` module do?",
        "options": [
            { "label": "Provides a default value for missing keys", "is_correct": true },
            { "label": "Provides a method for updating dictionary values", "is_correct": false },
            { "label": "Provides a way to merge multiple dictionaries", "is_correct": false }
        ],
        "answer_description": "`defaultdict` from the `collections` module provides a default value for missing keys, simplifying dictionary operations with default values.",
        "difficulty": "medium",
        "tags": ["Python", "Collections"]
    },
    {
        "question": "How can you convert a string to an integer in Python?",
        "options": [
            { "label": "Using `int()` function", "is_correct": true },
            { "label": "Using `float()` function", "is_correct": false },
            { "label": "Using `str()` function", "is_correct": false }
        ],
        "answer_description": "The `int()` function is used to convert a string to an integer.",
        "difficulty": "medium",
        "tags": ["Python", "Type Conversion"]
    },
    {
        "question": "What does the `args` parameter in a function allow you to do?",
        "options": [
            { "label": "Pass a variable number of positional arguments", "is_correct": true },
            { "label": "Pass a variable number of keyword arguments", "is_correct": false },
            { "label": "Define default values for arguments", "is_correct": false }
        ],
        "answer_description": "The `*args` parameter allows you to pass a variable number of positional arguments to a function.",
        "difficulty": "medium",
        "tags": ["Python", "Functions"]
    },
    {
        "question": "How can you merge two lists in Python?",
        "options": [
            { "label": "Using the `+` operator", "is_correct": true },
            { "label": "Using the `append()` method", "is_correct": false },
            { "label": "Using the `extend()` method", "is_correct": false }
        ],
        "answer_description": "You can merge two lists using the `+` operator to concatenate them.",
        "difficulty": "medium",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "What is the purpose of the `super()` function in Python?",
        "options": [
            { "label": "To call a method from the parent class", "is_correct": true },
            { "label": "To create a new instance of the parent class", "is_correct": false },
            { "label": "To access private attributes of the parent class", "is_correct": false }
        ],
        "answer_description": "The `super()` function is used to call methods from the parent class in a subclass, allowing for cooperative multiple inheritance.",
        "difficulty": "medium",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How do you create a list of numbers from 0 to 9 in Python?",
        "options": [
            { "label": "Using `range(10)` and `list()`", "is_correct": true },
            { "label": "Using `[0, 1, ..., 9]`", "is_correct": false },
            { "label": "Using `list(range(10))`", "is_correct": false }
        ],
        "answer_description": "You can create a list of numbers from 0 to 9 using `list(range(10))`.",
        "difficulty": "medium",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "What is the output of `bool([])`?",
        "options": [
            { "label": "False", "is_correct": true },
            { "label": "True", "is_correct": false },
            { "label": "Error", "is_correct": false }
        ],
        "answer_description": "In Python, an empty list evaluates to `False` when converted to a boolean value.",
        "difficulty": "medium",
        "tags": ["Python", "Boolean"]
    },
    {
        "question": "What is the output of `3 ** 2` in Python?",
        "options": [
            { "label": "9", "is_correct": true },
            { "label": "6", "is_correct": false },
            { "label": "Error", "is_correct": false }
        ],
        "answer_description": "The `**` operator in Python is used for exponentiation. `3 ** 2` evaluates to `9`.",
        "difficulty": "medium",
        "tags": ["Python", "Arithmetic"]
    },
    {
        "question": "What is the difference between `deepcopy` and `copy` in Python?",
        "options": [
            { "label": "`deepcopy` creates a new object and recursively copies all objects found within the original", "is_correct": true },
            { "label": "`copy` creates a shallow copy, only copying the top-level object", "is_correct": false },
            { "label": "`deepcopy` and `copy` are identical in functionality", "is_correct": false }
        ],
        "answer_description": "`deepcopy` creates a new object and recursively copies all objects found within the original, while `copy` creates a shallow copy, only copying the top-level object.",
        "difficulty": "medium",
        "tags": ["Python", "Copying"]
    },
    {
        "question": "How do you create a virtual environment in Python?",
        "options": [
            { "label": "Using `python -m venv <env_name>`", "is_correct": true },
            { "label": "Using `virtualenv <env_name>`", "is_correct": false },
            { "label": "Using `pip install venv`", "is_correct": false }
        ],
        "answer_description": "A virtual environment can be created using `python -m venv <env_name>`.",
        "difficulty": "medium",
        "tags": ["Python", "Virtual Environments"]
    },
    {
        "question": "What does `__str__` method provide in a Python class?",
        "options": [
            { "label": "A human-readable string representation of the instance", "is_correct": true },
            { "label": "A string representation used for debugging", "is_correct": false },
            { "label": "A method for initializing class attributes", "is_correct": false }
        ],
        "answer_description": "The `__str__` method provides a human-readable string representation of an instance, often used for display purposes.",
        "difficulty": "medium",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What will `set([1, 2, 2, 3])` return?",
        "options": [
            { "label": "{1, 2, 3}", "is_correct": true },
            { "label": "[1, 2, 2, 3]", "is_correct": false },
            { "label": "[1, 2, 3]", "is_correct": false }
        ],
        "answer_description": "The `set()` function creates a set from the list, removing duplicate elements. `set([1, 2, 2, 3])` results in `{1, 2, 3}`.",
        "difficulty": "medium",
        "tags": ["Python", "Sets"]
    },
    {
        "question": "What is the result of the expression `5 // 2`?",
        "options": [
            { "label": "2", "is_correct": true },
            { "label": "2.5", "is_correct": false },
            { "label": "Error", "is_correct": false }
        ],
        "answer_description": "The `//` operator performs integer (floor) division in Python, so `5 // 2` results in `2`.",
        "difficulty": "medium",
        "tags": ["Python", "Arithmetic"]
    },
    {
        "question": "How do you read a file line by line in Python?",
        "options": [
            { "label": "Using `for line in file`", "is_correct": true },
            { "label": "Using `file.readlines()`", "is_correct": false },
            { "label": "Using `file.read()`", "is_correct": false }
        ],
        "answer_description": "To read a file line by line, you can use `for line in file` which iterates over each line in the file.",
        "difficulty": "medium",
        "tags": ["Python", "File Handling"]
    },
    {
        "question": "How can you ensure a block of code is executed regardless of whether an exception occurred?",
        "options": [
            { "label": "Using `finally` block", "is_correct": true },
            { "label": "Using `except` block", "is_correct": false },
            { "label": "Using `else` block", "is_correct": false }
        ],
        "answer_description": "The `finally` block ensures that a block of code is executed regardless of whether an exception occurred or not.",
        "difficulty": "medium",
        "tags": ["Python", "Exceptions"]
    },
    {
        "question": "What does the `assert` statement do in Python?",
        "options": [
            { "label": "Tests a condition and raises an `AssertionError` if the condition is False", "is_correct": true },
            { "label": "Assigns a value to a variable", "is_correct": false },
            { "label": "Checks the type of a variable", "is_correct": false }
        ],
        "answer_description": "The `assert` statement tests a condition and raises an `AssertionError` if the condition evaluates to `False`.",
        "difficulty": "medium",
        "tags": ["Python", "Assertions"]
    },
    {
        "question": "What is the purpose of the `__new__` method in a Python class?",
        "options": [
            { "label": "To create a new instance of the class", "is_correct": true },
            { "label": "To initialize instance attributes", "is_correct": false },
            { "label": "To define class-level methods", "is_correct": false }
        ],
        "answer_description": "The `__new__` method is responsible for creating a new instance of a class. It is called before `__init__` and returns the new instance.",
        "difficulty": "medium",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How do you concatenate two tuples in Python?",
        "options": [
            { "label": "Using the `+` operator", "is_correct": true },
            { "label": "Using the `append()` method", "is_correct": false },
            { "label": "Using the `extend()` method", "is_correct": false }
        ],
        "answer_description": "Tuples can be concatenated using the `+` operator to combine them into a single tuple.",
        "difficulty": "medium",
        "tags": ["Python", "Tuples"]
    },
    {
        "question": "How do you remove duplicates from a list while preserving the order of elements?",
        "options": [
            { "label": "Using `dict.fromkeys(list)`", "is_correct": true },
            { "label": "Using `set(list)`", "is_correct": false },
            { "label": "Using `list(set(list))`", "is_correct": false }
        ],
        "answer_description": "Using `dict.fromkeys(list)` can remove duplicates from a list while preserving the order of elements, as dictionaries in Python 3.7+ maintain insertion order.",
        "difficulty": "medium",
        "tags": ["Python", "Lists"]
    },
    {
        "question": "How can you create a context manager in Python?",
        "options": [
            { "label": "By implementing `__enter__` and `__exit__` methods in a class", "is_correct": true },
            { "label": "By using `with` statement directly on an object", "is_correct": false },
            { "label": "By defining a function with `@contextmanager` decorator", "is_correct": false }
        ],
        "answer_description": "A context manager in Python is created by implementing the `__enter__` and `__exit__` methods in a class, which allows for resource management using the `with` statement.",
        "difficulty": "hard",
        "tags": ["Python", "Context Managers"]
    },
    {
        "question": "What is the difference between `deepcopy` and `copy` in Python?",
        "options": [
            { "label": "`deepcopy` creates a new object and recursively copies all objects found within the original", "is_correct": true },
            { "label": "`copy` creates a shallow copy, only copying the top-level object", "is_correct": false },
            { "label": "`deepcopy` and `copy` are identical in functionality", "is_correct": false }
        ],
        "answer_description": "`deepcopy` creates a new object and recursively copies all objects found within the original, while `copy` creates a shallow copy, only copying the top-level object.",
        "difficulty": "hard",
        "tags": ["Python", "Copying"]
    },
    {
        "question": "How does Python’s garbage collection work?",
        "options": [
            { "label": "It uses reference counting and cyclic garbage collection", "is_correct": true },
            { "label": "It uses only reference counting", "is_correct": false },
            { "label": "It uses only cyclic garbage collection", "is_correct": false }
        ],
        "answer_description": "Python’s garbage collection uses reference counting for most objects and cyclic garbage collection to detect and clean up reference cycles.",
        "difficulty": "hard",
        "tags": ["Python", "Garbage Collection"]
    },
    {
        "question": "What are metaclasses in Python?",
        "options": [
            { "label": "Classes of classes that define how classes behave", "is_correct": true },
            { "label": "A type of class that inherits from multiple base classes", "is_correct": false },
            { "label": "Functions that create new classes dynamically", "is_correct": false }
        ],
        "answer_description": "Metaclasses are classes of classes that define how classes themselves behave, allowing customization of class creation and behavior.",
        "difficulty": "hard",
        "tags": ["Python", "Metaclasses"]
    },
    {
        "question": "What is the purpose of the `functools.lru_cache` decorator?",
        "options": [
            { "label": "To cache function results for improved performance", "is_correct": true },
            { "label": "To log function calls for debugging purposes", "is_correct": false },
            { "label": "To handle exceptions in functions gracefully", "is_correct": false }
        ],
        "answer_description": "The `functools.lru_cache` decorator is used to cache the results of expensive function calls to improve performance by storing previously computed results.",
        "difficulty": "hard",
        "tags": ["Python", "Caching"]
    },
    {
        "question": "How do you create a coroutine in Python?",
        "options": [
            { "label": "By defining a function with `async def`", "is_correct": true },
            { "label": "By defining a function with `yield`", "is_correct": false },
            { "label": "By using the `coroutine` decorator", "is_correct": false }
        ],
        "answer_description": "A coroutine in Python is created by defining a function with `async def`, which allows for asynchronous execution.",
        "difficulty": "hard",
        "tags": ["Python", "Coroutines"]
    },
    {
        "question": "What is the difference between `__getitem__` and `__setitem__` in Python?",
        "options": [
            { "label": "`__getitem__` retrieves an item by key/index, while `__setitem__` sets an item by key/index", "is_correct": true },
            { "label": "`__getitem__` sets an item, while `__setitem__` retrieves an item", "is_correct": false },
            { "label": "`__getitem__` and `__setitem__` are identical in functionality", "is_correct": false }
        ],
        "answer_description": "`__getitem__` is used to retrieve an item by key or index, while `__setitem__` is used to set or update an item by key or index in a collection.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What is the purpose of the `contextlib` module in Python?",
        "options": [
            { "label": "To provide utilities for working with context managers and coroutines", "is_correct": true },
            { "label": "To manage and manipulate data streams", "is_correct": false },
            { "label": "To provide high-level networking utilities", "is_correct": false }
        ],
        "answer_description": "The `contextlib` module provides utilities for working with context managers and coroutines, including helper functions for defining context managers.",
        "difficulty": "hard",
        "tags": ["Python", "Context Managers"]
    },
    {
        "question": "How can you use `multiprocessing` to parallelize a task in Python?",
        "options": [
            { "label": "By creating `Process` objects and starting them", "is_correct": true },
            { "label": "By using the `Thread` class from `threading` module", "is_correct": false },
            { "label": "By using asynchronous `await` statements", "is_correct": false }
        ],
        "answer_description": "To parallelize a task in Python using `multiprocessing`, you create `Process` objects and start them, which allows for concurrent execution of tasks.",
        "difficulty": "hard",
        "tags": ["Python", "Multiprocessing"]
    },
    {
        "question": "What is a Python descriptor and how is it used?",
        "options": [
            { "label": "A descriptor is an object that defines how attributes are accessed or modified", "is_correct": true },
            { "label": "A descriptor is a type of metaclass for defining new classes", "is_correct": false },
            { "label": "A descriptor is a utility for file handling operations", "is_correct": false }
        ],
        "answer_description": "A Python descriptor is an object that defines how attributes are accessed or modified by implementing methods like `__get__`, `__set__`, and `__delete__`.",
        "difficulty": "hard",
        "tags": ["Python", "Descriptors"]
    },
    {
        "question": "What is the purpose of the `abc` module in Python?",
        "options": [
            { "label": "To define abstract base classes for establishing interfaces", "is_correct": true },
            { "label": "To handle binary data operations", "is_correct": false },
            { "label": "To provide advanced string manipulation functions", "is_correct": false }
        ],
        "answer_description": "The `abc` module provides tools for defining abstract base classes, which can be used to establish and enforce interfaces for other classes.",
        "difficulty": "hard",
        "tags": ["Python", "Abstract Base Classes"]
    },
    {
        "question": "What is the use of the `__slots__` declaration in Python classes?",
        "options": [
            { "label": "To restrict the attributes that can be added to instances, saving memory", "is_correct": true },
            { "label": "To define class-level attributes", "is_correct": false },
            { "label": "To specify class inheritance", "is_correct": false }
        ],
        "answer_description": "The `__slots__` declaration in a Python class is used to restrict the attributes that can be added to instances, which helps save memory by preventing the creation of a dynamic attribute dictionary.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What does the `__iter__` method do in a Python class?",
        "options": [
            { "label": "It returns an iterator object", "is_correct": true },
            { "label": "It defines how objects are compared", "is_correct": false },
            { "label": "It initializes instance attributes", "is_correct": false }
        ],
        "answer_description": "The `__iter__` method returns an iterator object, which is used to iterate over instances of the class.",
        "difficulty": "hard",
        "tags": ["Python", "Iteration"]
    },
    {
        "question": "What is a generator expression and how does it differ from a list comprehension?",
        "options": [
            { "label": "A generator expression returns an iterator and uses lazy evaluation, while a list comprehension creates a list in memory", "is_correct": true },
            { "label": "A generator expression creates a list in memory, while a list comprehension returns an iterator", "is_correct": false },
            { "label": "A generator expression and list comprehension are identical in functionality", "is_correct": false }
        ],
        "answer_description": "A generator expression returns an iterator and uses lazy evaluation, meaning it generates items one at a time and on-demand, whereas a list comprehension creates a list in memory containing all the items.",
        "difficulty": "hard",
        "tags": ["Python", "Generators"]
    },
    {
        "question": "How can you handle multiple exceptions in a single `except` block?",
        "options": [
            { "label": "By specifying a tuple of exceptions", "is_correct": true },
            { "label": "By using multiple `except` blocks", "is_correct": false },
            { "label": "By using the `finally` block", "is_correct": false }
        ],
        "answer_description": "You can handle multiple exceptions in a single `except` block by specifying a tuple of exceptions to catch.",
        "difficulty": "hard",
        "tags": ["Python", "Exceptions"]
    },
    {
        "question": "What is the difference between `__call__` and `__getitem__` in Python?",
        "options": [
            { "label": "`__call__` allows an instance to be called as a function, while `__getitem__` allows access to an item by key/index", "is_correct": true },
            { "label": "`__call__` allows access to an item, while `__getitem__` allows an instance to be called as a function", "is_correct": false },
            { "label": "`__call__` and `__getitem__` are identical in functionality", "is_correct": false }
        ],
        "answer_description": "`__call__` allows an instance to be called as a function, whereas `__getitem__` allows access to an item by key or index.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How do you use `type` to dynamically create a class in Python?",
        "options": [
            { "label": "By using `type(name, bases, dict)`", "is_correct": true },
            { "label": "By using `class name(base):` syntax", "is_correct": false },
            { "label": "By using `def class_name:` syntax", "is_correct": false }
        ],
        "answer_description": "You can use `type(name, bases, dict)` to dynamically create a class in Python, where `name` is the class name, `bases` is a tuple of base classes, and `dict` is a dictionary of attributes and methods.",
        "difficulty": "hard",
        "tags": ["Python", "Metaclasses"]
    },
    {
        "question": "What is the purpose of the `__slots__` attribute in Python classes?",
        "options": [
            { "label": "To limit the attributes that instances of the class can have, reducing memory usage", "is_correct": true },
            { "label": "To specify which methods are available in the class", "is_correct": false },
            { "label": "To control the inheritance of methods from base classes", "is_correct": false }
        ],
        "answer_description": "The `__slots__` attribute is used to limit the attributes that instances of the class can have, which reduces memory usage by preventing the creation of a `__dict__` for each instance.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What is a `decorator` in Python and how is it applied?",
        "options": [
            { "label": "A decorator is a function that modifies the behavior of another function or method, applied using the `@decorator` syntax", "is_correct": true },
            { "label": "A decorator is a type of class method used for modifying class attributes", "is_correct": false },
            { "label": "A decorator is a special kind of variable used to enhance function performance", "is_correct": false }
        ],
        "answer_description": "A decorator is a function that modifies the behavior of another function or method and is applied using the `@decorator` syntax before the function definition.",
        "difficulty": "hard",
        "tags": ["Python", "Decorators"]
    },
    {
        "question": "How does Python handle method resolution order (MRO) in multiple inheritance?",
        "options": [
            { "label": "Python uses the C3 linearization algorithm to determine the MRO", "is_correct": true },
            { "label": "Python uses a depth-first search algorithm to determine the MRO", "is_correct": false },
            { "label": "Python uses a breadth-first search algorithm to determine the MRO", "is_correct": false }
        ],
        "answer_description": "Python uses the C3 linearization algorithm to determine the method resolution order (MRO) in multiple inheritance scenarios.",
        "difficulty": "hard",
        "tags": ["Python", "Inheritance"]
    },
    {
        "question": "What is the purpose of the `abc` module in Python?",
        "options": [
            { "label": "To define abstract base classes for establishing interfaces and enforcing method implementations", "is_correct": true },
            { "label": "To handle asynchronous programming tasks", "is_correct": false },
            { "label": "To manage advanced mathematical operations", "is_correct": false }
        ],
        "answer_description": "The `abc` module is used to define abstract base classes, which establish interfaces and enforce method implementations for derived classes.",
        "difficulty": "hard",
        "tags": ["Python", "Abstract Base Classes"]
    },
    {
        "question": "How can you implement a custom context manager using a generator function?",
        "options": [
            { "label": "By using the `@contextmanager` decorator from the `contextlib` module", "is_correct": true },
            { "label": "By defining a class with `__enter__` and `__exit__` methods", "is_correct": false },
            { "label": "By overriding the `__call__` method in a class", "is_correct": false }
        ],
        "answer_description": "You can implement a custom context manager using a generator function by decorating it with the `@contextmanager` decorator from the `contextlib` module.",
        "difficulty": "hard",
        "tags": ["Python", "Context Managers"]
    },
    {
        "question": "What is the difference between `__new__` and `__init__` methods in Python classes?",
        "options": [
            { "label": "`__new__` creates a new instance of a class, while `__init__` initializes the instance", "is_correct": true },
            { "label": "`__new__` initializes the instance, while `__init__` creates a new instance", "is_correct": false },
            { "label": "`__new__` and `__init__` are identical in functionality", "is_correct": false }
        ],
        "answer_description": "`__new__` is responsible for creating a new instance of a class, while `__init__` is used to initialize the attributes of the newly created instance.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How can you optimize performance when using Python with large data sets?",
        "options": [
            { "label": "By using libraries like NumPy and pandas for efficient data manipulation", "is_correct": true },
            { "label": "By using a single-threaded approach for all operations", "is_correct": false },
            { "label": "By avoiding the use of built-in data structures", "is_correct": false }
        ],
        "answer_description": "To optimize performance with large data sets, you should use libraries like NumPy and pandas, which are optimized for efficient data manipulation and processing.",
        "difficulty": "hard",
        "tags": ["Python", "Performance"]
    },
    {
        "question": "What is the purpose of the `__reduce__` method in Python?",
        "options": [
            { "label": "To define how an object is serialized and deserialized", "is_correct": true },
            { "label": "To define how an object is compared for equality", "is_correct": false },
            { "label": "To define how an object is cloned or copied", "is_correct": false }
        ],
        "answer_description": "The `__reduce__` method is used to define how an object is serialized and deserialized, typically in the context of pickling.",
        "difficulty": "hard",
        "tags": ["Python", "Serialization"]
    },
    {
        "question": "What is a `weakref` in Python and when would you use it?",
        "options": [
            { "label": "A `weakref` is a weak reference to an object that does not prevent the object from being garbage collected", "is_correct": true },
            { "label": "A `weakref` is a strong reference to an object that increases its reference count", "is_correct": false },
            { "label": "A `weakref` is a reference that automatically updates when the object changes", "is_correct": false }
        ],
        "answer_description": "A `weakref` is a weak reference to an object that does not prevent the object from being garbage collected, useful for avoiding reference cycles or managing large caches.",
        "difficulty": "hard",
        "tags": ["Python", "Memory Management"]
    },
    {
        "question": "How can you handle and manage a large number of asynchronous tasks in Python?",
        "options": [
            { "label": "By using `asyncio` and event loops to manage concurrency", "is_correct": true },
            { "label": "By using multiple threads and the `threading` module", "is_correct": false },
            { "label": "By using synchronous I/O operations", "is_correct": false }
        ],
        "answer_description": "You can handle and manage a large number of asynchronous tasks in Python using `asyncio` and event loops, which allow for efficient concurrency and task management.",
        "difficulty": "hard",
        "tags": ["Python", "Asynchronous Programming"]
    },
    {
        "question": "What is the `__getattr__` method used for in Python?",
        "options": [
            { "label": "To define behavior when an attribute that does not exist is accessed", "is_correct": true },
            { "label": "To define behavior when an existing attribute is accessed", "is_correct": false },
            { "label": "To initialize attributes in a class", "is_correct": false }
        ],
        "answer_description": "The `__getattr__` method is used to define behavior when an attribute that does not exist is accessed, allowing for dynamic attribute retrieval.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What is the purpose of the `__del__` method in Python?",
        "options": [
            { "label": "To define cleanup behavior when an object is about to be destroyed", "is_correct": true },
            { "label": "To define initialization behavior for an object", "is_correct": false },
            { "label": "To handle method resolution in multiple inheritance", "is_correct": false }
        ],
        "answer_description": "The `__del__` method defines cleanup behavior when an object is about to be destroyed, allowing for resource deallocation or other finalization tasks.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How can you prevent a class from being subclassed in Python?",
        "options": [
            { "label": "By using the `final` decorator from the `typing` module", "is_correct": true },
            { "label": "By defining the class as `abstract`", "is_correct": false },
            { "label": "By making all methods private", "is_correct": false }
        ],
        "answer_description": "To prevent a class from being subclassed in Python, you can use the `final` decorator from the `typing` module, which signals that the class should not be extended.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What is the purpose of the `__class__` attribute in Python?",
        "options": [
            { "label": "To reference the class to which an instance belongs", "is_correct": true },
            { "label": "To store class-level attributes", "is_correct": false },
            { "label": "To initialize the class during object creation", "is_correct": false }
        ],
        "answer_description": "The `__class__` attribute references the class to which an instance belongs, allowing access to the class object from within instance methods.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How do you implement a custom iterable in Python?",
        "options": [
            { "label": "By defining `__iter__` and `__next__` methods in a class", "is_correct": true },
            { "label": "By defining `__iter__` method only", "is_correct": false },
            { "label": "By defining `__next__` method only", "is_correct": false }
        ],
        "answer_description": "To implement a custom iterable in Python, you define both `__iter__` and `__next__` methods in a class, which allows for iteration over the class instances.",
        "difficulty": "hard",
        "tags": ["Python", "Iteration"]
    },
    {
        "question": "What is the use of the `__contains__` method in Python?",
        "options": [
            { "label": "To define behavior for the `in` operator when checking membership", "is_correct": true },
            { "label": "To define how to convert an object to a string representation", "is_correct": false },
            { "label": "To define how to clone or copy an object", "is_correct": false }
        ],
        "answer_description": "The `__contains__` method is used to define behavior for the `in` operator when checking membership, allowing custom implementation of item containment checks.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What is a metaclass in Python, and how does it differ from a regular class?",
        "options": [
            { "label": "A metaclass is a class of a class that defines how classes are constructed, while a regular class is a blueprint for creating instances", "is_correct": true },
            { "label": "A metaclass is a subclass of a regular class", "is_correct": false },
            { "label": "A metaclass is used to handle instance-level data", "is_correct": false }
        ],
        "answer_description": "A metaclass is a class of a class that defines how classes are constructed and behave, whereas a regular class is a blueprint for creating instances of objects.",
        "difficulty": "hard",
        "tags": ["Python", "Metaclasses"]
    },
    {
        "question": "What is the purpose of the `__context__` attribute in Python context managers?",
        "options": [
            { "label": "It holds the context object during the execution of a context manager", "is_correct": true },
            { "label": "It defines the scope of the context manager", "is_correct": false },
            { "label": "It initializes the context manager when an object is created", "is_correct": false }
        ],
        "answer_description": "The `__context__` attribute holds the context object during the execution of a context manager, providing access to the context information.",
        "difficulty": "hard",
        "tags": ["Python", "Context Managers"]
    },
    {
        "question": "How does Python's garbage collection mechanism work?",
        "options": [
            { "label": "Python uses reference counting and a cyclic garbage collector to manage memory", "is_correct": true },
            { "label": "Python uses a manual memory management approach with explicit deallocation", "is_correct": false },
            { "label": "Python uses a single-threaded garbage collection mechanism only", "is_correct": false }
        ],
        "answer_description": "Python uses reference counting combined with a cyclic garbage collector to automatically manage memory, detecting and cleaning up cyclic references.",
        "difficulty": "hard",
        "tags": ["Python", "Memory Management"]
    },
    {
        "question": "What is the purpose of the `__mro__` attribute in Python?",
        "options": [
            { "label": "It provides the method resolution order of a class", "is_correct": true },
            { "label": "It lists all the methods defined in a class", "is_correct": false },
            { "label": "It stores metadata about class attributes", "is_correct": false }
        ],
        "answer_description": "The `__mro__` attribute provides the method resolution order (MRO) of a class, showing the sequence in which base classes are searched for methods.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How can you create a custom exception in Python?",
        "options": [
            { "label": "By subclassing the `Exception` class", "is_correct": true },
            { "label": "By defining a function with a `try` block", "is_correct": false },
            { "label": "By using the `warnings` module", "is_correct": false }
        ],
        "answer_description": "You create a custom exception in Python by subclassing the `Exception` class and adding any custom behavior or attributes as needed.",
        "difficulty": "hard",
        "tags": ["Python", "Exceptions"]
    },
    {
        "question": "What does the `__repr__` method do in Python?",
        "options": [
            { "label": "It returns a string representation of an object that is unambiguous", "is_correct": true },
            { "label": "It returns a string representation that is user-friendly", "is_correct": false },
            { "label": "It defines how an object is compared for equality", "is_correct": false }
        ],
        "answer_description": "The `__repr__` method returns a string representation of an object that is unambiguous and ideally could be used to recreate the object.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How do you implement method chaining in Python?",
        "options": [
            { "label": "By returning `self` from each method", "is_correct": true },
            { "label": "By defining all methods as class methods", "is_correct": false },
            { "label": "By using `staticmethod` for all methods", "is_correct": false }
        ],
        "answer_description": "Method chaining in Python is implemented by returning `self` from each method, allowing multiple methods to be called in a single statement.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What is the use of the `__call__` method in Python?",
        "options": [
            { "label": "It allows an instance of a class to be called as if it were a function", "is_correct": true },
            { "label": "It allows an instance to be directly compared to another object", "is_correct": false },
            { "label": "It allows the instance to manage its own memory allocation", "is_correct": false }
        ],
        "answer_description": "The `__call__` method allows an instance of a class to be called as if it were a function, enabling callable objects.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "What is the `__enter__` method used for in Python context managers?",
        "options": [
            { "label": "It initializes the context manager and returns the context object", "is_correct": true },
            { "label": "It finalizes the context manager and handles cleanup", "is_correct": false },
            { "label": "It defines how the context manager should be used with `with` statements", "is_correct": false }
        ],
        "answer_description": "The `__enter__` method initializes the context manager and returns the context object, which is used within the `with` statement block.",
        "difficulty": "hard",
        "tags": ["Python", "Context Managers"]
    },
    {
        "question": "How can you implement a metaclass in Python to customize class creation?",
        "options": [
            { "label": "By defining a metaclass and overriding the `__new__` or `__init__` methods", "is_correct": true },
            { "label": "By subclassing a base class and adding class-level attributes", "is_correct": false },
            { "label": "By using `staticmethod` to modify class behavior", "is_correct": false }
        ],
        "answer_description": "You can implement a metaclass by defining a metaclass and overriding the `__new__` or `__init__` methods to customize the class creation process.",
        "difficulty": "hard",
        "tags": ["Python", "Metaclasses"]
    },
    {
        "question": "What is a coroutine in Python, and how does it differ from a regular function?",
        "options": [
            { "label": "A coroutine is a special type of generator that can be paused and resumed, allowing for asynchronous programming", "is_correct": true },
            { "label": "A coroutine is a function that always returns a value", "is_correct": false },
            { "label": "A coroutine is a regular function with enhanced error handling capabilities", "is_correct": false }
        ],
        "answer_description": "A coroutine is a special type of generator that can be paused and resumed, allowing for asynchronous programming and concurrent tasks.",
        "difficulty": "hard",
        "tags": ["Python", "Asynchronous Programming"]
    },
    {
        "question": "What is the purpose of the `__getattr__` method in Python?",
        "options": [
            { "label": "To define behavior when an attribute that does not exist is accessed", "is_correct": true },
            { "label": "To define behavior when an existing attribute is accessed", "is_correct": false },
            { "label": "To initialize attributes in a class", "is_correct": false }
        ],
        "answer_description": "The `__getattr__` method defines behavior when an attribute that does not exist is accessed, providing a way to dynamically handle missing attributes.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    },
    {
        "question": "How do you create a class method in Python, and what is its purpose?",
        "options": [
            { "label": "By using the `@classmethod` decorator and defining the method with `cls` as its first parameter, allowing it to access class-level data", "is_correct": true },
            { "label": "By using the `@staticmethod` decorator and defining the method with `self` as its first parameter", "is_correct": false },
            { "label": "By defining a method without any decorators, allowing it to access instance-level data", "is_correct": false }
        ],
        "answer_description": "A class method in Python is created using the `@classmethod` decorator and defining the method with `cls` as its first parameter, allowing it to access and modify class-level data.",
        "difficulty": "hard",
        "tags": ["Python", "OOP"]
    }


]
export default questions