import axios from "axios";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

const ReadAllUser = () => {
  let [users, setUsers] = useState([]);
  let token = localStorage.getItem("token");

  let getAllData = async (req, res) => {
    try {
      let result = await axios({
        url: `http://localhost:3000/web-user`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result);
      setUsers(result.data.data);
    } catch (error) {}
  };
  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = async (id) => {
    try {
      let result = await axios({
        url: `http://localhost:3000/web-user/${id}`,
        method: `delete`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      getAllData();
      console.log(result);
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
      {users.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              marginTop: "10px",
              border: "solid gray 3px",
              padding: "10px",
            }}
          >
            <div>Fullname is:{value.fullName}</div>
            <div>Address is:{value.address}</div>
            <div>Email is :{value.email}</div>
            <br />
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClick={() => {
                // navigate(`/product/${value._id}`);
              }}
            >
              View
            </button>
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClick={() => {
                // navigate(`/product/update/${value._id}`);
              }}
            >
              Edit
            </button>
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClick={() => {
                sweetAlert(value._id);
                // handleDelete(value._id);
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

export default ReadAllUser;
