function DoctorCard(props){
    return (
        <div className="card">
            <img src={props.img} alt={props.nombre} />
            <div className="card-body">
                <h5 className="card-title">{props.nombre}</h5>
                <p className="card-text">{props.descripcion}</p>
            </div>
        </div>
    )
}

export default DoctorCard
