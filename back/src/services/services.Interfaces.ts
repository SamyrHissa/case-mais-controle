
export interface IMessageAlertStop {
    stocks: string,
    price: number,
    priceEspected: number
}

export interface IServices {
    notificationStopMin(message: IMessageAlertStop): Promise<boolean>;
    notificationStopMax(message: IMessageAlertStop): Promise<boolean>;
    queryService(URL: string, symbol: string): Promise<number>;
}