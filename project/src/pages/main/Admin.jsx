import React, { useEffect, useState } from 'react'
import "./home.scss"
function Admin() {
    const [employees, setEmployees] = useState([])
    useEffect(() => {
     async function getAllEmployees(){
        const res=await fetch("http://localhost:3000/employes2")
        const data=await res.json()
        setEmployees(data)
     }
     getAllEmployees()
    }, [])
    function deleteEmployee(item){
        setEmployees( employees.filter((x)=>x.id!==item.id))
    }

   
  return (
    <div>
      <h1>salam</h1>
      <table>
        <thead>
<tr>
    <th>id</th>
    <th>image</th>
    <th>name</th>
    <th>job</th>
    <th>options</th>
  </tr>
        </thead>
  <tbody>
    {employees.map((x)=>(
        <tr  key={x.id}>
     <td>{x.id}</td>
    <td><img className='img' src={x.image} alt="" /></td>
    <td> {x.name}</td>
    <td>{x.job}</td>
    <td>
        <button onClick={()=>deleteEmployee(x)}>delete</button>
        <button>update</button>
    </td>
  </tr>
    ))}
  
  </tbody>
</table>
    </div>
  )
}

export default Admin
