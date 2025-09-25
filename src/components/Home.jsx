
function Home() {

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

        {/* <!--Main Content--> */}
        <div className="main-content">
            {/* <!--Top Navigation--> */}
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
                                <li><a className="dropdown-item" href="#"><i className="bi bi-gear me-2"></i>Configuración</a></li>
                                <li><a className="dropdown-item" href="#"><i className="bi bi-box-arrow-right me-2"></i>Cerrar Sesión</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>

            {/* <!--Content Sections--> */}
            <div className="container-fluid py-4">
                {/* <!--Dashboard Section--> */}
                <div className="section" id="dashboard">
                    <h2 className="mb-4">Dashboard</h2>
                    <div className="row">
                        <div className="col-md-3">
                            <div className="card bg-primary text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Pedidos Hoy</h5>
                                    <h2 className="card-text">24</h2>
                                    <p className="card-text"><small>+5% vs ayer</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card bg-success text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Ingresos</h5>
                                    <h2 className="card-text">$2,450</h2>
                                    <p className="card-text"><small>+12% vs ayer</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card bg-warning text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Productos</h5>
                                    <h2 className="card-text">156</h2>
                                    <p className="card-text"><small>12 bajos en stock</small></p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card bg-info text-white">
                                <div className="card-body">
                                    <h5 className="card-title">Clientes</h5>
                                    <h2 className="card-text">89</h2>
                                    <p className="card-text"><small>+3 nuevos hoy</small></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--Pedidos Section--> */} 
                <div className="section d-none" id="pedidos">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2>Pedidos</h2>
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#nuevoPedidoModal">
                            <i className="bi bi-plus-lg me-2"></i>Nuevo Pedido
                        </button>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Cliente</th>
                                            <th>Fecha</th>
                                            <th>Total</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#1234</td>
                                            <td>Juan Pérez</td>
                                            <td>2024-03-05</td>
                                            <td>$450.00</td>
                                            <td><span className="badge bg-success">Completado</span></td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary me-1">
                                                    <i className="bi bi-eye"></i>
                                                </button>
                                                <button className="btn btn-sm btn-outline-danger">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--Productos Section--> */}
                <div className="section d-none" id="productos">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2>Productos</h2>
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#nuevoProductoModal">
                            <i className="bi bi-plus-lg me-2"></i>Nuevo Producto
                        </button>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive" id="productos">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nombre</th>
                                            <th>Precio</th>
                                            <th>Stock</th>
                                            <th>Categoría</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody id="tablaProductosRegistrados">
                                        <tr>
                                            <td>#P001</td>
                                            <td>Producto Ejemplo</td>
                                            <td>$99.99</td>
                                            <td>50</td>
                                            <td>Electrónicos</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary me-1">
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                                <button className="btn btn-sm btn-outline-danger">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--Clientes Section--> */}
                <div className="section d-none" id="clientes">
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <h2>Clientes</h2>
                        <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#nuevoClienteModal">
                            <i className="bi bi-plus-lg me-2"></i>Nuevo Cliente
                        </button>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Nombre</th>
                                            <th>Email</th>
                                            <th>Teléfono</th>
                                            <th>Pedidos</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>#C001</td>
                                            <td>Juan Pérez</td>
                                            <td>juan@example.com</td>
                                            <td>555-1234</td>
                                            <td>5</td>
                                            <td>
                                                <button className="btn btn-sm btn-outline-primary me-1">
                                                    <i className="bi bi-pencil"></i>
                                                </button>
                                                <button className="btn btn-sm btn-outline-danger">
                                                    <i className="bi bi-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!--Reportes Section--> */}
                <div className="section d-none" id="reportes">
                    <h2 className="mb-4">Reportes</h2>
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Ventas por Mes</h5>
                                    <canvas id="ventasChart"></canvas>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Productos más Vendidos</h5>
                                    <canvas id="productosChart"></canvas>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!--Modals--> */}
        {/* <!--Nuevo Pedido Modal--> */}
        <div className="modal fade" id="nuevoPedidoModal" >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Nuevo Pedido</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="mb-3">
                                <label className="form-label">Cliente</label>
                                <select className="form-select">
                                    <option>Seleccionar cliente...</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Productos</label>
                                <div className="table-responsive">
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th>Producto</th>
                                                <th>Cantidad</th>
                                                <th>Precio</th>
                                                <th>Total</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    <select className="form-select">
                                                        <option>Seleccionar producto...</option>
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type="number" className="form-control" value="1"/>
                                                </td>
                                                <td>$0.00</td>
                                                <td>$0.00</td>
                                                <td>
                                                    <button type="button" className="btn btn-danger btn-sm">
                                                        <i className="bi bi-trash"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                                <button type="button" className="btn btn-outline-primary btn-sm">
                                    <i className="bi bi-plus-lg me-2"></i>Agregar Producto
                                </button>
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Total</label>
                                <input type="text" className="form-control" value="$0.00"  />
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" className="btn btn-primary">Guardar Pedido</button>
                    </div>
                </div>
            </div>
        </div>

        {/* <!--Nuevo Producto Modal--> */}
        <div className="modal fade" id="nuevoProductoModal" >
            <div className="modal-dialog modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Nuevo Producto</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                    </div>
                    <div className="modal-body">
                        <form id="productoForm" className="row justify-content-center">
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label">Nombre</label>
                                <input id="nombreProducto" type="text" className="form-control"  />
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label">Precio</label>
                                <input id="precioProducto" type="number" className="form-control" />
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label">Stock</label>
                                <input id="stockProducto" type="number" className="form-control" />
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label">Descripción</label>
                                <input id="descripcionProducto" type="text" className="form-control" />
                            </div>
                            <div className="mb-3 col-12 col-md-6">
                                <label className="form-label">Categoría</label>
                                <select id="categoriaProducto" className="form-select">
                                    <option>Seleccionar una categoría...</option>
                                    <option>Accesorios</option>
                                    <option>Ropa</option>
                                    <option>Postres</option>
                                    <option>Calzado</option>
                                    <option>Hogar</option>
                                </select>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button id="guardarProducto" type="submit" className="btn btn-primary">Guardar Producto</button>
                    </div>
                </div>
            </div>
        </div>
        
        </>
    );
}

export default Home
