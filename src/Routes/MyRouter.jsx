import { Outlet, Route, Routes } from "react-router-dom";
import Home from "../Home";
import CreateStudent from "../Student/CreateStudent";
import ReadAllStudent from "../Student/ReadAllStudent";
import ReadAllProduct from "../Product/ReadAllProduct";
import CreateProduct from "../Product/CreateProduct";

const MyRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Outlet></Outlet>}>
        <Route index element={<Home></Home>}></Route>
        <Route path="student" element={<Outlet></Outlet>}>
          <Route index element={<ReadAllStudent></ReadAllStudent>}></Route>
          <Route
            path="create"
            element={<CreateStudent></CreateStudent>}
          ></Route>
        </Route>
        <Route path="product" element={<Outlet></Outlet>}>
          <Route index element={<ReadAllProduct></ReadAllProduct>}></Route>
          <Route
            path="create"
            element={<CreateProduct></CreateProduct>}
          ></Route>
        </Route>
      </Route>
    </Routes>
  );
};

export default MyRouter;
