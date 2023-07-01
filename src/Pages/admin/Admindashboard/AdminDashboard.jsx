import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { addProductApi, deleteProductApi, getAllProductApi, getCount } from '../../../apis/Api';
//import { dashboardApi } from '../../apis/Api';
export const AdminDashboard = () => {
  const [ProductImage, setProductImage] = useState(null)
  const [PreviewImage, setPreviewImage] = useState(null)
  //for count
  const [productCount, setProductCount]=useState(0)
  const [pendingorderCount, setpendingorderCount]=useState(0)
  const [deliveredorderCount, setdeliveredorderCount]=useState(0)
  const [userCount, setuserCount]=useState(0)
  
  //RESPONSE DATA
  const[products, setProducts]=useState([]);
  const handleImageUpload = (event) => {
    setProductImage(event.target.files[0])
    const reader = new FileReader()
    reader.onload = () => {
      setPreviewImage(reader.result)
    }
    reader.readAsDataURL(event.target.files[0])
    // const file=e.target.files[0]
    // const reader=new FileReader()
    // reader.onloadend=()=>{
    //   setProductImage(reader.result);
    // };
    // if(file){
    //   reader.readAsDataURL(file)
    // }
  }

  const [Pname, setPname] = useState('');
  const [Pprice, setPprice] = useState('');
  const [category, setcategory] = useState('');
  const [Description, setDescription] = useState('');
  const [Action, setAction] = useState('');
  const[productNameError, setProductNameError]=useState('');
  const[productPriceError, setProductPriceError]=useState('');
  const[productCategoryError, setProductCategoryError]=useState('');
  const[productDescriptionError, setProductDescriptionError]=useState('');
  const[productActionError, setProductActionError]=useState('');
  const validate=()=>{
    let isvalid=true;
    if(Pname==="")
    {
      setProductNameError("First Name is required");
      isvalid=false;
    }
    if(Pprice==="")
    {
      setProductPriceError("Price is required");
      isvalid=false;
    }
    if(category=="")
    {
      setProductCategoryError("Category is required");
      isvalid=false;
    }
    if(Description==="")
    {
      setProductDescriptionError("Description is required");
      isvalid=false;
    }
    if(Action==="")
    {
      setProductActionError("Action is required");
      isvalid=false;
    }
    return isvalid;

  }
  const handlePname = (e) => {
    setPname(e.target.value);
  }
  const handlePprice = (e) => {
    setPprice(e.target.value);
  }
  const handlecategory = (e) => {
    setcategory(e.target.value);
  }
  const handleDescription = (e) => {
    setDescription(e.target.value);
  }
  const handleAction = (e) => {
    setAction(e.target.value);
  }
  //handle a submit
  // const handleSubmit=(e)=>{
  //   e.PreventDefaule();
  //   console.log(Pname,Pprice,category,Description,Action);
  //   try{
  //     dashboardApi({
  //       Pname:Pname,
  //        Pprice: Pprice,
  //        category: category,
  //        Description:Description,
  //        Action:Action,
  //     }).then((res)=>{
  //       toast.success("Change made successfully");
  //     }).catch((err)=>{
  //       console.log(err);
  //       toast.error("change failed");
  //     });
  //   }catch(error){
  //     toast.error("changes failed");
  //   }
  // };
  const handleSubmit = () => {
    const formData = new FormData();
    if(!validate()){
      return;
    }
    formData.append('Name', Pname)
    formData.append('Price', Pprice)
    formData.append('Category', category)
    formData.append('Description', Description)
    // formData.append('Action',Action)
    formData.append('image', ProductImage)
    //calling the ai
    addProductApi(formData).then(res => {
      toast.success("Product added successfully")
    }).catch(err => {
      console.log(err)
      toast.error("Product add failed!")
    })

  }
  //for all products in table

  useEffect(() => {
    getAllProductApi().then(res => {
      setProducts(res.data)
    }).catch(err => {
      console.log(err)
    })
    getCount().then(res=>{
      setProductCount(res.data.productCount)
      setpendingorderCount(res.data.pendingOrders)
      setdeliveredorderCount(res.data.deliveredOrders)
      setuserCount(res.data.userCount)

    })
  }, [])
  //deleting products

 const handleDelete=(id) =>{
  const confirmDelete= window.confirm("Are you sure you want to delele this product?");
  if(confirmDelete){
    deleteProductApi(id).then(res =>{
      toast.success("Product deleted successfully")
    }).catch(err =>{
      toast.error("Product Delete failed!")
    })
  }
 }
  return (
    <>
      <div className='container mt-2'>
      <div className="row my-4">
          <div className="col-md-3">
            <div className="card p-3 bg-danger bg-gradient text-white">
              <h4>TotalProduct</h4>
              <hr />
              <h5>{productCount}</h5>
              <p></p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 bg-warning bg-gradient text-white">
              <h4>Total Pending Order</h4>
              <hr />
              <h5>{pendingorderCount}</h5>
              <p></p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 bg-success bg-gradient text-white">
              <h4>Total Delivered Count</h4>
              <hr />
              <h5>{deliveredorderCount}</h5>
              <p></p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 bg-info bg-gradient text-white">
              <h4>Total Users</h4>
              <hr />
              <h5>{userCount}</h5>
              <p></p>
            </div>
          </div>
        </div>
        <div className='d-flex justify-content-between'>
          <h4>Showing All Products</h4>

          <button type="button" class="btn btn-primary" data-mdb-toggle="modal" data-mdb-target="#exampleModal">
            Product
          </button>

          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Add Product</h5>
                  <button type="button" class="btn-close" data-mdb-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <form action="">
                    <div class="mb-3">
                      <label htmlFor=''> Product Name</label>
                      <input onChange={handlePname}
                        type='text' class="form-control" placeholder='Enter Product Name'></input>
                        {                        
                        fnameerror && <div className="text-danger">{fnameerror}</div>
                        }
                      <label className="mt-2" htmlFor=''> Product Price</label>
                      <input onChange={handlePprice}
                        type='text' class="form-control" placeholder='Enter Product Price'></input>
                      <label className="mt-2" htmlFor=''> Category</label>
                      <input onChange={handlecategory}
                        type='text' class="form-control" placeholder='Enter Product Category'></input>
                      <label className="mt-2" htmlFor=''> Description</label>
                      <textarea class="form-control" name="" id="" rows={4} onChange={handleDescription}></textarea>
                      <label className="mt-2" htmlFor=''> Action</label>
                      <input type='text' class="form-control" placeholder='Enter Product Action' onChange={handleAction} ></input>
                      <label className="mt-2" htmlFor=''> Product Images</label>
                      <input onChange={handleImageUpload} type='file' class="form-control" placeholder='Product Image '></input>
                      {
                        ProductImage && <img src={ProductImage} alt="" className='object-cover-rounded-3 mt-2' height={'300px'} width={'450px'} />
                      }

                    </div>
                  </form>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-mdb-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary" onClick={handleSubmit}>Save changes</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <table class="table">
          <thead class="table-info">
            <tr>
              <th scope="col">Product Item</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Price</th>
              <th scope="col">Category</th>
              <th scope="col">Description</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              products.map(product => {
                return (
                  <tr>
              <td>
                <img src={product.pimage} alt="" width={40} />
              </td>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td> {product. description}</td>
              {/* <td>beautiful</td> */}
              <td>

                <div class="btn-group" role="group">
                  <Link to={`/admin/product/edit/${product._id}`} type="button" class="btn btn-danger">Edit</Link>
                  <button type="button" class="btn btn-success" onClick={() => handleDelete(product._id)}>Delete</button>
                </div>
              </td>
            </tr>
                  )
              })
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default AdminDashboard