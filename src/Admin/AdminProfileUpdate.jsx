import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AdminProfileUpdate = () => {
  let [fullName, setFullName] = useState("");
  let [address, setAddress] = useState("");
  let token = localStorage.getItem("token");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      fullName,
      address,
    };
    try {
      let result = await axios({
        url: `http://localhost:3000/web-user/update-profile`,
        method: "patch",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        data: data,
      });
      //   console.log(result);
      setFullName(result.data.data);
      setAddress(result.data.address);
      navigate("/admin/my-profile");
    } catch (error) {}
  };

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3000/web-user/my-profile`,
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      //   console.log(result);
      setFullName(result.data.data.fullName);
      setAddress(result.data.data.address);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullname">FullName:</label>
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
          <br />
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
        </div>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default AdminProfileUpdate;
