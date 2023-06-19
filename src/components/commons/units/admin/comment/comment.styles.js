import styled from "@emotion/styled";

// Comment 댓글 달기 
export const CommentWrapper = styled.div`
    width: 960px;
    height: 570px;
    margin: auto;
    display: flex;
    flex-direction:  column;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 10px;
    
`
export const CommentTitle = styled.h3 `
    margin: 10px auto 0 20px;

    color: #1455BD;
`
export const Comment = styled.textarea`
    width: 900px;
    height: 120px;
    margin-top: 20px;
    resize: none;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 3px;
`
export const Submit = styled.button `
    width: 100px;
    height: 35px;
    background-color: white;
    font-size: 15px;
    border: 3px solid #022F9F;
    border-radius: 7px;
    margin: 20px auto;
`
export const Line = styled.div`
    width: 880px;
    padding: 10px;
    border-bottom: 2px dotted rgba(0,0,0,0.3);
    

`
//댓글 테이블 
export const Table = styled.table`
    width: 900px;
    height: 120px;
    border: 1px solid red;
    text-align: left;
    
`
export const ThTitle = styled.th`
    width: 350px;
    border: 1px solid black;
`
export const ThDate = styled.th`
    font-size: 14px;
    font-weight: normal;
    text-align: end;
    border: 1px solid black;
`

export const Tr = styled.tr ``
export const Td = styled.td``





