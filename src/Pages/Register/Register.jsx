import React,{useState} from 'react'
import axios from 'axios'
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { registerApi } from '../../apis/Api';
// import Navbar from '../../components/navbar/Navbar'
export const Register = () => {
  const[fname, setFname]=useState('');
  const[lname, setlname]=useState('');
  const[email, setEmail]=useState('');
  const[pass, setPass]=useState('');
  const[pass2, setpass2]=useState('');
  const[fnameerror, setFnameError]=useState("");
  const[lnameerror, setLnameError]=useState("");
  const[emailerror, setEmailError]=useState("");
  const[passerror, setPassError]=useState("");
  const[pass2error, setPass2Error]=useState("");
  const validate=()=>{
    let isvalid=true;
    if(fname==="")
    {
      setFnameError("First Name is required");
      isvalid=false;
    }
    if(lname==="")
    {
      setLnameError("Last Name is required");
      isvalid=false;
    }
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
    if(pass2==="")
    {
      setPass2Error("Confirm pssword is required");
      isvalid=false;
    }
    if(pass !== pass2){
      setPass2Error("pssword doesnt match");
    }
    return isvalid;

  }
  const handlefname=(e)=>{
    setFname(e.target.value);
  }
  const handlelname=(e)=>{
    setlname(e.target.value);
  }
  const handleEmail=(e)=>{
    setEmail(e.target.value);
  }
  const handlepass=(e)=>{
    setPass(e.target.value);
  }
  const handlepass2=(e)=>{
    setpass2(e.target.value);
  }
  //handle a submit
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(fname,lname,email,pass,pass2);
    if(!validate()){
      return;
    }
    try{
      registerApi({
        fname:fname,
         lname: lname,
         email: email,
         pass: pass,
      }).then((res)=>{
        toast.success("User registered successfully");
      }).catch((err)=>{
        console.log(err);
        toast.error("User registered failed");
      });
    }catch(error){
      toast.error("Registration failed");
    }
    // try{
    //   const res=axios.post('http://localhost:5000/api/user/register',{
    //     fname: fname,
    //     lname: lname,
    //     email: email,
    //     pass: pass,
    //     pass2: pass2,
    //   }).then((res)=>{
    //     toast.success("User registered successfully");
    //   }).catch((err)=>{
    //     toast.error("User registration failed");
    //   });
    //   // console.log("Success"); 
    // }catch(error){
    //   toast.error("Error");
    // }
    };
  return ( 
  <div className='container'>
    <div className='col-md-5'></div>

    {/* <Navbar/> */}
   
        <h1>
        Register a user
            </h1>
            <form action="">
              <div classname="form-group">
                <label htmlFor="name">First Name</label>
                <input onChange={handlefname} 
                type="text" 
                name="name" 
                id="name" 
                className='form-control'></input>
                {
                  fnameerror && <div className="text-danger">{fnameerror}</div>
                }
              </div>
              <div classname="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input onChange={handlelname} type="text" name="lastname" id="lastname" className='form-control'></input>
                {
                  lnameerror && <div className="text-danger">{lnameerror}</div>
                }
              </div>
              <div classname="form-group">
                <label htmlFor="email">Email</label>
                <input onChange={handleEmail} type="text" name="email" id="email" className='form-control'></input>
                {
                  emailerror && <div className="text-danger">{emailerror}</div>
                }
              </div>
              <div classname="form-group">
                <label htmlFor="password">Password</label>
                <input onChange={handlepass} type="text" name="password" id="password" className='form-control'></input>
                {
                  passerror && <div className="text-danger">{passerror}</div>
                }
              </div>
              <div classname="form-group">
                <label htmlFor="cpassword">confirm Password</label>
                <input onChange={handlepass2} type="text" name="cpassword" id="cpassword" className='form-control'></input>
                {
                  pass2error && <div className="text-danger">{pass2error}</div>
                }
              </div>
              <div classname="form-group">
              <button type="submit" class="btn btn-primary btn-block" onClick={handleSubmit}>Register</button>
              </div>
            </form>
            <p>Already have an account?<Link to="/login">Login</Link>
            </p>
            </div>
  );
}
export default Register
