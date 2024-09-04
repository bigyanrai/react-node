import { NavLink } from "react-router-dom";

const AppLink = () => {
  return (
    <>
      <NavLink to={"/student"} style={{ margin: "20px" }}>
        Student
      </NavLink>
      <NavLink to={"/student/create"} style={{ margin: "20px" }}>
        Create Student
      </NavLink>
      <NavLink to={"/product"} style={{ margin: "20px" }}>
        Product
      </NavLink>
      <NavLink to={"/product/create"} style={{ margin: "20px" }}>
        Create Product
      </NavLink>
      <NavLink to={"/department"} style={{ margin: "20px" }}>
        Department
      </NavLink>
      <NavLink to={"/department/create"} style={{ margin: "20px" }}>
        Create Department
      </NavLink>
      <NavLink to={"/admin/register"} style={{ margin: "20px" }}>
        Admin Register
      </NavLink>

      <NavLink to={"/admin/login"} style={{ margin: "20px" }}>
        Admin Login
      </NavLink>

      <NavLink to={"/admin/my-profile"} style={{ margin: "20px" }}>
        My Profile
      </NavLink>

      <NavLink to={"/admin/update-password"} style={{ margin: "20px" }}>
        Update Password
      </NavLink>

      <NavLink to={"/admin/logout"} style={{ margin: "20px" }}>
        Logout
      </NavLink>
      <NavLink to={"/admin/read-all-user"} style={{ margin: "20px" }}>
        ReadALlUser
      </NavLink>
    </>
  );
};

export default AppLink;
