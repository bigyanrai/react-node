import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminUpdatePassword = () => {
  let [oldPassword, setOldPassword] = useState("");
  let [newPassword, setNewPassword] = useState("");
  let navigate = useNavigate();
  let token = localStorage.getItem("token");
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      let data = {
        oldPassword,
        newPassword,
      };
      let result = await axios({
        url: `http://localhost:3000/web-user/update-password`,
        method: `patch`,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result);

      localStorage.removeItem("token");
      navigate("/admin/login");
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="oldPassword">Old Password:</label>
          <input
            type="password"
            name="oldPassword"
            id="oldPassword"
            value={oldPassword}
            onChange={(e) => {
              setOldPassword(e.target.value);
            }}
          />
        </div>
        <div>
          <label htmlFor="newPassword">New Password:</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            value={newPassword}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default AdminUpdatePassword;
