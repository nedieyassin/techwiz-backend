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
        "question": "What keyword is used in SQL to retrieve data from a database?",
        "options": [
            {"label": "`SELECT`", "is_correct": true},
            {"label": "`RETRIEVE`", "is_correct": false},
            {"label": "`GET`", "is_correct": false},
            {"label": "`FETCH`", "is_correct": false}
        ],
        "answer_description": "The `SELECT` keyword is used to retrieve data from a database in SQL.",
        "difficulty": "easy",
        "tags": ["SQL", "Database"]
    },
    {
        "question": "Which SQL clause is used to filter records based on a specified condition?",
        "options": [
            {"label": "`WHERE`", "is_correct": true},
            {"label": "`FILTER`", "is_correct": false},
            {"label": "`CONDITION`", "is_correct": false},
            {"label": "`LIMIT`", "is_correct": false}
        ],
        "answer_description": "The `WHERE` clause is used to filter records based on a specified condition.",
        "difficulty": "easy",
        "tags": ["SQL", "Filtering"]
    },
    {
        "question": "Which SQL keyword is used to retrieve only distinct values?",
        "options": [
            {"label": "`DISTINCT`", "is_correct": true},
            {"label": "`UNIQUE`", "is_correct": false},
            {"label": "`DIFFERENT`", "is_correct": false},
            {"label": "`SINGLE`", "is_correct": false}
        ],
        "answer_description": "The `DISTINCT` keyword is used to retrieve only distinct values in SQL.",
        "difficulty": "easy",
        "tags": ["SQL", "Distinct"]
    },
    {
        "question": "In SQL, which function is used to count the number of rows returned in a query?",
        "options": [
            {"label": "`COUNT()`", "is_correct": true},
            {"label": "`SUM()`", "is_correct": false},
            {"label": "`AVG()`", "is_correct": false},
            {"label": "`MAX()`", "is_correct": false}
        ],
        "answer_description": "The `COUNT()` function is used to count the number of rows returned in a query in SQL.",
        "difficulty": "easy",
        "tags": ["SQL", "Count"]
    },
    {
        "question": "Which SQL keyword is used to sort the result set in ascending order?",
        "options": [
            {"label": "`ASC`", "is_correct": true},
            {"label": "`DESC`", "is_correct": false},
            {"label": "`SORT`", "is_correct": false},
            {"label": "`ORDER`", "is_correct": false}
        ],
        "answer_description": "The `ASC` keyword is used to sort the result set in ascending order in SQL.",
        "difficulty": "easy",
        "tags": ["SQL", "Sorting"]
    },
    {
        "question": "Which SQL keyword is used to retrieve data from a database?",
        "options": [
            {"label": "SELECT", "is_correct": true},
            {"label": "FETCH", "is_correct": false},
            {"label": "RETRIEVE", "is_correct": false},
            {"label": "GET", "is_correct": false}
        ],
        "answer_description": "The SELECT keyword is used to retrieve data from a database in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Which SQL statement is used to delete records from a table?",
        "options": [
            {"label": "REMOVE", "is_correct": false},
            {"label": "DELETE", "is_correct": true},
            {"label": "ERASE", "is_correct": false},
            {"label": "CLEAR", "is_correct": false}
        ],
        "answer_description": "The DELETE statement is used to delete records from a table in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "What SQL keyword is used to retrieve only unique records?",
        "options": [
            {"label": "DISTINCT", "is_correct": true},
            {"label": "UNIQUE", "is_correct": false},
            {"label": "DIFFERENT", "is_correct": false},
            {"label": "UNREPEATED", "is_correct": false}
        ],
        "answer_description": "The DISTINCT keyword is used to retrieve only unique records in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Which SQL clause is used to filter the results of a SELECT statement?",
        "options": [
            {"label": "GROUP BY", "is_correct": false},
            {"label": "FILTER", "is_correct": false},
            {"label": "HAVING", "is_correct": false},
            {"label": "WHERE", "is_correct": true}
        ],
        "answer_description": "The WHERE clause is used to filter the results of a SELECT statement in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "What is the purpose of the SQL ORDER BY keyword?",
        "options": [
            {"label": "To group records", "is_correct": false},
            {"label": "To limit the number of records returned", "is_correct": false},
            {"label": "To sort the records", "is_correct": true},
            {"label": "To perform arithmetic operations", "is_correct": false}
        ],
        "answer_description": "The ORDER BY keyword is used to sort the records returned by a SELECT statement in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Which SQL command is used to make permanent changes to the database?",
        "options": [
            {"label": "COMMIT", "is_correct": true},
            {"label": "SAVE", "is_correct": false},
            {"label": "APPLY", "is_correct": false},
            {"label": "CONFIRM", "is_correct": false}
        ],
        "answer_description": "The COMMIT command is used to make permanent changes to the database in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Which SQL statement is used to modify existing data in a database?",
        "options": [
            {"label": "CHANGE", "is_correct": false},
            {"label": "ALTER", "is_correct": false},
            {"label": "MODIFY", "is_correct": false},
            {"label": "UPDATE", "is_correct": true}
        ],
        "answer_description": "The UPDATE statement is used to modify existing data in a database in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "What SQL keyword is used to join tables together?",
        "options": [
            {"label": "COMBINE", "is_correct": false},
            {"label": "JOIN", "is_correct": true},
            {"label": "MERGE", "is_correct": false},
            {"label": "CONNECT", "is_correct": false}
        ],
        "answer_description": "The JOIN keyword is used to join tables together in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Which SQL function is used to count the number of rows returned by a query?",
        "options": [
            {"label": "TOTAL", "is_correct": false},
            {"label": "COUNT", "is_correct": true},
            {"label": "SUM", "is_correct": false},
            {"label": "TALLY", "is_correct": false}
        ],
        "answer_description": "The COUNT function is used to count the number of rows returned by a query in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "What SQL clause is used to sort the result set in descending order?",
        "options": [
            {"label": "ASC", "is_correct": false},
            {"label": "SORT", "is_correct": false},
            {"label": "DESC", "is_correct": true},
            {"label": "ORDER", "is_correct": false}
        ],
        "answer_description": "The DESC clause is used to sort the result set in descending order in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Which SQL operator is used to check if a value falls within a specified range?",
        "options": [
            {"label": "IN", "is_correct": true},
            {"label": "BETWEEN", "is_correct": false},
            {"label": "LIKE", "is_correct": false},
            {"label": "IS", "is_correct": false}
        ],
        "answer_description": "The IN operator is used to check if a value falls within a specified range in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "What SQL function is used to return the current date and time?",
        "options": [
            {"label": "DATE()", "is_correct": false},
            {"label": "NOW()", "is_correct": true},
            {"label": "CURRENT_DATE()", "is_correct": false},
            {"label": "TIME()", "is_correct": false}
        ],
        "answer_description": "The NOW() function is used to return the current date and time in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Which SQL keyword is used to retrieve data from a database?",
        "options": [
            {"label": "`SELECT`", "is_correct": true},
            {"label": "`FETCH`", "is_correct": false},
            {"label": "`RETRIEVE`", "is_correct": false},
            {"label": "`GET`", "is_correct": false}
        ],
        "answer_description": "The `SELECT` keyword is used to retrieve data from a database in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Which SQL statement is used to delete records from a table?",
        "options": [
            {"label": "`REMOVE`", "is_correct": false},
            {"label": "`DELETE`", "is_correct": true},
            {"label": "`ERASE`", "is_correct": false},
            {"label": "`CLEAR`", "is_correct": false}
        ],
        "answer_description": "The `DELETE` statement is used to delete records from a table in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "What SQL keyword is used to retrieve only unique records?",
        "options": [
            {"label": "`DISTINCT`", "is_correct": true},
            {"label": "`UNIQUE`", "is_correct": false},
            {"label": "`DIFFERENT`", "is_correct": false},
            {"label": "`UNREPEATED`", "is_correct": false}
        ],
        "answer_description": "The `DISTINCT` keyword is used to retrieve only unique records in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Which SQL clause is used to filter the results of a SELECT statement?",
        "options": [
            {"label": "`GROUP BY`", "is_correct": false},
            {"label": "`FILTER`", "is_correct": false},
            {"label": "`HAVING`", "is_correct": false},
            {"label": "`WHERE`", "is_correct": true}
        ],
        "answer_description": "The `WHERE` clause is used to filter the results of a SELECT statement in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "What is the purpose of the SQL ORDER BY keyword?",
        "options": [
            {"label": "To group records", "is_correct": false},
            {"label": "To limit the number of records returned", "is_correct": false},
            {"label": "To sort the records", "is_correct": true},
            {"label": "To perform arithmetic operations", "is_correct": false}
        ],
        "answer_description": "The `ORDER BY` keyword is used to sort the records returned by a SELECT statement in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Which SQL command is used to make permanent changes to the database?",
        "options": [
            {"label": "`COMMIT`", "is_correct": true},
            {"label": "`SAVE`", "is_correct": false},
            {"label": "`APPLY`", "is_correct": false},
            {"label": "`CONFIRM`", "is_correct": false}
        ],
        "answer_description": "The `COMMIT` command is used to make permanent changes to the database in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Which SQL statement is used to modify existing data in a database?",
        "options": [
            {"label": "`CHANGE`", "is_correct": false},
            {"label": "`ALTER`", "is_correct": false},
            {"label": "`MODIFY`", "is_correct": false},
            {"label": "`UPDATE`", "is_correct": true}
        ],
        "answer_description": "The `UPDATE` statement is used to modify existing data in a database in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "What SQL keyword is used to join tables together?",
        "options": [
            {"label": "`COMBINE`", "is_correct": false},
            {"label": "`JOIN`", "is_correct": true},
            {"label": "`MERGE`", "is_correct": false},
            {"label": "`CONNECT`", "is_correct": false}
        ],
        "answer_description": "The `JOIN` keyword is used to join tables together in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Which SQL function is used to count the number of rows returned by a query?",
        "options": [
            {"label": "`TOTAL`", "is_correct": false},
            {"label": "`COUNT`", "is_correct": true},
            {"label": "`SUM`", "is_correct": false},
            {"label": "`TALLY`", "is_correct": false}
        ],
        "answer_description": "The `COUNT` function is used to count the number of rows returned by a query in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "What SQL clause is used to sort the result set in descending order?",
        "options": [
            {"label": "`ASC`", "is_correct": false},
            {"label": "`SORT`", "is_correct": false},
            {"label": "`DESC`", "is_correct": true},
            {"label": "`ORDER`", "is_correct": false}
        ],
        "answer_description": "The `DESC` clause is used to sort the result set in descending order in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Which SQL operator is used to check if a value falls within a specified range?",
        "options": [
            {"label": "`IN`", "is_correct": true},
            {"label": "`BETWEEN`", "is_correct": false},
            {"label": "`LIKE`", "is_correct": false},
            {"label": "`IS`", "is_correct": false}
        ],
        "answer_description": "The `IN` operator is used to check if a value falls within a specified range in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "What SQL function is used to return the current date and time?",
        "options": [
            {"label": "`DATE()`", "is_correct": false},
            {"label": "`NOW()`", "is_correct": true},
            {"label": "`CURRENT_DATE()`", "is_correct": false},
            {"label": "`TIME()`", "is_correct": false}
        ],
        "answer_description": "The `NOW()` function is used to return the current date and time in SQL.",
        "difficulty": "medium",
        "tags": ["SQL", "databases"]
    },
    {
        "question": "Explain the purpose and usage of Common Table Expressions (CTEs) in SQL.",
        "options": [
            {
                "label": "To define temporary result sets that can be referenced within a single SELECT, INSERT, UPDATE, or DELETE statement.",
                "is_correct": true
            },
            {
                "label": "To execute multiple statements atomically.",
                "is_correct": false
            },
            {
                "label": "To automatically optimize complex JOIN operations.",
                "is_correct": false
            },
            {
                "label": "To enforce data integrity constraints.",
                "is_correct": false
            }
        ],
        "answer_description": "Common Table Expressions (CTEs) are temporary result sets that can be referenced within a single SELECT, INSERT, UPDATE, or DELETE statement. They are particularly useful for simplifying complex queries and making them more readable.",
        "difficulty": "hard",
        "tags": ["SQL", "advanced", "CTE"]
    },
    {
        "question": "Explain the purpose and usage of window functions in SQL.",
        "options": [
            {
                "label": "To perform calculations across a set of rows related to the current row.",
                "is_correct": true
            },
            {
                "label": "To create indexes for faster query execution.",
                "is_correct": false
            },
            {
                "label": "To enforce referential integrity constraints.",
                "is_correct": false
            },
            {
                "label": "To define user-defined functions that can be used in SQL queries.",
                "is_correct": false
            }
        ],
        "answer_description": "Window functions in SQL are used to perform calculations across a set of rows related to the current row. They allow for advanced analytical queries, such as calculating running totals, ranking results, and comparing values between rows.",
        "difficulty": "hard",
        "tags": ["SQL", "advanced", "window functions"]
    },
    {
        "question": "What is a recursive SQL query, and when would you use it?",
        "options": [
            {
                "label": "A query that refers to itself in its definition, useful for hierarchical data or graph traversal.",
                "is_correct": true
            },
            {
                "label": "A query that automatically retries failed transactions until they succeed.",
                "is_correct": false
            },
            {
                "label": "A query that optimizes performance by caching results.",
                "is_correct": false
            },
            {
                "label": "A query that ensures data consistency across multiple tables.",
                "is_correct": false
            }
        ],
        "answer_description": "A recursive SQL query is a query that refers to itself in its definition, typically used for querying hierarchical data or traversing graphs. It allows for operations such as traversing a tree structure or finding paths in a graph.",
        "difficulty": "hard",
        "tags": ["SQL", "advanced", "recursive queries"]
    },
    {
        "question": "What are database transactions, and why are they important?",
        "options": [
            {
                "label": "Units of work that are performed within a database management system.",
                "is_correct": true
            },
            {
                "label": "Queries that retrieve data from a database.",
                "is_correct": false
            },
            {
                "label": "Security measures to prevent unauthorized access to databases.",
                "is_correct": false
            },
            {
                "label": "Operations that optimize database performance.",
                "is_correct": false
            }
        ],
        "answer_description": "Database transactions are units of work that are performed within a database management system. They ensure data integrity by guaranteeing that either all of the operations within the transaction succeed or none of them do. This is important for maintaining the consistency and reliability of the data.",
        "difficulty": "hard",
        "tags": ["SQL", "advanced", "database transactions"]
    },
    {
        "question": "Explain the concept of database normalization and its importance in database design.",
        "options": [
            {
                "label": "The process of organizing the attributes and tables of a relational database to minimize redundancy and dependency.",
                "is_correct": true
            },
            {
                "label": "The process of optimizing query performance by creating indexes.",
                "is_correct": false
            },
            {
                "label": "The process of securing a database against unauthorized access.",
                "is_correct": false
            },
            {
                "label": "The process of transforming data from one format to another for analysis.",
                "is_correct": false
            }
        ],
        "answer_description": "Database normalization is the process of organizing the attributes and tables of a relational database to minimize redundancy and dependency. It helps to eliminate data anomalies, such as insertion, update, and deletion anomalies, and ensures that the database is more flexible, efficient, and scalable.",
        "difficulty": "hard",
        "tags": ["SQL", "advanced", "database normalization", "database design"]
    },
    {
        "question": "What is a stored procedure in SQL, and how is it different from a function?",
        "options": [
            {
                "label": "A set of SQL statements that can be executed as a single unit.",
                "is_correct": true
            },
            {
                "label": "A function that returns multiple values.",
                "is_correct": false
            },
            {
                "label": "A function that can execute DML operations.",
                "is_correct": false
            },
            {
                "label": "A function that can be called from within a SELECT statement.",
                "is_correct": false
            }
        ],
        "answer_description": "A stored procedure in SQL is a set of SQL statements that can be executed as a single unit. It can accept input parameters, perform operations, and return results. Unlike functions, stored procedures do not necessarily return a value and can execute DDL (Data Definition Language) statements.",
        "difficulty": "hard",
        "tags": ["SQL", "advanced", "stored procedures"]
    },
    {
        "question": "Explain the ACID properties of database transactions.",
        "options": [
            {
                "label": "Atomicity, Consistency, Isolation, Durability.",
                "is_correct": true
            },
            {
                "label": "Aggregation, Concurrency, Indexing, Debugging.",
                "is_correct": false
            },
            {
                "label": "Allocation, Compression, Integration, Decryption.",
                "is_correct": false
            },
            {
                "label": "Association, Caching, Inheritance, Delegation.",
                "is_correct": false
            }
        ],
        "answer_description": "The ACID properties of database transactions are Atomicity, Consistency, Isolation, and Durability. Atomicity ensures that either all of the operations within a transaction succeed or none of them do. Consistency ensures that the database remains in a valid state before and after the transaction. Isolation ensures that the effects of concurrent transactions are isolated from each other. Durability ensures that the changes made by a transaction are permanent and survive system failures.",
        "difficulty": "hard",
        "tags": ["SQL", "advanced", "ACID properties"]
    },
    {
        "question": "What is query optimization in SQL, and why is it important?",
        "options": [
            {
                "label": "The process of improving the performance of SQL queries by selecting the most efficient execution plan.",
                "is_correct": true
            },
            {
                "label": "The process of validating the syntax of SQL queries.",
                "is_correct": false
            },
            {
                "label": "The process of securing SQL queries against SQL injection attacks.",
                "is_correct": false
            },
            {
                "label": "The process of generating reports from SQL query results.",
                "is_correct": false
            }
        ],
        "answer_description": "Query optimization in SQL is the process of improving the performance of SQL queries by selecting the most efficient execution plan. It is important because it helps to reduce query execution time, minimize resource consumption, and improve overall system performance.",
        "difficulty": "hard",
        "tags": ["SQL", "advanced", "query optimization"]
    },
    {
        "question": "Explain the concept of indexing in SQL databases and its impact on query performance.",
        "options": [
            {
                "label": "Indexes are data structures that improve the speed of data retrieval operations on database tables.",
                "is_correct": true
            },
            {
                "label": "Indexes are constraints that enforce data integrity.",
                "is_correct": false
            },
            {
                "label": "Indexes are stored procedures that execute predefined queries.",
                "is_correct": false
            },
            {
                "label": "Indexes are virtual tables that combine data from multiple tables.",
                "is_correct": false
            }
        ],
        "answer_description": "Indexing in SQL databases involves creating data structures that improve the speed of data retrieval operations on database tables. Indexes allow queries to quickly locate rows based on the values of certain columns, significantly improving query performance, especially for large datasets.",
        "difficulty": "hard",
        "tags": ["SQL", "advanced", "indexing", "query performance"]
    },
    {
        "question": "What are triggers in SQL databases, and how are they used?",
        "options": [
            {
                "label": "Special types of stored procedures that are automatically executed in response to certain events.",
                "is_correct": true
            },
            {
                "label": "Functions that return scalar values based on input parameters.",
                "is_correct": false
            },
            {
                "label": "Indexes that improve the speed of data retrieval operations.",
                "is_correct": false
            },
            {
                "label": "Virtual tables that combine data from multiple tables.",
                "is_correct": false
            }
        ],
        "answer_description": "Triggers in SQL databases are special types of stored procedures that are automatically executed in response to certain events, such as INSERT, UPDATE, or DELETE operations on a table. They are used to enforce business rules, maintain data integrity, and automate repetitive tasks.",
        "difficulty": "hard",
        "tags": ["SQL", "advanced", "triggers"]
    },
    {
        "question": "Explain the concept of database sharding and its benefits.",
        "options": [
            {
                "label": "The process of partitioning data across multiple servers to improve scalability and performance.",
                "is_correct": true
            },
            {
                "label": "The process of encrypting data to protect it from unauthorized access.",
                "is_correct": false
            },
            {
                "label": "The process of compressing data to reduce storage space.",
                "is_correct": false
            },
            {
                "label": "The process of synchronizing data between multiple databases.",
                "is_correct": false
            }
        ],
        "answer_description": "Database sharding is the process of partitioning data across multiple servers to improve scalability and performance. By distributing data across multiple nodes, sharding allows databases to handle larger volumes of data and higher numbers of transactions. It also helps to reduce contention and improve availability.",
        "difficulty": "hard",
        "tags": ["SQL", "advanced", "database sharding", "scalability"]
    },
    {
        "question": "Explain the difference between INNER JOIN, LEFT JOIN, and RIGHT JOIN in SQL.",
        "options": [
            {
                "label": "INNER JOIN returns only the rows where there is a match in both tables, LEFT JOIN returns all rows from the left table and matching rows from the right table, RIGHT JOIN returns all rows from the right table and matching rows from the left table.",
                "is_correct": true
            },
            {
                "label": "INNER JOIN returns all rows from both tables, LEFT JOIN returns only the rows where there is a match in both tables, RIGHT JOIN returns only the rows where there is a match in both tables.",
                "is_correct": false
            },
            {
                "label": "INNER JOIN returns only the rows where there is a match in both tables, LEFT JOIN returns all rows from both tables, RIGHT JOIN returns all rows from both tables.",
                "is_correct": false
            },
            {
                "label": "INNER JOIN returns all rows from the left table and matching rows from the right table, LEFT JOIN returns only the rows where there is a match in both tables, RIGHT JOIN returns only the rows where there is a match in both tables.",
                "is_correct": false
            }
        ],
        "answer_description": "INNER JOIN returns only the rows where there is a match in both tables, LEFT JOIN returns all rows from the left table and matching rows from the right table, RIGHT JOIN returns all rows from the right table and matching rows from the left table.",
        "difficulty": "hard",
        "tags": ["SQL", "databases", "joins"]
    },
    {
        "question": "Explain the concept of ACID properties in the context of database transactions.",
        "options": [
            {
                "label": "ACID stands for Atomicity, Consistency, Isolation, and Durability. Atomicity ensures that all operations within a transaction are completed successfully or none are completed. Consistency ensures that the database remains in a consistent state before and after the transaction. Isolation ensures that the operations of one transaction are isolated from those of other transactions. Durability ensures that once a transaction is committed, the changes it made to the database persist, even in the event of a system failure.",
                "is_correct": true
            },
            {
                "label": "ACID stands for Atomicity, Consistency, Isolation, and Durability. Atomicity ensures that all operations within a transaction are completed successfully or none are completed. Consistency ensures that the database remains in a consistent state after the transaction. Isolation ensures that the operations of one transaction are isolated from those of other transactions. Durability ensures that once a transaction is committed, the changes it made to the database persist.",
                "is_correct": false
            },
            {
                "label": "ACID stands for Atomicity, Consistency, Integrity, and Durability. Atomicity ensures that all operations within a transaction are completed successfully or none are completed. Consistency ensures that the database remains in a consistent state before and after the transaction. Integrity ensures that the database maintains data integrity. Durability ensures that once a transaction is committed, the changes it made to the database persist.",
                "is_correct": false
            },
            {
                "label": "ACID stands for Atomicity, Consistency, Integrity, and Durability. Atomicity ensures that all operations within a transaction are completed successfully or none are completed. Consistency ensures that the database remains in a consistent state after the transaction. Integrity ensures that the database maintains data integrity. Durability ensures that once a transaction is committed, the changes it made to the database persist, even in the event of a system failure.",
                "is_correct": false
            }
        ],
        "answer_description": "ACID stands for Atomicity, Consistency, Isolation, and Durability. Atomicity ensures that all operations within a transaction are completed successfully or none are completed. Consistency ensures that the database remains in a consistent state before and after the transaction. Isolation ensures that the operations of one transaction are isolated from those of other transactions. Durability ensures that once a transaction is committed, the changes it made to the database persist, even in the event of a system failure.",
        "difficulty": "hard",
        "tags": ["SQL", "databases", "transactions"]
    },
    {
        "question": "Explain the concept of normalization in database design.",
        "options": [
            {
                "label": "Normalization is the process of organizing the attributes and tables of a relational database to minimize redundancy and dependency. It involves splitting tables into smaller tables and defining relationships between them to ensure data integrity and reduce data duplication.",
                "is_correct": true
            },
            {
                "label": "Normalization is the process of adding redundancy to a database to improve performance. It involves denormalizing tables and duplicating data to speed up query execution.",
                "is_correct": false
            },
            {
                "label": "Normalization is the process of encrypting data in a database to ensure security. It involves adding encryption algorithms to tables and columns to protect sensitive information.",
                "is_correct": false
            },
            {
                "label": "Normalization is the process of converting a relational database into a non-relational database. It involves removing all relationships between tables and storing data in a single denormalized structure.",
                "is_correct": false
            }
        ],
        "answer_description": "Normalization is the process of organizing the attributes and tables of a relational database to minimize redundancy and dependency. It involves splitting tables into smaller tables and defining relationships between them to ensure data integrity and reduce data duplication.",
        "difficulty": "hard",
        "tags": ["SQL", "databases", "normalization"]
    },
    {
        "question": "What is a recursive CTE (Common Table Expression) in SQL?",
        "options": [
            {
                "label": "A recursive CTE is a CTE that refers to itself within its definition, allowing for iterative processing of hierarchical data.",
                "is_correct": true
            },
            {
                "label": "A recursive CTE is a CTE that cannot refer to itself within its definition, making it suitable for simple queries only.",
                "is_correct": false
            },
            {
                "label": "A recursive CTE is a CTE that automatically joins itself with other tables in the database, simplifying query writing.",
                "is_correct": false
            },
            {
                "label": "A recursive CTE is a CTE that generates random data recursively, useful for creating test datasets.",
                "is_correct": false
            }
        ],
        "answer_description": "A recursive CTE is a CTE that refers to itself within its definition, allowing for iterative processing of hierarchical data.",
        "difficulty": "hard",
        "tags": ["SQL", "databases", "CTE"]
    },
    {
        "question": "What does the 'HAVING' clause do in SQL?",
        "options": [
            {
                "label": "Filters groups based on a specified condition",
                "is_correct": true
            },
            {
                "label": "Filters rows based on a specified condition",
                "is_correct": false
            },
            {
                "label": "Specifies the order of the result set",
                "is_correct": false
            },
            {
                "label": "Joins tables together based on a specified condition",
                "is_correct": false
            }
        ],
        "answer_description": "The 'HAVING' clause is used in combination with the 'GROUP BY' clause to filter groups based on a specified condition.",
        "difficulty": "hard",
        "tags": ["SQL", "queries"]
    },
    {
        "question": "What is the purpose of the 'FULL OUTER JOIN' in SQL?",
        "options": [
            {
                "label": "Returns all rows when there is at least one match in both tables",
                "is_correct": true
            },
            {
                "label": "Returns only the rows that are common in both tables",
                "is_correct": false
            },
            {
                "label": "Returns only the rows that are unique to the left table",
                "is_correct": false
            },
            {
                "label": "Returns only the rows that are unique to the right table",
                "is_correct": false
            }
        ],
        "answer_description": "The 'FULL OUTER JOIN' returns all rows from both tables, including rows where there is no match in the other table.",
        "difficulty": "hard",
        "tags": ["SQL", "joins"]
    },
    {
        "question": "What does the 'TRANSACTION' keyword in SQL represent?",
        "options": [
            {
                "label": "A sequence of SQL statements that are treated as a single unit",
                "is_correct": true
            },
            {
                "label": "A way to define constraints on a table",
                "is_correct": false
            },
            {
                "label": "A way to create a temporary table",
                "is_correct": false
            },
            {
                "label": "A way to specify permissions for a user",
                "is_correct": false
            }
        ],
        "answer_description": "The 'TRANSACTION' keyword is used to group a sequence of SQL statements together, treating them as a single unit of work that must either succeed completely or fail completely.",
        "difficulty": "hard",
        "tags": ["SQL", "transactions"]
    },
    {
        "question": "What is the purpose of the 'WITH RECURSIVE' common table expression (CTE) in SQL?",
        "options": [
            {
                "label": "Allows for recursion within a SQL query",
                "is_correct": true
            },
            {
                "label": "Defines a temporary table for the duration of the query",
                "is_correct": false
            },
            {
                "label": "Specifies the columns to be returned by a query",
                "is_correct": false
            },
            {
                "label": "Combines the results of two or more SELECT statements",
                "is_correct": false
            }
        ],
        "answer_description": "The 'WITH RECURSIVE' CTE allows for recursion within a SQL query, enabling tasks such as hierarchical data traversal and processing.",
        "difficulty": "hard",
        "tags": ["SQL", "common table expressions"]
    },
    {
        "question": "What is the purpose of the 'UNION ALL' operator in SQL?",
        "options": [
            {
                "label": "Combines the results of two or more SELECT statements, including duplicates",
                "is_correct": true
            },
            {
                "label": "Combines the results of two or more SELECT statements, removing duplicates",
                "is_correct": false
            },
            {
                "label": "Sorts the combined result set of two or more SELECT statements",
                "is_correct": false
            },
            {
                "label": "Returns only the rows that are common in both SELECT statements",
                "is_correct": false
            }
        ],
        "answer_description": "The 'UNION ALL' operator is used to combine the results of two or more SELECT statements, including duplicates.",
        "difficulty": "hard",
        "tags": ["SQL", "set operations"]
    },
    {
        "question": "What is the purpose of the 'EXISTS' operator in SQL?",
        "options": [
            {
                "label": "Tests whether a subquery returns any rows",
                "is_correct": true
            },
            {
                "label": "Tests whether a subquery returns a single row",
                "is_correct": false
            },
            {
                "label": "Tests whether a subquery returns multiple rows",
                "is_correct": false
            },
            {
                "label": "Tests whether a subquery returns no rows",
                "is_correct": false
            }
        ],
        "answer_description": "The 'EXISTS' operator tests whether a subquery returns any rows, and returns true if the subquery returns at least one row, otherwise false.",
        "difficulty": "hard",
        "tags": ["SQL", "operators"]
    },
    {
        "question": "What is the purpose of the 'MERGE' statement in SQL?",
        "options": [
            {
                "label": "Performs an insert, update, or delete operation based on the results of a condition",
                "is_correct": true
            },
            {
                "label": "Combines the results of two or more SELECT statements",
                "is_correct": false
            },
            {
                "label": "Specifies the order of the result set",
                "is_correct": false
            },
            {
                "label": "Joins tables together based on a specified condition",
                "is_correct": false
            }
        ],
        "answer_description": "The 'MERGE' statement in SQL allows you to perform an insert, update, or delete operation based on the results of a condition, combining multiple DML operations into a single statement.",
        "difficulty": "hard",
        "tags": ["SQL", "data manipulation"]
    },
    {
        "question": "What is the purpose of the 'ROLLUP' operator in SQL?",
        "options": [
            {
                "label": "Produces a result set that contains the aggregate values for a hierarchy of values",
                "is_correct": true
            },
            {
                "label": "Produces a result set that contains the average values for a group",
                "is_correct": false
            },
            {
                "label": "Produces a result set that contains the maximum values for a group",
                "is_correct": false
            },
            {
                "label": "Produces a result set that contains the distinct values for a group",
                "is_correct": false
            }
        ],
        "answer_description": "The 'ROLLUP' operator in SQL is used to produce a result set that contains the aggregate values for a hierarchy of values, generating subtotals and grand totals for the specified columns.",
        "difficulty": "hard",
        "tags": ["SQL", "aggregation"]
    },
    {
        "question": "What does the 'GRANT' statement do in SQL?",
        "options": [
            {
                "label": "Gives specific privileges to a user or role",
                "is_correct": true
            },
            {
                "label": "Revokes specific privileges from a user or role",
                "is_correct": false
            },
            {
                "label": "Creates a new user or role",
                "is_correct": false
            },
            {
                "label": "Deletes a user or role",
                "is_correct": false
            }
        ],
        "answer_description": "The 'GRANT' statement in SQL is used to give specific privileges to a user or role, allowing them to perform certain actions on database objects.",
        "difficulty": "hard",
        "tags": ["SQL", "security"]
    },
    {
        "question": "What is the purpose of the 'CASE' statement in SQL?",
        "options": [
            {
                "label": "Performs conditional logic in SQL queries",
                "is_correct": true
            },
            {
                "label": "Specifies the order of the result set",
                "is_correct": false
            },
            {
                "label": "Defines a temporary table for the duration of the query",
                "is_correct": false
            },
            {
                "label": "Combines the results of two or more SELECT statements",
                "is_correct": false
            }
        ],
        "answer_description": "The 'CASE' statement in SQL is used to perform conditional logic within SQL queries, allowing for the execution of different actions based on specified conditions.",
        "difficulty": "hard",
        "tags": ["SQL", "conditional logic"]
    },
    {
        "question": "What is the purpose of the 'SAVEPOINT' statement in SQL?",
        "options": [
            {
                "label": "Sets a point in a transaction to which you can later roll back",
                "is_correct": true
            },
            {
                "label": "Commits the current transaction and makes its changes permanent",
                "is_correct": false
            },
            {
                "label": "Rolls back the current transaction to the beginning",
                "is_correct": false
            },
            {
                "label": "Aborts the current transaction and undoes its changes",
                "is_correct": false
            }
        ],
        "answer_description": "The 'SAVEPOINT' statement in SQL sets a point in a transaction to which you can later roll back, allowing for partial rollback of changes within a transaction.",
        "difficulty": "hard",
        "tags": ["SQL", "transactions"]
    },
    {
        "question": "What is the purpose of the 'TABLESAMPLE' clause in SQL?",
        "options": [
            {
                "label": "Returns a random sample of rows from a table",
                "is_correct": true
            },
            {
                "label": "Specifies the number of rows to return in a query result",
                "is_correct": false
            },
            {
                "label": "Specifies the columns to be returned by a query",
                "is_correct": false
            },
            {
                "label": "Combines the results of two or more SELECT statements",
                "is_correct": false
            }
        ],
        "answer_description": "The 'TABLESAMPLE' clause in SQL is used to return a random sample of rows from a table, allowing for efficient testing and analysis of large datasets.",
        "difficulty": "hard",
        "tags": ["SQL", "data sampling"]
    },
    {
        "question": "What does the 'TRUNCATE TABLE' statement do in SQL?",
        "options": [
            {
                "label": "Removes all rows from a table, but retains the table structure and associated indexes",
                "is_correct": true
            },
            {
                "label": "Deletes the table from the database",
                "is_correct": false
            },
            {
                "label": "Deletes specific rows from a table based on a condition",
                "is_correct": false
            },
            {
                "label": "Removes all rows from a table and resets auto-increment values",
                "is_correct": false
            }
        ],
        "answer_description": "The 'TRUNCATE TABLE' statement in SQL removes all rows from a table, but retains the table structure and associated indexes, providing a faster alternative to the 'DELETE' statement for large datasets.",
        "difficulty": "hard",
        "tags": ["SQL", "data manipulation"]
    },
    {
        "question": "What is the purpose of the 'FOR UPDATE' clause in SQL?",
        "options": [
            {
                "label": "Locks the selected rows, preventing other transactions from modifying them",
                "is_correct": true
            },
            {
                "label": "Specifies the columns to be updated in an UPDATE statement",
                "is_correct": false
            },
            {
                "label": "Specifies the order of the result set",
                "is_correct": false
            },
            {
                "label": "Combines the results of two or more SELECT statements",
                "is_correct": false
            }
        ],
        "answer_description": "The 'FOR UPDATE' clause in SQL is used to lock the selected rows, preventing other transactions from modifying them until the current transaction is complete.",
        "difficulty": "hard",
        "tags": ["SQL", "locking"]
    },
    {
        "question": "What is the purpose of the 'RAISE_APPLICATION_ERROR' procedure in PL/SQL?",
        "options": [
            {
                "label": "Raises a custom error message and rolls back the current transaction",
                "is_correct": true
            },
            {
                "label": "Raises a predefined error message and rolls back the current transaction",
                "is_correct": false
            },
            {
                "label": "Raises a custom error message without rolling back the current transaction",
                "is_correct": false
            },
            {
                "label": "Raises a predefined error message without rolling back the current transaction",
                "is_correct": false
            }
        ],
        "answer_description": "The 'RAISE_APPLICATION_ERROR' procedure in PL/SQL is used to raise a custom error message and roll back the current transaction, allowing for controlled error handling within stored procedures.",
        "difficulty": "hard",
        "tags": ["SQL", "error handling"]
    },
    {
        "question": "What is the purpose of the 'BULK COLLECT' clause in PL/SQL?",
        "options": [
            {
                "label": "Retrieves multiple rows of data from the database into PL/SQL collections in a single operation",
                "is_correct": true
            },
            {
                "label": "Retrieves a single row of data from the database into a PL/SQL collection",
                "is_correct": false
            },
            {
                "label": "Retrieves multiple columns of data from the database into PL/SQL collections",
                "is_correct": false
            },
            {
                "label": "Retrieves data from multiple tables into a PL/SQL collection",
                "is_correct": false
            }
        ],
        "answer_description": "The 'BULK COLLECT' clause in PL/SQL is used to retrieve multiple rows of data from the database into PL/SQL collections in a single operation, improving performance by reducing the number of context switches between the SQL engine and PL/SQL engine.",
        "difficulty": "hard",
        "tags": ["SQL", "performance"]
    },
    {
        "question": "What is the purpose of the 'FORALL' statement in PL/SQL?",
        "options": [
            {
                "label": "Performs a DML operation for all elements in a collection in a single statement",
                "is_correct": true
            },
            {
                "label": "Performs a DML operation for a single element in a collection",
                "is_correct": false
            },
            {
                "label": "Performs a DML operation for a subset of elements in a collection",
                "is_correct": false
            },
            {
                "label": "Performs a DML operation for each element in a collection using a loop",
                "is_correct": false
            }
        ],
        "answer_description": "The 'FORALL' statement in PL/SQL is used to perform a DML (Data Manipulation Language) operation for all elements in a collection in a single statement, improving performance by reducing the number of context switches between the SQL engine and PL/SQL engine.",
        "difficulty": "hard",
        "tags": ["SQL", "performance"]
    },
    {
        "question": "What is the purpose of the 'AUTONOMOUS_TRANSACTION' pragma in PL/SQL?",
        "options": [
            {
                "label": "Allows a PL/SQL block to execute SQL statements independently of the main transaction",
                "is_correct": true
            },
            {
                "label": "Specifies the transaction isolation level for a PL/SQL block",
                "is_correct": false
            },
            {
                "label": "Specifies the error handling behavior for a PL/SQL block",
                "is_correct": false
            },
            {
                "label": "Specifies the exception handling behavior for a PL/SQL block",
                "is_correct": false
            }
        ],
        "answer_description": "The 'AUTONOMOUS_TRANSACTION' pragma in PL/SQL allows a PL/SQL block to execute SQL statements independently of the main transaction, enabling tasks such as logging or auditing to be performed without affecting the main transaction's behavior.",
        "difficulty": "hard",
        "tags": ["SQL", "transactions"]
    },
    {
        "question": "What is the purpose of the 'PIPELINED' function in PL/SQL?",
        "options": [
            {
                "label": "Allows a function to return a result set that can be processed row by row",
                "is_correct": true
            },
            {
                "label": "Specifies the return type of a PL/SQL function",
                "is_correct": false
            },
            {
                "label": "Specifies the parameters of a PL/SQL function",
                "is_correct": false
            },
            {
                "label": "Specifies the exception handling behavior for a PL/SQL function",
                "is_correct": false
            }
        ],
        "answer_description": "The 'PIPELINED' function in PL/SQL allows a function to return a result set that can be processed row by row, enabling more efficient processing of large datasets by consuming and producing rows on-demand.",
        "difficulty": "hard",
        "tags": ["SQL", "functions"]
    },
    {
        "question": "What is the purpose of the 'INSTEAD OF' trigger in SQL?",
        "options": [
            {
                "label": "Executes instead of the triggering statement on a view",
                "is_correct": true
            },
            {
                "label": "Executes before the triggering statement on a table",
                "is_correct": false
            },
            {
                "label": "Executes after the triggering statement on a table",
                "is_correct": false
            },
            {
                "label": "Executes when a specific condition is met in a table",
                "is_correct": false
            }
        ],
        "answer_description": "The 'INSTEAD OF' trigger in SQL executes instead of the triggering statement on a view, allowing for custom logic to be applied when inserting, updating, or deleting data through the view.",
        "difficulty": "hard",
        "tags": ["SQL", "triggers"]
    },
    {
        "question": "What is the purpose of the 'MULTISET' operator in SQL?",
        "options": [
            {
                "label": "Performs a multi-set union operation on two queries",
                "is_correct": true
            },
            {
                "label": "Performs a multi-set intersection operation on two queries",
                "is_correct": false
            },
            {
                "label": "Performs a multi-set difference operation on two queries",
                "is_correct": false
            },
            {
                "label": "Performs a multi-set union operation on multiple queries",
                "is_correct": false
            }
        ],
        "answer_description": "The 'MULTISET' operator in SQL performs a multi-set union operation on two queries, combining the results of the queries while preserving duplicate rows.",
        "difficulty": "hard",
        "tags": ["SQL", "set operations"]
    },
    {
        "question": "What is the purpose of the 'ACCESSIBLE BY' clause in SQL?",
        "options": [
            {
                "label": "Specifies the users or roles that can access a package",
                "is_correct": true
            },
            {
                "label": "Specifies the columns that can be accessed by a user or role",
                "is_correct": false
            },
            {
                "label": "Specifies the tables that can be accessed by a user or role",
                "is_correct": false
            },
            {
                "label": "Specifies the privileges that can be granted to a user or role",
                "is_correct": false
            }
        ],
        "answer_description": "The 'ACCESSIBLE BY' clause in SQL is used to specify the users or roles that can access a package, controlling access to the procedures and functions within the package.",
        "difficulty": "hard",
        "tags": ["SQL", "security"]
    },
    {
        "question": "What is the purpose of the 'ANALYZE' statement in SQL?",
        "options": [
            {
                "label": "Gathers statistics about database objects to improve query performance",
                "is_correct": true
            },
            {
                "label": "Generates an execution plan for a SQL statement",
                "is_correct": false
            },
            {
                "label": "Deletes statistics about database objects",
                "is_correct": false
            },
            {
                "label": "Analyzes the structure of database objects",
                "is_correct": false
            }
        ],
        "answer_description": "The 'ANALYZE' statement in SQL is used to gather statistics about database objects, such as tables and indexes, which are then used by the query optimizer to improve query performance.",
        "difficulty": "hard",
        "tags": ["SQL", "performance"]
    },
    {
        "question": "What is the purpose of the 'OVER' clause in SQL?",
        "options": [
            {
                "label": "Defines a window of rows over which a window function operates",
                "is_correct": true
            },
            {
                "label": "Specifies the columns to be returned by a query",
                "is_correct": false
            },
            {
                "label": "Specifies the order of the result set",
                "is_correct": false
            },
            {
                "label": "Defines a temporary table for the duration of the query",
                "is_correct": false
            }
        ],
        "answer_description": "The 'OVER' clause in SQL is used to define a window of rows over which a window function operates, allowing for calculations and aggregations to be performed across different subsets of data within a query result set.",
        "difficulty": "hard",
        "tags": ["SQL", "window functions"]
    },
    {
        "question": "What is the purpose of the 'SESSIONTIMEZONE' function in SQL?",
        "options": [
            {
                "label": "Returns the current session's time zone",
                "is_correct": true
            },
            {
                "label": "Returns the database server's time zone",
                "is_correct": false
            },
            {
                "label": "Returns the client's time zone",
                "is_correct": false
            },
            {
                "label": "Returns the system's time zone",
                "is_correct": false
            }
        ],
        "answer_description": "The 'SESSIONTIMEZONE' function in SQL is used to return the current session's time zone, providing information about the time zone settings that are in effect for the current database session.",
        "difficulty": "hard",
        "tags": ["SQL", "date and time"]
    },
    {
        "question": "What is the purpose of the 'SYS_CONTEXT' function in SQL?",
        "options": [
            {
                "label": "Returns the value of a specified attribute in the current session",
                "is_correct": true
            },
            {
                "label": "Returns the value of a specified attribute in the database",
                "is_correct": false
            },
            {
                "label": "Returns the value of a specified attribute in the operating system",
                "is_correct": false
            },
            {
                "label": "Returns the value of a specified attribute in the SQL engine",
                "is_correct": false
            }
        ],
        "answer_description": "The 'SYS_CONTEXT' function in SQL is used to return the value of a specified attribute in the current session, providing access to session-specific information such as user names, login roles, and time zone settings.",
        "difficulty": "hard",
        "tags": ["SQL", "session management"]
    },
    {
        "question": "What is the purpose of the 'CONNECT BY' clause in SQL?",
        "options": [
            {
                "label": "Specifies the hierarchical relationship between rows in a table",
                "is_correct": true
            },
            {
                "label": "Specifies the order of the result set",
                "is_correct": false
            },
            {
                "label": "Specifies the filtering conditions for a query",
                "is_correct": false
            },
            {
                "label": "Specifies the grouping of rows in a result set",
                "is_correct": false
            }
        ],
        "answer_description": "The 'CONNECT BY' clause in SQL is used to specify the hierarchical relationship between rows in a table, allowing for the retrieval of hierarchical data such as organizational charts or tree structures.",
        "difficulty": "hard",
        "tags": ["SQL", "hierarchical queries"]
    },
    {
        "question": "What is the purpose of the 'COLLECT' function in SQL?",
        "options": [
            {
                "label": "Aggregates the values of a column into a collection",
                "is_correct": true
            },
            {
                "label": "Concatenates the values of a column into a single string",
                "is_correct": false
            },
            {
                "label": "Counts the number of non-null values in a column",
                "is_correct": false
            },
            {
                "label": "Calculates the average value of a column",
                "is_correct": false
            }
        ],
        "answer_description": "The 'COLLECT' function in SQL is used to aggregate the values of a column into a collection data type, such as an array or nested table, allowing for the manipulation of multiple values as a single unit.",
        "difficulty": "hard",
        "tags": ["SQL", "collections"]
    },
    {
        "question": "What is the purpose of the 'MODEL' clause in SQL?",
        "options": [
            {
                "label": "Performs mathematical calculations and simulations on tabular data",
                "is_correct": true
            },
            {
                "label": "Specifies the order of the result set",
                "is_correct": false
            },
            {
                "label": "Specifies the filtering conditions for a query",
                "is_correct": false
            },
            {
                "label": "Specifies the grouping of rows in a result set",
                "is_correct": false
            }
        ],
        "answer_description": "The 'MODEL' clause in SQL is used to perform mathematical calculations and simulations on tabular data, allowing for complex analytical processing such as forecasting, trend analysis, and Monte Carlo simulations.",
        "difficulty": "hard",
        "tags": ["SQL", "analytical functions"]
    },
    {
        "question": "What is the purpose of the 'GLOBAL TEMPORARY' table in SQL?",
        "options": [
            {
                "label": "Creates a temporary table that is visible to all sessions and is automatically dropped when the session ends",
                "is_correct": true
            },
            {
                "label": "Creates a temporary table that is visible only to the current session and is automatically dropped when the session ends",
                "is_correct": false
            },
            {
                "label": "Creates a temporary table that is visible to all sessions and persists beyond the current session",
                "is_correct": false
            },
            {
                "label": "Creates a temporary table that is visible only to the current session and persists beyond the current session",
                "is_correct": false
            }
        ],
        "answer_description": "The 'GLOBAL TEMPORARY' table in SQL creates a temporary table that is visible to all sessions and is automatically dropped when the session ends, providing a way to store temporary data that is shared across multiple sessions.",
        "difficulty": "hard",
        "tags": ["SQL", "temp tables"]
    },
    {
        "question": "What is the purpose of the 'SESSION' cache in SQL?",
        "options": [
            {
                "label": "Stores data that is specific to a particular database session",
                "is_correct": true
            },
            {
                "label": "Stores frequently accessed data to improve query performance",
                "is_correct": false
            },
            {
                "label": "Stores execution plans for frequently executed SQL statements",
                "is_correct": false
            },
            {
                "label": "Stores metadata about database objects such as tables and indexes",
                "is_correct": false
            }
        ],
        "answer_description": "The 'SESSION' cache in SQL stores data that is specific to a particular database session, such as session variables, temporary tables, and cursor results, providing a way to maintain state and share data within the context of a single session.",
        "difficulty": "hard",
        "tags": ["SQL", "caching"]
    },
    {
        "question": "What is the purpose of the 'AUTONOMOUS_TRANSACTION' pragma in PL/SQL?",
        "options": [
            {
                "label": "Allows a PL/SQL block to execute SQL statements independently of the main transaction",
                "is_correct": true
            },
            {
                "label": "Specifies the transaction isolation level for a PL/SQL block",
                "is_correct": false
            },
            {
                "label": "Specifies the error handling behavior for a PL/SQL block",
                "is_correct": false
            },
            {
                "label": "Specifies the exception handling behavior for a PL/SQL block",
                "is_correct": false
            }
        ],
        "answer_description": "The 'AUTONOMOUS_TRANSACTION' pragma in PL/SQL allows a PL/SQL block to execute SQL statements independently of the main transaction, enabling tasks such as logging or auditing to be performed without affecting the main transaction's behavior.",
        "difficulty": "hard",
        "tags": ["SQL", "transactions"]
    },
    {
        "question": "What is the purpose of the 'PIPELINED' function in PL/SQL?",
        "options": [
            {
                "label": "Allows a function to return a result set that can be processed row by row",
                "is_correct": true
            },
            {
                "label": "Specifies the return type of a PL/SQL function",
                "is_correct": false
            },
            {
                "label": "Specifies the parameters of a PL/SQL function",
                "is_correct": false
            },
            {
                "label": "Specifies the exception handling behavior for a PL/SQL function",
                "is_correct": false
            }
        ],
        "answer_description": "The 'PIPELINED' function in PL/SQL allows a function to return a result set that can be processed row by row, enabling more efficient processing of large datasets by consuming and producing rows on-demand.",
        "difficulty": "hard",
        "tags": ["SQL", "functions"]
    },
    {
        "question": "What is the purpose of the 'TABLE' function in PL/SQL?",
        "options": [
            {
                "label": "Converts a collection into a nested table",
                "is_correct": true
            },
            {
                "label": "Converts a nested table into a collection",
                "is_correct": false
            },
            {
                "label": "Converts a collection into a VARRAY",
                "is_correct": false
            },
            {
                "label": "Converts a VARRAY into a collection",
                "is_correct": false
            }
        ],
        "answer_description": "The 'TABLE' function in PL/SQL is used to convert a collection data type, such as an array or nested table, into a relational format known as a nested table, allowing for the manipulation of collection data using standard SQL techniques.",
        "difficulty": "hard",
        "tags": ["SQL", "collections"]
    },
    {
        "question": "What is the purpose of the 'PRAGMA RESTRICT_REFERENCES' pragma in PL/SQL?",
        "options": [
            {
                "label": "Specifies the purity level of a PL/SQL subprogram",
                "is_correct": true
            },
            {
                "label": "Specifies the transaction isolation level for a PL/SQL subprogram",
                "is_correct": false
            },
            {
                "label": "Specifies the error handling behavior for a PL/SQL subprogram",
                "is_correct": false
            },
            {
                "label": "Specifies the exception handling behavior for a PL/SQL subprogram",
                "is_correct": false
            }
        ],
        "answer_description": "The 'PRAGMA RESTRICT_REFERENCES' pragma in PL/SQL is used to specify the purity level of a PL/SQL subprogram, indicating whether the subprogram reads or writes database tables, which helps the compiler optimize SQL statements within the subprogram.",
        "difficulty": "hard",
        "tags": ["SQL", "optimization"]
    },
    {
        "question": "What is the purpose of the 'FETCH FIRST' clause in SQL?",
        "options": [
            {
                "label": "Specifies the number of rows to retrieve from a query result set",
                "is_correct": true
            },
            {
                "label": "Specifies the starting position for retrieving rows from a query result set",
                "is_correct": false
            },
            {
                "label": "Specifies the columns to be returned by a query",
                "is_correct": false
            },
            {
                "label": "Specifies the order of the result set",
                "is_correct": false
            }
        ],
        "answer_description": "The 'FETCH FIRST' clause in SQL is used to specify the number of rows to retrieve from a query result set, allowing for pagination and limiting the number of rows returned by a query.",
        "difficulty": "hard",
        "tags": ["SQL", "pagination"]
    },
    {
        "question": "What is the purpose of the 'MATCH_RECOGNIZE' clause in SQL?",
        "options": [
            {
                "label": "Performs pattern matching on a sequence of rows",
                "is_correct": true
            },
            {
                "label": "Performs fuzzy matching on string data",
                "is_correct": false
            },
            {
                "label": "Performs full-text search on text data",
                "is_correct": false
            },
            {
                "label": "Performs similarity matching on structured data",
                "is_correct": false
            }
        ],
        "answer_description": "The 'MATCH_RECOGNIZE' clause in SQL is used to perform pattern matching on a sequence of rows, allowing for the detection of complex patterns and trends within structured data sets.",
        "difficulty": "hard",
        "tags": ["SQL", "pattern matching"]
    },
    {
        "question": "What is the purpose of the 'EXTERNAL TABLE' feature in SQL?",
        "options": [
            {
                "label": "Allows data from external sources to be queried as if it were a regular table",
                "is_correct": true
            },
            {
                "label": "Allows data from external sources to be imported into the database",
                "is_correct": false
            },
            {
                "label": "Allows data from internal sources to be exported to external files",
                "is_correct": false
            },
            {
                "label": "Allows data from internal sources to be queried remotely",
                "is_correct": false
            }
        ],
        "answer_description": "The 'EXTERNAL TABLE' feature in SQL allows data from external sources, such as files or remote databases, to be queried as if it were a regular table within the database, providing a convenient way to integrate external data into SQL queries.",
        "difficulty": "hard",
        "tags": ["SQL", "data integration"]
    },

];

export default questions