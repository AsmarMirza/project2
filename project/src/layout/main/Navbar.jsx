import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <Link to={"/"}>Home</Link> <br />
      <Link to={"/basket"}> Basket</Link><br />
      <Link to={"/admin"}>Admin </Link><br />
      <Link to={"/add"}>Add</Link>
    </div>
  )
}

export default Navbar
