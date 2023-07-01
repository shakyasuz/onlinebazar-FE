import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleProductApi } from '../../apis/Api';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cartSlice';

export const ProductDetails = () => {
  //get id from params

  const {id}=useParams();
  //get single product
  const[product, setProduct]=useState('');
  useEffect(()=>{
    getSingleProductApi(id).then(res=>{
      setProduct(res.data);
    }).catch((err)=>{
      console.log(err);
    })
  },[id]);
  //add and remove quantity
  const[cartValue, setcartValue]=useState(1);
  const handleAddQUantity=()=>{
    setcartValue(cartValue +1);
  }
  const handleRemoveQuantity=()=>{
    if(cartValue >1)
    {
      setcartValue(cartValue -1);
    }
  }
  const dispatch=useDispatch();
  const handleaddToCart=()=>{
    const cartItem={
      id:product.id,
      name:product.name,
      price:product.price,
      image:product.pimage,
      category:product.category,
      quantity:cartValue,
    }
    dispatch(addToCart(cartItem));
  }
  return (
    <div className='container mt-5'>
        <div className="d-flex">
            <img className='object-cover rounded-3' height={'500px'} width={'600px'} src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
            <div className='ms-3 mt-4'>
                <span className='fs-3 fw-bold'>
                    {product.name}
                </span>
                
               <p className='fs-4'>
                     Price: NRP.{product.price}
               </p>
               <p className='fs-4'>
                     Category : {product.category}
               </p>
                <p className='fs-4'>
                    Description : {product.description}
                </p>
                <div class="btn-group" role="group" aria-label="Basic example">
  <button type="button" class="btn btn-outline-black" onClick={handleRemoveQuantity}>-</button>
  <input type="text" value={cartValue}/>
  <button type="button" class="btn btn-outline-black" onClick={handleAddQUantity}>+</button>
</div>

                <button className='btn btn-primary' onClick={handleaddToCart}>Add to Cart</button>
                </div>
                </div>
                </div>
  )
}
export default ProductDetails
