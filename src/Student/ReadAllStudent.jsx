import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ReadAllStudent = () => {
  let navigate = useNavigate();
  let [student, setStudent] = useState([]);

  const getAllData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3000/student`,
        method: "get",
      });
      setStudent(result.data.data);
      console.log(result.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = async (_id) => {
    try {
      let result = await axios({
        url: `http://localhost:3000/student/${_id}`,
        method: "delete",
      });
      getAllData();
    } catch (error) {}
  };

  const sweetAlert = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed === true) {
        handleDelete(_id);
      }
    });
  };

  return (
    <div>
      {student.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              marginTop: "10px",
              border: "solid gray 3px",
              padding: "10px",
            }}
          >
            <div>Student name is {value.studentName}</div>
            <div>Student address is {value.studentAddress}</div>
            {console.log(value.isMarried)}
            <div>Student is {value.isMarried ? "married" : "unmarried"}</div>
            <br />
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClick={() => {
                navigate(`/student/${value._id}`);
              }}
            >
              View
            </button>
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClick={() => {
                navigate(`/student/update/${value._id}`);
              }}
            >
              Edit
            </button>
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClick={() => {
                sweetAlert(value._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllStudent;
