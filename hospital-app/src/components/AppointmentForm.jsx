import { useContext, useEffect, useRef, useState } from "react"
import PropTypes from 'prop-types';
import { DoctorContext } from "../context/DoctorContext";

function AppointmentForm( {submitForm} ){
    const { doctores } = useContext(DoctorContext);

    const [formCita, setFormCita] = useState({
        nombre: '',
        especialidad: '',
        fecha: ''
    });

    const nombreRef = useRef(null);
    const doctorRef = useRef(null);
    const especialidadRef = useRef(null);
    const fechaRef = useRef(null);

    useEffect(()=>{
        nombreRef.current.focus();
    }, []);

    const handleChange = (e) => {
        setFormCita({...formCita, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        submitForm(formCita);
        nombreRef.current.value = '';
        doctorRef.current.value = '';
        especialidadRef.current.value = '';
        fechaRef.current.value = '';
        nombreRef.current.focus();
    }

    const selectEspecialidad = (e) => {
        setFormCita({...formCita, especialidad: e.target.value});
    }

    return (
        <form className="bg-light p-4 shadow rounded" onSubmit={handleSubmit}>
            <h1 className="text-center mb-4">Formulario de Citas</h1>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                    <input className="form-control" type="text" name="nombre" value={formCita.nombre} ref={nombreRef} onChange={handleChange} placeholder="Ingrese su nombre" required/>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Doctor</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-capsule"></i></span>
                    <select ref={doctorRef} className="form-select" onChange={selectEspecialidad} required>
                        <option value="">Seleccionar Doctor</option>
                        {
                            doctores.map(doctor=>(
                                <option key={doctor.id} value={doctor.especialidad}>{doctor.nombre}</option>
                            ))
                        }
                    </select>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Especialidad</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-capsule"></i></span>
                    <input className="form-control" type="text" name="especialidad" value={formCita.especialidad} ref={especialidadRef} required disabled/>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-calendar"></i></span>
                    <input className="form-control" type="date" name="fecha" value={formCita.fecha} ref={fechaRef} onChange={handleChange} required/>
                </div>
            </div>
            <button type="submit" className="btn w-100">
                <i className="bi bi-send-fill"></i> Enviar
            </button>
        </form>
    )
}

AppointmentForm.propTypes = {
    submitForm: PropTypes.func.isRequired
}

export default AppointmentForm
