import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ReadAllProduct = () => {
  let navigate = useNavigate();
  let [product, setProduct] = useState([]);

  const getAllData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3000/product`,
        method: "get",
      });
      setProduct(result.data.data);
      console.log(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getAllData();
  }, []);

  const handleDelete = async (_id) => {
    try {
      let result = await axios({
        url: `http://localhost:3000/product/${_id}`,
        method: "delete",
      });
      console.log(result);
    } catch (error) {}
  };

  return (
    <div>
      {product.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              marginTop: "10px",
              border: "solid gray 3px",
              padding: "10px",
            }}
          >
            <div>Product name is {value.productName}</div>
            <div>Quantity is {value.quantity}</div>
            <div>Price is {value.price}</div>
            <br />
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClick={() => {
                navigate(`/product/${value._id}`);
              }}
            >
              View
            </button>
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClick={() => {
                navigate(`/product/update/${value._id}`);
              }}
            >
              Edit
            </button>
            <button
              style={{ margin: "5px", cursor: "pointer" }}
              onClick={() => {
                handleDelete(value._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllProduct;
