import './App.css';
import {getAllStudents} from './client';

function App() {
  <h1> hello world! </h1>
  return (
    getAllStudents().then(res => res.json().then(students => {
      console.log(students);
    }))
  );
}

export default App;
