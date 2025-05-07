
export default function Plant({plant, AddPlants}) {
    return(
        <div>
            <h1>{plant.image}</h1>
            <h3>{plant.name}</h3><br></br>
            <button onClick={() => AddPlants(plant)}>Add to cart</button> 
        </div>

    )
    console.log(plant)
}