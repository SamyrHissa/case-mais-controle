export interface iAcoesBusiness {
    metodos: iAcoesBusinessMetodos;
}

export interface iAcoesBusinessMetodos {
    monitora: iAcoesBusinessMetodosMonitora;
}

export interface iAcoesBusinessMetodosMonitora {
    setSymbol(value: string) : iAcoesBusinessMetodosMonitora;
    setMinPrice(value: number) : iAcoesBusinessMetodosMonitora;
    setMaxPrice(value: number) : iAcoesBusinessMetodosMonitora;
    end() : iAcoesBusinessMetodos;
        // monitora(symbol:string, minPrice: number, maxPrice:number): iAcoesBusinessMetodosMonitora;
    // end(): IAcoesBusinessMetodos;
}