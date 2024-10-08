import axios from "axios";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateStudent = () => {
  let [studentName, setStudentName] = useState("");
  let [studentAddress, setStudentAddress] = useState("");
  let [isMarried, setIsMarried] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      studentName,
      studentAddress,
      isMarried,
    };
    try {
      let result = await axios({
        url: `http://localhost:3000/student`,
        method: `post`,
        data: data,
      });
      console.log(result);
      setStudentName("");
      setStudentAddress("");
      setIsMarried("");
      toast.success(result.data.message);
    } catch (error) {}
  };

  return (
    <div>
      <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            name="studentName"
            id="studentName"
            onChange={(e) => {
              setStudentName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="studentAddress">Student Address:</label>
          <input
            type="text"
            name="studentAddress"
            id="studentAddress"
            onChange={(e) => {
              setStudentAddress(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="isMarried">isMarried:</label>
          <input
            type="checkbox"
            name="isMarried"
            id="isMarried"
            checked={isMarried === true}
            onChange={(e) => {
              setIsMarried(e.target.checked);
            }}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default CreateStudent;
