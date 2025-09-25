

function Form (formClass, method, action, id) {
    return (
        <>
            <form id={id} method={method} action={action} className={formClass}>
                <div className="row justify-content-center">
                    <div className="col-12 avatar text-center mb-3 text-white">
                        <h2>Inicio de Sesión </h2>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 mb-2 text-start">
                        <label className="mb-2">Cédula</label>
                        <div className="input-group mb-3">
                            <span className="input-group-text bi bi-person-fill"></span>
                            <input type="text" className="p-1 form-control" id="cedula" name="cedula" placeholder="ingresa tu cédula" aria-label="cedula" aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 mb-2 text-start">
                        <label className="mb-2">Contraseña</label>
                        
                        <div className="input-group mb-3">
                            <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>

                            <input type="text" className="p-1 input__field passw form-control" id="pswd" name="password" placeholder="Ingresa tu contraseña"/>

                            <span className="input-group-text btn btn-secondary bi bi-eye" id="eyeIcon"> </span>
                        </div>
                    </div>
                    
                    <div className="row mb-4">
                        <div className="col-12 mb-3 text-center">
                            <button type="submit" id="btnLogin" className="btn btn-primary btn-md mt-4 mx-4">Iniciar sesión</button>
                        </div>
                        <div className="col-12 mb-3 text-center">
                            <button type="button" className="text-light btn btn-link" data-bs-toggle="modal" data-bs-target="#recuperar_contraseña">
                                ¿Problemas para iniciar sesión? Recupera tu acceso
                            </button>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Form ;