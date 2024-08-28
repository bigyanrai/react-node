import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateProduct = () => {
  let [productName, setProductName] = useState("");
  let [quantity, setQuantity] = useState("");
  let [price, setPrice] = useState("");
  let params = useParams();
  //   let id = params;

  let getData = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3000/product/${params.id}`,
        method: "get",
      });

      //BREAKPOINT 1
      // console.log(params);
      //BREAKPOINT 2
      // console.log(result.data.data);

      let productData = result.data.data;
      //BREAKPOINT 3
      // console.log(productData.productName);
      setProductName(productData.productName);
      setQuantity(productData.quantity);
      setPrice(productData.price);
    } catch (error) {}
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      productName,
      quantity,
      price,
    };
    try {
      let result = await axios({
        //Here could be error
        url: `http://localhost:3000/product`,
        method: "POST",
        data: data,
      });
      //   console.log(result);
      //   setProductName("");
      //   setQuantity("");
      //   setPrice("");
      //   toast.success(result.data.message);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ToastContainer></ToastContainer>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="productName">Product Name:</label>
          <input
            type="text"
            name="productName"
            id="productName"
            value={productName}
            onChange={(e) => {
              setProductName(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            name="quantity"
            id="quantity"
            value={quantity}
            onChange={(e) => {
              setQuantity(e.target.value);
            }}
          />
        </div>
        <br />
        <div>
          <label htmlFor="price">Price:</label>
          <input
            type="number"
            name="price"
            id="price"
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </>
  );
};

export default UpdateProduct;
