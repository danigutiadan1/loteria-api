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
        conn.destroy()
      } catch (error) {
        console.log(error);
      }
    
};

export const register= async (req, res) =>{
  
try {
  const conn = await pool.getConnection();

  const query = "INSERT INTO users (name, surname, dni, password, email) VALUES (?, ?, ?, ?, ?);";

  const response=  await conn.query(query, [req.body.name, req.body.surname, req.body.dni, req.body.password, req.body.email]);
  res.status(201).json(response)
  conn.destroy()
} catch (error) {
  console.log(error)
  
}

};

export const logout= (req, res) =>{};