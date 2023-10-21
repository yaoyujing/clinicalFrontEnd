import { useEffect, useState } from "react";
import axios from "axios";
import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import SidebarComp from "./Sidebar";
import baseurl from "../utils/environment";

class RowCreator extends React.Component {
  render() {
    var clinical = this.props.item;
    return (
      <tr>
        <td>
          {clinical.componentName === "bp"
            ? "blood pressure"
            : clinical.componentName === "hr"
            ? "heart rate"
            : "weight"}
        </td>
        <td>{clinical.componentValue}</td>
      </tr>
    );
  }
}
export default function DisplayClinical() {
  const { id } = useParams();
  // const [userId, setUserId] = useState(null)
  const [clinicalData, setclinicaltData] = useState([]);
  useEffect(() => {
    //http://localhost/clinicalsapi/patients
    // axios.get("http://localhost:8000/clinicals/"+id).then(res=>{
    //     setclinicaltData(res.data)
    // }).catch(err=>{
    //     console.log(err)
    // })
    axios
      .get(`${baseurl}clinicals/` + id)
      .then((res) => {
        setclinicaltData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  return (
    <div className="sidebar">
      <SidebarComp>
        <div align="center" className="flex flex-col gap-10  mx-auto mt-[40px]">
          <h2 className=" py-2 text-[28px] font-bold">Patients:</h2>
          <table>
            <thead>
              <tr>
                <th className="text-black">Component Name</th>
                <th className="text-black"> Component Value</th>
              </tr>
            </thead>
            <tbody>
              {clinicalData.map((clinical) => (
                <RowCreator item={clinical}></RowCreator>
              ))}
            </tbody>
          </table>
          <Link to={"/"} className="border w-full px-2 py-2 rounded-sm bg-green-500 text-white hover:font-bold" >Back</Link>
        </div>
      </SidebarComp>
    </div>
  );
}
