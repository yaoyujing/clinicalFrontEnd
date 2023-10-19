import { useEffect, useState } from "react"
import axios from "axios"
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";


class RowCreator extends React.Component{
  
    render(){
        var clinical = this.props.item;
        return <tr>
            <td>{clinical.componentName==="bp"?"blood pressure":clinical.componentName==="hr"?"heart rate":"weight"}</td>
            <td>{clinical.componentValue}</td>
        </tr>
    }
}
export default function DisplayClinical(){
    const { id } = useParams();
    // const [userId, setUserId] = useState(null)
    const [clinicalData,setclinicaltData] = useState([])
    useEffect(()=>{
        //http://localhost/clinicalsapi/patients
        // axios.get("http://localhost:8000/clinicals/"+id).then(res=>{
        //     setclinicaltData(res.data)
        // }).catch(err=>{
        //     console.log(err)
        // })
        axios.get("https://clinicalnode.onrender.com/clinicals/"+id).then(res=>{
            setclinicaltData(res.data)
        }).catch(err=>{
            console.log(err)
        })
    },[id])
    return (
        <div align='center'>
            <h2>Patients:</h2>
            <table >
                <thead>
                    <tr>
                        <th >Component Name</th>
                        <th >Component Value</th>
                    </tr>
                </thead>
                <tbody>
                    {clinicalData.map(clinical=><RowCreator item={clinical}></RowCreator>)}
                    </tbody>
            </table>
            <Link to={'/'}>Back</Link>
        </div>
    )
}