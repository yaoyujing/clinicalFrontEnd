import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import '../App.css'

export default function AddPatients() {
    const [firstName,setFirstName] = useState(null)
    const [lastName,setLastName] = useState(null)
    const [age,setAge] = useState(null)
    const navigate = useNavigate();
    const handleSubmit = (event)=>{
        event.preventDefault();
        const patientData = {
            firstName:firstName,
            lastName:lastName,
            age:age
        }
        axios.get("http://ec2-54-166-218-190.compute-1.amazonaws.com:8000/patients",patientData).then(res=>{
            navigate('/');
        }).catch(err=>{
            console.log(err)
        })
    }
  return (
    <div>
      <h2>Register patient</h2>
      <form>
        <label> First Name</label>
        <input type="text" name="firstName" onChange={(e)=>setFirstName(e.target.value)}></input>
        <label> Last Name</label>
        <input type="text" name="lastName" onChange={(e)=>setLastName(e.target.value)}></input>
        <label> Age</label>
        <input type="number"  className="styled-input" name="age" onChange={(e)=>setAge(e.target.value)}></input>
        <button type="submit" onClick={(event)=>handleSubmit(event)}>Confirm</button>
      </form>
    </div>
  );
}
