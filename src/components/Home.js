import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import baseurl from "../utils/environment";
import SidebarComp from "./Sidebar";
import BasicModal from "./modal";

class RowCreator extends React.Component {


  render() {
    var patient = this.props.item;
    var setOpen = this.props.setOpen;
    const { deleteRecord } = this.props;
    var open = this.props.open;
    return (

    
      <tr>
      {open&& <BasicModal patient={patient} setOpen={setOpen} open={open} deleteRecord={deleteRecord}></BasicModal>} 
        <td>
          <Link to={"/clinicals/" + patient._id}>{patient.firstName}</Link>
        </td>
        <td>{patient.lastName}</td>
        <td>{patient.age}</td>

        <td>
          <Link
            className=" hover:text-green-500 underline"
            to={"/addClinicals/" + patient._id}
          >
            Add data
          </Link>
        </td>
        
        <td>
          <div
            className=" hover:text-green-500 underline"
            onClick={()=>setOpen(true)}
          >
            Delete
          </div>
        </td>
        <td>
          <Link
            className=" hover:text-green-500 underline"
            to={"/clinicals/" + patient._id}
          >
            View detail
          </Link>
        </td>
       
      </tr>

    );
  }
}

export default function Home() {
  const [patientData, setPatientData] = useState([]);
  const [open, setOpen] = useState(false)
  const deleteRecord = (patientId)=>{
    axios
    .delete(`${baseurl}patients/${patientId}`)
    .then((res) => {
      console.log(res)
      if(res.status===200){
        axios
          .get(`${baseurl}patients`)
          .then((res) => {
            setPatientData(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    })
    .catch((err) => {
      console.log(err);
    });
    setOpen(false)
    
  }
  useEffect(() => {
    axios
      .get(`${baseurl}patients`)
      .then((res) => {
        setPatientData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
  
    <div className="sidebar">
      
      <SidebarComp>
        {" "}
        <div align="center" className="flex flex-col gap-10  mx-auto mt-[40px]">
          <h2 className=" py-2 text-[28px] font-bold">Patients record</h2>
          <table>
            <thead>
              <tr className="bg-green-500">
                <th>First Name</th>
                <th>Last Name</th>
                <th>Age</th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {patientData.map((patient) => (
                <RowCreator item={patient} open={open}  setOpen={setOpen} deleteRecord={deleteRecord}></RowCreator>
              ))}
            </tbody>
          </table>
          <Link
            className="border px-2 py-2 rounded-sm bg-green-500 text-white hover:font-bold"
            to={"/addPatient"}
          >
            Register New Patient
          </Link>
         
        </div>
       
      </SidebarComp>
      
    </div>
    </div>
  );
}
