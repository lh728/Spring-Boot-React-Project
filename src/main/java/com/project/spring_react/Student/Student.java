package com.project.spring_react.Student;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.Getter;

import java.util.UUID;

/**
 * @ClassName Student
 * @Description Student base class
 * @Author lhj
 * @DATE 2023/8/20 17:23
 * @Version 1.0
 */
@Getter
public class Student {

    private final UUID studentId;
    @NotBlank
    private final String firstName;
    @NotBlank
    private final String lastName;
    @Email
    private final String email;
    @NotBlank
    private final String gender;

    public Student(@JsonProperty("studentId") UUID studentId,
                   @JsonProperty("firstName") String firstName,
                   @JsonProperty("lastName") String lastName,
                   @JsonProperty("email") String email,
                   @JsonProperty("gender") String gender) {
        this.studentId = studentId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.gender = gender;
    }
}
