import { useEffect } from 'react';
import * as C from './index.css'
import { useRouter } from 'next/router';

function ModalBasic(props) {
    
    const router = useRouter();

    useEffect(() => {
        
    })



    // 모달 끄기 
    const closeModal = () => {
        props.setModalOpen(false);
    };

    return (
        <C.container src={props.kakao}>
            <C.close onClick={closeModal}>
                X
            </C.close>
        </C.container>
    );
}
export default ModalBasic;