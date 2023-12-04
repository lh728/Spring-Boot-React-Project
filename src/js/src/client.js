import fetch from 'unfetch';

export const getAllStudents = () => fetch('api/students');

export const addNewStudent = studnet => fetch('api/students',{
    headers:{
        'Content-Type':'application/json'
    },
    method: 'POST',
    body: JSON.stringify(studnet)
});