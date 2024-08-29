import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AdminRegister = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      fullName,
      email,
      password,
      address,
    };

    data = { ...data, role: "admin" };
    try {
      let result = await axios({
        url: "http://localhost:3000/web-user",
        method: "post",
        data,
      });
      console.log(result);
      setFullName("");
      setEmail("");
      setPassword("");
      setAddress("");
      toast.success(result.data.message);
    } catch (error) {}
  };
  return (
    <div>
      <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <label htmlFor="fullName">FullName:</label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={fullName}
              onChange={(e) => {
                setFullName(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="text"
              name="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <br />
          <div>
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
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminRegister;
