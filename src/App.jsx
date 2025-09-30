import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login';
import Singin from './pages/Singin';
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
                        <Route path="/" element={<Login/>} />
                        <Route path="/register" element={<Register/>} />
                        <Route path="/home" 
                            element={
                                <ProtectedRoute>
                                    <MainContent >
                                        <Dashboard/> 
                                    </MainContent >
                                </ProtectedRoute>
                            } />
                        <Route path="/pedidos" 
                            element={
                                <ProtectedRoute> 
                                    <MainContent >
                                        <Pedidos /> 
                                    </MainContent>
                                </ProtectedRoute>
                            } />
                        <Route path="/productos" 
                            element={
                                <ProtectedRoute> 
                                    <MainContent >
                                        <Productos/>  
                                    </MainContent>
                                </ProtectedRoute>
                            } />
                        <Route path="/clientes" 
                            element={
                                <ProtectedRoute> 
                                    <MainContent >
                                        <Clientes/>  
                                    </MainContent>
                                </ProtectedRoute>
                            } />
                        <Route path="/reportes" 
                            element={
                                <ProtectedRoute> 
                                    <MainContent >
                                        <Reportes/>   
                                    </MainContent>
                                </ProtectedRoute>
                            } />
                    </Routes>
            </BrowserRouter>
        </>
    )
}

export default App