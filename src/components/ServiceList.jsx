import PropTypes from 'prop-types';

function ServiceList({servicios}){
    const servicio__img = {
        width: '100%',
        height: '550px',
        objectFit: 'cover'
    }
    const servicio__parrafo = {
        borderRadius: '15px',
        padding: '15px'
    }

    return (
        <section>
            <div id="carousel" className="carousel carousel-dark slide">
                <div className="carousel-inner" id="carousel-servicios">
                    {
                        servicios.map((servicio, index) => (
                            <div key={servicio.id} className={`carousel-item ${index==0 ? 'active': ''}`}>
                                <article>
                                    <img className="d-block w-100" style={servicio__img} src={servicio.img} alt={servicio.nombre}/>
                                    <div className="carousel-caption d-md-block" style={servicio__parrafo}>
                                        <h4><b>{servicio.nombre}</b></h4>
                                        <p>{servicio.descripcion}</p>
                                    </div>
                                </article>
                            </div>
                        ))
                    }
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    )
}

ServiceList.propTypes = {
    servicios: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            nombre: PropTypes.string.isRequired,
            descripcion: PropTypes.string.isRequired,
            img: PropTypes.string.isRequired
        })
    ).isRequired
}

export default ServiceList
