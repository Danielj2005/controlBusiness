// import cheerio from 'cheerio'
import axios from 'axios';
// import https from 'https'; // <--- Añade esta línea
import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify'



function Login() {

    const [values , setValues ] = useState({
        'cedula': '',
        'password': ''
    });

    const [showPassword, setShowPassword] = useState(false);
    
    const submitTest = (e) => {
        e.preventDefault();
        console.log(values);
        if (values.cedula == "28587583" && values.password == "12345") {
            toast.success(`inicio de sesion exitoso`, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce
            });
            location.href="/home"
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);

        axios.get('http://localhost:3000/login', {
                params: {
                    cedula: values.cedula,
                    password: values.password,
                }
            })
            .then(response => {
                console.log(response.data);
                if (response.data !== "") {
                    toast.success(`${response.data.message}`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce
                    });
                }
                if (response.data == "") {
                    toast.error( `Error usuario no encontrado.`, {
                        position: "top-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: false,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        transition: Bounce
                    });
                }
            })
            .catch(error => {
                console.log(error.message);
                toast.error(`Error al iniciar sesión recargue la página, por favor.`, {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    transition: Bounce,
                });
                
            });
    }

    return (
        <>
            <div className="row justify-content-center bodys" >
                <div className="col-12 col-sm-10 col-md-10 col-lg-4 justify-content-center align-items-center d-flex text-white">
                    <div className="col-10 glassmorph m-5 p-3 pt-4 rounded-4">
                        <form onSubmit={submitTest} id="formLogin" method="get" action="#!" className="">
                            <div className="row justify-content-center">
                                <div className="col-12 avatar text-center mb-3 text-white">
                                    <h2>Inicio de Sesión </h2>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 mb-2 text-start">
                                    <label className="mb-2">Cédula</label>
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bi bi-person-fill"></span>
                                        <input type="text" onChange={(e) => { setValues({...values, 'cedula': e.target.value})}} className="p-1 form-control" id="cedula" name="cedula" placeholder="ingresa tu cédula" aria-label="cedula" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                                <div className="col-12 col-sm-12 col-md-12 mb-2 text-start">
                                    <label className="mb-2">Contraseña</label>
                                    
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>

                                        <input type={showPassword ? 'text' : "password"} onChange={(e) => { setValues({...values, 'password': e.target.value})}} className="p-1 input__field passw form-control" id="pswd" name="password" placeholder="Ingresa tu contraseña"/>

                                        <span className="input-group-text btn btn-secondary bi bi-eye" id="eyeIcon" onClick={() => setShowPassword(!showPassword)}> </span>
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
                    </div>
                </div>
            </div>
            
            <div className="modal fade p-5" id="recuperar_contraseña" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content bg-75">
                        <form method="post" action="./vista/recuperar_contraseña.php">
                            <input type="hidden" name="acceso_recuperar_contraseña" value="ecDAuKiplp8="/>

                            <div className="modal-header">
                                <h1 className="modal-title fs-3 text-black" id="exampleModalLabel"> Recuperar acceso</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>

                            <div className="modal-body">
                                <div className="">
                                    <label className="mb-3 text-black">Correo <span className="text-danger"> * </span></label>
                                    <input type="text" className="input__field form-control" name="correo_recuperar_contraseña" id="correo_recuperar_contraseña" placeholder="ingresa tu correo"/>
                                </div>
                            </div>

                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                                <button type="submit" className="btn btn-primary">Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            
            <ToastContainer 
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
                transition={Bounce}
            />
        </>
    )
}

export default Login
