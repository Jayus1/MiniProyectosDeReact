import "./VehiclesView.css"

function VehiclesView({vehicles}){
    return (
        <div className="VehicleView">
            <h1>{vehicles.name}</h1>
            <h2>{vehicles.description}</h2>
            <img src={vehicles.image} alt={vehicles.name + " Image"} />
        </div>
    );
}

export default VehiclesView;