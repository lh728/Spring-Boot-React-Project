import React from "react";
import Container from "./Container";
import { Avatar, Button } from "antd";
import "./Footer.css"

const Footer = (props) => {
    return(
        <div className="footer">
            <Container>
                {props.numberOfStudents !== undefined ? 
                <Avatar style={{backgroundColor: '#f56a00' , marginRight: '5px'}} size={"large"}>
                    {props.numberOfStudents}</Avatar> : null }
            <Button onClick={() => props.handleAddStudentClickEvent()} type="primary">Add new Student</Button>
            </Container>
        </div>
    )
}

export default Footer;