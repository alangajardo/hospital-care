function MenuItem({handleNavigation, view, activeView}){
    return (
        <li className="nav-item">
            <a className={`nav-link ${activeView ? "active" : ""}`} href="#" onClick={(e) => handleNavigation(e, view)}>{view}</a>
        </li>
    );
}

export default MenuItem;
