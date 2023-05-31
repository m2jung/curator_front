import * as C from './BoardList.styles' 

export default function BoardListView(props){
    return (
        <>
        <C.BoardListWrapper>
            <button onClick={props.get}>목록보기</button>
            <div>
                
            </div>
        </C.BoardListWrapper>
        </>
    )
}

