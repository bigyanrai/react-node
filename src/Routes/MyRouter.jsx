import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../Home";
import CreateStudent from "../Student/CreateStudent";
import ReadAllStudent from "../Student/ReadAllStudent";
import ReadAllProduct from "../Product/ReadAllProduct";
import CreateProduct from "../Product/CreateProduct";
import ReadSpecificProduct from "../Product/ReadSpecificProduct";
import UpdateProduct from "../Product/UpdateProduct";
import UpdateStudent from "../Student/UpdateStudent";
import ReadSpecificStudent from "../Student/ReadSpecificStudent";
import ReadAllDepartment from "../Department/ReadAllDepartment";
import CreateDepartment from "../Department/CreateDepartment";
import AdminRegister from "../Admin/AdminRegister";
import AdminVerify from "../Admin/AdminVerify";
import ReadSpecificDepartment from "../Department/ReadSpecificDepartment";
import AdminLogin from "../Admin/AdminLogin";
import AdminDashBoard from "../Admin/AdminDashBoard";
import AdminMyProfile from "../Admin/AdminMyProfile";
import AdminProfileUpdate from "../Admin/AdminProfileUpdate";
import AdminLogout from "../Admin/AdminLogout";
import AdminUpdatePassword from "../Admin/AdminUpdatePassword";
import AdminForgotPassword from "../Admin/AdminForgotPassword";
import AdminResetPassword from "../Admin/AdminResetPassword";
import ReadAllUser from "../Admin/ReadAllUser";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet></Outlet>}>
        <Route index element={<Home></Home>}></Route>

        <Route path="admin" element={<Outlet></Outlet>}>
          <Route index element={<AdminDashBoard></AdminDashBoard>}></Route>
          <Route
            path="register"
            element={<AdminRegister></AdminRegister>}
          ></Route>
          <Route path="login" element={<AdminLogin></AdminLogin>}></Route>
          <Route path="my-profile" element={<AdminMyProfile />}></Route>
          <Route path="update-profile" element={<AdminProfileUpdate />}></Route>
          <Route
            path="update-password"
            element={<AdminUpdatePassword />}
          ></Route>
          <Route path="forgot-password" element={<AdminForgotPassword />} />
          <Route path="read-all-user" element={<ReadAllUser />} />
          <Route path="logout" element={<AdminLogout></AdminLogout>}></Route>
        </Route>

        <Route path="reset-password" element={<AdminResetPassword />}></Route>

        <Route path="verify-email" element={<AdminVerify />}></Route>

        <Route path="student" element={<Outlet></Outlet>}>
          <Route index element={<ReadAllStudent></ReadAllStudent>}></Route>
          <Route
            path="create"
            element={<CreateStudent></CreateStudent>}
          ></Route>
          <Route
            path=":id"
            element={<ReadSpecificStudent></ReadSpecificStudent>}
          ></Route>
          <Route path="update" element={<Outlet></Outlet>}>
            <Route path=":id" element={<UpdateStudent></UpdateStudent>}></Route>
          </Route>
        </Route>
        <Route path="product" element={<Outlet></Outlet>}>
          <Route index element={<ReadAllProduct></ReadAllProduct>}></Route>
          <Route
            path="create"
            element={<CreateProduct></CreateProduct>}
          ></Route>
          <Route
            path=":id"
            element={<ReadSpecificProduct></ReadSpecificProduct>}
          ></Route>
          <Route path="update" element={<Outlet></Outlet>}>
            <Route path=":id" element={<UpdateProduct></UpdateProduct>}></Route>
          </Route>
        </Route>
        <Route path="department" element={<Outlet></Outlet>}>
          <Route
            index
            element={<ReadAllDepartment></ReadAllDepartment>}
          ></Route>
          <Route
            path=":id"
            element={<ReadSpecificDepartment></ReadSpecificDepartment>}
          ></Route>
          <Route
            path="create"
            element={<CreateDepartment></CreateDepartment>}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default MyRouter;
