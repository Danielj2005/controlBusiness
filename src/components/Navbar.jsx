

function Navbar() {
    return (
        <>
        
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">

                <div className="container-fluid">

                    <button className="btn btn-link" id="sidebarToggle">
                        <i className="bi bi-list"></i>
                    </button>

                    <div className="ms-auto d-flex align-items-center">
                        <div className="dropdown">

                            <button className="btn btn-link dropdown-toggle" type="button" id="userDropdown" data-bs-toggle="dropdown">
                                <i className="bi bi-person-circle me-2"></i>Usuario
                            </button>

                            <ul className="dropdown-menu dropdown-menu-end">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-gear me-2"></i>
                                        Configuración
                                    </a>
                                </li>
                                <li><hr className="dropdown-divider" /></li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        <i className="bi bi-box-arrow-right me-2"></i>
                                        Cerrar Sesión
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar