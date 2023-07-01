import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Homepage from "./Pages/Homepage/homepage";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import About from "./Pages/About/About";
import Navbar from "./components/navbar/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminDashboard from "./Pages/admin/Admindashboard/AdminDashboard";
import Profile from "./Pages/Profile/Profile";
import Adminproductedit from "./Pages/admin/Admindashboard/Adminproductedit/Adminproductedit";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import Cart from "./Pages/cart/cart";
import Order from "./Pages/Orders/Order";
import AdminOrders from "./Pages/admin/Admindashboard/AdminOrders/AdminOrders";
import { Search } from "./Pages/Search/Search";
import { ForgotPassword } from "./Pages/forgot_password/ForgotPassword";
import UserRoute from "./Protected/UserRoute";
import AdminRoute from "./Protected/AdminRoute";


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product/details/:id" element={<ProductDetails></ProductDetails>}></Route>
          <Route path="/login" element={<Login></Login>} />
          <Route path="/Register" element={<Register></Register>} />
          <Route path="/About" element={<About></About>} />
          {/* dynamic changing  */}
          {/* search */}
          <Route path="/search/:query" element={<Search />}></Route>
          <Route path="/forgot-password" element={<ForgotPassword />}></Route>
          <Route element={<AdminRoute />}></Route>
          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/admin/product/edit/:id" element={<Adminproductedit />} />
          <Route path="/admin/orders" element={<AdminOrders />}></Route>
          <Route element={<UserRoute />}></Route>
          {/* {Cart} */}
          <Route path="/cart" element={<Cart />}></Route>
          {/* orders */}
          <Route path="/order" element={<Order />}></Route>
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Router>
    </>

  );
}
export default App;
