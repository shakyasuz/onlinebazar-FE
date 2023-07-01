import React from 'react'
import { useSelector } from 'react-redux';
import {Link, useNavigate} from "react-router-dom";
export const Navbar = () => {
  const navigate=useNavigate()
  //get user from local storage 
  const user=JSON.parse(localStorage.getItem("user"))
  console.log(user)
  //Logout function
  const Logout=() =>{
    localStorage.clear()
    navigate("/login")
  }
  //get cart value form reducer
  const {cart}=useSelector((state)=>({
    cart:state.cart.cart
  }))
  return (
    <>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button
      class="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <Link class="navbar-brand me-2" to="/">
      <h3 className="text-danger fw-bold">Online-
       <span className="text-black"> Shop</span>
       </h3>
      </Link>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link" href="#">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Projects</a>
        </li> 


        <li class="nav-item">
        {user ?(
          <div class="dropdown">
          <button
            class="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-mdb-toggle="dropdown"
            aria-expanded="false"
          >
            {user.fname}
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            {
              user.isAdmin ?(
                <>
                 <li><Link to={'/admindashboard'}class="dropdown-item">Admin Dashboard</Link></li>
                </>
               
             ):<>
             <li><Link to={'/profile'}class="dropdown-item">Profile</Link></li>
             <li><Link to={'/order'}class="dropdown-item">My Orders</Link></li>
             </>
             
              
            }
            
            <li><a class="dropdown-item" onClick={Logout}>Logout</a></li>
          </ul>
          {/* <Link to={'/cart'}>
            <i className="fa fa-shopping-cart fa-ig"></i>
            <span className='badge rounded-pill image-notification bg-danger'>1</span>
          </Link> */}
        </div>
        ):(<>
        <Link to={'/Profile'}>
        <button type="button"  class="btn btn -primary px-3 me-2">Profile</button>
        </Link>
        <Link to ={'/Login'}>
        <button type="button"  class="btn btn -primary px-3 me-2">Login</button>
        </Link>
          <Link to ={'/Register'}>
            <button type="button" class="btn btn-primary px-3 me-2">Register</button>
          </Link>
        </>
        )}
        </li>
      </ul>
    </div>

    <div class="d-flex align-items-center">
      <a class="text-reset me-3" href="#">
        <Link to={'/cart'}>
        <span className='badge rounded-pill image-notification bg-danger'>{cart.length}</span>
        <i class="fas fa-shopping-cart"></i>
        </Link>
      </a>

      <div class="dropdown">
        <a
          class="text-reset me-3 dropdown-toggle hidden-arrow"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <i class="fas fa-bell"></i>
          <span class="badge rounded-pill badge-notification bg-danger">1</span>
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuLink"
        >
          <li>
            <a class="dropdown-item" href="#">Some news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Another news</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Something else here</a>
          </li>
        </ul>
      </div>
      <div class="dropdown">
        <a
          class="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            class="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          class="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a class="dropdown-item" href="#">My profile</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a class="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>
    </>
  )
}
export default Navbar