import pool from "../database";

export const login= async (req, res) =>{

    try {
        //Get the connection
        const conn = await pool.getConnection();
        //Crea una nueva consulta
        const query = "SELECT name, surname, email, id FROM users where email=? && password=?";
        //Se ejecuta la consulta
        const response = await conn.query(query, [req.body.email, req.body.password]);
    
        //Respuesta al cliente
        res.status(200).json(response);
      } catch (error) {
        console.log(error);
      }
    
};

export const register= (req, res) =>{};

export const logout= (req, res) =>{};