package com.project.spring_react;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class EmailValidatorTest {

    private final EmailValidator emailValidator = new EmailValidator();
    @Test
    void isEmailCorrect() {
        assertTrue(emailValidator.test("hello@gmail.com"));
    }

    @Test
    void isEmailIncorrect() {
        assertFalse(emailValidator.test("hellogmail.com"));
    }

    @Test
    void isEmailIncorrectWithoutDotAtTheEnd() {
        assertFalse(emailValidator.test("hello@gmailcom"));
    }
}