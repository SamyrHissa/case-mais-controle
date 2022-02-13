import express from "express";
import AcoesController from "../controller/acoes/Acoes.Controller";


export const acoesRouter = express.Router();
const acoesController = new AcoesController();

acoesRouter.post("/monitorar", acoesController.monitorar);