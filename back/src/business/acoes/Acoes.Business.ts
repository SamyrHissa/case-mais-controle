
import { IServices } from "../../services/services.Interfaces";
import { acoesInterface } from "./Acoes.Business.Iterfaces";
import dotenv from "dotenv";
import BaseError from "../../error/BaseError";
import { requestTime } from "../../utils/setup";
import { skipPartiallyEmittedExpressions } from "typescript";
import { sleep } from "../../utils/functions";

dotenv.config();

export default class AcoesBusiness implements acoesInterface {
    constructor(
        private services: IServices
    ){}
    async monitora (symbol: string, minPrice: number, maxPrice: number) {
        const minPriceValid: number = Number(minPrice);
        const maxPriceValid: number = Number(maxPrice);
        let stop = false;
        
        if((!symbol) || (isNaN(minPriceValid)) || (isNaN(maxPriceValid))){
            throw new BaseError("Parâmentros no body ausentes ou com erros!", 422);
        }
        
        if (maxPriceValid < minPriceValid){
            throw new BaseError("Preço máximo não pode ser menor que preço mínimo!", 422);
        }
        while(!stop){
            let price: undefined | number = await this.services
                .queryService(`https://api.hgbrasil.com/finance/stock_price?key=${process.env.ACCESS_KEY_HGBRASIL}&symbol=${symbol}`, symbol);
            
            if(!price){
                throw new BaseError("Symbol não encontrado!", 404);
            }
            
            if(price >= maxPrice){
                stop = await this.services.notificationStopMax({
                    stocks: symbol,
                    price,
                    priceEspected: maxPrice
                });
                
            } else if(price <= minPrice) {
                stop = await this.services.notificationStopMin({
                    stocks: symbol,
                    price,
                    priceEspected: minPrice
                })
            }

            while((minPrice < price) && (price  < maxPrice) && !stop){
                sleep(1000 * requestTime * 60)
                price = await this.services
                .queryService(`https://api.hgbrasil.com/finance/stock_price?key=${process.env.ACCESS_KEY_HGBRASIL}&symbol=${symbol}`, symbol);
                if(!price){
                    throw new BaseError("Symbol não encontrado!", 404);
                }
                console.log('price', price);
                
            }
        }
            
    };
}