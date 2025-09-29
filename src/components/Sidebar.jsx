import {Link} from "react-router-dom";



function Sidebar ({active}) {


    return (
        <>
            <div className={`sidebar bg-dark text-white ${active ? "show" : ""}`}>
                <div className="sidebar-header p-3">
                    <h3 className="text-center">Control Pedidos</h3>
                </div>
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/home" className="nav-link" data-section="dashboard">
                            <i className="bi bi-speedometer2 me-2"></i>Dashboard
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/pedidos" className="nav-link" data-section="pedidos">
                            <i className="bi bi-cart me-2"></i>Pedidos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/productos" className="nav-link" data-section="productos">
                            <i className="bi bi-box-seam me-2"></i>Productos
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/clientes" className="nav-link" data-section="clientes">
                            <i className="bi bi-people me-2"></i>Clientes
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/reportes" className="nav-link" data-section="reportes">
                            <i className="bi bi-graph-up me-2"></i>Reportes
                        </Link>
                    </li>
                </ul>
            </div>
        </>
    )

}


export default Sidebar;