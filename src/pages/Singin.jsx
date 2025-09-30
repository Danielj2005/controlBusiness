
import { useState, useEffect } from 'react'
import supabase from '../../app/config/supabase.js'

function Page() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        async function getTodos() {
            const { data: todos , error} = await supabase.from('usuario').select('*');

            console.log(todos);

            if (error) { alert("ocurrio un error") }
            if (todos) { setTodos(todos)  }
        }
        getTodos();
    }, [])

    return (
        <>
            <div>
                <h2>Usuario(s) encontrado(s)</h2>
                {todos.length === 0 && <p>Cargando o no se encontraron usuarios...</p>}
                <ul>
                    {todos.map((usuario, index) => (
                        // Accede directamente a la propiedad 'nombre' del objeto 'usuario'
                        <li key={index}>
                            {usuario.nombre} 
                        </li>
                    ))}
                </ul>

            </div>
        </>
    )
}
export default Page
