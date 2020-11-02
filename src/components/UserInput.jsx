import {useState, useEffect, useRef} from 'react';
import {addStudents } from '../utils';


function UserInput ({students,setStudents}) {

const inputEl= useRef(null);

// function postInput(){
//     console.log("clicked");
//     console.log(students);
//     if (inputEl.current.value.length<=0) console.log("please enter the name");
//     addStudents(inputEl.current.value).then(data=>console.log(data));
//     setStudents([...students, inputEl.current.value])
// }
//     return (
//         <>
//         <input ref={inputEl} type="text"></input>
//         <button onClick={console.log(inputEl.current.value)}></button>
//         </>
//     )


}

export default UserInput