import { useState } from "react"

function AppointmentForm(){
    const [formCita, setFormCita] = useState({
        nombre: '',
        especialidad: '',
        fecha: ''
    });

    const handleChange = (e) => {
        setFormCita({...formCita, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Cita:",formCita);
    }

    return (
        <form className="bg-light p-4 shadow rounded" onSubmit={handleSubmit}>
            <h1 className="text-center mb-4">Formulario de Citas</h1>
            <div className="mb-3">
                <label className="form-label">Nombre</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-person-fill"></i></span>
                    <input className="form-control" type="text" name="nombre" value={formCita.nombre} onChange={handleChange} placeholder="Ingrese su nombre"/>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Especialidad</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-capsule"></i></span>
                    <input className="form-control" type="text" name="especialidad" value={formCita.especialidad} onChange={handleChange} placeholder="Ingrese especialidad"/>
                </div>
            </div>
            <div className="mb-3">
                <label className="form-label">Fecha</label>
                <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-calendar"></i></span>
                    <input className="form-control" type="date" name="fecha" value={formCita.fecha} onChange={handleChange}/>
                </div>
            </div>
            <button type="submit" className="btn w-100">
                <i className="bi bi-send-fill"></i> Enviar
            </button>
        </form>
    )
}

export default AppointmentForm
