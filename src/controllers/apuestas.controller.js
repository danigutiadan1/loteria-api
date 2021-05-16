import pool from "../database";

export const getApuestas = async (req, res) => {
  try {
    //Get the connection
    const conn = await pool.getConnection();
    //Crea una nueva consulta
    const query = "SELECT * FROM apuestas";
    //Se ejecuta la consulta
    const productos = await conn.query(query);

    //Respuesta al cliente
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
  }
};

export const getApuestasByUserId = async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const query =
      "SELECT combinacion, sorteo_date, created_date, apuesta_id FROM apuestas WHERE user_id=?";
    const result = await conn.query(query, req.params.userId);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export const getApuestaById = async (req, res) => {
  try {
    const conn = await pool.getConnection();
    const query =
      "SELECT combinacion, sorteo_date FROM apuestas WHERE user_id=? && apuesta_id=?";
    const result = await conn.query(query, [
      req.params.userId,
      req.params.apuestaId,
    ]);
  
      res.status(200).json(result);
  } catch (error) {
    console.log(error);
  }
};

export const createApuesta = async (req, res) => {
  const { user_id, combinacion, sorteo_date } = req.body;
  try {
    const conn = await pool.getConnection();
    //Crea una nueva consulta
    const query =
      "INSERT INTO apuestas (user_id, combinacion, sorteo_date) VALUES (?,?,?)";
    //Se ejecuta la consulta
    const result = await conn.query(query,[req.params.userId, combinacion, sorteo_date]);
    res.status(201).json(result);
  } catch (error) {
    console.log(error);
  }

  //Get the connection
};

export const deleteApuestaById = (req, res) => {};
