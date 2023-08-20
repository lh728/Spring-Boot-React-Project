package com.project.spring_react.Student;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

/**
 * @ClassName StudentController
 * @Description Student Controller
 * @Author lhj
 * @DATE 2023/8/20 17:27
 * @Version 1.0
 */
@RestController
@RequestMapping("/students")
public class StudentController {
    @GetMapping
    public List<Student> getAllStudents(){
        return List.of(new Student(UUID.randomUUID(),
                "hongjin","lu","holu@tcd.ie",Student.Gender.Male));
    }
}
