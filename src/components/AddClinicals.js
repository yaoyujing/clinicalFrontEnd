import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../App.css";
import SidebarComp from "./Sidebar";
import baseurl from "../utils/environment";

export default function AddClinicals() {
  const { id } = useParams();
  const [componentName, setComponentName] = useState("bp");
  const [componentValue, setComponentValue] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(componentName);
    const patientData = {
      patient: id,
      componentName: componentName,
      componentValue: componentValue,
    };
    axios
      .post(`${baseurl}clinicals`, patientData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <SidebarComp>
      <div className="flex flex-col gap-10  mx-auto mt-[40px]">
        <h2 className=" py-2 text-[28px] font-bold text-center">Add clinical details</h2>
        <form className="w-[400px]">
          <label> Clinical entry type</label>
          <select
            onChange={(e) => setComponentName(e.target.value)}
            defaultValue="bp"
          >
            <option value="bp">Blood pressure</option>
            <option value="hr">Heart rate</option>
            <option value="weight">weight/height</option>
          </select>

          <label> Component value</label>
          <input
            type="text"
            name="componentValue"
            onChange={(e) => setComponentValue(e.target.value)}
          ></input>
              <button className="border px-2 py-2 w-[400px] mx-auto rounded-sm bg-green-500 text-white hover:font-bold" type="submit" onClick={(event) => handleSubmit(event)}>
        <div className="flex justify-center items-center">
          Confirm
        </div>
      </button>
        </form>
      </div>
    </SidebarComp>
  );
}
