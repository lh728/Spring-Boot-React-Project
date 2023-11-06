import React, { Component } from 'react';
import './App.css';
import Container from './Container';
import {getAllStudents} from './client';
import {
  Table
} from 'antd';

class App extends Component  {

  state = {
    students: []
  }

  componentDidMount(){
    this.fetchStudents();
  }

  fetchStudents = () => {
    getAllStudents().then((res) => {
      res.json().then(students => {
        this.setState({
          students
        });
      })
    });
  }


  render(){ 
    
    const {students} = this.state;

    if(students && students.length){   
      const columns = [
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
      <Table dataSource={students} columns={columns} rowKey='studentId' pagination={false}/>
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
