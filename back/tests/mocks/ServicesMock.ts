import BaseError from "../../src/error/BaseError";
import { IMessageAlertStop, IServices } from "../../src/services/services.Interfaces";

export class ServicesMock implements IServices {
    async alertStopMin(message: IMessageAlertStop): Promise<boolean>{
        return true
    };
    async alertStopMax(message: IMessageAlertStop): Promise<boolean>{
        return true
    };
    async queryService(URL: string, symbol: string): Promise<number>{
        console.log("symbol", symbol);
        
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