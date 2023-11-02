import React, { Component } from 'react';
import './App.css';
import {getAllStudents} from './client';

class App extends Component  {

  render(){ 

    getAllStudents().then((res) => {
      res.json().then(students => {
        console.log(students);
      })
    });

    return (
      <div className="App">
        <h1> luhongjin</h1>
      </div>
    );
  }

}

export default App;
