import axios from 'axios';
import * as C from '../../../styles/boards/boardsList-emotion';
import { useState } from 'react';

// 문의 게시판 리스트 홈페이지 
export default function BoardListView() {
    // const [ data, setData ] = useState("")

    const onClickList = async() => {
        const BOARD_LIST = await axios.get('https://koreanjson.com/posts')
        console.log(BOARD_LIST.data);
        // setData(BOARD_LIST)
    }

    return (
        <C.Wrapper>
        <C.BoardListWrapper>
        <button onClick={onClickList}>목록보기</button>
        <div>
          {/* Map */}
        </div>
        </C.BoardListWrapper>
        </C.Wrapper>
    )
    
}