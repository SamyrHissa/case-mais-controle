import axios from "axios";
import BaseError from "../error/BaseError";
import { IMessageAlertStop, IServices } from "./services.Interfaces";

export class Services implements IServices {
    async notificationStopMin(message: IMessageAlertStop): Promise<boolean> {
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
    async notificationStopMax(message: IMessageAlertStop): Promise<boolean> {
        try {
            const messageAPI = {
                stocks: message.stocks,
                price: message.price,
                message: `A ação ${message.stocks} atingiu o limite máximo de ${message.priceEspected}`
            }
            const response = await axios.get(
                `https://webhook.site/01e275de-d073-460b-8fa0-d87087f9f6c2`);
                console.log('response', response);
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async queryService(URL: string, symbol: string): Promise<number>{
        try {
            const response = await axios.get(URL);
            // if((response.data.results.AAAA.error)){
                // throw new BaseError("Symbol não encontrado!", 404);
            // }
            console.log("response.data.results[symbol].price", response);
            
            return response.data.results[symbol].price;
        } catch (error) {
            throw new BaseError("Erro ao consultar dados! Tente novamente mais tarde.", 404);
        }
        
    }
}