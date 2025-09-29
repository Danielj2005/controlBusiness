import {Section, Button} from '../components/Section';
import {Table} from '../components/TableResposive';


const Clientes = () => {
    return (
        <> 
            <Section 
                idSection="clientes"
                titleSection="Clientes"
                btn={
                    <Button 
                        btnClass="btn btn-primary" 
                        dataBsToggle="modal" 
                        dataBsTarget="#nuevoClienteModal" 
                        iconClass="bi bi-plus me-2" 
                        text="Nuevo Cliente" 
                    />
                }
                children={
                    <>
                        <Table                  
                            tableHeaders={["ID","Nombre","Email","Teléfono","Pedidos","Acciones"]}
                            tableBody={["#C001","Juan Pérez","juan@example.com","555-1234",["","5"]]}
                            children={
                                <>
                                    <Button 
                                        btnClass="btn btn-sm btn-outline-primary me-1"
                                        iconClass="bi bi-pencil"
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

            <div className="modal fade" id="nuevoClienteModal" tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Nuevo Cliente</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div className="modal-body">
                            <form id="clienteForm">
                                <div className="mb-3">
                                    <label className="form-label">Nombre Completo</label>
                                    <input type="text" className="form-control" id="nombreCliente" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" id="emailCliente" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Teléfono</label>
                                    <input type="tel" className="form-control" id="telefonoCliente" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Dirección</label>
                                    <textarea className="form-control" id="direccionCliente" rows="2"></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Tipo de Cliente</label>
                                    <select className="form-select" id="tipoCliente" required>
                                        <option value="">Seleccionar tipo...</option>
                                        <option value="regular">Regular</option>
                                        <option value="premium">Premium</option>
                                        <option value="mayorista">Mayorista</option>
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                            <button type="button" className="btn btn-primary" id="guardarCliente">Guardar Cliente</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Clientes;