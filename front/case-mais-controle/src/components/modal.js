import styled from 'styled-components';

const ModalBackdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(5px);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalFrame = styled.div`
    background-color: white;
    height: 300px;
    width: 300px;
`;

const ModalHeader = styled.div`
    text-align: end;
    padding: 10px;
    cursor: pointer;
`;

const ModalContent = styled.div``

export const Modal = ({ children, onClose }) => {

    const onClickClose = (event) => {
        if(event.target.id === 'outside' || event.target.id === 'close-button') {
            onClose();
        }
    }

    return (
        <ModalBackdrop style={{border: "solid 1px black"}} id="outside" onClick={onClickClose}>
            <ModalFrame>
                <ModalHeader>
                <span id="close-button" onClick={onClickClose}>X</span>
                </ModalHeader>
                <ModalContent>
                    {children}
                </ModalContent>
            </ModalFrame>
        </ModalBackdrop>
    )
}