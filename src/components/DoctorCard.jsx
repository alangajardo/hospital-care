function DoctorCard(props){
    const equipo__img = {
        width: '100%',
        height: '300px',
        backgroundSize: 'cover'
    }

    return (
        <article className="col-sm-12 col-md-6 col-lg-3">
            <div className="card h-100">
                <img className="card-img-top" style={equipo__img} src={props.img} alt={props.nombre} />
                <div className="card-body">
                    <h5 className="card-title">{props.nombre}</h5>
                    <p className="card-text"><small className="text-body-secondary">{props.especialidad} ({props.aniosExp} años exp.)</small></p>
                    <p className="card-text">{props.descripcion}</p>
                </div>
            </div>
        </article>
    )
}

export default DoctorCard
