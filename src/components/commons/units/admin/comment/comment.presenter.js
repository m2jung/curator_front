import * as C from './comment.styles'

export default function CommentView(){

    return(
        <C.CommentWrapper>
         <C.CommentTitle>답변 달기</C.CommentTitle>
         <C.Table>
            <thead>
            </thead>
            <tbody>
            <C.Tr>
                <C.ThTitle>답변제목들어갈 곳 </C.ThTitle><C.ThDate>답변작성날짜</C.ThDate>
            </C.Tr>
            <C.Tr>
                <C.Td colSpan={2}>답변내용</C.Td>
            </C.Tr>
            </tbody>
         </C.Table>
         <C.Line/>

         <C.Comment></C.Comment>
         <C.Submit>확인</C.Submit>
        </C.CommentWrapper>
    )
}