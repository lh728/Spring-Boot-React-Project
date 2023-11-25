package com.project.spring_react.Student;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
@Repository
public class StudentDataAccessService {

    private final JdbcTemplate jdbcTemplate;

    @Autowired
    public StudentDataAccessService(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    public List<Student> selectAllStudents(){
        String sql = "select student_id, first_name, last_name, email, gender " +
                "from student";
        return jdbcTemplate.query(sql, getStudentFromDB());
    }

    private static RowMapper<Student> getStudentFromDB() {
        return (resultSet, i) -> {
            String studentIdStr = resultSet.getString("student_id");
            UUID studentId = UUID.fromString(studentIdStr);
            String firstName = resultSet.getString("first_name");
            String lastName = resultSet.getString("last_name");
            String email = resultSet.getString("email");
            String gender = resultSet.getString("gender").toUpperCase();
            return new Student(studentId, firstName, lastName, email, gender);
        };
    }
}
