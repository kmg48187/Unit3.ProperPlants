import Plant from "./Plant"
import PLANTS from "../data";

function RenderPlants({plant, AddPlants}){
  return(
    <>
        {PLANTS.map((plant) => (
            <Plant key = {plant.id} plant = {plant} AddPlants={AddPlants}  />
            ))}
         </>
     )
}

export default RenderPlants;