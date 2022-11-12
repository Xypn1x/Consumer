import React, { useState, useEffect } from "react";
import Navbar from '../components/Navbar'

const ShopPage = () => {
  const [allProductsData, setAllProductsData] = useState([]);
  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await fetch("http://localhost:5000/");
        const json = await response.json();
        console.log(json);
        setAllProductsData(json);
      } catch (err) {
        console.log("Error", err);
      }
    };
    fetchAllProducts();
  }, []);
  console.log(allProductsData);
  return (
    <div>
    <Navbar/>
      {allProductsData?.length > 0 ? (
        <div>
          {allProductsData.map((product) => (
            <div key={product._id}>
              <h1>title:{product.title}</h1>
              <p>category:{product.category}</p>
              {product.image.map((img, index) => (
                <img key={index} src={`data:${product.imageType[index]};base64,${img}`} />
              ))}
              <p>price:${product.price}</p>
              <p>description:{product.description}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>!Oops we have nothing</p>
        </div>
      )}
    </div>
  );
};

export default ShopPage;
