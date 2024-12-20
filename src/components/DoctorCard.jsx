import Modal from './Modal';
import PropTypes from 'prop-types';
import React, { useState } from 'react';

function DoctorCard(props){
    const equipo__img = {
        width: '100%',
        height: '300px',
        backgroundSize: 'cover'
    }

    const [isOpen, setIsOpen] = useState(false);

    return (
        <React.Fragment>
            <article className="col-sm-12 col-md-6 col-lg-3">
                <div className="card h-100">
                    <img className="card-img-top" style={equipo__img} src={props.img} alt={props.nombre} />
                    <div className="card-body">
                        <h5 className="card-title">
                            {props.nombre}
                        </h5>
                        <p className="card-text"><small className="text-body-secondary">{props.especialidad} ({props.aniosExp} años exp.)</small></p>
                        <button className='btn btn-outline-primary' onClick={() => setIsOpen(true) }>Ver Detalle</button>
                        {
                            isOpen && (
                                <Modal onClose={()=>setIsOpen(false)}>
                                    <h3>{props.name}</h3>
                                    <p>Especialidad: {props.especialidad}</p>
                                    <p>{props.descripcion}</p>
                                </Modal>
                            )
                        }
                    </div>
                </div>
            </article>
        </React.Fragment>
    )
}

DoctorCard.propTypes = {
    img: PropTypes.string.isRequired,
    nombre: PropTypes.string.isRequired,
    especialidad: PropTypes.string.isRequired,
    aniosExp: PropTypes.number.isRequired,
    descripcion: PropTypes.string.isRequired
}

export default DoctorCard
