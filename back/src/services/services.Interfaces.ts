
export interface IMessageAlertStop {
    stocks: string,
    price: number,
    priceEspected: number
}

export interface IServices {
    alertStopMin(message: IMessageAlertStop): Promise<boolean>;
    alertStopMax(message: IMessageAlertStop): Promise<boolean>;
    queryService(URL: string, symbol: string): Promise<number>;
}