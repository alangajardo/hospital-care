import { useEffect, useState } from "react"

function ServiceList(){
    const servicio__img = {
        width: '100%',
        height: '550px',
        objectFit: 'cover'
    }

    const servicio__parrafo = {
        borderRadius: '15px',
        padding: '15px'
    }

    const [servicios, setServicios] = useState([]);
    useEffect(() => {
        const fetchServicios = async () => {
            const data = [
                {id: 1,nombre: "Urgencia", descripcion: "El servicio de urgencia de un hospital ofrece atención médica inmediata a pacientes en condiciones críticas, funcionando las 24 horas con personal especializado y equipamiento para estabilizar y diagnosticar.", img: "/assets/servicios/servicio_1.jpg"},
                {id: 2,nombre: "Telemedicina", descripcion: "El servicio de telemedicina proporciona atención médica a distancia mediante tecnologías como videollamadas y chats, permitiendo consultas sin desplazamientos y optimizando recursos sanitarios, manteniendo la confidencialidad y calidad del cuidado.", img: "/assets/servicios/servicio_2.jpg"},
                {id: 3,nombre: "Paliativos", descripcion: "El servicio de cuidados paliativos mejora la calidad de vida de pacientes con enfermedades avanzadas sin cura, como el cáncer terminal, aliviando el dolor y síntomas, y brindando apoyo a las familias mientras prioriza el confort del paciente.", img: "/assets/servicios/servicio_3.jpg"}
            ];
            setServicios(data);
        }
        fetchServicios();
    }, []);


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

export default ServiceList
