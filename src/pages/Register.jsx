// import Form from "Form";
import axios from 'axios';
import { useState } from "react";
import { ToastContainer, toast, Bounce } from 'react-toastify'

const notify = () => toast.error('los datos no se pudieron registrar, verifique he intente de nuevo.').showToast();


/* ejemplo de alertas con toast:

toast('🦄 texto de ejemplo!', {
position: "top-right",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
}); */

function Register() {
    
    const [values , setValues ] = useState({
        'country': '',
        'dni': '',
        'firstName': '',
        'lastName': '',
        'phone': '',
        'email': '',
        'password': ''
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(values);

        axios.post('http://localhost:3000/register', values)
            .then(response => {

                console.log(response.data);

                if (response.data.message !== "") {
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
                    }).showToast();
                }

                if (response.data.message == "") {
                    toast.error('los datos no se pudieron registrar, verifique he intente de nuevo.').showToast();
                }
            })
            .catch(error => {
                console.log(error.message);
                toast({
                    text: `Error al iniciar sesión recargue la página, por favor.`,
                    className: 'success',
                    style : {
                        background : "linear-gradient(to right, #d9091bff, #5e030bff)"
                    }
                }).showToast();
            });
    }
        
    return (
        <>
            <div className="row justify-content-center bodys">
                <div className="col-12 justify-content-center align-items-center d-flex text-white">
                    <div className="col-6 glassmorph m-5 p-3 pt-4 rounded-4">
                        <form onSubmit={handleSubmit} id="formLogin" method="post" action="#!" className="">
                            <div className="row justify-content-center">
                                <div className="col-12 avatar text-center mb-3 text-white">
                                    <h2>Crear cuenta </h2>
                                </div>

                                <div className="col-12 col-sm-12 col-md-6 mb-2 text-start">
                                    <label className="mb-2">Nacionalidad <span style={{color: '#f00'}} > * </span></label>

                                    <select name="country" className="form-select" aria-label="Default select example" onChange={(e) => { setValues({...values, 'country': e.target.value})}} >
                                        <option >Selecciona una opción</option>
                                        <option value="V-">Venezolano</option>
                                        <option value="E-">Extrangero</option>
                                    </select>

                                </div>

                                <div className="col-12 col-sm-12 col-md-6 mb-2 text-start">
                                    <label className="mb-2">Cédula <span style={{color: '#f00'}} > * </span></label>
                                    
                                    <div className="input-group mb-3">
                                        <span className="input-group-text">
                                            <img src="./src/assets/img/personVCard.svg"/>
                                        </span>
                                        <input type="text" onChange={(e) => { setValues({...values, 'dni': e.target.value})}} className=" form-control" id="dni" name="dni" placeholder="ingresa tu cédula" aria-label="dni" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                                
                                <div className="col-12 col-sm-12 col-md-6 mb-2 text-start">
                                    <label className="mb-2">Nombres <span style={{color: '#f00'}} > * </span></label>
                                    
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bi bi-person-circle"></span>
                                        <input type="text" onChange={(e) => { setValues({...values, 'firstName': e.target.value})}} className=" form-control" id="firstName" name="firstName" placeholder="ingresa tus nombres" aria-label="firstName" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-md-6 mb-2 text-start">
                                    <label className="mb-2">Apellidos <span style={{color: '#f00'}} > * </span></label>
                                    
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bi bi-person-circle"></span>
                                        <input type="text" onChange={(e) => { setValues({...values, 'lastName': e.target.value})}} className=" form-control" id="lastName" name="lastName" placeholder="ingresa tus apelidos" aria-label="lastName" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-md-6 mb-2 text-start">
                                    <label className="mb-2">Teléfono <span style={{color: '#f00'}} > * </span></label>
                                    
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bi bi-phone-fill"> </span>
                                        <input type="text" min="0" max="12" onChange={(e) => { setValues({...values, 'phone': e.target.value})}} className=" form-control" id="phone" name="phone" placeholder="ingresa tu número de teléfono" aria-label="phone" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>
                                
                                <div className="col-12 col-sm-12 col-md-6 mb-2 text-start">
                                    <label className="mb-2">Correo <span style={{color: '#f00'}} > * </span></label>
                                    
                                    <div className="input-group mb-3">
                                        <span className="input-group-text bi bi-envelope-fill"> </span>
                                        <input type="email" onChange={(e) => { setValues({...values, 'email': e.target.value})}} className=" form-control" id="email" name="email" placeholder="ingresa tu correo" aria-label="email" aria-describedby="basic-addon1"/>
                                    </div>
                                </div>

                                <div className="col-12 col-sm-12 col-md-12 mb-2 text-start">
                                    <label className="mb-2">Contraseña</label>
                                    
                                    <div className="input-group mb-3">
                                        <span className="input-group-text"><i className="bi bi-lock-fill"></i></span>

                                        <input type={showPassword ? 'text' : "password"} onChange={(e) => { setValues({...values, 'password': e.target.value})}} className="p-1 input__field passw form-control" id="pswd" name="password" placeholder="Ingresa tu contraseña"/>

                                        <span className="input-group-text btn btn-secondary bi bi-eye" id="eyeIcon"  onClick={() => setShowPassword(!showPassword)}></span>
                                    </div>
                                </div>
                                
                                <div className="row mb-4">
                                    <div className="col-12 mb-3 text-center">
                                        <button type="submit" id="btnLogin" className="btn btn-primary btn-md mt-4 mx-4">Registrarse</button>
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
            <div>
                <button onClick={notify}>Notify!</button>
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
            </div>
        </>
    );
}

export default Register;