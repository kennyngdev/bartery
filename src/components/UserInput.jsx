import {useState, useEffect, useRef} from 'react';
import {addStudents } from '../utils';
import Button from 'react-bootstrap/Button';


function UserInput ({students,setStudents}) {

const inputEl= useRef(null);
function trackInput () {
    inputEl.current.focus();
    console.log(inputEl.current.value);
    if (inputEl.current.value.length<=0) console.log("please enter the name");
    if(inputEl.current.value.length>=1)addStudents(inputEl.current.value);
    setStudents([...students, inputEl.current.value]);
}


    return (
        <>
        <input ref={inputEl} type="text"></input>
        <Button variant="btn btn-primary" onClick={trackInput}>Submit</Button> {' '}
        </>
    )


}

export default UserInput