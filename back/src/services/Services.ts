import axios from "axios";
import BaseError from "../error/BaseError";
import { URLWebhook } from "../utils/setup";
import { IMessageAlertStop, IServices } from "./services.Interfaces";

export class Services implements IServices {
    async notificationStopMin(message: IMessageAlertStop): Promise<boolean> {
        try {
            const messageAPI = {
                stocks: message.stocks,
                price: message.price,
                message: `A ação ${message.stocks} atingiu o limite mínimo de ${message.priceEspected}`
            }
            await axios.post(URLWebhook, messageAPI);
            
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
            await axios.post(URLWebhook, messageAPI);
            
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
    async queryService(URL: string, symbol: string): Promise<number | undefined>{
        try {
            const response = await axios.get(URL);
            if((response.data.results[symbol])){
                return response.data.results[symbol].price
            } else {
                return undefined
            }
            
        } catch (error) {
            throw new BaseError("Erro ao consultar dados! Tente novamente mais tarde.", 404);
        }
        
    }
}