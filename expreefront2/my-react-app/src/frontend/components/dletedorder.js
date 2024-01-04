import React ,{useState,useCallback}from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function DeletedOrder() {
const[status,deleteOrder]=useState('')

  const { id } = useParams();
  console.log(id);

  const deleteNow =useCallback(async () => {
    try {

        console.log("hey")
      const response = await axios.delete(`http://localhost:9000/orders/delete/orders/${id}`);
      console.log('Order deleted successfully', response.data);
      deleteOrder("deleted your order")

    } catch (error) {
      // Handle errors
      console.error('Error deleting order', error);
    }
   
  },[id])

  deleteNow()
  return (
    <>
      <h2>{status}</h2>
    </>
  );
}

export default DeletedOrder;
