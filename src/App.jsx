import React, { useState } from "react";
import Menu from "./components/Menu";
import HomeView from "./views/HomeView";
import DoctorsView from "./views/DoctorsView";
import AppointmentsView from "./views/AppointmentsView";
import Footer from "./components/Footer";
import "./App.css";
import DoctorProvider from "./context/DoctorContext";

function App() {
  //Etapa 3:
  const [view, setView] = useState('Home');

  return (
    <React.Fragment>
      <Menu setView={setView} activeView={view}/>
        { view === "Home" && <HomeView />}
        <br/>
        <DoctorProvider>
          { view === "Equipo" && <DoctorsView />}
          { view === "Citas" && <AppointmentsView />}
        </DoctorProvider>
        <br/>
      <Footer />
    </React.Fragment>
  )
}

export default App
