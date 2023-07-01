import React, {useState}from 'react'
import { loginApi } from '../../apis/Api'
import {toast} from 'react-toastify'
import { Link, useNavigate} from 'react-router-dom' 
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/userslice'
// import Navbar from '../../components/navbar/Navbar'
export const Login = () => {
 const [email,setEmail]=useState('')
 const[pass,setPass]=useState('')
 const[pass2, setPass2]=useState('')
 const[emailerror, setEmailError]=useState("");
  const[passerror, setPassError]=useState("");
  const[pass2error, setPass2Error]=useState("");
  const validate=()=>{
    let isvalid=true;
    if(email=="")
    {
      setEmailError("Email is required");
      isvalid=false;
    }
    if(pass==="")
    {
      setPassError("Password is required");
      isvalid=false;
    }
    return isvalid;
  }
 const navigate=useNavigate()
 const dispatch=useDispatch()
 const handleSubmit=(e)=>{
  e.preventDefault()
  if(!validate()){
    return;
  }
  try{
    loginApi({
      email:email,
      pass:pass
    }).then((res)=>{
      console.log(res.data)
      //setting token and user in local storage
      localStorage.setItem("token",res.data.token)
      localStorage.setItem("user",JSON.stringify(res.data.user))
      navigate("/")
      toast.success("login success")
    }).catch((err)=>{
      console.log(err)
      toast.error("Login failed")
    })
  }catch(error){
    toast.error("Login Failed")
  }
 }
// const handleSubmit=(e)=>{
//   e.preventDefault()
//   try{
//     loginApi({
//       email:email,
//       pass:pass
//     }).then((res)=>{
//       console.log(res.data)
//     //dispatch to store
//     dispatch(addUser(res.data.user))
//       navigate("/")
//       toast.success("login success")
//     }).catch((err)=>{
//       console.log(err)
//       toast.error("Login failed")
//     })
//   }catch(error){
//     toast.error("Login Failed")
//   }
//  }
  return (
    <div>
        {/* <Navbar/> */}
        <h1>Login Page</h1>
        <form action="">
              <div classname="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={e=>setEmail(e.target.value)} type="text" name="email" id="email" className='form-control'></input>
                {
                  emailerror && <div className="text-danger">{emailerror}</div>
                }
              </div>
              <div classname="form-group">
                <label htmlFor="password">Password</label>
                <input  onChange={(e)=>setPass(e.target.value)} type="text" name="password" id="password" className='form-control'></input>
                {
                  passerror && <div className="text-danger">{passerror}</div>
                }
              </div>
              <Link to={"/forgot-password"}>
              Forgot Password?
              </Link>
              <div classname="form-group">
              <button onClick={handleSubmit} type="submit" class="btn btn-primary btn-block">Login</button>
              </div>
            </form>
        </div>
  )
}
export default Login