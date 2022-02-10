import { iAcoesBusiness, iAcoesBusinessMetodos } from "./Acoes.Business.interfaces";
import AcoesBusinessMetodos from "./Metodos/AcoesBusinessMetodos";

export default class AcoesBusiness implements iAcoesBusiness {
    constructor(){}
    metodos: iAcoesBusinessMetodos = new AcoesBusinessMetodos;
}