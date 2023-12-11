package com.project.spring_react.Student;

import org.springframework.web.bind.annotation.*;

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

    private final StudentService studentService;

    public StudentController(StudentService studentService){
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getAllStudents(){

        throw new IllegalStateException("can not get all students");
//        return studentService.getAllStudents();
    }

    @PostMapping
    public void addNewStudent(@RequestBody Student student){
        studentService.addNewStudent(null ,student);
    }
}
