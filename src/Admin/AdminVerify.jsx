// import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";

const AdminVerify = () => {
  let [query] = useSearchParams();
  let token = query.get("token");
  let navigate = useNavigate();

  let verifyEmail = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3000/web-user/verify-email`,
        method: "post",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      //   console.log(result.data); // handle the result as needed
      navigate("/admin/login");
    } catch (error) {
      //   console.error(error); // handle error as needed
    }
  };

  useEffect(() => {
    verifyEmail();
  }, []); // dependency array for useEffect

  return <div>AdminVerify</div>;
};

export default AdminVerify;
