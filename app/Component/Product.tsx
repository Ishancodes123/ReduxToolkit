import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cards from './Card'


const Product = () => {
  const [data, setData] = useState([])

  useEffect(() => {

    axios.get("https://fakestoreapi.com/products").then(resp => setData(resp.data)).catch(error => console.log(error))

  }, [])

  return (
    <>

      <div className='title'>
        Dashboard
      </div>
      <div className='products'>
      {data?.map(item=> <Cards data={item}></Cards>)}
      </div>
        
    </>
  )
}

export default Product