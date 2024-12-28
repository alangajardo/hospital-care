import { useState } from "react";
import MenuItem from "./MenuItem";

function Menu( {setView, activeView} ){
    const menuStyle = {
        height: "100px"
    }

    const [views] = useState(['Home','Equipo','Citas']);
    
    const handleNavigation = (e, view) => {
        e.preventDefault();
        setView(view);
    }

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
            <div className="container-fluid">
                <img className="navbar-brand" src="assets/logo.png" alt="logo hospital" style={menuStyle}/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {
                            views.map((view, index) => (
                                <MenuItem key={index} handleNavigation={handleNavigation} view={view} activeView={activeView===view}/>
                            ))
                        }
                    </ul>
                    {/*<button className="btn btn-lg btn-outline-success">Reservar Cita</button>*/}
                </div>
            </div>
        </nav>
    );
}

export default Menu;
