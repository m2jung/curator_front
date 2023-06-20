import { useEffect } from 'react';
import { useRouter } from 'next/router';

function ModalFail(props) {
    
    const router = useRouter();

    const onClickClose = () => {
        window.parent.location.href = 'http://localhost:3000/';
    }

    return (
        <>
            <button onClick={onClickClose}>닫기</button>
        </>
    );
}
export default ModalFail;