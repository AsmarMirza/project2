import React, { createContext, useEffect, useState } from 'react'
import UseLocalStorage from '../hooks/UseLocalStorage'


export const MainContext=createContext()

function MainProvider({children}) {
 
  const [basket, setbasket] = UseLocalStorage("basket",[])

  function addBasket(item){
   const index= basket.findIndex((x)=>x.id===item.id)
   if (index!==-1) {
    basket[index].count++
    setbasket([...basket])
    return
   }
   {
    setbasket([...basket,{...item,count:1}])
   }
  }

  function decreaseBasket(item){
    const index= basket.findIndex((x)=>x.id===item.id)
    if(basket[index].count>1){
      basket[index].count--
      setbasket([...basket])
    }
  }
  function removeBasket(item){
    setbasket(basket.filter((x)=>x.id!==item.id))
  }

  function getTotal(){
    return basket.reduce(
      (accumulator, currentValue) => accumulator +(currentValue.price*currentValue.count),
      0,
    );
    
  }
  return (
    <div>
      <MainContext.Provider value={{addBasket,basket,removeBasket,decreaseBasket,getTotal}}>

        {children}
      </MainContext.Provider>
    </div>
  )
}

export default MainProvider
