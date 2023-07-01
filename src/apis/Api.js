import axios from "axios";

const Api = axios.create({
    baseURL:'https://backend-k6tq.onrender.com',
    withCredentials:true,
    headers:{
        'Content-Type':'multipart/form-data',
    },
});
const config={
    headers:{
        'authorization': `Bearer ${localStorage.getItem('token')}`
    },
}
//creating route
export const testApi=()=>{
    return Api.get('/')
}
//register route
export const registerApi=(data)=>Api.post('/api/user/register',data);
//login route
export const loginApi=(data)=>Api.post('/api/user/login',data);
//dashboard route
 //export const dashboardApi=(data)=>Api.post('/api/user/dashboard',data);
 //product route
 export const addProductApi=(data)=>Api.post('/api/product/add',data, config);
 //get all products route
 export const getAllProductApi=()=>Api.get('/api/product/get_products');
 //single product route
 export const getSingleProductApi=(id)=>Api.get(`/api/product/get_products/${id}`);
 //update product route
 export const updateProductApi=(id,data)=>Api.put(`/api/product/update_products/${id}`,data, config);
 //delete prduct route
 export const deleteProductApi=(id)=>Api.delete(`/api/product/delete_products/${id}`, config);
 //create order
 export const createOrderApi=(data)=>Api.post('/api/orders/create',data,config);
 //get Orders by user id 
 export const getOrdersByUserApi=()=>Api.get('/api/orders/get_single',config);
//get all orders
export const getAllOrdersApi=()=>Api.get('/api/orders/get_all',config);
// update order status 
export const updateOrderStatusApi=(id,data)=>Api.put(`/api/orders/change_status/${id}`,data,config);
//search product
export const searchProductApi=(query)=>Api.get(`/api/product/search_product/${query}`);
//count products
export const getCount=()=>Api.get('/api/product/count');
//forget password
// forgot password
export const ForgotPasswordApi = (data) => Api.post('/api/user/forgot_password', data);