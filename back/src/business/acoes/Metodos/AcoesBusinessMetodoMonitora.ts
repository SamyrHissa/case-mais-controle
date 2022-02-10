import { iAcoesBusinessMetodos, iAcoesBusinessMetodosMonitora } from "../Acoes.Business.interfaces";
import AcoesBusinessMetodos from "./AcoesBusinessMetodos";

export default class AcoesBusinessMetodoMonitora implements iAcoesBusinessMetodosMonitora {
    private symbol: string;
    private minPrice: number;
    private maxPrice: number;
    constructor(){
        this.symbol = ''
        this.minPrice = 0
        this.maxPrice = 0
    }
    setSymbol = (value: string):iAcoesBusinessMetodosMonitora => {
        this.symbol = value;
        console.log("aqui vai o monitoramento", this.symbol)
        return new AcoesBusinessMetodoMonitora
    };
    setMinPrice = (value: number):iAcoesBusinessMetodosMonitora => {
        this.minPrice = value
        console.log("aqui vai o monitoramento", this.symbol, this.minPrice)
        return new AcoesBusinessMetodoMonitora
    };
    setMaxPrice = (value: number):iAcoesBusinessMetodosMonitora => {
        this.maxPrice = value
        return new AcoesBusinessMetodoMonitora
    };
    end = ():iAcoesBusinessMetodos=> {
        console.log("aqui vai o monitoramento", this.symbol, this.minPrice, this.maxPrice)
        return new AcoesBusinessMetodos()
    };
}