// this is parent class and it's child class is CarCards.js

import React, {useState} from 'react'
import CarApi from '../CarApi'
import CarCards from './CarCards';
import Navbar from './Navbar';


const newList = [
   ...new Set(
      CarApi.map((currElem)=>{
        return currElem.category;
      })
   ),

   "All"

];



const Car = () => {

  const[carData, setCarData] = useState(CarApi);
  const[carList, setCarList] = useState(newList);

  //  Making functions for filtering car types

   const filterItems = (category)  =>{

      if(category === "All"){
        setCarData(CarApi);
        return;
      }


      const updatedList = CarApi.filter((currElem)=>{
        return currElem.category === category;
      });

      setCarData(updatedList);
        
   };


  return (
    <>
           <Navbar filterItems={filterItems} carList={carList}/>
           <CarCards carData={carData}/>
    </>
  )
}

export default Car