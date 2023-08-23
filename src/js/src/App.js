import './App.css';
import {getAllStudents} from './client';

function App() {
  state = {
    student: []
  }
  fetchStudents = () => {
    getAllStudents().then(res => res.json().then(students => {
      console.log(students);
    }))
  }
  return (
    <h1> hello world! </h1>

  );
}

export default App;
