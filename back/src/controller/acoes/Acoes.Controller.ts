import { Request, Response } from "express";
import AcoesBusiness from "../../business/acoes/Acoes.Business";
import { Services } from "../../services/Services";

export default class AcoesController {

    constructor(){}

    async monitorar (req:Request, res: Response) {
        try {
            const {symbol, minPrice, maxPrice} = req.body;
            const acao = await new AcoesBusiness(new Services()).monitora(symbol, minPrice, maxPrice);
            res.status(200).send('Monitoramento ativado com sucesso!')
        } catch (error: any) {
            res.status(error.code).send({ message: error.message });
        }
    }
}