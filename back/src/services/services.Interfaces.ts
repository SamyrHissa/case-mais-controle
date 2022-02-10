
export interface IMessageAlertStop {
    stocks: string,
    price: number,
    priceEspected: number
}
export interface IAlertAcoes {
    alertStopMin(message: IMessageAlertStop): Promise<void>;
    alertStopMax(message: IMessageAlertStop): Promise<void>;
}