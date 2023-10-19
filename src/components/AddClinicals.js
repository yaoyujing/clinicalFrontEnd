import { useState } from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import "../App.css";

export default function AddClinicals() {
    const { id } = useParams();
    const [componentName, setComponentName] = useState("bp");
  const [componentValue, setComponentValue] = useState(null);
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(componentName)
    const patientData = {
      patient: id,
      componentName:componentName,
      componentValue:componentValue
    };
    axios
      .post("https://clinicalnode.onrender.com/clinicals", patientData)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h2>Add clinical details</h2>
      <form>
        <label> Clinical entry type</label>
        <select  onChange={(e)=>setComponentName(e.target.value)} defaultValue='bp'>
          <option value="bp" >Blood pressure</option>
          <option value="hr" >Heart rate</option>
          <option value="weight" >weight/height</option>
        </select>

        <label> Component value</label>
        <input
          type="text"
          name="componentValue"
          onChange={(e) => setComponentValue(e.target.value)}
        ></input>
        <button type="submit" onClick={(event) => handleSubmit(event)}>
          Confirm
        </button>
      </form>
    </div>
  );
}
