import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login';
import MainContent from './pages/MainContent';
import Dashboard from './pages/Dashboard';
import Clientes from './pages/Clientes';
import Pedidos from './pages/Pedidos'; 
import Reportes from './pages/Reportes';
import Productos from './pages/Productos';
import ProtectedRoute from './components/ProtectedRoute';


function App() {
    return (
        <>
            <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Login/>}></Route>
                        <Route path="/register" element={<Register/>}></Route>
                        <Route path="/home" element={
                                <ProtectedRoute>
                                    <MainContent >
                                        <Dashboard/> 
                                    </MainContent >
                                </ProtectedRoute>
                            }></Route>
                        <Route path="/pedidos" element={
                                <ProtectedRoute> 
                                    <MainContent >
                                        <Pedidos /> 
                                    </MainContent>
                                </ProtectedRoute>
                            }></Route>
                        <Route path="/productos" element={
                                <ProtectedRoute> 
                                    <MainContent >
                                        <Productos/>  
                                    </MainContent>
                                </ProtectedRoute>
                            }></Route>
                        <Route path="/clientes" element={
                                <ProtectedRoute> 
                                    <MainContent >
                                        <Clientes/>  
                                    </MainContent>
                                </ProtectedRoute>
                            }></Route>
                        <Route path="/reportes" element={
                                <ProtectedRoute> 
                                    <MainContent >
                                        <Reportes/>   
                                    </MainContent>
                                </ProtectedRoute>
                            }></Route>
                    </Routes>
            </BrowserRouter>
        </>
    )
}

export default App