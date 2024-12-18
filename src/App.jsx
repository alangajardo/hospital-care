import AppointmentForm from "./components/AppointmentForm"
import DoctorCard from "./components/DoctorCard"
import ServiceList from "./components/ServiceList"

function App() {
  return (
    <>
      <DoctorCard nombre="Dr. House"/>
      <ServiceList />
      <AppointmentForm />
    </>
  )
}

export default App
