import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function FormValues() {
  const [data, setData] = useState({});

  const profileData = JSON.parse(localStorage.getItem("ITEM"))

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
    console.log('data', data.name)
  }
  const handleSave = (e) => {
    const name = e.target.name
    const value = e.target.value
    setData({ ...data, [name]: value })
    e.preventDefault()
    localStorage.setItem("ITEM", JSON.stringify(data))
  }
  return (
    <div>
      <label htmlFor="name">Name</label>
      <input name="name" type="text" value={data.name || ""} onChange={handleChange} />

      <label htmlFor="description">Description</label>
      <input name="description" type="text" value={data.description || ""} onChange={handleChange} />

      <button onClick={handleSave}>Save
      </button>

      <div>
        <h4>Name: {profileData ? profileData.name : "Fati"}</h4>
        <h4>Description: {profileData ? profileData.description : "Female"}</h4>
      </div>
    </div>
  );
}
export default FormValues