package com.project.spring_react.Student;

import com.project.spring_react.Exception.ApiRequestException;
import jakarta.validation.Valid;
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
@RequestMapping("api/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService){
        this.studentService = studentService;
    }

    @GetMapping
    public List<Student> getAllStudents(){
        return studentService.getAllStudents();
    }

    @PostMapping
    public void addNewStudent(@RequestBody @Valid Student student){
        studentService.addNewStudent(null ,student);
    }

    @GetMapping("/{studentId}/courses")
    public List<StudentCourse> getAllCoursesForStudent(@PathVariable("studentId") UUID studentId){
        return studentService.getAllCoursesForStudent(studentId);
    }
}
