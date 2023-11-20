package com.project.spring_react.Student;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
@Repository
public class StudentDataAccessService {

    public List<Student> selectAllStudents(){
        return List.of(new Student(UUID.randomUUID(),
                "hongjin", "lu", "holu@tcd.ie", Student.Gender.Male));
    }
}
