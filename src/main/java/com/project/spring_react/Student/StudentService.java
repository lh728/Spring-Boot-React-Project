package com.project.spring_react.Student;

import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
@Service
public class StudentService {

    public List<Student> getAllStudents(){
        return List.of(new Student(UUID.randomUUID(),
                "hongjin", "lu", "holu@tcd.ie", Student.Gender.Male));
    }



}
