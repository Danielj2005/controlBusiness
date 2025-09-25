
function Sidebar () {
    return (
        <>
            <div className="sidebar bg-dark text-white">
                <div className="sidebar-header p-3">
                    <h3 className="text-center">Control Pedidos</h3>
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="#" data-section="dashboard">
                            <i className="bi bi-speedometer2 me-2"></i>Dashboard
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-section="pedidos">
                            <i className="bi bi-cart me-2"></i>Pedidos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-section="productos">
                            <i className="bi bi-box-seam me-2"></i>Productos
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-section="clientes">
                            <i className="bi bi-people me-2"></i>Clientes
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#" data-section="reportes">
                            <i className="bi bi-graph-up me-2"></i>Reportes
                        </a>
                    </li>
                </ul>
            </div>
        </>
    )

}


export default Sidebar;