# Java Portal Schema Documentation

## Introduction

This documentation outlines the database schema for the Java Portal. The schema consists of three main tables: Course, Students, and Users. Each table serves a specific purpose in managing course information, student records, and user accounts.

### Contributors

- Authored by: Amisha Kumar
- SQL Queries extracted by: Aryan Dwivedi

## Link for the ER Diagram:

For the entity-relationship diagram (ERD) representing the relationships between tables [![ER Diagram](https://i.ibb.co/4g8HV71/final-ER-Diagram.png)](https://ibb.co/6JHkWmX)




## Database Schema

### Course Details Table

The Course Details table stores information about courses, including their names and status.


|  Field         |  Type           |  Null  |  Key  |  Extra           |
|----------------|-----------------|--------|-------|------------------|
|  id            |  bigint (20)    |  NO    | PRI   |  auto_increment  |
|  course_detail |  varchar(255)   |  YES   |       |                  |
|  course_id     |  varchar(255)   |  YES   |       |                  |
|  course_name   |  varchar(255)   |  YES   |       |                  |
|  created_at    |  datetime(6)    |  YES   |       |                  |
|  status        |  bit(1)         |  YES   |       |                  |
|  updated_at    |  datetime(6)    |  YES   |       |                  |


## Sample Queries

Here are some sample SQL queries to demonstrate how to retrieve or manipulate data from the database:



### Students Table

The Students table contains data about students, including their personal information and the course they are enrolled in.


|  Field         |  Type           |  Null  |  Key  |  Extra           |
|----------------|-----------------|--------|-------|------------------|
|  id            |  bigint (20)    |  NO    | PRI   |  auto_increment  |
|  address       |  varchar(255)   |  YES   |       |                  |
|  city          |  varchar(255)   |  YES   |       |                  |
|  course_id     |  varchar(255)   |  YES   |       |                  |
|  created_at    |  datetime(6)    |  YES   |       |                  |
|  date_of_birth |  date           |  YES   |       |                  |
|  email         |  varchar(255)   |  YES   |       |                  |
|  mobile_number |  varchar(255)   |  YES   |       |                  |
|  status        |  bit(1)         |  YES   |       |                  |
|  student_name  |  varchar(255)   |  YES   |       |                  |
|  updated_at    |  datetime(6)    |  YES   |       |                  |


## Sample Queries

Here are some sample SQL queries to demonstrate how to retrieve or manipulate data from the database:



### Users Table

The Users table stores user account information for authentication.


|  Field         |  Type           |  Null  |  Key  |  Extra           |
|----------------|-----------------|--------|-------|------------------|
|  id            |  bigint (20)    |  NO    | PRI   |  auto_increment  |
|  created_at    |  datetime(6)    |  YES   |       |                  |
|  email         |  varchar(255)   |  YES   | UNI   |                  |
|  password      |  varchar(255)   |  YES   |       |                  |
|  updated_at    |  datetime(6)    |  YES   |       |                  |
|  username      |  varchar(255)   |  YES   |       |                  |


## Sample Queries

Here are some sample SQL queries to demonstrate how to retrieve or manipulate data from the database:
