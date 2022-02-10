import { iAcoesBusinessMetodos, iAcoesBusinessMetodosMonitora } from "../Acoes.Business.interfaces";
import AcoesBusinessMetodoMonitora from "./AcoesBusinessMetodoMonitora";

export default class AcoesBusinessMetodos implements iAcoesBusinessMetodos {
    monitora: iAcoesBusinessMetodosMonitora = new AcoesBusinessMetodoMonitora();
}