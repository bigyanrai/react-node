import axios from "axios";
import { useState } from "react";

const AdminLogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email,
      password,
    };

    try {
      let result = await axios({
        url: `http://localhost:3000/web-user/login`,
        method: "post",
        data,
      });
      console.log(result);
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default AdminLogin;
