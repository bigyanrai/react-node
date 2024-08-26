import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateProduct = () => {
  let [productName, setProductName] = useState("");
  let [quantity, setQuantity] = useState("");
  let [price, setPrice] = useState("23");

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
      console.log(result);
      setProductName("");
      setQuantity("");
      setPrice("");
      toast.success(result.data.message);
    } catch (error) {}
  };

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
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </div>
        <button type="submit">Save</button>
      </form>
    </>
  );
};

export default CreateProduct;
