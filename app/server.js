// import jwt from "jsonwebtoken";
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mainModel from "./models/mainModel.js";

const API_KEYS = {
    'UJUME-MUUW': {
        'DNI':'28587583',
        'country':'Venezuela',
        'firstName':'Daniel Jose',
        'lastName':'Barrueta Pichardo',
    }, 
    'key2': 'value2'
};

const app = express();
const PORT = 3000 ;

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Access-Control-Allow-Origin']
}));

app.use(cookieParser());

app.get('/', (req, res) => {

    res.header('Access-Control-Allow-Origin','*');
    
    const sql = "SELECT * FROM user";
    
    // res.send("SELECT * FROM user");

    // const result = mainModel.ConsultarSQL(sql);

    res.json(mainModel.ConsultarSQL(sql));
    // res.send(result);

});

// app.get("/login", (req, res) => {
//     const { cedula, password } = req.query;
//     // Aquí iría la lógica de autenticación
//     res.header('Access-Control-Allow-Origin','*');
//     const Login = UserModel.Login(cedula, password);

//     if (!Login) return new Error('Ocurrio un error al solicitar tu información.');
//     if (Login) return res.json({'message' : Login.message})
// });


// app.post("/register", (req, res) => {
//     const { dni, country, firstName, lastName, phone, email, password} = req.body;
//     // Aquí iría la lógica de autenticación
//     res.header('Access-Control-Allow-Origin','*');
    
//     const register = UserModel.Register(dni, country, firstName, lastName, phone, email, password, 1);
//     res.json({'message':register.message})
// });


app.listen(PORT, () => {
    console.log(`API está corriendo en http://localhost:${PORT}`);
});
