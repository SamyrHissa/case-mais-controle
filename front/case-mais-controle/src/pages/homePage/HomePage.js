import { useState } from "react";
import { HomePageContainer, InputsCotainer } from "./Styles";
import axios from 'axios'
import { Modal } from "../../components/modal";
import { URLServidor } from "../setup/setup";

export const HomePage = () => {
    const [symbol, setSymbol] = useState();
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [messageErro, setMessageErro] = useState('')

    const onChangeSymbol = (e) => {
        setSymbol(e.target.value)
    }

    const onChangeMinPrice = (e) => {
        setMinPrice(e.target.value)
    }

    const onChangeMaxPrice = (e) => {
        setMaxPrice(e.target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
        const newRequest = { 
            "symbol": symbol,
            "minPrice": minPrice,
            "maxPrice": maxPrice
        };
        axios.post(URLServidor, newRequest)
        .then((res)=>{
            setModalVisible(true);
            setMessageErro(res.data)
        })
        .catch((err)=>{
            setModalVisible(true);
            setMessageErro(err.response.data.message)
        })
    } 

    return (
        <HomePageContainer onSubmit={onSubmitForm}>
            <InputsCotainer>
                <div className="form-group">
                    <label>Simbolo da Ação</label>
                    <input  type="text" className="form-control" id="symbol" 
                            placeholder="Symbol" 
                            value={symbol}
                            onChange={onChangeSymbol} />
                </div>
            </InputsCotainer>
            <InputsCotainer>
                <div className="form-group">
                    <label>Valor mínimo da Ação</label>
                    <input  type="text" className="form-control" id="minPrice" 
                            placeholder="Valor mínimo da Ação" 
                            value={minPrice.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                            onChange={onChangeMinPrice} />
                </div>
                
            </InputsCotainer>
            <InputsCotainer>
            <div className="form-group">
                    <label>Valor máximo da Ação</label>
                    <input  type="text" className="form-control" id="maxPrice" 
                            placeholder="Valor máximo da Ação" 
                            value={maxPrice.toLocaleString('pt-BR', {minimumFractionDigits: 2})}
                            onChange={onChangeMaxPrice} />
                </div>
            </InputsCotainer>
            <button type="submit" className="btn btn-primary">Enviar</button>
            {modalVisible && <Modal onClose={() => { setModalVisible(false) }}>
                                <h5 >{messageErro}</h5>
                            </Modal>}
        </HomePageContainer>
    )
}