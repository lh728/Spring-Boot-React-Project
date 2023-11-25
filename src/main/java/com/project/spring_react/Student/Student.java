package com.project.spring_react.Student;

import java.util.UUID;

/**
 * @ClassName Student
 * @Description Student base class
 * @Author lhj
 * @DATE 2023/8/20 17:23
 * @Version 1.0
 */
public class Student {

    private final UUID studentId;
    private final String firstName;
    private final String lastName;
    private final String email;
    private final String gender;

    public Student(UUID studentId, String firstName, String lastName, String email, String gender) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
    }

    public UUID getStudentId() {
        return studentId;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public String getGender() {
        return gender;
    }
}
