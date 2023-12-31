import React, { Component } from 'react';
import './App.css';
import Container from './Container';
import Footer from './Footer';
import { getAllStudents } from './client';
import AddStudentForm from './Forms/AddStudentForm';
import {
  Table, Avatar, Spin, Modal, Empty
} from 'antd';
import { errorNotification } from './Notification';
import { LoadingOutlined } from '@ant-design/icons';


class App extends Component {

  state = {
    students: [],
    isFetching: false,
    isAddStudentModalVisisble: false
  }

  componentDidMount() {
    this.fetchStudents();
  }

  openAddStudentModalVisisble = () => {
    this.setState({
      isAddStudentModalVisisble: true
    })
  }

  closeAddStudentModalVisisble = () => {
    this.setState({
      isAddStudentModalVisisble: false
    })
  }

  fetchStudents = () => {
    this.setState({
      isFetching: true
    });
    getAllStudents().then(res =>
      res.json().then(students => {
        this.setState({
          students,
          isFetching: false
        });
      }))
      .catch(error => {
        errorNotification(error.error.message, error.error.httpStatus)
        this.setState({
          isFetching: false
        });
      });
  }


  render() {

    const { students, isFetching, isAddStudentModalVisisble } = this.state;


    if (isFetching) {
      return (
        <Container>
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 24, }} spin />} />
        </Container>
      )
    }

    const commonElements = () => {
      return (
        <div>
          <Modal title="Add New student" open={isAddStudentModalVisisble}
            onOk={this.openAddStudentModalVisisble}
            onCancel={this.closeAddStudentModalVisisble}
            width={1000}>
            <AddStudentForm
              onSuccess={() => {
                this.closeAddStudentModalVisisble();
                this.fetchStudents();
              }}
              onFailure={(error) => {
                errorNotification(error.error.message, error.error.httpStatus)
              }}
            />
          </Modal>
          <Footer numberOfStudents={students.length} handleAddStudentClickEvent={this.openAddStudentModalVisisble}></Footer>
        </div>
      )
    }

    if (students && students.length) {

      const columns = [
        {
          title: '',
          key: 'avator',
          render: (text, student) => {
            return (
              <Avatar size='large'>
                {`${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
              </Avatar>
            );
          }
        },
        {
          title: 'StudentId',
          dataIndex: 'studentId',
          key: 'studentId'
        },
        {
          title: 'First Name',
          dataIndex: 'firstName',
          key: 'firstName'
        },
        {
          title: 'Last Name',
          dataIndex: 'lastName',
          key: 'lastName'
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email'
        },
        {
          title: 'Gender',
          dataIndex: 'gender',
          key: 'gender'
        },
      ];

      return (
        <Container>
          <Table style={{ marginBottom: '100px' }} dataSource={students} columns={columns} rowKey='studentId' />
          {commonElements()}
        </Container>
      );

    }


    return (
      <div className="App">
        <Container>
          <Empty description={
            <h1>No students found</h1>
          }></Empty>
          {commonElements()}
        </Container>
      </div>
    );
  }

}

export default App;
