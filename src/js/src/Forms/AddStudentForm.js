import React from "react";
import { Formik } from "formik";
import { Input, Button, Tag } from "antd";
import { addNewStudent } from "../client"

const inputButtonMargin = { marginBottom: '10px' };
const tagStyle = { backgroundColor: '#f50', color: 'white', ...inputButtonMargin };

const AddStudentForm = (props) => {
    return (
        <Formik
            initialValues={{ firstName: '', lastName: '', email: '', gender: '' }}
            validate={values => {
                const errors = {};
                if (!values.firstName) {
                    errors.firstName = 'Required';
                }
                if (!values.lastName) {
                    errors.lastName = 'Required';
                }
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                if (!values.gender) {
                    errors.gender = 'Required';
                }
                return errors;
            }}
            onSubmit={(student, { setSubmitting }) => {
                addNewStudent(student).then(() => {
                    props.onSuccess();
                    setSubmitting(false);
                })
            }}
        >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                submitForm,
                isValid
                /* and other goodies */
            }) => (
                <form onSubmit={handleSubmit}>
                    <Input
                        name="firstName"
                        style={inputButtonMargin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                        placeholder="First Name. E.g John"
                    />
                    {errors.firstName && touched.firstName && <Tag style={tagStyle}>{errors.firstName}</Tag>}
                    <Input
                        name="lastName"
                        style={inputButtonMargin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                        placeholder="Last Name. E.g Smith"
                    />
                    {errors.lastName && touched.lastName && <Tag style={tagStyle}>{errors.lastName}</Tag>}
                    <Input
                        type="email"
                        name="email"
                        style={inputButtonMargin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        placeholder="Email E.g example@gamil.com "
                    />
                    {errors.email && touched.email && <Tag style={tagStyle}>{errors.email}</Tag>}
                    <Input
                        name="gender"
                        style={inputButtonMargin}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.gender}
                        placeholder="Gender E.g Male or Female"
                    />
                    {errors.gender && touched.gender && <Tag style={tagStyle}>{errors.gender}</Tag>}
                    <Button
                        onClick={() => submitForm()}
                        type="submit"
                        disabled={isSubmitting | (touched && !isValid)}>
                        Submit
                    </Button>
                </form>
            )}
        </Formik>
    )


}

export default AddStudentForm;