export  interface IQuestion {
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
        "question": "What is the correct way to start a PHP script tag?",
        "options": [
            {"label": "<?php", "is_correct": true},
            {"label": "<?", "is_correct": false},
            {"label": "<?php>", "is_correct": false}
        ],
        "answer_description": "In PHP, the opening tag is <?php.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "How do you output text in PHP?",
        "options": [
            {"label": "echo()", "is_correct": true},
            {"label": "print()", "is_correct": false},
            {"label": "output()", "is_correct": false}
        ],
        "answer_description": "The echo() function is used to output text in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which function is used to get the length of a string in PHP?",
        "options": [
            {"label": "strlen()", "is_correct": true},
            {"label": "strlength()", "is_correct": false},
            {"label": "length()", "is_correct": false}
        ],
        "answer_description": "The strlen() function is used to get the length of a string in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "How do you define a constant in PHP?",
        "options": [
            {"label": "define()", "is_correct": true},
            {"label": "const()", "is_correct": false},
            {"label": "constant()", "is_correct": false}
        ],
        "answer_description": "The define() function is used to define a constant in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What is the file extension for PHP files?",
        "options": [
            {"label": ".php", "is_correct": true},
            {"label": ".html", "is_correct": false},
            {"label": ".py", "is_correct": false}
        ],
        "answer_description": "PHP files typically have a .php extension.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to remove whitespace or other predefined characters from the beginning and end of a string?",
        "options": [
            {"label": "trim()", "is_correct": true},
            {"label": "strip()", "is_correct": false},
            {"label": "clean()", "is_correct": false}
        ],
        "answer_description": "The trim() function is used to remove whitespace or other predefined characters from the beginning and end of a string.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "How do you declare a variable in PHP?",
        "options": [
            {"label": "$", "is_correct": true},
            {"label": "@", "is_correct": false},
            {"label": "#", "is_correct": false}
        ],
        "answer_description": "Variables in PHP are declared using the $ symbol.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to redirect the user to a different page?",
        "options": [
            {"label": "header()", "is_correct": true},
            {"label": "redirect()", "is_correct": false},
            {"label": "location()", "is_correct": false}
        ],
        "answer_description": "The header() function is used to redirect the user to a different page in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which symbol is used to concatenate strings in PHP?",
        "options": [
            {"label": ".", "is_correct": true},
            {"label": "+", "is_correct": false},
            {"label": "&", "is_correct": false}
        ],
        "answer_description": "The . symbol is used to concatenate strings in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What does PHP stand for?",
        "options": [
            {"label": "Hypertext Preprocessor", "is_correct": true},
            {"label": "Personal Home Page", "is_correct": false},
            {"label": "Preprocessed Hypertext", "is_correct": false}
        ],
        "answer_description": "PHP stands for Hypertext Preprocessor.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to check if a variable is an array?",
        "options": [
            {"label": "is_array()", "is_correct": true},
            {"label": "check_array()", "is_correct": false},
            {"label": "array_check()", "is_correct": false}
        ],
        "answer_description": "The is_array() function is used to check if a variable is an array in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "How do you include one PHP file into another PHP file?",
        "options": [
            {"label": "include()", "is_correct": true},
            {"label": "insert()", "is_correct": false},
            {"label": "require()", "is_correct": false}
        ],
        "answer_description": "The include() function is used to include one PHP file into another PHP file.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What is the default method for sending form data?",
        "options": [
            {"label": "GET", "is_correct": true},
            {"label": "POST", "is_correct": false},
            {"label": "REQUEST", "is_correct": false}
        ],
        "answer_description": "The default method for sending form data is GET.",
        "difficulty": "easy",
        "tags": ["PHP", "HTML"]
    },
    {
        "question": "Which operator is used to check if two values are equal and of the same data type?",
        "options": [
            {"label": "===", "is_correct": true},
            {"label": "==", "is_correct": false},
            {"label": "=", "is_correct": false}
        ],
        "answer_description": "The === operator is used to check if two values are equal and of the same data type in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to generate a random number?",
        "options": [
            {"label": "rand()", "is_correct": true},
            {"label": "random()", "is_correct": false},
            {"label": "generate()", "is_correct": false}
        ],
        "answer_description": "The rand() function is used to generate a random number in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "How do you start a session in PHP?",
        "options": [
            {"label": "session_start()", "is_correct": true},
            {"label": "start_session()", "is_correct": false},
            {"label": "begin_session()", "is_correct": false}
        ],
        "answer_description": "You start a session in PHP using the session_start() function.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which loop is used to iterate over an array in PHP?",
        "options": [
            {"label": "foreach", "is_correct": true},
            {"label": "while", "is_correct": false},
            {"label": "for", "is_correct": false}
        ],
        "answer_description": "The foreach loop is used to iterate over an array in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What is the result of the expression '5 + '5' in PHP?",
        "options": [
            {"label": "10", "is_correct": true},
            {"label": "55", "is_correct": false},
            {"label": "Error", "is_correct": false}
        ],
        "answer_description": "In PHP, the expression '5 + '5'' results in 10.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP superglobal variable is used to access form data sent with the GET method?",
        "options": [
            {"label": "$_GET", "is_correct": true},
            {"label": "$_POST", "is_correct": false},
            {"label": "$_REQUEST", "is_correct": false}
        ],
        "answer_description": "The $_GET superglobal variable is used to access form data sent with the GET method in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to check if a file exists?",
        "options": [
            {"label": "file_exists()", "is_correct": true},
            {"label": "check_file()", "is_correct": false},
            {"label": "exist_file()", "is_correct": false}
        ],
        "answer_description": "The file_exists() function is used to check if a file exists in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which of the following is not a valid PHP variable name?",
        "options": [
            {"label": "$my-variable", "is_correct": true},
            {"label": "$my_variable", "is_correct": false},
            {"label": "$myVariable", "is_correct": false}
        ],
        "answer_description": "$my-variable is not a valid PHP variable name because it contains a hyphen.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the PHP function phpinfo()?",
        "options": [
            {"label": "Displays information about PHP configuration", "is_correct": true},
            {"label": "Prints 'Hello, World!'", "is_correct": false},
            {"label": "Runs a SQL query", "is_correct": false}
        ],
        "answer_description": "The phpinfo() function is used to display information about the PHP configuration.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to perform a case-insensitive search in a string?",
        "options": [
            {"label": "stripos()", "is_correct": true},
            {"label": "strpos()", "is_correct": false},
            {"label": "search()", "is_correct": false}
        ],
        "answer_description": "The stripos() function is used to perform a case-insensitive search in a string.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to change the case of a string to lowercase?",
        "options": [
            {"label": "strtolower()", "is_correct": true},
            {"label": "lowercase()", "is_correct": false},
            {"label": "case_lower()", "is_correct": false}
        ],
        "answer_description": "The strtolower() function is used to change the case of a string to lowercase in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What is the result of 5 + 3 in PHP?",
        "options": [
            {"label": "8", "is_correct": true},
            {"label": "53", "is_correct": false},
            {"label": "15", "is_correct": false}
        ],
        "answer_description": "The result of 5 + 3 in PHP is 8.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to check if a variable is an array?",
        "options": [
            {"label": "is_array()", "is_correct": true},
            {"label": "check_array()", "is_correct": false},
            {"label": "array_check()", "is_correct": false}
        ],
        "answer_description": "The is_array() function is used to check if a variable is an array in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "How do you include a file in PHP?",
        "options": [
            {"label": "include()", "is_correct": true},
            {"label": "import()", "is_correct": false},
            {"label": "require()", "is_correct": false}
        ],
        "answer_description": "Files can be included in PHP using the include() function.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which of the following is a correct way to comment in PHP?",
        "options": [
            {"label": "// This is a comment", "is_correct": false},
            {"label": "# This is a comment", "is_correct": false},
            {"label": "/* This is a comment */", "is_correct": true}
        ],
        "answer_description": "In PHP, multi-line comments are enclosed within /* */.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What is the correct syntax to start a 'for' loop in PHP?",
        "options": [
            {"label": "for ($i = 0; $i < 10; $i++)", "is_correct": true},
            {"label": "loop ($i = 0; $i < 10; $i++)", "is_correct": false},
            {"label": "for ($i = 0; $i < 10)", "is_correct": false}
        ],
        "answer_description": "The correct syntax to start a 'for' loop in PHP is for ($i = 0; $i < 10; $i++).",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which of the following is used to start a session in PHP?",
        "options": [
            {"label": "session_start()", "is_correct": true},
            {"label": "start_session()", "is_correct": false},
            {"label": "begin_session()", "is_correct": false}
        ],
        "answer_description": "session_start() function is used to start a session in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "How do you declare a constant case-insensitive in PHP?",
        "options": [
            {"label": "define('CONSTANT_NAME', value, true)", "is_correct": true},
            {"label": "const('CONSTANT_NAME', value, true)", "is_correct": false},
            {"label": "constant('CONSTANT_NAME', value, true)", "is_correct": false}
        ],
        "answer_description": "To declare a case-insensitive constant in PHP, you use define('CONSTANT_NAME', value, true).",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to check if a variable is empty?",
        "options": [
            {"label": "empty()", "is_correct": true},
            {"label": "is_empty()", "is_correct": false},
            {"label": "check_empty()", "is_correct": false}
        ],
        "answer_description": "The empty() function is used to check if a variable is empty in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "How do you start a 'while' loop in PHP?",
        "options": [
            {"label": "while(condition)", "is_correct": true},
            {"label": "loop(condition)", "is_correct": false},
            {"label": "for(condition)", "is_correct": false}
        ],
        "answer_description": "A 'while' loop in PHP is started with while(condition).",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to generate a random number?",
        "options": [
            {"label": "rand()", "is_correct": true},
            {"label": "random()", "is_correct": false},
            {"label": "randomize()", "is_correct": false}
        ],
        "answer_description": "The rand() function is used to generate a random number in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What is the correct way to end a PHP statement?",
        "options": [
            {"label": ";", "is_correct": true},
            {"label": ":", "is_correct": false},
            {"label": ".", "is_correct": false}
        ],
        "answer_description": "In PHP, statements are ended with a semicolon (;).",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "How do you declare a multi-dimensional array in PHP?",
        "options": [
            {"label": "$array = array(array(1,2), array(3,4));", "is_correct": true},
            {"label": "$array = [[1,2], [3,4]];", "is_correct": false},
            {"label": "$array = [1,2][3,4];", "is_correct": false}
        ],
        "answer_description": "A multi-dimensional array in PHP is declared as $array = array(array(1,2), array(3,4));.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "How do you access the value of a specific element in an array in PHP?",
        "options": [
            {"label": "$array[index];", "is_correct": true},
            {"label": "$array->index;", "is_correct": false},
            {"label": "$array(index);", "is_correct": false}
        ],
        "answer_description": "The value of a specific element in an array in PHP is accessed using $array[index].",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to sort an array in ascending order?",
        "options": [
            {"label": "sort()", "is_correct": true},
            {"label": "ascending()", "is_correct": false},
            {"label": "order()", "is_correct": false}
        ],
        "answer_description": "The sort() function is used to sort an array in ascending order in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What does 'echo' do in PHP?",
        "options": [
            {"label": "Outputs one or more strings", "is_correct": true},
            {"label": "Performs arithmetic operations", "is_correct": false},
            {"label": "Defines a constant", "is_correct": false}
        ],
        "answer_description": "In PHP, 'echo' is used to output one or more strings.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to format strings as HTML paragraphs?",
        "options": [
            {"label": "nl2br()", "is_correct": true},
            {"label": "br2nl()", "is_correct": false},
            {"label": "p2br()", "is_correct": false}
        ],
        "answer_description": "The nl2br() function is used to format strings as HTML paragraphs in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of 'htmlspecialchars' function in PHP?",
        "options": [
            {"label": "Converts special characters to HTML entities", "is_correct": true},
            {"label": "Converts HTML entities to special characters", "is_correct": false},
            {"label": "Encodes strings into JSON format", "is_correct": false}
        ],
        "answer_description": "The 'htmlspecialchars' function in PHP is used to convert special characters to HTML entities.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What is the use of the 'explode' function in PHP?",
        "options": [
            {"label": "Splits a string into an array", "is_correct": true},
            {"label": "Joins elements of an array into a string", "is_correct": false},
            {"label": "Finds the position of a substring in a string", "is_correct": false}
        ],
        "answer_description": "The 'explode' function in PHP is used to split a string into an array.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to find the length of an array?",
        "options": [
            {"label": "count()", "is_correct": true},
            {"label": "length()", "is_correct": false},
            {"label": "size()", "is_correct": false}
        ],
        "answer_description": "The 'count()' function is used to find the length of an array in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the 'implode' function in PHP?",
        "options": [
            {"label": "Joins elements of an array into a string", "is_correct": true},
            {"label": "Splits a string into an array", "is_correct": false},
            {"label": "Converts a string to lowercase", "is_correct": false}
        ],
        "answer_description": "The 'implode' function in PHP is used to join elements of an array into a string.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the 'str_replace' function in PHP?",
        "options": [
            {"label": "Replaces occurrences of a substring in a string", "is_correct": true},
            {"label": "Splits a string into an array", "is_correct": false},
            {"label": "Converts a string to uppercase", "is_correct": false}
        ],
        "answer_description": "The 'str_replace' function in PHP is used to replace occurrences of a substring in a string.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which of the following is used to start a 'foreach' loop in PHP?",
        "options": [
            {"label": "foreach ($array as $value)", "is_correct": true},
            {"label": "for ($i = 0; $i < count($array); $i++)", "is_correct": false},
            {"label": "while ($condition)", "is_correct": false}
        ],
        "answer_description": "The 'foreach' loop in PHP is started with foreach ($array as $value).",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What does the 'continue' statement do in PHP?",
        "options": [
            {
                "label": "Skips the rest of the current loop iteration and continues with the next iteration",
                "is_correct": true
            },
            {"label": "Exits the loop", "is_correct": false},
            {"label": "Breaks the loop", "is_correct": false}
        ],
        "answer_description": "In PHP, the 'continue' statement skips the rest of the current loop iteration and continues with the next iteration.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What does the 'break' statement do in PHP?",
        "options": [
            {"label": "Exits the loop", "is_correct": true},
            {
                "label": "Skips the rest of the current loop iteration and continues with the next iteration",
                "is_correct": false
            },
            {"label": "Resumes execution after the loop", "is_correct": false}
        ],
        "answer_description": "In PHP, the 'break' statement exits the loop.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "How do you define a function in PHP?",
        "options": [
            {"label": "function functionName() {}", "is_correct": true},
            {"label": "def functionName() {}", "is_correct": false},
            {"label": "func functionName() {}", "is_correct": false}
        ],
        "answer_description": "Functions in PHP are defined using the 'function' keyword followed by the function name and parameters inside parentheses.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "Which PHP function is used to check if a file exists?",
        "options": [
            {"label": "file_exists()", "is_correct": true},
            {"label": "check_file()", "is_correct": false},
            {"label": "exists_file()", "is_correct": false}
        ],
        "answer_description": "The 'file_exists()' function is used to check if a file exists in PHP.",
        "difficulty": "easy",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the PHP function `isset()`?",
        "options": [
            {"label": "Checks if a variable is set and is not NULL", "is_correct": true},
            {"label": "Declares a new variable", "is_correct": false},
            {"label": "Gets the value of a session variable", "is_correct": false}
        ],
        "answer_description": "`isset()` is used to check if a variable is set and is not NULL.",
        "difficulty": "medium",
        "tags": ["PHP"]
    },
    {
        "question": "How can you include a file in PHP?",
        "options": [
            {"label": "include()", "is_correct": true},
            {"label": "require()", "is_correct": false},
            {"label": "both include() and require()", "is_correct": false}
        ],
        "answer_description": "The `include()` function is used to include a file in PHP.",
        "difficulty": "medium",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the PHP `mysqli` extension?",
        "options": [
            {"label": "Provides functions for interacting with MySQL databases", "is_correct": true},
            {"label": "Handles file uploads", "is_correct": false},
            {"label": "Generates random numbers", "is_correct": false}
        ],
        "answer_description": "The `mysqli` extension is used for interacting with MySQL databases in PHP.",
        "difficulty": "medium",
        "tags": ["PHP", "MySQL"]
    },
    {
        "question": "How can you prevent SQL injection in PHP?",
        "options": [
            {"label": "Use prepared statements", "is_correct": true},
            {"label": "Escape all user inputs", "is_correct": false},
            {"label": "Disallow user input entirely", "is_correct": false}
        ],
        "answer_description": "To prevent SQL injection, it's recommended to use prepared statements in PHP.",
        "difficulty": "medium",
        "tags": ["PHP", "SQL"]
    },
    {
        "question": "What is the purpose of the PHP function `session_start()`?",
        "options": [
            {"label": "Starts a new session or resumes the existing session", "is_correct": true},
            {"label": "Ends the current session", "is_correct": false},
            {"label": "Destroys all session data", "is_correct": false}
        ],
        "answer_description": "`session_start()` is used to start a new session or resume the existing session in PHP.",
        "difficulty": "medium",
        "tags": ["PHP", "Sessions"]
    },
    {
        "question": "How can you declare an array in PHP?",
        "options": [
            {"label": "$myArray = array();", "is_correct": true},
            {"label": "$myArray = [];", "is_correct": false},
            {"label": "Both A and B", "is_correct": false}
        ],
        "answer_description": "Both `$myArray = array();` and `$myArray = [];` are correct ways to declare an array in PHP.",
        "difficulty": "medium",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the `use` statement in PHP namespaces?",
        "options": [
            {"label": "Imports namespaces or aliases", "is_correct": true},
            {"label": "Declares a new namespace", "is_correct": false},
            {"label": "Includes an external file", "is_correct": false}
        ],
        "answer_description": "The `use` statement in PHP is used to import namespaces or aliases.",
        "difficulty": "medium",
        "tags": ["PHP", "Namespaces"]
    },
    {
        "question": "How can you loop through an associative array in PHP?",
        "options": [
            {"label": "foreach($array as $key => $value)", "is_correct": true},
            {"label": "for($i = 0; $i < count($array); $i++)", "is_correct": false},
            {"label": "while($condition)", "is_correct": false}
        ],
        "answer_description": "To loop through an associative array in PHP, you can use `foreach($array as $key => $value)`.",
        "difficulty": "medium",
        "tags": ["PHP", "Arrays"]
    },
    {
        "question": "What is the purpose of the PHP magic constant `__FILE__`?",
        "options": [
            {"label": "Returns the current file path", "is_correct": true},
            {"label": "Represents the current line number", "is_correct": false},
            {"label": "Returns the current function name", "is_correct": false}
        ],
        "answer_description": "`__FILE__` in PHP returns the current file path.",
        "difficulty": "medium",
        "tags": ["PHP"]
    },
    {
        "question": "How can you access the value of a cookie in PHP?",
        "options": [
            {"label": "$_COOKIE['cookie_name']", "is_correct": true},
            {"label": "$_GET['cookie_name']", "is_correct": false},
            {"label": "$_SESSION['cookie_name']", "is_correct": false}
        ],
        "answer_description": "To access the value of a cookie in PHP, you can use `$_COOKIE['cookie_name']`.",
        "difficulty": "medium",
        "tags": ["PHP", "Cookies"]
    },
    {
        "question": "What is the purpose of the PHP function `json_encode()`?",
        "options": [
            {"label": "Converts a PHP array or object to a JSON string", "is_correct": true},
            {"label": "Decodes a JSON string", "is_correct": false},
            {"label": "Encodes a URL", "is_correct": false}
        ],
        "answer_description": "`json_encode()` is used to convert a PHP array or object to a JSON string.",
        "difficulty": "medium",
        "tags": ["PHP", "JSON"]
    },
    {
        "question": "How can you check if a variable is an integer in PHP?",
        "options": [
            {"label": "is_int($variable)", "is_correct": true},
            {"label": "intval($variable)", "is_correct": false},
            {"label": "int($variable)", "is_correct": false}
        ],
        "answer_description": "To check if a variable is an integer in PHP, you can use `is_int($variable)`.",
        "difficulty": "medium",
        "tags": ["PHP", "Variables"]
    },
    {
        "question": "What is the purpose of the PHP function `date()`?",
        "options": [
            {"label": "Returns the current date and time", "is_correct": true},
            {"label": "Sets the system date and time", "is_correct": false},
            {"label": "Calculates the time difference between two dates", "is_correct": false}
        ],
        "answer_description": "`date()` in PHP is used to return the current date and time.",
        "difficulty": "medium",
        "tags": ["PHP", "Date"]
    },
    {
        "question": "What does PDO stand for in PHP?",
        "options": [
            {"label": "PHP Data Objects", "is_correct": true},
            {"label": "PHP Database Operations", "is_correct": false},
            {"label": "Prepared Database Operations", "is_correct": false}
        ],
        "answer_description": "PDO stands for PHP Data Objects in PHP.",
        "difficulty": "medium",
        "tags": ["PHP", "Database"]
    },
    {
        "question": "How can you handle errors in PHP?",
        "options": [
            {"label": "Using try-catch blocks", "is_correct": true},
            {"label": "Using the die() function", "is_correct": false},
            {"label": "Using the error_reporting() function", "is_correct": false}
        ],
        "answer_description": "Errors in PHP can be handled using try-catch blocks.",
        "difficulty": "medium",
        "tags": ["PHP", "Error Handling"]
    },
    {
        "question": "What is the purpose of the PHP function `file_get_contents()`?",
        "options": [
            {"label": "Reads a file into a string", "is_correct": true},
            {"label": "Writes a string to a file", "is_correct": false},
            {"label": "Deletes a file", "is_correct": false}
        ],
        "answer_description": "`file_get_contents()` in PHP is used to read a file into a string.",
        "difficulty": "medium",
        "tags": ["PHP", "File Handling"]
    },
    {
        "question": "How can you check if a string contains a specific substring in PHP?",
        "options": [
            {"label": "strpos()", "is_correct": true},
            {"label": "contains()", "is_correct": false},
            {"label": "str_contains()", "is_correct": false}
        ],
        "answer_description": "To check if a string contains a specific substring in PHP, you can use `strpos()`.",
        "difficulty": "medium",
        "tags": ["PHP", "Strings"]
    },
    {
        "question": "What is the default scope of a PHP class property?",
        "options": [
            {"label": "Public", "is_correct": true},
            {"label": "Private", "is_correct": false},
            {"label": "Protected", "is_correct": false}
        ],
        "answer_description": "The default scope of a PHP class property is public.",
        "difficulty": "medium",
        "tags": ["PHP", "Object-Oriented Programming"]
    },
    {
        "question": "How can you prevent cross-site scripting (XSS) attacks in PHP?",
        "options": [
            {"label": "Use htmlspecialchars() to escape output", "is_correct": true},
            {"label": "Use htmlentities() to encode output", "is_correct": false},
            {"label": "Both A and B", "is_correct": false}
        ],
        "answer_description": "To prevent XSS attacks in PHP, you can use `htmlspecialchars()` to escape output.",
        "difficulty": "medium",
        "tags": ["PHP", "Security"]
    },
    {
        "question": "What is the purpose of the PHP function `unlink()`?",
        "options": [
            {"label": "Deletes a file", "is_correct": true},
            {"label": "Updates a file", "is_correct": false},
            {"label": "Creates a file", "is_correct": false}
        ],
        "answer_description": "`unlink()` in PHP is used to delete a file.",
        "difficulty": "medium",
        "tags": ["PHP", "File Handling"]
    },
    {
        "question": "How can you check if a string starts with a specific substring in PHP?",
        "options": [
            {"label": "startsWith()", "is_correct": false},
            {"label": "substr()", "is_correct": false},
            {"label": "strpos() === 0", "is_correct": true}
        ],
        "answer_description": "To check if a string starts with a specific substring in PHP, you can use `strpos() === 0`.",
        "difficulty": "medium",
        "tags": ["PHP", "Strings"]
    },
    {
        "question": "What is the purpose of the PHP function `array_push()`?",
        "options": [
            {"label": "Adds one or more elements to the end of an array", "is_correct": true},
            {"label": "Removes the last element from an array", "is_correct": false},
            {"label": "Sorts the elements of an array", "is_correct": false}
        ],
        "answer_description": "`array_push()` in PHP is used to add one or more elements to the end of an array.",
        "difficulty": "medium",
        "tags": ["PHP", "Arrays"]
    },
    {
        "question": "What is the purpose of the PHP function `header()`?",
        "options": [
            {"label": "Send a raw HTTP header", "is_correct": true},
            {"label": "Include an external file", "is_correct": false},
            {"label": "Start a new session", "is_correct": false}
        ],
        "answer_description": "`header()` in PHP is used to send a raw HTTP header.",
        "difficulty": "medium",
        "tags": ["PHP", "HTTP"]
    },
    {
        "question": "What is the purpose of the PHP function `array_merge()`?",
        "options": [
            {"label": "Merges one or more arrays", "is_correct": true},
            {"label": "Splits an array into multiple arrays", "is_correct": false},
            {"label": "Sorts the elements of an array", "is_correct": false}
        ],
        "answer_description": "`array_merge()` in PHP is used to merge one or more arrays.",
        "difficulty": "medium",
        "tags": ["PHP", "Arrays"]
    },
    {
        "question": "How can you convert a string to lowercase in PHP?",
        "options": [
            {"label": "strtolower()", "is_correct": true},
            {"label": "lowercase()", "is_correct": false},
            {"label": "lc()", "is_correct": false}
        ],
        "answer_description": "To convert a string to lowercase in PHP, you can use `strtolower()`.",
        "difficulty": "medium",
        "tags": ["PHP", "Strings"]
    },
    {
        "question": "What is the purpose of the PHP function `count()`?",
        "options": [
            {"label": "Returns the number of elements in an array", "is_correct": true},
            {"label": "Counts the number of characters in a string", "is_correct": false},
            {"label": "Counts the number of occurrences of a substring", "is_correct": false}
        ],
        "answer_description": "`count()` in PHP is used to return the number of elements in an array.",
        "difficulty": "medium",
        "tags": ["PHP", "Arrays"]
    },
    {
        "question": "What is the purpose of the PHP function `preg_match()` ? ",
        "options": [
            {"label": "Perform a regular expression match", "is_correct": true},
            {"label": "Match two strings", "is_correct": false},
            {"label": "Search for a substring", "is_correct": false}
        ],
        "answer_description":
            "`preg_match()` in PHP is used to perform a regular expression match.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Regular Expressions"]
    },
    {
        "question":
            "What is the default session storage mechanism in PHP?",
        "options":
            [
                {"label": "Files", "is_correct": true},
                {"label": "Cookies", "is_correct": false},
                {"label": "Databases", "is_correct": false}
            ],
        "answer_description":
            "The default session storage mechanism in PHP is files.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Sessions"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_unique()`?",
        "options":
            [
                {"label": "Removes duplicate values from an array", "is_correct": true},
                {"label": "Sorts an array in ascending order", "is_correct": false},
                {"label": "Reverses the order of elements in an array", "is_correct": false}
            ],
        "answer_description":
            "`array_unique()` in PHP is used to remove duplicate values from an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "How can you check if a variable is empty in PHP?",
        "options":
            [
                {"label": "empty()", "is_correct": true},
                {"label": "is_empty()", "is_correct": false},
                {"label": "isNull()", "is_correct": false}
            ],
        "answer_description":
            "To check if a variable is empty in PHP, you can use `empty()`.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Variables"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_keys()`?",
        "options":
            [
                {"label": "Returns all the keys or a subset of the keys of an array", "is_correct": true},
                {"label": "Returns all the values of an array", "is_correct": false},
                {"label": "Sorts the elements of an array by keys", "is_correct": false}
            ],
        "answer_description":
            "`array_keys()` in PHP is used to return all the keys or a subset of the keys of an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "How can you access the last element of an array in PHP?",
        "options":
            [
                {"label": "$array[count($array) - 1]", "is_correct": true},
                {"label": "$array[end($array)]", "is_correct": false},
                {"label": "$array[last($array)]", "is_correct": false}
            ],
        "answer_description":
            "To access the last element of an array in PHP, you can use `$array[count($array) - 1]`.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_map()`?",
        "options":
            [
                {"label": "Applies a callback function to each element of an array", "is_correct": true},
                {"label": "Merges two or more arrays", "is_correct": false},
                {"label": "Filters elements of an array using a callback function", "is_correct": false}
            ],
        "answer_description":
            "`array_map()` in PHP is used to apply a callback function to each element of an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_reverse()`?",
        "options":
            [
                {"label": "Reverses the order of elements in an array", "is_correct": true},
                {"label": "Sorts an array in descending order", "is_correct": false},
                {"label": "Removes duplicate values from an array", "is_correct": false}
            ],
        "answer_description":
            "`array_reverse()` in PHP is used to reverse the order of elements in an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_search()`?",
        "options":
            [
                {
                    "label": "Searches an array for a given value and returns the corresponding key if successful",
                    "is_correct": true
                },
                {"label": "Returns the first element of an array", "is_correct": false},
                {
                    "label": "Checks if a value exists in an array", "is_correct": false
                }
            ],
        "answer_description":
            "`array_search()` in PHP is used to search an array for a given value and returns the corresponding key if successful.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    },
    {
        "question":
            "What is the purpose of the PHP function `array_slice()`?",
        "options":
            [
                {"label": "Extracts a slice of an array", "is_correct": true},
                {"label": "Reverses the order of elements in an array", "is_correct": false},
                {"label": "Sorts an array in ascending order", "is_correct": false}
            ],
        "answer_description":
            "`array_slice()` in PHP is used to extract a slice of an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_intersect()`?",
        "options":
            [
                {"label": "Computes the intersection of arrays", "is_correct": true},
                {"label": "Merges two or more arrays", "is_correct": false},
                {"label": "Filters elements of an array using a callback function", "is_correct": false}
            ],
        "answer_description":
            "`array_intersect()` in PHP is used to compute the intersection of arrays.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_diff()`?",
        "options":
            [
                {"label": "Computes the difference of arrays", "is_correct": true},
                {"label": "Merges two or more arrays", "is_correct": false},
                {"label": "Filters elements of an array using a callback function", "is_correct": false}
            ],
        "answer_description":
            "`array_diff()` in PHP is used to compute the difference of arrays.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_combine()`?",
        "options":
            [
                {
                    "label": "Creates an array by using one array for keys and another for its values",
                    "is_correct": true
                },
                {"label": "Merges two or more arrays", "is_correct": false},
                {"label": "Reverses the order of elements in an array", "is_correct": false}
            ],
        "answer_description":
            "`array_combine()` in PHP is used to create an array by using one array for keys and another for its values.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_key_exists()`?",
        "options":
            [
                {"label": "Checks if the given key or index exists in the array", "is_correct": true},
                {"label": "Checks if the given value exists in the array", "is_correct": false},
                {"label": "Returns the value of the given key or index in the array", "is_correct": false}
            ],
        "answer_description":
            "`array_key_exists()` in PHP is used to check if the given key or index exists in the array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_values()`?",
        "options":
            [
                {"label": "Returns all the values of an array", "is_correct": true},
                {"label": "Returns all the keys of an array", "is_correct": false},
                {"label": "Returns a subset of the keys or values of an array", "is_correct": false}
            ],
        "answer_description":
            "`array_values()` in PHP is used to return all the values of an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_pop()`?",
        "options":
            [
                {"label": "Removes the last element from an array", "is_correct": true},
                {"label": "Adds one or more elements to the end of an array", "is_correct": false},
                {"label": "Reverses the order of elements in an array", "is_correct": false}
            ],
        "answer_description":
            "`array_pop()` in PHP is used to remove the last element from an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_push()`?",
        "options":
            [
                {"label": "Adds one or more elements to the end of an array", "is_correct": true},
                {"label": "Removes the last element from an array", "is_correct": false},
                {"label": "Reverses the order of elements in an array", "is_correct": false}
            ],
        "answer_description":
            "`array_push()` in PHP is used to add one or more elements to the end of an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_shift()`?",
        "options":
            [
                {"label": "Removes the first element from an array", "is_correct": true},
                {"label": "Removes the last element from an array", "is_correct": false},
                {"label": "Adds one or more elements to the beginning of an array", "is_correct": false}
            ],
        "answer_description":
            "`array_shift()` in PHP is used to remove the first element from an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_unshift()`?",
        "options":
            [
                {"label": "Adds one or more elements to the beginning of an array", "is_correct": true},
                {"label": "Removes the first element from an array", "is_correct": false},
                {"label": "Reverses the order of elements in an array", "is_correct": false}
            ],
        "answer_description":
            "`array_unshift()` in PHP is used to add one or more elements to the beginning of an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_flip()`?",
        "options":
            [
                {"label": "Exchanges all keys with their associated values in an array", "is_correct": true},
                {"label": "Reverses the order of elements in an array", "is_correct": false},
                {"label": "Removes duplicate values from an array", "is_correct": false}
            ],
        "answer_description":
            "`array_flip()` in PHP is used to exchange all keys with their associated values in an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question": "What is the purpose of the PHP function `array_merge_recursive()` ? ",
        "options":
            [
                {"label": "Recursively merges two or more arrays", "is_correct": true},
                {"label": "Merges two or more arrays", "is_correct": false},
                {"label": "Reverses the order of elements in an array", "is_correct": false}
            ],
        "answer_description":
            "`array_merge_recursive()` in PHP is used to recursively merge two or more arrays.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_pad()`?",
        "options":
            [
                {"label": "Pad an array to a certain length with a specified value", "is_correct": true},
                {"label": "Reverses the order of elements in an array", "is_correct": false},
                {"label": "Merges two or more arrays", "is_correct": false}
            ],
        "answer_description":
            "`array_pad()` in PHP is used to pad an array to a certain length with a specified value.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_replace()`?",
        "options":
            [
                {
                    "label": "Replaces the values of the first array with the values from following arrays",
                    "is_correct": true
                },
                {"label": "Merges two or more arrays", "is_correct": false},
                {"label": "Reverses the order of elements in an array", "is_correct": false}
            ],
        "answer_description":
            "`array_replace()` in PHP is used to replace the values of the first array with the values from following arrays.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_chunk()`?",
        "options":
            [
                {"label": "Split an array into chunks", "is_correct": true},
                {"label": "Reverses the order of elements in an array", "is_correct": false},
                {"label": "Merges two or more arrays", "is_correct": false}
            ],
        "answer_description":
            "`array_chunk()` in PHP is used to split an array into chunks.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_count_values()`?",
        "options":
            [
                {"label": "Counts all the values of an array", "is_correct": true},
                {"label": "Counts the number of elements in an array", "is_correct": false},
                {"label": "Returns all the keys of an array", "is_correct": false}
            ],
        "answer_description":
            "`array_count_values()` in PHP is used to count all the values of an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_fill()`?",
        "options":
            [
                {"label": "Fill an array with values", "is_correct": true},
                {"label": "Reverses the order of elements in an array", "is_correct": false},
                {"label": "Merges two or more arrays", "is_correct": false}
            ],
        "answer_description":
            "`array_fill()` in PHP is used to fill an array with values.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_filter()`?",
        "options":
            [
                {"label": "Filters elements of an array using a callback function", "is_correct": true},
                {"label": "Sorts the elements of an array", "is_correct": false},
                {"label": "Reverses the order of elements in an array", "is_correct": false}
            ],
        "answer_description":
            "`array_filter()` in PHP is used to filter elements of an array using a callback function.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_map()`?",
        "options":
            [
                {"label": "Applies a callback function to each element of an array", "is_correct": true},
                {"label": "Merges two or more arrays", "is_correct": false},
                {"label": "Reverses the order of elements in an array", "is_correct": false}
            ],
        "answer_description":
            "`array_map()` in PHP is used to apply a callback function to each element of an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_product()`?",
        "options":
            [
                {"label": "Calculate the product of values in an array", "is_correct": true},
                {"label": "Calculate the sum of values in an array", "is_correct": false},
                {"label": "Calculate the average of values in an array", "is_correct": false}
            ],
        "answer_description":
            "`array_product()` in PHP is used to calculate the product of values in an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_rand()`?",
        "options":
            [
                {"label": "Pick one or more random keys from an array", "is_correct": true},
                {"label": "Sort the keys of an array", "is_correct": false},
                {"label": "Shuffle the elements of an array", "is_correct": false}
            ],
        "answer_description":
            "`array_rand()` in PHP is used to pick one or more random keys from an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question": "What is the purpose of the PHP function `array_reduce()` ? ",
        "options":
            [
                {"label": "Reduce an array to a single value via callback function", "is_correct": true},
                {"label": "Merges two or more arrays", "is_correct": false},
                {"label": "Reverses the order of elements in an array", "is_correct": false}
            ],
        "answer_description":
            "`array_reduce()` in PHP is used to reduce an array to a single value via callback function.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_reverse()`?",
        "options":
            [
                {"label": "Reverse the order of elements in an array", "is_correct": true},
                {"label": "Sort the keys of an array", "is_correct": false},
                {"label": "Shuffle the elements of an array", "is_correct": false}
            ],
        "answer_description":
            "`array_reverse()` in PHP is used to reverse the order of elements in an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_shift()`?",
        "options":
            [
                {"label": "Remove the first element from an array", "is_correct": true},
                {"label": "Remove the last element from an array", "is_correct": false},
                {"label": "Shuffle the elements of an array", "is_correct": false}
            ],
        "answer_description":
            "`array_shift()` in PHP is used to remove the first element from an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_slice()`?",
        "options":
            [
                {"label": "Extract a slice of an array", "is_correct": true},
                {"label": "Reverse the order of elements in an array", "is_correct": false},
                {"label": "Shuffle the elements of an array", "is_correct": false}
            ],
        "answer_description":
            "`array_slice()` in PHP is used to extract a slice of an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_splice()`?",
        "options":
            [
                {"label": "Remove a portion of the array and replace it with something else", "is_correct": true},
                {"label": "Split an array into chunks", "is_correct": false},
                {"label": "Shuffle the elements of an array", "is_correct": false}
            ],
        "answer_description":
            "`array_splice()` in PHP is used to remove a portion of the array and replace it with something else.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_sum()`?",
        "options":
            [
                {"label": "Calculate the sum of values in an array", "is_correct": true},
                {"label": "Calculate the product of values in an array", "is_correct": false},
                {"label": "Calculate the average of values in an array", "is_correct": false}
            ],
        "answer_description":
            "`array_sum()` in PHP is used to calculate the sum of values in an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_unique()`?",
        "options":
            [
                {"label": "Remove duplicate values from an array", "is_correct": true},
                {"label": "Sort the keys of an array", "is_correct": false},
                {"label": "Shuffle the elements of an array", "is_correct": false}
            ],
        "answer_description":
            "`array_unique()` in PHP is used to remove duplicate values from an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `array_values()`?",
        "options":
            [
                {"label": "Return all the values of an array", "is_correct": true},
                {"label": "Return all the keys of an array", "is_correct": false},
                {"label": "Return a subset of the keys or values of an array", "is_correct": false}
            ],
        "answer_description":
            "`array_values()` in PHP is used to return all the values of an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question": "What is the purpose of the PHP function `arsort()` ? ",
        "options":
            [
                {"label": "Sort an array in reverse order and maintain index association", "is_correct": true},
                {"label": "Sort an array in ascending order and maintain index association", "is_correct": false},
                {"label": "Sort an array by keys in reverse order", "is_correct": false}
            ],
        "answer_description":
            "`arsort()` in PHP is used to sort an array in reverse order and maintain index association.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `asort()`?",
        "options":
            [
                {"label": "Sort an array in ascending order and maintain index association", "is_correct": true},
                {"label": "Sort an array in reverse order and maintain index association", "is_correct": false},
                {"label": "Sort an array by keys in ascending order", "is_correct": false}
            ],
        "answer_description":
            "`asort()` in PHP is used to sort an array in ascending order and maintain index association.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `compact()`?",
        "options":
            [
                {"label": "Create an array containing variables and their values", "is_correct": true},
                {"label": "Merge two or more arrays", "is_correct": false},
                {"label": "Sort the elements of an array", "is_correct": false}
            ],
        "answer_description":
            "`compact()` in PHP is used to create an array containing variables and their values.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Arrays"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `count_chars()`?",
        "options":
            [
                {"label": "Return information about characters used in a string", "is_correct": true},
                {"label": "Return the number of characters in a string", "is_correct": false},
                {
                    "label": "Count the number of occurrences of each byte value (0..255) in a string",
                    "is_correct": false
                }
            ],
        "answer_description":
            "`count_chars()` in PHP is used to return information about characters used in a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `crypt()`?",
        "options":
            [
                {"label": "One-way string hashing", "is_correct": true},
                {"label": "String encryption", "is_correct": false},
                {"label": "String decryption", "is_correct": false}
            ],
        "answer_description":
            "`crypt()` in PHP is used for one-way string hashing.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Security"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `explode()`?",
        "options":
            [
                {"label": "Split a string by a specified delimiter", "is_correct": true},
                {"label": "Merge two or more strings", "is_correct": false},
                {"label": "Extract a substring from a string", "is_correct": false}
            ],
        "answer_description":
            "`explode()` in PHP is used to split a string by a specified delimiter.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `htmlspecialchars()`?",
        "options":
            [
                {"label": "Convert special characters to HTML entities", "is_correct": true},
                {"label": "Convert HTML entities to special characters", "is_correct": false},
                {"label": "Escape single quote strings", "is_correct": false}
            ],
        "answer_description":
            "`htmlspecialchars()` in PHP is used to convert special characters to HTML entities.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `implode()`?",
        "options":
            [
                {"label": "Join array elements with a string", "is_correct": true},
                {"label": "Split a string into an array", "is_correct": false},
                {"label": "Extract a substring from a string", "is_correct": false}
            ],
        "answer_description":
            "`implode()` in PHP is used to join array elements with a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `lcfirst()`?",
        "options":
            [
                {"label": "Make a string's first character lowercase", "is_correct": true},
                {"label": "Make a string's first character uppercase", "is_correct": false},
                {"label": "Convert a string to lowercase", "is_correct": false}
            ],
        "answer_description":
            "`lcfirst()` in PHP is used to make a string's first character lowercase.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `ltrim()`?",
        "options":
            [
                {"label": "Remove whitespace or other characters from the left side of a string", "is_correct": true},
                {"label": "Remove whitespace or other characters from the right side of a string", "is_correct": false},
                {"label": "Return the length of a string", "is_correct": false}
            ],
        "answer_description":
            "`ltrim()` in PHP is used to remove whitespace or other characters from the left side of a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `md5()`?",
        "options":
            [
                {"label": "Calculate the MD5 hash of a string", "is_correct": true},
                {"label": "Calculate the SHA1 hash of a string", "is_correct": false},
                {"label": "Encrypt a string using MD5 algorithm", "is_correct": false}
            ],
        "answer_description":
            "`md5()` in PHP is used to calculate the MD5 hash of a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Security"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `nl2br()`?",
        "options":
            [
                {"label": "Inserts HTML line breaks before all newlines in a string", "is_correct": true},
                {"label": "Removes HTML line breaks from a string", "is_correct": false},
                {"label": "Converts newline characters to HTML entities", "is_correct": false}
            ],
        "answer_description":
            "`nl2br()` in PHP is used to insert HTML line breaks before all newlines in a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `number_format()`?",
        "options": [
            {
                "label":
                    "Format a number with grouped thousands", "is_correct":
                    true
            }
            ,
            {
                "label":
                    "Format a number as currency", "is_correct":
                    false
            }
            ,
            {
                "label":
                    "Round fractions to a specified precision", "is_correct":
                    false
            }
        ],
        "answer_description":
            "`number_format()` in PHP is used to format a number with grouped thousands.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Numbers"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `ord()`?",
        "options":
            [
                {"label": "Return ASCII value of the first character of a string", "is_correct": true},
                {"label": "Return the length of a string", "is_correct": false},
                {"label": "Return a portion of a string", "is_correct": false}
            ],
        "answer_description":
            "`ord()` in PHP is used to return the ASCII value of the first character of a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `rtrim()`?",
        "options":
            [
                {"label": "Remove whitespace or other characters from the right side of a string", "is_correct": true},
                {"label": "Remove whitespace or other characters from the left side of a string", "is_correct": false},
                {"label": "Return the length of a string", "is_correct": false}
            ],
        "answer_description":
            "`rtrim()` in PHP is used to remove whitespace or other characters from the right side of a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `sha1()`?",
        "options":
            [
                {"label": "Calculate the SHA1 hash of a string", "is_correct": true},
                {"label": "Calculate the MD5 hash of a string", "is_correct": false},
                {"label": "Encrypt a string using SHA1 algorithm", "is_correct": false}
            ],
        "answer_description":
            "`sha1()` in PHP is used to calculate the SHA1 hash of a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Security"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `similar_text()`?",
        "options":
            [
                {"label": "Calculate the similarity between two strings", "is_correct": true},
                {"label": "Check if two strings are identical", "is_correct": false},
                {"label": "Compare two strings based on their length", "is_correct": false}
            ],
        "answer_description":
            "`similar_text()` in PHP is used to calculate the similarity between two strings.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `sprintf()`?",
        "options":
            [
                {"label": "Return a formatted string", "is_correct": true},
                {"label": "Split a string into an array", "is_correct": false},
                {"label": "Merge two or more strings", "is_correct": false}
            ],
        "answer_description":
            "`sprintf()` in PHP is used to return a formatted string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `str_getcsv()`?",
        "options":
            [
                {"label": "Parse a CSV string into an array", "is_correct": true},
                {"label": "Convert an array into a CSV string", "is_correct": false},
                {"label": "Get the first character of a string", "is_correct": false}
            ],
        "answer_description":
            "`str_getcsv()` in PHP is used to parse a CSV string into an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `str_ireplace()`?",
        "options":
            [
                {"label": "Case-insensitive string replacement", "is_correct": true},
                {"label": "Case-sensitive string replacement", "is_correct": false},
                {"label": "Reverse a string", "is_correct": false}
            ],
        "answer_description":
            "`str_ireplace()` in PHP is used for case-insensitive string replacement.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `str_pad()`?",
        "options":
            [
                {"label": "Pad a string to a certain length with another string", "is_correct": true},
                {
                    "label": "Trim whitespace or other characters from the beginning and end of a string",
                    "is_correct": false
                },
                {"label": "Repeat a string a specified number of times", "is_correct": false}
            ],
        "answer_description":
            "`str_pad()` in PHP is used to pad a string to a certain length with another string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `str_repeat()`?",
        "options":
            [
                {"label": "Repeat a string a specified number of times", "is_correct": true},
                {"label": "Pad a string to a certain length with another string", "is_correct": false},
                {
                    "label": "Trim whitespace or other characters from the beginning and end of a string",
                    "is_correct": false
                }
            ],
        "answer_description":
            "`str_repeat()` in PHP is used to repeat a string a specified number of times.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `str_replace()`?",
        "options":
            [
                {"label": "Case-sensitive string replacement", "is_correct": true},
                {"label": "Case-insensitive string replacement", "is_correct": false},
                {"label": "Reverse a string", "is_correct": false}
            ],
        "answer_description":
            "`str_replace()` in PHP is used for case-sensitive string replacement.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `str_shuffle()`?",
        "options":
            [
                {"label": "Randomly shuffle a string", "is_correct": true},
                {"label": "Sort characters of a string in ascending order", "is_correct": false},
                {"label": "Sort characters of a string in descending order", "is_correct": false}
            ],
        "answer_description":
            "`str_shuffle()` in PHP is used to randomly shuffle a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `str_split()`?",
        "options":
            [
                {"label": "Convert a string to an array", "is_correct": true},
                {
                    "label": "Split a string into an array", "is_correct": false
                },
                {"label": "Join array elements with a string", "is_correct": false}
            ],
        "answer_description":
            "`str_split()` in PHP is used to convert a string to an array.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    },
    {
        "question":
            "What is the purpose of the PHP function `str_word_count()`?",
        "options":
            [
                {"label": "Count the number of words in a string", "is_correct": true},
                {"label": "Return an array of words from a string", "is_correct": false},
                {"label": "Reverse the order of words in a string", "is_correct": false}
            ],
        "answer_description":
            "`str_word_count()` in PHP is used to count the number of words in a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `strcasecmp()`?",
        "options":
            [
                {"label": "Case-insensitive string comparison", "is_correct": true},
                {"label": "Case-sensitive string comparison", "is_correct": false},
                {"label": "Check if a string starts with another string", "is_correct": false}
            ],
        "answer_description":
            "`strcasecmp()` in PHP is used for case-insensitive string comparison.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `strcoll()`?",
        "options":
            [
                {"label": "String comparison based on a specific locale", "is_correct": true},
                {"label": "Case-sensitive string comparison", "is_correct": false},
                {"label": "Case-insensitive string comparison", "is_correct": false}
            ],
        "answer_description":
            "`strcoll()` in PHP is used for string comparison based on a specific locale.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `strip_tags()`?",
        "options":
            [
                {"label": "Remove HTML and PHP tags from a string", "is_correct": true},
                {"label": "Replace HTML and PHP tags with specified tags", "is_correct": false},
                {"label": "Encode HTML and PHP tags in a string", "is_correct": false}
            ],
        "answer_description":
            "`strip_tags()` in PHP is used to remove HTML and PHP tags from a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `stripos()`?",
        "options":
            [
                {
                    "label": "Find the position of the first occurrence of a case-insensitive substring in a string",
                    "is_correct": true
                },
                {"label": "Find the position of the first occurrence of a substring in a string", "is_correct": false},
                {"label": "Case-insensitive string comparison", "is_correct": false}
            ],
        "answer_description":
            "`stripos()` in PHP is used to find the position of the first occurrence of a case-insensitive substring in a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `stripslashes()`?",
        "options":
            [
                {"label": "Un-quote string quoted with addslashes()", "is_correct": true},
                {
                    "label": "Remove whitespace or other characters from the beginning and end of a string",
                    "is_correct": false
                },
                {"label": "Remove HTML and PHP tags from a string", "is_correct": false}
            ],
        "answer_description":
            "`stripslashes()` in PHP is used to un-quote a string quoted with `addslashes()`.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `stristr()`?",
        "options":
            [
                {"label": "Case-insensitive string search", "is_correct": true},
                {"label": "Case-sensitive string search", "is_correct": false},
                {"label": "Check if a string starts with another string", "is_correct": false}
            ],
        "answer_description":
            "`stristr()` in PHP is used for case-insensitive string search.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `strlen()`?",
        "options":
            [
                {"label": "Return the length of a string", "is_correct": true},
                {"label": "Return the number of words in a string", "is_correct": false},
                {"label": "Return the number of bytes in a string", "is_correct": false}
            ],
        "answer_description":
            "`strlen()` in PHP is used to return the length of a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `strpos()`?",
        "options":
            [
                {"label": "Find the position of the first occurrence of a substring in a string", "is_correct": true},
                {
                    "label": "Find the position of the first occurrence of a case-insensitive substring in a string",
                    "is_correct": false
                },
                {
                    "label": "Case-sensitive string comparison", "is_correct": false

                }
            ],
        "answer_description":
            "`strpos()` in PHP is used to find the position of the first occurrence of a substring in a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `strrchr()`?",
        "options":
            [
                {"label": "Find the last occurrence of a character in a string", "is_correct": true},
                {"label": "Find the first occurrence of a character in a string", "is_correct": false},
                {"label": "Case-insensitive string search", "is_correct": false}
            ],
        "answer_description":
            "`strrchr()` in PHP is used to find the last occurrence of a character in a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `strrev()`?",
        "options":
            [
                {"label": "Reverse a string", "is_correct": true},
                {"label": "Case-insensitive string search", "is_correct": false},
                {"label": "Check if a string starts with another string", "is_correct": false}
            ],
        "answer_description":
            "`strrev()` in PHP is used to reverse a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `strripos()`?",
        "options":
            [
                {
                    "label": "Find the position of the last occurrence of a case-insensitive substring in a string",
                    "is_correct": true
                },
                {"label": "Find the position of the last occurrence of a substring in a string", "is_correct": false},
                {"label": "Case-insensitive string comparison", "is_correct": false}
            ],
        "answer_description":
            "`strripos()` in PHP is used to find the position of the last occurrence of a case-insensitive substring in a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `strrpos()`?",
        "options":
            [
                {"label": "Find the position of the last occurrence of a substring in a string", "is_correct": true},
                {
                    "label": "Find the position of the last occurrence of a case-insensitive substring in a string",
                    "is_correct": false
                },
                {"label": "Case-sensitive string comparison", "is_correct": false}
            ],
        "answer_description":
            "`strrpos()` in PHP is used to find the position of the last occurrence of a substring in a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `strstr()`?",
        "options":
            [
                {"label": "Find the first occurrence of a substring in a string", "is_correct": true},
                {"label": "Find the first occurrence of a character in a string", "is_correct": false},
                {"label": "Case-sensitive string search", "is_correct": false}
            ],
        "answer_description":
            "`strstr()` in PHP is used to find the first occurrence of a substring in a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `strtolower()`?",
        "options":
            [
                {"label": "Convert a string to lowercase", "is_correct": true},
                {"label": "Convert a string to uppercase", "is_correct": false},
                {"label": "Make a string's first character lowercase", "is_correct": false}
            ],
        "answer_description":
            "`strtolower()` in PHP is used to convert a string to lowercase.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `strtoupper()`?",
        "options":
            [
                {"label": "Convert a string to uppercase", "is_correct": true},
                {"label": "Convert a string to lowercase", "is_correct": false},
                {"label": "Make a string's first character uppercase", "is_correct": false}
            ],
        "answer_description":
            "`strtoupper()` in PHP is used to convert a string to uppercase.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `strtr()`?",
        "options":
            [
                {"label": "Translate characters or replace substrings in a string", "is_correct": true},
                {
                    "label": "Count the number of occurrences of each byte value (0..255) in a string",
                    "is_correct": false
                },
                {"label": "Compare two strings", "is_correct": false}
            ],
        "answer_description":
            "`strtr()` in PHP is used to translate characters or replace substrings in a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `substr()`?",
        "options":
            [
                {"label": "Return part of a string", "is_correct": true},
                {"label": "Replace part of a string with another string", "is_correct": false},
                {"label": "Concatenate two or more strings", "is_correct": false}
            ],
        "answer_description":
            "`substr()` in PHP is used to return part of a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `substr_replace()`?",
        "options":
            [
                {"label": "Replace part of a string with another string", "is_correct": true},
                {"label": "Return part of a string", "is_correct": false},
                {"label": "Insert a string at a specified position in another string", "is_correct": false}
            ],
        "answer_description":
            "`substr_replace()` in PHP is used to replace part of a string with another string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `trim()`?",
        "options":
            [
                {
                    "label": "Remove whitespace or other characters from the beginning and end of a string",
                    "is_correct": true
                },
                {"label": "Remove whitespace or other characters from the left side of a string", "is_correct": false},
                {"label": "Remove whitespace or other characters from the right side of a string", "is_correct": false}
            ],
        "answer_description":
            "`trim()` in PHP is used to remove whitespace or other characters from the beginning and end of a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `ucfirst()`?",
        "options":
            [
                {"label": "Make a string's first character uppercase", "is_correct": true},
                {
                    "label": "Make a string's first character lowercase", "is_correct": false
                },
                {"label": "Convert a string to uppercase", "is_correct": false}
            ],
        "answer_description":
            "`ucfirst()` in PHP is used to make a string's first character uppercase.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    },
    {
        "question":
            "What is the purpose of the PHP function `ucwords()`?",
        "options":
            [
                {"label": "Uppercase the first character of each word in a string", "is_correct": true},
                {"label": "Uppercase all characters in a string", "is_correct": false},
                {"label": "Lowercase all characters in a string", "is_correct": false}
            ],
        "answer_description":
            "`ucwords()` in PHP is used to uppercase the first character of each word in a string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question":
            "What is the purpose of the PHP function `vprintf()`?",
        "options":
            [
                {"label": "Output a formatted string", "is_correct": true},
                {"label": "Return a formatted string", "is_correct": false},
                {"label": "Parse a CSV string into an array", "is_correct": false}
            ],
        "answer_description":
            "`vprintf()` in PHP is used to output a formatted string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    }
    ,
    {
        "question": "What is the purpose of the PHP function `vsprintf()`?",
        "options":
            [
                {"label": "Return a formatted string", "is_correct": true},
                {"label": "Output a formatted string", "is_correct": false},
                {"label": "Parse a CSV string into an array", "is_correct": false}
            ],
        "answer_description": "`vsprintf()` in PHP is used to return a formatted string.",
        "difficulty":
            "medium",
        "tags":
            ["PHP", "Strings"]
    },
    {
        "question": "What is the output of the following code snippet in PHP?\n\n```php\n$var = '10';\necho ++$var;\n```",
        "options": [
            {"label": "10", "is_correct": false},
            {"label": "11", "is_correct": true},
            {"label": "12", "is_correct": false}
        ],
        "answer_description": "The code snippet uses the pre-increment operator (++$var) which increments $var by 1 and then echoes the result. So, the output will be 11.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What will be the output of the following code snippet in PHP?\n\n```php\n$a = 5;\nfunction test() {\n    global $a;\n    echo $a;\n}\ntest();\n```",
        "options": [
            {"label": "5", "is_correct": true},
            {"label": "0", "is_correct": false},
            {"label": "Undefined variable: a", "is_correct": false}
        ],
        "answer_description": "The global keyword is used to access a global variable from within a function. So, the output will be 5.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the difference between == and === in PHP?",
        "options": [
            {"label": "== performs type coercion while === does not", "is_correct": false},
            {"label": "== compares both value and type while === compares only value", "is_correct": false},
            {"label": "== compares both value and type while === compares only type", "is_correct": true}
        ],
        "answer_description": "== is the equality operator that compares both value and type, whereas === is the identity operator that compares only the type.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What will be the output of the following code snippet in PHP?\n\n```php\nfunction test(&$a) {\n    $a *= 2;\n}\n$b = 10;\ntest($b);\necho $b;\n```",
        "options": [
            {"label": "20", "is_correct": true},
            {"label": "10", "is_correct": false},
            {"label": "Syntax Error", "is_correct": false}
        ],
        "answer_description": "The function test() takes an argument by reference (&$a), which means any changes made to $a within the function will also affect the original variable. So, after calling test($b), $b will be doubled to 20.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What will be the output of the following code snippet in PHP?\n\n```php\nfunction foo() {\n    static $x = 0;\n    echo $x;\n    $x++;\n}\nfoo();\nfoo();\nfoo();\n```",
        "options": [
            {"label": "0 1 2", "is_correct": false},
            {"label": "1 2 3", "is_correct": true},
            {"label": "0 0 0", "is_correct": false}
        ],
        "answer_description": "The static keyword is used to preserve the value of a local variable across multiple function calls. In this case, $x will retain its value between function calls and get incremented each time. So, the output will be 1, 2, 3.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the following code snippet in PHP?\n\n```php\nfunction test($x) {\n    return $x * $x;\n}\n$result = test(3) + test(2);\necho $result;\n```",
        "options": [
            {"label": "13", "is_correct": false},
            {"label": "17", "is_correct": false},
            {"label": "13 17", "is_correct": true}
        ],
        "answer_description": "The code snippet calls the function test() twice with different arguments and adds their results. So, the output will be 9 (from test(3)) + 4 (from test(2)) = 13 17.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What will be the output of the following code snippet in PHP?\n\n```php\n$a = 5;\n$b = '5';\nif ($a === $b) {\n    echo 'Equal';\n} else {\n    echo 'Not Equal';\n}\n```",
        "options": [
            {"label": "Equal", "is_correct": false},
            {"label": "Not Equal", "is_correct": true},
            {"label": "Error", "is_correct": false}
        ],
        "answer_description": "=== is the identity operator that compares both value and type. In this case, $a is an integer and $b is a string, so they are not identical. Thus, the output will be 'Not Equal'.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the following code snippet in PHP?\n\n```php\n$var = 'Hello';\nunset($var);\necho isset($var);\n```",
        "options": [
            {"label": "1", "is_correct": false},
            {"label": "0", "is_correct": true},
            {"label": "Error", "is_correct": false}
        ],
        "answer_description": "unset() is used to destroy variables. After using unset($var), $var is no longer set, so isset($var) will return false, which is represented as 0.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What does the following code snippet output in PHP?\n\n```php\necho str_repeat('a', 5) . \"\\n\";\n```",
        "options": [
            {"label": "aaaaa", "is_correct": true},
            {"label": "a a a a a", "is_correct": false},
            {"label": "a\na\na\na\na", "is_correct": false}
        ],
        "answer_description": "str_repeat() function repeats a string multiple times. So, it will output 'aaaaa'.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What will be the output of the following code snippet in PHP?\n\n```php\n$a = [1, 2, 3];\necho count($a);\n```",
        "options": [
            {"label": "1", "is_correct": false},
            {"label": "2", "is_correct": false},
            {"label": "3", "is_correct": true}
        ],
        "answer_description": "The count() function is used to count the number of elements in an array. In this case, there are 3 elements in the array, so the output will be 3.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the PHP function `serialize()`?",
        "options": [
            {"label": "Converts an object into a string", "is_correct": true},
            {"label": "Encrypts data", "is_correct": false},
            {"label": "Converts a string into an object", "is_correct": false}
        ],
        "answer_description": "`serialize()` is used to convert an object into a storable string.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the difference between `include` and `require` in PHP?",
        "options": [
            {"label": "`require` will cause a fatal error if the file is not found", "is_correct": true},
            {"label": "`include` will cause a fatal error if the file is not found", "is_correct": false},
            {"label": "They are functionally identical", "is_correct": false}
        ],
        "answer_description": "`require` will cause a fatal error if the file is not found, while `include` will only emit a warning.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the `spl_autoload_register` function in PHP?",
        "options": [
            {"label": "Registers a function to be autoloaded on object creation", "is_correct": true},
            {"label": "Registers a class to be autoloaded on script execution", "is_correct": false},
            {"label": "Registers a namespace to be autoloaded on script execution", "is_correct": false}
        ],
        "answer_description": "`spl_autoload_register` is used to register a function to be autoloaded on object creation.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "In PHP, what is the purpose of the `__destruct` method?",
        "options": [
            {"label": "It is called when an object is no longer referenced", "is_correct": true},
            {"label": "It is called when an object is created", "is_correct": false},
            {"label": "It is called when an object is serialized", "is_correct": false}
        ],
        "answer_description": "`__destruct` is called when an object is no longer referenced and is being destroyed.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "How can you prevent SQL injection in PHP?",
        "options": [
            {"label": "Use prepared statements and parameterized queries", "is_correct": true},
            {"label": "Escape all user inputs with `addslashes`", "is_correct": false},
            {"label": "Use `mysql_real_escape_string` on user inputs", "is_correct": false}
        ],
        "answer_description": "To prevent SQL injection, it's recommended to use prepared statements and parameterized queries.",
        "difficulty": "hard",
        "tags": ["PHP", "SQL"]
    },
    {
        "question": "What is the purpose of the PHP function `openssl_encrypt`?",
        "options": [
            {"label": "Encrypts data using OpenSSL library", "is_correct": true},
            {"label": "Generates a random encryption key", "is_correct": false},
            {"label": "Creates a digital signature", "is_correct": false}
        ],
        "answer_description": "`openssl_encrypt` is used to encrypt data using the OpenSSL library.",
        "difficulty": "hard",
        "tags": ["PHP", "Encryption"]
    },
    {
        "question": "What is the use of the `usort` function in PHP?",
        "options": [
            {"label": "Sorts an array by values using a user-defined comparison function", "is_correct": true},
            {"label": "Sorts an array in ascending order", "is_correct": false},
            {"label": "Sorts an array in descending order", "is_correct": false}
        ],
        "answer_description": "`usort` is used to sort an array by values using a user-defined comparison function.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the `ob_start` function in PHP?",
        "options": [
            {"label": "Starts output buffering", "is_correct": true},
            {"label": "Starts input buffering", "is_correct": false},
            {"label": "Starts session buffering", "is_correct": false}
        ],
        "answer_description": "`ob_start` is used to start output buffering in PHP.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the `array_walk_recursive` function in PHP?",
        "options": [
            {"label": "Applies a user-defined function recursively to each element in an array", "is_correct": true},
            {"label": "Recursively removes empty elements from an array", "is_correct": false},
            {"label": "Recursively flattens a multi-dimensional array", "is_correct": false}
        ],
        "answer_description": "`array_walk_recursive` applies a user-defined function recursively to each element in an array.",
        "difficulty": "hard",
        "tags": ["PHP", "Arrays"]
    },
    {
        "question": "What is the purpose of the `iterator_to_array` function in PHP?",
        "options": [
            {"label": "Converts an iterator to an array", "is_correct": true},
            {"label": "Converts an array to an iterator", "is_correct": false},
            {"label": "Converts a generator to an array", "is_correct": false}
        ],
        "answer_description": "`iterator_to_array` is used to convert an iterator to an array in PHP.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the result of the expression '3' + 3 in PHP?",
        "options": [
            {"label": "6", "is_correct": true},
            {"label": "33", "is_correct": false},
            {"label": "Error", "is_correct": false}
        ],
        "answer_description": "In PHP, when one of the operands is a string, PHP will try to convert it to a number. Therefore, '3' + 3 results in 6.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the code snippet: <?php echo ++$x + $x++; ?> if $x is initially set to 5?",
        "options": [
            {"label": "12", "is_correct": true},
            {"label": "11", "is_correct": false},
            {"label": "10", "is_correct": false}
        ],
        "answer_description": "The expression ++$x increments the value of $x by 1 before using it in the expression, while $x++ uses the current value of $x and then increments it by 1. So, the result is 6 + 6 = 12.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What does the function spl_autoload_register() do in PHP?",
        "options": [
            {"label": "Registers a function to be autoloaded", "is_correct": true},
            {"label": "Registers a class to be autoloaded", "is_correct": false},
            {"label": "Registers a namespace to be autoloaded", "is_correct": false}
        ],
        "answer_description": "The spl_autoload_register() function in PHP registers a function to be autoloaded when a class is instantiated that hasn't been defined yet.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "Which method is used to delete a cookie in PHP?",
        "options": [
            {"label": "setcookie() with a past expiration time", "is_correct": true},
            {"label": "unsetcookie()", "is_correct": false},
            {"label": "deletecookie()", "is_correct": false}
        ],
        "answer_description": "To delete a cookie in PHP, you can use the setcookie() function with a past expiration time.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the difference between == and === operators in PHP?",
        "options": [
            {"label": "== checks for equality only, === checks for equality and type", "is_correct": true},
            {"label": "== checks for equality and type, === checks for equality only", "is_correct": false},
            {"label": "== and === are interchangeable", "is_correct": false}
        ],
        "answer_description": "The == operator checks for equality only, while === checks for both equality and type in PHP.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the following code snippet: <?php echo 1 <=> 1; ?> ?",
        "options": [
            {"label": "0", "is_correct": true},
            {"label": "-1", "is_correct": false},
            {"label": "1", "is_correct": false}
        ],
        "answer_description": "The spaceship operator (<=>) returns 0 if the values are equal, -1 if the left operand is less than the right, and 1 if the left operand is greater than the right. So, 1 <=> 1 results in 0.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the use of the function set_exception_handler() in PHP?",
        "options": [
            {"label": "Sets a user-defined function to handle uncaught exceptions", "is_correct": true},
            {"label": "Sets a user-defined function to handle all errors", "is_correct": false},
            {"label": "Sets a user-defined function to handle custom exceptions", "is_correct": false}
        ],
        "answer_description": "The set_exception_handler() function in PHP sets a user-defined function to handle uncaught exceptions.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the difference between require() and include() functions in PHP?",
        "options": [
            {
                "label": "require() produces a fatal error if the file is not found, include() produces a warning",
                "is_correct": true
            },
            {
                "label": "require() produces a warning if the file is not found, include() produces a fatal error",
                "is_correct": false
            },
            {"label": "require() and include() behave the same way", "is_correct": false}
        ],
        "answer_description": "The require() function produces a fatal error if the file is not found, halting the script execution, while include() produces a warning and continues script execution.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the function get_class_methods() in PHP?",
        "options": [
            {
                "label": "Returns an array with the names of the methods of the given object or class",
                "is_correct": true
            },
            {"label": "Returns the methods defined in a parent class", "is_correct": false},
            {"label": "Returns the private methods of the given class", "is_correct": false}
        ],
        "answer_description": "The get_class_methods() function in PHP returns an array with the names of the methods of the given object or class.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the correct way to initialize a static property in a PHP class?",
        "options": [
            {"label": "static $property = value;", "is_correct": true},
            {"label": "$property = value;", "is_correct": false},
            {"label": "var $property = value;", "is_correct": false}
        ],
        "answer_description": "To initialize a static property in a PHP class, you use the static keyword before the property name.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the code snippet: <?php echo '1' + '1'; ?> ?",
        "options": [
            {"label": "2", "is_correct": true},
            {"label": "11", "is_correct": false},
            {"label": "Error", "is_correct": false}
        ],
        "answer_description": "In PHP, when both operands are strings, they are converted to numbers if possible. So, '1' + '1' results in 2.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "Which function in PHP is used to check if a file or directory exists?",
        "options": [
            {"label": "file_exists()", "is_correct": true},
            {"label": "file_check()", "is_correct": false},
            {"label": "file_valid()", "is_correct": false}
        ],
        "answer_description": "The file_exists() function is used in PHP to check if a file or directory exists.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the code snippet: <?php echo str_replace('World', 'PHP', 'Hello World'); ?> ?",
        "options": [
            {"label": "Hello PHP", "is_correct": true},
            {"label": "PHP World", "is_correct": false},
            {"label": "Hello PHP World", "is_correct": false}
        ],
        "answer_description": "The str_replace() function replaces all occurrences of 'World' with 'PHP' in the string 'Hello World'. So, the output is 'Hello PHP'.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the code snippet: <?php echo '22' + '0.2'; ?> ?",
        "options": [
            {"label": "22.2", "is_correct": true},
            {"label": "Error", "is_correct": false},
            {"label": "22", "is_correct": false}
        ],
        "answer_description": "In PHP, when one operand is a string and the other is a float, PHP will convert both to float and perform addition. So, '22' + '0.2' results in 22.2.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the code snippet: <?php echo substr_count('ababababab', 'ab', -1); ?> ?",
        "options": [
            {"label": "2", "is_correct": true},
            {"label": "Error", "is_correct": false},
            {"label": "5", "is_correct": false}
        ],
        "answer_description": "The substr_count() function counts the number of occurrences of a substring in a string. In this case, 'ab' occurs twice from position -1 (which is equivalent to the last position). So, the output is 2.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the function json_decode() in PHP?",
        "options": [
            {"label": "Decodes a JSON string", "is_correct": true},
            {"label": "Encodes a JSON string", "is_correct": false},
            {"label": "Validates a JSON string", "is_correct": false}
        ],
        "answer_description": "The json_decode() function in PHP is used to decode a JSON string into a PHP variable.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the code snippet: <?php echo count([1, 2, 3, '4', '5', 6]); ?> ?",
        "options": [
            {"label": "6", "is_correct": true},
            {"label": "5", "is_correct": false},
            {"label": "Error", "is_correct": false}
        ],
        "answer_description": "The count() function in PHP counts all elements in an array. In this case, the array has 6 elements, so the output is 6.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the code snippet: <?php echo date('Y-m-d H:i:s', strtotime('2024-12-31 23:59:59') + 1); ?> ?",
        "options": [
            {"label": "2025-01-01 00:00:00", "is_correct": true},
            {"label": "Error", "is_correct": false},
            {"label": "2024-12-31 23:59:60", "is_correct": false}
        ],
        "answer_description": "The strtotime() function in PHP converts a date string to a Unix timestamp, and adding 1 second to 2024-12-31 23:59:59 results in the next second, 2025-01-01 00:00:00.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the code snippet: <?php echo preg_replace('/\d/', '*', 'abc123'); ?> ?",
        "options": [
            {"label": "abc***", "is_correct": true},
            {"label": "abc123", "is_correct": false},
            {"label": "abc", "is_correct": false}
        ],
        "answer_description": "The preg_replace() function in PHP replaces all occurrences of digits (\d) with *. So, 'abc123' becomes 'abc***'.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the code snippet: <?php echo strpos('hello world', 'o', 5); ?> ?",
        "options": [
            {"label": "7", "is_correct": true},
            {"label": "5", "is_correct": false},
            {"label": "-1", "is_correct": false}
        ],
        "answer_description": "The strpos() function finds the position of the first occurrence of a substring in a string. In this case, searching for 'o' in 'hello world' starting from position 5 returns 7.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the code snippet: <?php echo function_exists('foo'); ?> if function foo is not defined?",
        "options": [
            {"label": "false", "is_correct": true},
            {"label": "true", "is_correct": false},
            {"label": "Error", "is_correct": false}
        ],
        "answer_description": "The function_exists() function in PHP returns false if the given function does not exist.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the output of the code snippet: <?php echo round(0.5); ?> ?",
        "options": [
            {"label": "0", "is_correct": true},
            {"label": "1", "is_correct": false},
            {"label": "Error", "is_correct": false}
        ],
        "answer_description": "The round() function in PHP rounds a floating-point number to the nearest integer. In this case, 0.5 rounds down to 0.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the PHP function phpinfo()?",
        "options": [
            {"label": "Display information about PHP configuration", "is_correct": true},
            {"label": "Execute PHP code", "is_correct": false},
            {"label": "Encrypt data", "is_correct": false}
        ],
        "answer_description": "The phpinfo() function is used to display information about PHP configuration.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "Explain the difference between == and === operators in PHP.",
        "options": [
            {"label": "== compares values, === compares values and types", "is_correct": true},
            {"label": "== compares values and types, === compares values", "is_correct": false},
            {"label": "== and === are identical in PHP", "is_correct": false}
        ],
        "answer_description": "== compares only values while === compares both values and types in PHP.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is an anonymous function in PHP?",
        "options": [
            {"label": "A function without a specified name", "is_correct": true},
            {"label": "A function with multiple return values", "is_correct": false},
            {"label": "A function with no parameters", "is_correct": false}
        ],
        "answer_description": "An anonymous function in PHP is a function without a specified name.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the PHP function spl_autoload_register()?",
        "options": [
            {"label": "Register any number of autoloaders", "is_correct": true},
            {"label": "Register predefined autoloaders", "is_correct": false},
            {"label": "Load a specific class", "is_correct": false}
        ],
        "answer_description": "The spl_autoload_register() function in PHP is used to register any number of autoloaders.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "Explain the use of the PHP function serialize().",
        "options": [
            {"label": "Converts a PHP value to a storable representation", "is_correct": true},
            {"label": "Converts a string to a PHP value", "is_correct": false},
            {"label": "Converts a PHP value to a human-readable format", "is_correct": false}
        ],
        "answer_description": "The serialize() function in PHP converts a PHP value to a storable representation.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of PHP sessions?",
        "options": [
            {"label": "To maintain state across multiple page requests", "is_correct": true},
            {"label": "To encrypt data during transmission", "is_correct": false},
            {"label": "To handle database transactions", "is_correct": false}
        ],
        "answer_description": "PHP sessions are used to maintain state across multiple page requests.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the PHP function mb_convert_encoding()?",
        "options": [
            {"label": "Convert character encoding", "is_correct": true},
            {"label": "Convert numbers to strings", "is_correct": false},
            {"label": "Convert strings to arrays", "is_correct": false}
        ],
        "answer_description": "The mb_convert_encoding() function in PHP is used to convert character encoding.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of PHP magic methods?",
        "options": [
            {"label": "To handle class methods dynamically", "is_correct": true},
            {"label": "To create secure encryption methods", "is_correct": false},
            {"label": "To manipulate database queries", "is_correct": false}
        ],
        "answer_description": "PHP magic methods are used to handle class methods dynamically.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of PHP namespaces?",
        "options": [
            {"label": "To avoid naming conflicts between classes", "is_correct": true},
            {"label": "To organize database tables", "is_correct": false},
            {"label": "To control access to functions", "is_correct": false}
        ],
        "answer_description": "PHP namespaces are used to avoid naming conflicts between classes.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the PHP function scandir()?",
        "options": [
            {"label": "List files and directories inside the specified path", "is_correct": true},
            {"label": "Scan PHP code for errors", "is_correct": false},
            {"label": "Read content of a directory", "is_correct": false}
        ],
        "answer_description": "The scandir() function in PHP is used to list files and directories inside the specified path.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "Explain the use of PHP Traits.",
        "options": [
            {"label": "To group functionality in a fine-grained and consistent way", "is_correct": true},
            {"label": "To define class constructors", "is_correct": false},
            {"label": "To create static methods", "is_correct": false}
        ],
        "answer_description": "PHP Traits are used to group functionality in a fine-grained and consistent way.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the difference between require() and include() in PHP?",
        "options": [
            {
                "label": "require() will cause a fatal error if the file is not found, include() will only emit a warning",
                "is_correct": true
            },
            {
                "label": "include() will cause a fatal error if the file is not found, require() will only emit a warning",
                "is_correct": false
            },
            {"label": "require() and include() behave identically", "is_correct": false}
        ],
        "answer_description": "require() will cause a fatal error if the file is not found, while include() will only emit a warning.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of PHP Magic Constants?",
        "options": [
            {"label": "To provide information about the script", "is_correct": true},
            {"label": "To generate random numbers", "is_correct": false},
            {"label": "To manipulate strings", "is_correct": false}
        ],
        "answer_description": "PHP Magic Constants are used to provide information about the script.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the use of the PHP function array_map()?",
        "options": [
            {"label": "Applies a callback function to the elements of an array", "is_correct": true},
            {"label": "Merges two or more arrays", "is_correct": false},
            {"label": "Removes duplicate values from an array", "is_correct": false}
        ],
        "answer_description": "The array_map() function in PHP applies a callback function to the elements of an array.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the PHP function password_hash()?",
        "options": [
            {"label": "Hashes a password using a secure algorithm", "is_correct": true},
            {"label": "Encrypts a string using a predefined key", "is_correct": false},
            {"label": "Generates a random password", "is_correct": false}
        ],
        "answer_description": "The password_hash() function in PHP hashes a password using a secure algorithm.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "Explain the use of the PHP function array_reduce().",
        "options": [
            {"label": "Applies a callback function to the elements of an array", "is_correct": true},
            {"label": "Reduces an array to a single value", "is_correct": false},
            {"label": "Filters the elements of an array", "is_correct": false}
        ],
        "answer_description": "The array_reduce() function in PHP applies a callback function to the elements of an array.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the PHP function array_column()?",
        "options": [
            {"label": "Returns the values from a single column in an array", "is_correct": true},
            {"label": "Merges two or more arrays", "is_correct": false},
            {"label": "Reverses the order of elements in an array", "is_correct": false}
        ],
        "answer_description": "The array_column() function in PHP returns the values from a single column in an array.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of the PHP function array_diff()?",
        "options": [
            {"label": "Computes the difference of arrays", "is_correct": true},
            {"label": "Merges two or more arrays", "is_correct": false},
            {"label": "Finds the intersection of arrays", "is_correct": false}
        ],
        "answer_description": "The array_diff() function in PHP computes the difference of arrays.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the use of the PHP function array_udiff()?",
        "options": [
            {"label": "Computes the difference of arrays by using a callback function", "is_correct": true},
            {"label": "Merges two or more arrays", "is_correct": false},
            {"label": "Finds the intersection of arrays", "is_correct": false}
        ],
        "answer_description": "The array_udiff() function in PHP computes the difference of arrays by using a callback function.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "Explain the use of the PHP function array_diff_assoc().",
        "options": [
            {"label": "Computes the difference of arrays with additional index check", "is_correct": true},
            {"label": "Merges two or more arrays", "is_correct": false},
            {"label": "Finds the intersection of arrays", "is_correct": false}
        ],
        "answer_description": "The array_diff_assoc() function in PHP computes the difference of arrays with additional index check.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of PHP closures?",
        "options": [
            {"label": "Anonymous functions that can be passed as arguments", "is_correct": true},
            {"label": "Functions with multiple return values", "is_correct": false},
            {"label": "Functions that accept variable number of arguments", "is_correct": false}
        ],
        "answer_description": "PHP closures are anonymous functions that can be passed as arguments.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the use of the PHP function array_udiff_assoc()?",
        "options": [
            {
                "label": "Computes the difference of arrays with additional index check by using a callback function",
                "is_correct": true
            },
            {"label": "Merges two or more arrays", "is_correct": false},
            {"label": "Finds the intersection of arrays", "is_correct": false}
        ],
        "answer_description": "The array_udiff_assoc() function in PHP computes the difference of arrays with additional index check by using a callback function.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of PHP Generators?",
        "options": [
            {"label": "To generate a sequence of values lazily", "is_correct": true},
            {"label": "To generate random numbers", "is_correct": false},
            {"label": "To iterate over database query results", "is_correct": false}
        ],
        "answer_description": "PHP Generators are used to generate a sequence of values lazily.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "Explain the use of the PHP function array_key_exists().",
        "options": [
            {"label": "Checks if the specified key exists in the array", "is_correct": true},
            {"label": "Checks if the specified value exists in the array", "is_correct": false},
            {"label": "Checks if the specified index exists in the array", "is_correct": false}
        ],
        "answer_description": "The array_key_exists() function in PHP checks if the specified key exists in the array.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
    {
        "question": "What is the purpose of PHP Annotations?",
        "options": [
            {"label": "To add metadata to classes, methods, and properties", "is_correct": true},
            {"label": "To handle exceptions", "is_correct": false},
            {"label": "To encrypt data during transmission", "is_correct": false}
        ],
        "answer_description": "PHP Annotations are used to add metadata to classes, methods, and properties.",
        "difficulty": "hard",
        "tags": ["PHP"]
    },
]

export default questions;