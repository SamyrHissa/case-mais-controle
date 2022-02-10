import { 
        IAlertAcoes,
        IMessageAlertStop
    } from "./services.Interfaces";

export class AlertAcoes implements IAlertAcoes {
    async alertStopMin(message: IMessageAlertStop): Promise<void> {
        try {
            const messageAPI = {
                stocks: message.stocks,
                price: message.price,
                message: `A ação ${message.stocks} atingiu o limite mínimo de ${message.priceEspected}`
            }
            console.log("Post na API", messageAPI);
        } catch (error) {
            console.log(error);
        }
    }
   async alertStopMax(message: IMessageAlertStop): Promise<void> {
        try {
            const messageAPI = {
                stocks: message.stocks,
                price: message.price,
                message: `A ação ${message.stocks} atingiu o limite máximo de ${message.priceEspected}`
            }
            console.log("Post na API", messageAPI);
        } catch (error) {
            console.log(error);
        }
}
}