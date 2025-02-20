import { createContext, useEffect, useState } from "react";
import { getDoctors } from "../services/api";

export const DoctorContext = createContext();

export default function DoctorProvider( {children} ){
    const [doctores, setDoctores] = useState([]);
    const [error, setError] = useState(null);

    /*Simulación de API que cargaría los datos:
    const fetchDoctores = async () => {
        const data = [
            {id: 1,nombre: "Dr. Stephen Strange", img: "/assets/doctores/dr_stepher_strange.jpeg", especialidad: "Traumatología", aniosExp: 5, descripcion: "El Dr. Stephen Strange es un especialista en traumatología con amplia experiencia en el diagnóstico y tratamiento de lesiones musculoesqueléticas, fracturas y problemas articulares. Se ha formado en instituciones de prestigio y participa activamente en congresos y cursos de actualización médica. Su enfoque combina técnicas quirúrgicas avanzadas con tratamientos conservadores, priorizando la recuperación funcional y el bienestar de sus pacientes. Con una atención cercana y profesional, el Dr. Stephen Strange se dedica a mejorar la calidad de vida de cada persona que confía en su cuidado."},
            {id: 2,nombre: "Dr. Christine Palmer", img: "/assets/doctores/dr_christine_palmer.jpeg", especialidad: "Ginecología", aniosExp: 8, descripcion: "La Dra. Christine Palmer es una destacada ginecóloga con amplia trayectoria en el cuidado de la salud femenina. Especializada en el diagnóstico y tratamiento de afecciones ginecológicas, control prenatal y salud reproductiva, combina conocimiento científico con un enfoque empático hacia sus pacientes. Ha participado en múltiples congresos y programas de actualización, manteniéndose a la vanguardia en su especialidad. La Dra. Palmer se distingue por su compromiso con brindar atención integral y personalizada, priorizando el bienestar físico y emocional de cada mujer en todas las etapas de su vida."},
            {id: 3,nombre: "Dr. Fate", img: "/assets/doctores/dr_fate.webp", especialidad: "Pediatría", aniosExp: 15, descripcion: "El Dr. Fate es un pediatra comprometido con el cuidado integral de la salud infantil, desde recién nacidos hasta adolescentes. Con amplia experiencia en prevención, diagnóstico y tratamiento de enfermedades pediátricas, su enfoque busca no solo tratar afecciones, sino también promover el desarrollo saludable. Participa activamente en programas de formación continua y eventos médicos para mantenerse al día con los avances en su campo. Con una actitud cercana y empática, el Dr. Fate ofrece un cuidado personalizado, asegurando que cada niño reciba la atención necesaria para crecer sano y feliz."},
            {id: 4,nombre: "Dr. Derek Sheperd", img: "/assets/doctores/dr_derek_sheperd.jpeg", especialidad: "Neurología", aniosExp: 7, descripcion: "El Dr. Derek Shepherd es un reconocido neurólogo con amplia experiencia en el diagnóstico y tratamiento de trastornos del sistema nervioso, como epilepsia, enfermedades neurodegenerativas, accidentes cerebrovasculares y migrañas. Ha desarrollado su carrera combinando conocimientos clínicos avanzados con un enfoque innovador en terapias neurológicas. Participa en investigaciones y congresos internacionales para mantenerse a la vanguardia de los avances en su especialidad. Con una atención empática y centrada en el paciente, el Dr. Shepherd se dedica a brindar tratamientos personalizados, mejorando la calidad de vida de quienes confían en su cuidado."}
        ];
        return new Promise((resolve) => setTimeout(() => resolve(data), 2000));
    }*/

    //carga de datos al montar el componente
    useEffect(() => {
        const fetchDoctores = async () => {
            try {
                const data = await getDoctors();
                setDoctores(data);
            } catch (error) {
                setError(error);
            }
        }
        fetchDoctores();
    }, []);

    return (
        <DoctorContext.Provider value={ {doctores, error, setDoctores, setError} }>
            {children}
        </DoctorContext.Provider>
    );
}