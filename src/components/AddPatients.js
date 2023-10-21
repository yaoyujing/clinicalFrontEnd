import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../App.css";
import SidebarComp from "./Sidebar";

export default function AddPatients() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [age, setAge] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const patientData = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    axios
      .post("https://clinicalnode.onrender.com/patients", patientData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SidebarComp>
      {" "}
      <div className="flex flex-col gap-10  mx-auto mt-[40px]">
        {" "}
        <h2 className=" py-2 text-[28px] font-bold text-center">Register patient</h2>
        <form className="w-[400px]">
          <label> First Name</label>
          <input
            type="text"
            name="firstName"
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
          <label> Last Name</label>
          <input
            type="text"
            name="lastName"
            onChange={(e) => setLastName(e.target.value)}
          ></input>
          <label> Age</label>
          <input
            type="number"
            className="styled-input mt-[6px]"
            name="age"
            onChange={(e) => setAge(e.target.value)}
          ></input>
          <button  className="border mt-[20px] w-full px-2 py-2 rounded-sm bg-green-500 text-white hover:font-bold" type="submit" onClick={(event) => handleSubmit(event)}>
            Confirm
          </button>
        </form>
      </div>
    </SidebarComp>
  );
}
