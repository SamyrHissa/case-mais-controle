export interface acoesInterface {
    monitora(symbol: string, minPrice: number, maxPrime: number): Promise<void>;
}