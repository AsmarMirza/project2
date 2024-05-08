import React, { useContext, useEffect, useState } from 'react'
import { MainContext } from '../../context/MainProvider'
import "./home.scss"
function Basket() {
    const {basket,removeBasket,addBasket,decreaseBasket,getTotal}=useContext(MainContext)
    const [products, setProducts] = useState([])
    useEffect(() => {
        async function getAllProducts(){
            const res=await fetch("http://localhost:3000/products2")
            const data=await res.json()
            setProducts(data)
        }
        getAllProducts()
        }, [])
  return (
    <div>
        <h2>Total:{getTotal()}</h2>
    <div className='container'>
      {basket.map((x)=> <div className='box' key={x.id}>
       <img className='image' src={x.image} alt="" />
       <p>{x.title}</p>
       <h3>{x.price}</h3>
       <button onClick={()=>removeBasket(x)}>remove</button>
       <p>Count:{x.count}</p>
       <button onClick={()=>addBasket(x)}>increase</button>
       <button onClick={()=>decreaseBasket(x)}>decrease</button>
      </div> )}
    </div>
    </div>
  )
}

export default Basket
