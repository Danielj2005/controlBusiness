import {Section, Button} from '../components/Section';
import {Table} from '../components/TableResposive';


const Pedidos = () => {
    return (
        <>
                    <Section 
                        idSection="pedidos"
                        titleSection="Pedidos"
                        btn={
                            <Button 
                                btnClass="btn btn-primary" 
                                dataBsToggle="modal" 
                                dataBsTarget="#nuevoPedidoModal" 
                                iconClass="bi bi-plus me-2" 
                                text="Nuevo Pedido" 
                            />
                        }
                        children={
                            <>
                                <Table                  
                                    tableHeaders={["ID","Cliente","Fecha","Total","Estado","Acciones"]}
                                    tableBody={["#1234","Juan Pérez","2024-03-05","$450.00",["1","completado"]]}
                                    children={
                                        <>
                                            <Button 
                                                btnClass="btn btn-sm btn-outline-primary me-1"
                                                iconClass="bi bi-eye"
                                            />
                                            <Button 
                                                btnClass="btn btn-sm btn-outline-danger"
                                                iconClass="bi bi-trash" 
                                            />
                                        </>
                                    }
                                />
                            </>
                        }
                    />

                    

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
        </>
    )
}

export default Pedidos
