import { useContext, useEffect, useState } from "react";
import "./home.scss";
import { MainContext } from "../../context/MainProvider";
import { Link } from "react-router-dom";
function Home() {
  const {  addBasket } = useContext(MainContext);
  const [inp, setInp] = useState("");
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function getAllProducts(){
        const res=await fetch("http://localhost:3000/products2")
        const data=await res.json()
        setProducts(data)
    }
    getAllProducts()
    }, [])
  function asc(title) {
   
    setProducts(
      [...products].sort((a,b) => (a[title] > b[title]) ? 1 : ((b[title] > a[title]) ? -1 : 0)))
  }

  function dsc(title) {
   
    setProducts(
      [...products].sort((a,b) => (a[title] < b[title]) ? 1 : ((b[title] < a[title]) ? -1 : 0)))
  }
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        value={inp}
        onChange={(e) => setInp(e.target.value)}
        placeholder="Search.."
      />

      <button onClick={() => asc("title")}>asc</button>
      <button onClick={()=>dsc("title")}>dsc</button>
      <div className="container">
        {products
          .filter((x) => x.title.toLowerCase().includes(inp.toLowerCase()))
          .map((x) => (
            <div className="box" key={x.id}>
              <img className="image" src={x.image} alt="" />
              <p>{x.title}</p>
              <h3>{x.price}</h3>
              <button onClick={() => addBasket(x)}>add basket</button>
              <button> <Link to={`/Detail/${x.id}`}> go to detail</Link> </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Home;
