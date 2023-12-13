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