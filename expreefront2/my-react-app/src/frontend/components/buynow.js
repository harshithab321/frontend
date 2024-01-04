// ProductDetails.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Prod from './productsstore'
import { useParams } from 'react-router-dom';


const Order = () => {

    const { productId } = useParams();
     const [product, setProduct] = useState(null);
  
//     console.log(productId);
  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(`/products/products/${productId}`);
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

 return (
    <div>
       <h2>{product.name}</h2> 
      {/* <p>{product.description}</p> */}
    
{productId}

    </div>
  );
};

export default Order
