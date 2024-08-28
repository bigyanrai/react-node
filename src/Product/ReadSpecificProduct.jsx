import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ReadSpecificProduct = () => {
  let [product, setProduct] = useState({});

  let params = useParams();

  const getData = async () => {
    try {
      //   console.log(params.id);
      let result = await axios({
        url: `http://localhost:3000/product/${params.id}`,
        method: `GET`,
      });
      setProduct(result.data.data);
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <div>
        <div>Product Name is:{product.productName}</div>
        <div>Product quantity is:{product.quantity}</div>
        <div>Product price is:{product.price}</div>
      </div>
    </div>
  );
};

export default ReadSpecificProduct;
