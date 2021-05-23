import { Router } from 'express';
import * as apuestasController from '../controllers/apuestas.controller';
const router= Router()


router.get("/", apuestasController.getApuestas)
router.get("/:userId", apuestasController.getApuestasByUserId)
router.get("/:userId/:apuestaId", apuestasController.getApuestaById);
router.post("/:userId", apuestasController.createApuesta)

export default router;
