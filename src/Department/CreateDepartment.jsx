import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateDepartment = () => {
  let [departmentName, setDepartmentName] = useState();
  let [departmentID, setDepartmentID] = useState();
  let [departmentHead, setDepartmentHead] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      departmentName,
      departmentID,
      departmentHead,
    };

    try {
      let result = await axios({
        url: "http://localhost:3000/department",
        method: "post",
        data: data,
      });
      console.log(result);
      setDepartmentHead("");
      setDepartmentID("");
      setDepartmentHead("");
      toast.success(result.data.message);
    } catch (error) {}
  };
  return (
    <>
      <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="departmentName">Department Name:</label>
          <input
            type="text"
            name="departmentName"
            id="departmentName"
            onChange={(e) => {
              setDepartmentName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="departmentID">Department ID:</label>
          <input
            type="text"
            name="departmentID"
            id="departmentID"
            onChange={(e) => {
              setDepartmentID(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="departmentHead">Department Head:</label>
          <input
            type="text"
            name="departmentHead"
            id="departmentHead"
            onChange={(e) => {
              setDepartmentHead(e.target.value);
            }}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default CreateDepartment;
