package com.project.spring_react;

import org.springframework.stereotype.Component;

import java.util.function.Predicate;
import java.util.regex.Pattern;
@Component
public class EmailValidator implements Predicate<String> {

    public static final Predicate<String> EMAIL_REGEX = Pattern.compile("^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,}$",
            Pattern.CASE_INSENSITIVE).asPredicate();
    @Override
    public boolean test(String email) {
        return EMAIL_REGEX.test(email);
    }
}
