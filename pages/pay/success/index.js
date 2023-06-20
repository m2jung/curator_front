import { useEffect } from 'react';
import { useRouter } from 'next/router';

function ModalSuccess(props) {
    
    const router = useRouter();

    const onClickClose = () => {
        window.parent.location.href = 'http://localhost:3000/user/user-info';
    }

    return (
        <>
            <button onClick={onClickClose}>닫기</button>
        </>
    );
}
export default ModalSuccess;