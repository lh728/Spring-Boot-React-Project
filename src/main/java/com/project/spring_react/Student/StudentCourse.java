package com.project.spring_react.Student;

import lombok.Getter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
public class StudentCourse {

    private final UUID studentId;
    private final UUID courseId;
    private final LocalDate startDate;
    private final LocalDate endDate;
    private final Integer grade;
    private final String name;
    private final String description;
    private final String teacherName;
    private final String department;

    public StudentCourse(UUID studentId, UUID courseId, LocalDate startDate, LocalDate endDate, Integer grade, String name, String description, String teacherName, String department) {
        this.studentId = studentId;
        this.courseId = courseId;
        this.startDate = startDate;
        this.endDate = endDate;
        this.grade = grade;
        this.name = name;
        this.description = description;
        this.teacherName = teacherName;
        this.department = department;
    }


}
