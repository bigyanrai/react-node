import axios from "axios";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const AdminResetPassword = () => {
  let [password, setPassword] = useState("");
  let [query] = useSearchParams();
  let token = query.get("token");

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      password,
    };
    try {
      let result = await axios({
        url: `http://localhost:3000/web-user/reset-password`,
        method: `post`,
        data,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(result);
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <br />
        <button type="submit">Reset</button>
      </form>
    </div>
  );
};

export default AdminResetPassword;
