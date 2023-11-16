CREATE TABLE IF NOT EXISTS student (
    student_id uuid PRIMARY KEY NOT NULL,
    first_name varchar(100) NOT NULL,
    last_name varchar(100) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    gender varchar(6) NOT NULL
    CHECK (
    gender = 'MALE' OR
    gender = 'male' OR
    gender = 'FEMALE' OR
    gender = 'female'
          )
    );