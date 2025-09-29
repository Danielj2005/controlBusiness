import { useState } from 'react';
import {Section, Button} from '../components/Section';
import {Table} from '../components/TableResposive';



const Productos = () => {

    const [productos, setProductos] = useState({
        "nombreProducto" : "",
        "precioProducto" : "",
        "stockProducto" : "",
        "descripcionProducto" : "",
        "categoriaProducto" : ""
    })

    return (
        <>
            <Section 
                idSection="productos"
                titleSection="Producto"
                btn={
                    <Button 
                        btnClass="btn btn-primary" 
                        dataBsToggle="modal" 
                        dataBsTarget="#nuevoProductoModal" 
                        iconClass="bi bi-plus me-2" 
                        text="Nuevo Producto" 
                    />
                }
                children={
                    <>
                        <Table                  
                            tableHeaders={["ID","Nombre","Precio","Stock","Categoría","Acciones"]}
                            tableBody={["#P001","Producto Ejemplo","$99.99","50","Electrónicos"]}
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

            <div className="modal fade" id="nuevoProductoModal">
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
                                    <input id="nombreProducto" type="text" className="form-control" onChange={(e) => setProductos({...productos, 'nombreProducto': e.target.value}) } />
                                </div>
                                <div className="mb-3 col-12 col-md-6">
                                    <label className="form-label">Precio</label>
                                    <input id="precioProducto" type="number" className="form-control" onChange={(e) => setProductos({...productos, 'precioProducto': e.target.value}) } />
                                </div>
                                <div className="mb-3 col-12 col-md-6">
                                    <label className="form-label">Stock</label>
                                    <input id="stockProducto" type="number" className="form-control" onChange={(e) => setProductos({...productos, 'stockProducto': e.target.value}) } />
                                </div>
                                <div className="mb-3 col-12 col-md-6">
                                    <label className="form-label">Descripción</label>
                                    <input id="descripcionProducto" type="text" className="form-control" onChange={(e) => setProductos({...productos, 'descripcionProducto': e.target.value}) } />
                                </div>
                                <div className="mb-3 col-12 col-md-6">
                                    <label className="form-label">Categoría</label>
                                    <select id="categoriaProducto" className="form-select" onChange={(e) => setProductos({...productos, 'categoriaProducto': e.target.value}) } >
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
    )
}


export default Productos;