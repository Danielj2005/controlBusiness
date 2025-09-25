import mainModel from "./mainModel.js";
import DB from "../config/config.js";
import bcrypt from "bcrypt";

class UserModel extends mainModel{
    // functions CRUD
    // consulta a la base de datos de user

    static consultar (Query) {
        const result = mainModel.ConsultarSQL(`${Query}`);
        // si la consulta no consigue datos se devuelve vacia la respuesta
        if (!result || result.length === 0) return new Error('información no encontrada');
        // console.log(result);
        // return result;
        if (result.length > 0) return result;
    }


    // insert into a la base de datos de user
    static insertSQL (dni, country, firstName, lastName, phone, email, password, id_rol) {
        const fecha = new Date();

        const año = fecha.getFullYear();      // Año (ej. 2023)
        const mes = fecha.getMonth() + 1;     // Mes (0-11, sumar 1 para obtener 1-12)
        const dia = fecha.getDate();          // Día del mes (1-31)
        const horas = fecha.getHours();       // Horas (0-23)
        const minutos = fecha.getMinutes();   // Minutos (0-59)
        const segundos = fecha.getSeconds(); 
        // console.log(`${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`);
        const date = `${año}-${mes}-${dia} ${horas}:${minutos}:${segundos}`;

        if (mainModel.InsertSQL('user','dni, country, firstName, lastName, phone, email, password, lastSession, sessionActive, locked, id_rol, estate', `${dni}, '${country}', '${firstName}', '${lastName}',' ${phone}', '${email}', '${password}', '${date}', 0, 0, ${id_rol}, 1`)){
            return {"message" : `¡El usuario '${firstName}' ha sido registrado exitosamente!`};
        }else {
            return {};
        }
    }

    static Login (cedula, password) {

        const hashedPassword = bcrypt.hashSync(password, 10);

        const sql = `SELECT password FROM user WHERE dni = ${cedula}`;

        DB.query(sql, (err, result) => {

            if (err) throw new Error("Credenciales incorrectas, información no encontrada");
            // return result;
            const dataUser = result;
            // if (result.length > 0) return result;
            console.log(hashedPassword);
            
            if (dataUser instanceof Error) return new Error('Ocurrio un error al procesar tu solicitud.');
    
            console.log('PASS ' + dataUser[0].password);
            console.log('pass ' + dataUser[0].password == hashedPassword);

            if (dataUser.length > 0){
                
                if (dataUser[0].password !== hashedPassword) {
                    return {"message" : 'Error contraseña incorrecta, intente de nuevo!'};
                }
    
                return {"message" : `¡El usuario ha sido autorizado exitosamente!`};
            }
        });
    }


    static Register (dni, country, firstName, lastName, phone, email, password, id_rol) {

        const hashedPassword = bcrypt.hashSync(password, 10);

        const result = this.insertSQL(dni, country, firstName, lastName, phone, email, hashedPassword, id_rol);
        return result;
    }

}

export default UserModel;