import React, { useEffect, useState } from 'react'
import "./home.scss"
import { useParams } from 'react-router-dom'
function Detail() {
    let {id}=useParams()
const [detail, setDetail] = useState([])
useEffect(() => {
getProductDetail()
}, [])

async function getProductDetail(){
const res=await fetch("http://localhost:3000/products2/"+id)
const data=await res.json()
setDetail(data)
}
  return (
      <div className="container">
        {detail
          .map((x) => (
            <div className="box" key={detail.id}>
              <img className="image" src={detail.image} alt="" />
              <p>{detail.title}</p>
              <h3>{detail.price}</h3>
            </div>
          ))}
      </div>
  )
}

export default Detail
