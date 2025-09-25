import db from "../config/config.js";

import response from "express";

class mainModel {

    static ConsultarSQL (sql) {
        const SQL = sql;
        
        db.query(SQL, (err, result) => {

            if (err) throw new Error("Credenciales incorrectas, información no encontrada");
            // result = {result};
            response.json({result});
            // return result;
            // if (result.length > 0) return result;
        });
    }

    static InsertSQL (table, fields, values) {
        const SQL = `INSERT INTO ${table} (${fields}) VALUES (${values})`;
        db.query(SQL, (err, result) => {
            if (err) throw err;
            return result;
        });
    }
}

export default mainModel;