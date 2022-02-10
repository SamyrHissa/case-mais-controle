import { Request, Response } from "express";
import AcoesBusiness from "../../business/acoes/Acoes.Business";
import { AlertAcoes } from "../../services/alertAcoes";

export default class AcoesController {

    constructor(){

    }

    async monitorar (req:Request, res: Response) {
        try {
            const {symbol, minPrice, maxPrice} = req.body;
            const acao = await new AcoesBusiness(new AlertAcoes()).monitora(symbol, minPrice, maxPrice);
            res.status(200).send('Olá')
        } catch (error: any) {
            res.status(error.code).send({ message: error.message });
        }
    }
}