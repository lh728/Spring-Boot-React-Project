import React, { Component } from 'react';
import './App.css';
import Container from './Container';
import Footer from './Footer';
import {getAllStudents} from './client';
import AddStudentForm from './Forms/AddStudentForm';
import {
  Table,Avatar,Spin,Modal
} from 'antd';
import { LoadingOutlined } from '@ant-design/icons';


class App extends Component  {

  state = {
    students: [],
    isFetching: false,
    isAddStudentModalVisisble: false
  }

  componentDidMount(){
    this.fetchStudents();
  }

  openAddStudentModalVisisble = () => {
    this.setState({
      isAddStudentModalVisisble:true
    })
  }

  closeAddStudentModalVisisble = () => {
    this.setState({
      isAddStudentModalVisisble:false
    })
  }

  fetchStudents = () => {
    this.setState({
      isFetching:true
    });
    getAllStudents().then((res) => {
      res.json().then(students => {
        this.setState({
          students,
          isFetching:false
        });
      })
    });
  }


  render(){ 
    
    const {students,isFetching,isAddStudentModalVisisble} = this.state;


    if(isFetching){
      return(
        <Container>
          <Spin
            indicator={<LoadingOutlined  style={{ fontSize: 24,  }} spin/>}/>
        </Container>
      )
    }

    if(students && students.length){   
      const columns = [
        {
          title:'',
          key: 'avator',
          render:(text,student) => {
            return(
            <Avatar size='large'>
              {`${student.firstName.charAt(0).toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}
            </Avatar>
            );
          }
        },
        {
          title:'StudentId',
          dataIndex:'studentId',
          key:'studentId'
        },
        {
          title:'First Name',
          dataIndex:'firstName',
          key:'firstName'
        },
        {
          title:'Last Name',
          dataIndex:'lastName',
          key:'lastName'
        },
        {
          title:'Email',
          dataIndex:'email',
          key:'email'
        },
        {
          title:'Gender',
          dataIndex:'gender',
          key:'gender'
        },
      ];
      
      return (
        <Container>
          <Table dataSource={students} columns={columns} rowKey='studentId' />
          <Modal title="Add New student" open={isAddStudentModalVisisble} 
            onOk={this.openAddStudentModalVisisble} 
            onCancel={this.closeAddStudentModalVisisble}
            width={1000}>
            <AddStudentForm/>
          </Modal>
          <Footer numberOfStudents={students.length} handleAddStudentClickEvent={this.openAddStudentModalVisisble}></Footer>
      </Container>
      );

    }


    return (
      <div className="App">
        <h1> No Students found</h1>
      </div>
    );
  }

}

export default App;
