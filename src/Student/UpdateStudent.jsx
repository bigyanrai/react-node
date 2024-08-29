import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateStudent = () => {
  let [studentName, setStudentName] = useState("");
  let [studentAddress, setStudentAddress] = useState("");
  let [isMarried, setIsMarried] = useState(false);
  let params = useParams();

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3000/student/${params.id}`,
        method: "get",
      });
      //BREAKPOINT 1
      // console.log(params);
      //BREAKPOINT 2
      console.log(result.data.data);

      let studentData = result.data.data;
      //BREAKPOINT 3
      // console.log(productData.productName);
      setStudentName(studentData.studentName);
      setStudentAddress(studentData.studentAddress);
      setIsMarried(studentData.isMarried);
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      studentName,
      studentAddress,
      isMarried,
    };
    try {
      let result = await axios({
        url: `http://localhost:3000/student/`,
        method: `post`,
        data: data,
      });
      //   console.log(result);
      //   setStudentName("");
      //   setStudentAddress("");
      //   setIsMarried("");
      //   toast.success(result.data.message);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
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
            value={studentName}
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
            value={studentAddress}
          />
        </div>
        <br />
        <div>
          <label htmlFor="studentAddress">isMarried:</label>
          <input
            type="checkbox"
            name="isMarried"
            id="isMarried"
            checked={isMarried}
            onChange={(e) => {
              setIsMarried(e.target.checked);
            }}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default UpdateStudent;
