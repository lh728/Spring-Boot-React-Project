# Spring-Boot-React-Project
SpringBoot + React + Maven + Docker + Spring Data + AWS RDS + Beanstalk + Git + Slack + Unit Testing



### Version Description

- Java 17
- Spring Boot 3.1.2
- Maven 3.9.2
- Node.js v20.9
- React 18.2.0
- Ant Design 5.11.0
- Postgres SQL (using docker) 16.0
- Docker 
- unfetch 4.2.0
- formik 2.4.5



### Database Related

To enter the database created within Docker, use the following command:

```shell
docker exec -it <docker-postgresSQL-name> psql -U <The username you set.>
```

Alternatively, you can access PostgreSQL externally using an application like Navicat, connecting to the virtual machine's IP address + port 3306.

There is a database called `student`  we created.

 And we also create a table called student, here is the SQL script:

```sql
CREATE TABLE IF NOT EXISTS student (
    student_id uuid PRIMARY KEY NOT NULL,
    first_name varchar(100) NOT NULL,
    last_name varchar(100) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    gender varchar(64) NOT NULL
    );

CREATE TABLE IF NOT EXISTS course (
    course_id uuid PRIMARY KEY NOT NULL,
    name varchar(255) NOT NULL UNIQUE,
    description TEXT NOT NULL,
    department varchar(255),
    teacher_name varchar(100)
    );

CREATE TABLE IF NOT EXISTS student_course (
    student_id uuid NOT NULL REFERENCES student (student_id),
    course_id uuid NOT NULL REFERENCES course (course_id),
    startDate DATE NOT NULL,
    endDate DATE NOT NULL UNIQUE,
    grade INTEGER CHECK (grade >= 0 AND grade <= 100),
    UNIQUE (student_id,course_id)
    );
```

The data will be randomly generated using <a href="https://www.mockaroo.com/">Mockaroo</a>, producing 1000 records. You can find my SQL file directly in the DB folder.

