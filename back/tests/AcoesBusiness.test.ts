import AcoesBusiness from "../src/business/acoes/Acoes.Business";
import { ServicesMock } from "./mocks/ServicesMock";

const services = new ServicesMock()
const AcoesBusinessMock = new AcoesBusiness (
    services
)

describe("Testando o monitoramento", ()=>{
    test("valor minimo maior que o máximo", async ()=>{
        expect.assertions(2);
        try {
            await AcoesBusinessMock.monitora('EEEP30', 60, 20)
        } catch (error: any) {
            expect(error.message).toEqual("Preço máximo não pode ser menor que preço mínimo!");
            expect(error.code).toBe(422)
        }
    })
    test("Symbol não encontrado", async ()=>{
        expect.assertions(2);
        try {
            await AcoesBusinessMock.monitora('aaaa', 15, 20)
        } catch (error: any) {
            expect(error.message).toEqual("Symbol não encontrado!");
            expect(error.code).toBe(404)
        }
    })
    test("Price mínimo alcançado para checar se a mensagem foi enviada", async ()=>{
        expect.assertions(1);
        try {
            await AcoesBusinessMock.monitora('EEEP30', 35, 50);
            expect(jest.fn(()=>{services.alertStopMin})).toHaveBeenCalled()
        } catch (error: any) {
        }
    })
    test("Price máximo alcançado para checar se a mensagem foi enviada", async ()=>{
        expect.assertions(1);
        try {
            await AcoesBusinessMock.monitora('EEEP50', 35, 50);
            expect(jest.fn(()=>{services.alertStopMax})).toHaveBeenCalled()
        } catch (error: any) {
        }
    })
})