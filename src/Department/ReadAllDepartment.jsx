import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ReadAllDepartment = () => {
  let navigate = useNavigate();
  let [department, setDepartment] = useState([]);

  const getAllData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3000/department`,
        method: "get",
      });
      setDepartment(result.data.data);
      console.log(result.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllData();
  });

  const handleDelete = async (_id) => {
    try {
      let result = await axios({
        url: `http://localhost:3000/department/${_id}`,
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
      {department.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              marginTop: "10px",
              border: "solid gray 3px",
              padding: "10px",
            }}
          >
            <div>Departmentname is {value.departmentName}</div>
            <div>DepartmentID is {value.departmentID}</div>
            <div>DepartmentHead is {value.departmentHead}</div>
            <br />
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClick={() => {
                navigate(`/department/${value._id}`);
              }}
            >
              View
            </button>
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClick={() => {
                navigate(`/department/update/${value._id}`);
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

export default ReadAllDepartment;
