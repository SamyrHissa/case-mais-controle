import BaseError from "../../src/error/BaseError";
import { IMessageAlertStop, IServices } from "../../src/services/services.Interfaces";

export class ServicesMock implements IServices {
    async notificationStopMin(message: IMessageAlertStop): Promise<boolean>{
        return true
    };
    async notificationStopMax(message: IMessageAlertStop): Promise<boolean>{
        return true
    };
    async queryService(URL: string, symbol: string): Promise<number>{
        switch (symbol) {
            case "EEEP30": 
                return 30;
          
            case "EEEP50": 
                return 50;
         
            default: 
                throw new BaseError("Symbol não encontrado!", 404);
        }
    };
}