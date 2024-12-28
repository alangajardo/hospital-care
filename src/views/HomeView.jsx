import React, { Profiler, useEffect, useState } from 'react';
import ServicesList from '../components/ServiceList';
import HospitalInfo from '../components/HospotalInfo';

function onRenderCallBack(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions){
    console.log({id, phase, actualDuration, baseDuration, startTime, commitTime});
}

function HomeView(){
    const [servicios, setServicios] = useState([]);  
    useEffect(() => {
        const fetchServicios = async () => {
            const data = [
                {id: 1, nombre: "Urgencia", descripcion: "El servicio de urgencia de un hospital ofrece atención médica inmediata a pacientes en condiciones críticas, funcionando las 24 horas con personal especializado y equipamiento para estabilizar y diagnosticar.", img: "/assets/servicios/servicio_1.jpg"},
                {id: 2, nombre: "Telemedicina", descripcion: "El servicio de telemedicina proporciona atención médica a distancia mediante tecnologías como videollamadas y chats, permitiendo consultas sin desplazamientos y optimizando recursos sanitarios, manteniendo la confidencialidad y calidad del cuidado.", img: "/assets/servicios/servicio_2.jpg"},
                {id: 3, nombre: "Paliativos", descripcion: "El servicio de cuidados paliativos mejora la calidad de vida de pacientes con enfermedades avanzadas sin cura, como el cáncer terminal, aliviando el dolor y síntomas, y brindando apoyo a las familias mientras prioriza el confort del paciente.", img: "/assets/servicios/servicio_3.jpg"}
            ];
            setServicios(data);
        }
        fetchServicios();
    }, []);

    //memo:
    const MemoizedComponent = React.memo(ServicesList);

    return (
        <Profiler id="ServicesList" onRender={onRenderCallBack}>
            <HospitalInfo />
            <MemoizedComponent servicios={servicios}/>
        </Profiler>
    );
}

export default HomeView;
