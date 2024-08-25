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
    </>
  );
};

export default AppLink;
