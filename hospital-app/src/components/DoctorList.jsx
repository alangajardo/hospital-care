import { useContext } from "react";
import DoctorCard from "./DoctorCard";
import { DoctorContext } from "../context/DoctorContext";

function DoctorList(){
    const { doctores, error } = useContext(DoctorContext);

    if(error) return <p style={{color:'red'}}>Error: {error.message}</p>
    if(!doctores) return <p>Loading...</p>
    return (
        <section className="row px-5">
            {
                doctores.map(doctor => (
                    <DoctorCard
                        key = {doctor.id}
                        img = {doctor.img}
                        nombre = {doctor.nombre}
                        especialidad = {doctor.especialidad}
                        aniosExp = {doctor.aniosExp}
                        descripcion = {doctor.descripcion}
                    />
            ))
            }
        </section>
    );
}

export default DoctorList;
