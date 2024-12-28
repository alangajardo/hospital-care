import ServiceList from "./components/ServiceList";
import AppointmentForm from "./components/AppointmentForm";
import DoctorList from "./components/DoctorList";
import React, { Profiler, useEffect, useState } from "react";
import DoctorProvider from "./context/DoctorContext";

function onRenderCallBack(id, phase, actualDuration, baseDuration, startTime, commitTime, interactions){
  console.log({id, phase, actualDuration, baseDuration, startTime, commitTime});
}

function App() {
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

  const submitForm = (data) => {
    console.log(data);
  }

  //memo:
  const MemoizedComponent = React.memo(ServiceList);

  return (
    <main>
      <Profiler id="DoctorProvider" onRender={onRenderCallBack}>
        <DoctorProvider>
          <AppointmentForm submitForm={submitForm}/>
          <br />
          <DoctorList/>
        </DoctorProvider>
      </Profiler>

      <br />

      <Profiler id="ServiceList" onRender={onRenderCallBack}>
        <MemoizedComponent servicios={servicios}/>
      </Profiler>
    </main>
  )
}

export default App
