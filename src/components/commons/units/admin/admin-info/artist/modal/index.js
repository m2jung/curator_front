import { useEffect } from 'react';
import * as C from './css'
import { useRouter } from 'next/router';

function ModalBasic(props) {
    
    const router = useRouter();

    // 모달 끄기 
    const closeModal = () => {
        props.setModalOpen(false);
    };

    return (
        <C.container>
         <C.close onClick={closeModal}>❌</C.close>
         <C.ModalWrapper>
            <C.Label>* 이름</C.Label>
            <C.Input type="text"></C.Input>
            <C.Label>* 약력</C.Label>
            <C.Input type="text"></C.Input>
            <C.Label>* SNS 주소</C.Label>
            <C.Input type="text"></C.Input>
            <C.Label>* 작가 이미지</C.Label>
            <C.InputFile type="file"></C.InputFile>
            <C.Label>* 판매 작품 수량</C.Label>
            <C.InputNumber type="number"></C.InputNumber>
            <C.Btn>등록하기</C.Btn>
         </C.ModalWrapper>
        </C.container>
    );
}
export default ModalBasic;