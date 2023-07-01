import React, { useState } from 'react'
import { ForgotPasswordApi } from '../../apis/Api';
import { toast } from 'react-toastify';

export const ForgotPassword = () => {
    const [email, setEmail]=useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        ForgotPasswordApi({email}).then((res)=>{
            toast.success("Password reset link sent to your email")
        }).catch((err)=>{
            console.log(err)
            toast.error("Something went wrong")
        })
    }
  return (
    <div className='container'>
        <h1> ForgotPassword</h1>
        <label>Type your email</label>
        <input  className='form-control' type="email" placeholder='enter valid email' onChange={(e)=> setEmail(e.target.value)}></input>
        <button className='btn btn-primary' onClick={handleSubmit}>
            Send password reset Link 
        </button>
        </div>
  )
}
export default ForgotPassword
