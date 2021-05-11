
import express from 'express';
import morgan from 'morgan';
import ApuestasRoutes from './routes/apuestas.routes';
import AuthRoutes from './routes/auth.routes';

const app = express();


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
//const pool = require("./database");


app.get('/loteria-api', (req, res) =>{
  res.sendFile('index.html', {root: 'src'});
});

app.use('/loteria-api/apuestas',ApuestasRoutes);
app.use('/loteria-api/auth', AuthRoutes);



export default app;
