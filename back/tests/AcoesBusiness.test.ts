import AcoesBusiness from "../src/business/acoes/Acoes.Business";
import { AlertAcoesMock } from "./mocks/alertAcoesMock";

const AcoesBusinessMock = new AcoesBusiness (
    new AlertAcoesMock()
)

describe("Testando o endpoit", ()=>{
    test("valor minimo maior que o máximo", async ()=>{
        expect.assertions(2);
        try {
            await AcoesBusinessMock.monitora('EEEP', 60, 20)
        } catch (error: any) {
            expect(error.message).toEqual("Preço máximo não pode ser menor que preço mínimo!");
            expect(error.code).toBe(422)
        }
    })
})