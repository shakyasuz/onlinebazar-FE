import React, { useEffect, useState } from 'react'
import Card from '../../components/navbar/card/Card'
import { useParams } from 'react-router-dom'
import { searchProductApi } from '../../apis/Api'

export const Search = () => {
    const {query}=useParams();
    const [products, setProducts]=useState([]);
    const [searchQuery, setSearchQuery]=useState(query);
    useEffect(()=>{
        searchProductApi(query).then(res=>{
            console.log(res.data)
            setProducts(res.data)
        }).catch(err=>{
            console.log(err)
        })
    })
    const handleSearch=(e)=>{
        e.preventDefault()
        searchProductApi(searchQuery).then(res=>{
            console.log(res.data)
            setProducts(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className='container mt-3'>
        <div className='d-flex justify-content-between'>
            <h4>Search Product</h4>
            <form action="">
        <input onChange={(e)=>setSearchQuery(e.target.value)} type="text" className="form-control mb-3" placeholder='Search Product' />
        <button onClick={handleSearch} type="submit" hidden  >Search</button>
      </form>
        </div>
        <p>
            Result for <strong>"{searchQuery}"</strong>
        </p>
        <div className='row row-cols-1 row-cols-md-4'>
            {
                products.length > 0 ? products.map(product =>(
                    <Card product={product}/>
                )):<h4>No Product found</h4>
            }
        </div>

    </div>
  )
}
export default Search