import React, { useState } from 'react'

export const Profile = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const[fname, setFname]=useState(user.fname)
    const[lname, setLname]=useState(user.lname)
    const[email, setEmail]=useState(user.email)
    const[profileImage, setProfileImage]=useState('')
    
    const handleImageUpload = (event) => {
        setProfileImage(event.target.files[0])
      
      // const file=e.target.files[0]
      // const reader=new FileReader()
      // reader.onloadend=()=>{
      //   setProductImage(reader.result);
      // };
      // if(file){
      //   reader.readAsDataURL(file)
      // }
    }
    return (
        <div className='container d-flex flex-column align-items-center mt-3'>
            <div className='d-flex flex-column align-items-center'>
                <img src="/assets/image/22422.png" alt="" width={300} className='rounded-circle' />
                <h3>Welcome, <strong>{user.fname} {user.lname}</strong></h3>
            </div>
            <div className='mt-5'>
                <h4>Personal Information</h4>
                <p>Name:{user.fname + "" + user.lname}</p>
                <p>Email:{user.email}</p>
               
<button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
Edit Profile <i class="fa fa-user-edit"></i>
</button>


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Editing profile</h5>
        <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form action="">
            <label htmlFor="fname">First Name</label>
            <input  value={fname} onChange={(e)=>setFname(e.target.value)} type="text" name="fname" id="fname" className="form-control" />
            <label htmlFor="fname">Last Name</label>
            <input value={lname} onChange={(e)=>setLname(e.target.value)} type="text" name="lname" id="lname" className="form-control" />
            <label htmlFor="fname">Email Address</label>
            <input  value={email} onChange={(e)=>setEmail(e.target.value)} type="text" name="email" id="email" className="form-control" />
            <label htmlFor="fname">Profile</label>
            <input  onClick={handleImageUpload} type="file"  className="form-control" />

        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};
export default Profile
