import { useEffect, useState } from "react"
import axios from "axios"
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";


class RowCreator extends React.Component{
    render(){
        var patient = this.props.item;
        return <tr>
            <td><Link to={'/clinicals/'+patient._id}>{patient.firstName}</Link></td>
            <td>{patient.lastName}</td>
            <td>{patient.age}</td>
            <td><Link to={'/addClinicals/'+patient._id}>Add data</Link></td>
            
        </tr>
    }
}

export default function Home(){
    const [patientData,setPatientData] = useState([])
    console.log(patientData)
    useEffect(()=>{
        //http://localhost/clinicalsapi/patients
        axios.get("http://localhost:8000/patients").then(res=>{
            setPatientData(res.data)
        }).catch(err=>{
            console.log(err)
        })
        // axios.get("http://ec2-54-166-218-190.compute-1.amazonaws.com:8000/patients").then(res=>{
        //     alert(res.data)
        // }).catch(err=>{
        //     console.log(err)
        // })
    },[])
    return (
        <div align='center'>
            <h2>Patients:</h2>
            <table >
                <thead>
                    <tr>
                        <th >First Name</th>
                        <th >Last Name</th>
                        <th >Age</th>
                        <th ></th>
                    </tr>
                </thead>
                <tbody>
                    {patientData.map(patient=><RowCreator item={patient}></RowCreator>)}
                    </tbody>
            </table>
            <Link to={'/addPatient'}>Register Patient</Link>
        </div>
    )
}