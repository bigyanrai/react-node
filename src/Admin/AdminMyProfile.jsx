import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminMyProfile = () => {
  let [profile, setProfile] = useState("");
  let navigate = useNavigate();

  let token = localStorage.getItem("token");
  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:3000/web-user/my-profile",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(result.data.data);
      // console.log(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>Fullname is :{profile.fullName}</div>
      <div>Address is :{profile.address}</div>
      <div>Email is :{profile.email}</div>
      <div>Role is :{profile.role}</div>
      <br />
      <div>
        <button
          onClick={() => {
            navigate("/admin/update-profile");
          }}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default AdminMyProfile;
