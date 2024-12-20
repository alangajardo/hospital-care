import { useContext } from "react";
import DoctorCard from "./DoctorCard";
import { DoctorContext } from "../context/DoctorContext";

function DoctorList(){
    const { doctores } = useContext(DoctorContext);

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
