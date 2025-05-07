import RenderPlants from "./components/Plants";
import  PLANTS from "./data"
import "./index.css"
import { useState } from "react";
import Cart from "./components/Cart";


export default function App() {
   const [plants, setPlants] =  useState([]);

  const AddPlants = (plant) => {
      const plantExists = PLANTS.find((i) => i.id === plant.id);
      if (plantExists){
          setPlants(
              plants.map((plant) =>
              plant.id === plants.id
              ? {...plant, quantity: plant.quantity + 1}
              : plant
          ))}
      else {
          const item = {...plant, quantity: 1 };
          setPlants([...plants, item]);
           }
      };
  
  const RemovePlants = (plantToRemove) => {
      setPlants(
          plants.map((plant) => 
              plant.id === plantToRemove.id
          ? {...plant, quantity: plant.quantity - 1}
          : plant
      )
      .filter((plant) => plant.quantity > 0)
      );
  };
  

  return( 
    <>
    
        <h1>Proper Plants</h1>
        <RenderPlants plants={PLANTS} AddPlants={AddPlants} />
        <Cart plants={plants} AddPlants={AddPlants} RemovePlants={RemovePlants} />
    </> 
);
}
