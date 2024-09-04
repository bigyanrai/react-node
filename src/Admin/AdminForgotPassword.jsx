import axios from "axios";
import { useState } from "react";

const AdminForgotPassword = () => {
  let [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      email: email,
    };
    try {
      let result = await axios({
        url: `http://localhost:3000/web-user/forgot-password`,
        method: "post",
        data: data,
      });
      console.log(result);
    } catch (error) {}
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AdminForgotPassword;
