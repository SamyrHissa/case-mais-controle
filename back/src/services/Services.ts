import axios from "axios";
import BaseError from "../error/BaseError";
import { IMessageAlertStop, IServices } from "./services.Interfaces";

export class Services implements IServices {
    async alertStopMin(message: IMessageAlertStop): Promise<boolean> {
        try {
            const messageAPI = {
                stocks: message.stocks,
                price: message.price,
                message: `A ação ${message.stocks} atingiu o limite mínimo de ${message.priceEspected}`
            }
            console.log("Post na API", messageAPI);
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async alertStopMax(message: IMessageAlertStop): Promise<boolean> {
        try {
            const messageAPI = {
                stocks: message.stocks,
                price: message.price,
                message: `A ação ${message.stocks} atingiu o limite máximo de ${message.priceEspected}`
            }
            console.log("Post na API", messageAPI);
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async queryService(URL: string, symbol: string): Promise<number>{
        try {
            const response = await axios.get(
                `https://api.hgbrasil.com/finance/stock_price?key=${process.env.ACCESS_KEY_HGBRASIL}&symbol=${symbol}`
                    );    
            if((response.data.results.AAAA.error)){
                throw new BaseError("Symbol não encontrado!", 404);
            }
            return response.data.results[symbol].price;
        } catch (error) {
            throw new BaseError("Erro ao consultar dados! Tente novamente mais tarde.", 404);
        }
        
    }
}