import AcoesBusiness from "../src/business/acoes/Acoes.Business";
import { AlertAcoesMock } from "./mocks/alertAcoesMock";

const AcoesBusinessMock = new AcoesBusiness (
    new AlertAcoesMock()
)

