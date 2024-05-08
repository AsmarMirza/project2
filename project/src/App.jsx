import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import MainLayout from './layout/main/MainLayout'
import Admin from './pages/main/Admin'
import Basket from './pages/main/Basket'
import Home from './pages/main/Home'
import MainProvider from "./context/MainProvider";
import Add from "./pages/main/Add";
import Detail from "./pages/main/Detail";

function App() {


  return (
    <>
    <MainProvider>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home/>} />
          <Route path="/Basket" element={<Basket />} />
          <Route path="/Admin" element={<Admin />} />
          <Route path="/Add" element={<Add />} />
          <Route path="/Detail/:id"element={<Detail />} />
        
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
