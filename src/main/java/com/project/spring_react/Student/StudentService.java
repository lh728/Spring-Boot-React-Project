package com.project.spring_react.Student;

import com.project.spring_react.EmailValidator;
import com.project.spring_react.Exception.ApiRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;
@Service
public class StudentService {

    private final StudentDataAccessService studentDataAccessService;
    private final EmailValidator emailValidator;
    @Autowired
    public StudentService(StudentDataAccessService studentDataAccessService, EmailValidator emailValidator) {
        this.studentDataAccessService = studentDataAccessService;
        this.emailValidator = emailValidator;
    }

    public List<Student> getAllStudents(){
        return studentDataAccessService.selectAllStudents();
    }


    void addNewStudent(UUID studentId, Student student) {
        UUID uuid = Optional.ofNullable(studentId).orElse(UUID.randomUUID());
        if(!emailValidator.test(student.getEmail())){
            throw new ApiRequestException(student.getEmail() + " is not valid");
        }

        if(studentDataAccessService.isEmailTaken(student.getEmail())){
            throw new ApiRequestException(student.getEmail() + " is taken");
        }
        studentDataAccessService.insertStudent(uuid,student);
    }

    void addNewStudent(Student student) {
        addNewStudent(null,student);
    }
}
