import PLANTS from "../data"

export default function Cart({plants, AddPlants, RemovePlants}){
    return(
        <><h2>Cart</h2>

        {plants.length === 0 ? (
            <p>Your cart is empty.</p>
        ) :(
            <>
                {plants.map((plant) => {
                    return(
                        <div key={plant.id}>
                            <button onClick ={() => {
                                RemovePlants(plant)
                            }}
                            style={{color:"red"}}
                                > - </button>{""}
                                <span>
                                    {plant.name}: {plant.quantity}
                                </span>{""}
                            <button onClick ={() => {
                                AddPlants(plant)
                            }}
                            style={{color:"darkgreen"}}
                                > + </button>
                        </div>
                    )
                })}       
            </>
        )}
        </>
    )
}


