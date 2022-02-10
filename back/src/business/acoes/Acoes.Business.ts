import axios from "axios";
import { IAlertAcoes } from "../../services/services.Interfaces";
import { acoesInterface } from "./Acoes.Business.Iterfaces";
import dotenv from "dotenv";
import BaseError from "../../error/BaseError";

dotenv.config();

export default class AcoesBusiness implements acoesInterface {
    constructor(
        private alertAcoes: IAlertAcoes
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
                let response: any = await axios.get(
                    `https://api.hgbrasil.com/finance/stock_price?key=${process.env.ACCESS_KEY_HGBRASIL}&symbol=${symbol}`
                        );
                    let price = response.data.results[symbol].price;
                    if(price >= maxPrice){
                        this.alertAcoes.alertStopMax({
                            stocks: symbol,
                            price,
                            priceEspected: maxPrice
                        });
                        stop = true;
                    } else if(price <= minPrice) {
                        this.alertAcoes.alertStopMin({
                            stocks: symbol,
                            price,
                            priceEspected: minPrice
                        })
                        stop = true;
                    } else {
                        console.log("passou!");
                        setInterval(()=>{
                            for(let second = 0; second < 3; second++){
                                return true
                            }
                        }, 1000)
                    }
            }
            
    };
}