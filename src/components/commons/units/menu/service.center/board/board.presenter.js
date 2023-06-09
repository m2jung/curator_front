import LayoutServiceCenter from '../../../../layout/service-center/service-center.presenter'
import * as C from './board.styles'

export default function ServiceBoardView(props) {

  return (
    <>  
      <C.Wrapper>
       <C.BoardWrapper>
       <C.BoardBanner>
          <C.BoardTitle>1:1 문의하기</C.BoardTitle>
       </C.BoardBanner>

       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.BoardFormTitle>1:1 문의게시판 글쓰기</C.BoardFormTitle>

          <C.Line/>

          <C.InputWrapper>
            <C.Label>문의 유형</C.Label>
            <C.HelpDiv>
              <option disabled="true" selected="true">전체</option>
              <option>결제/구매</option>
              <option>판매/등록</option>
              <option>경매</option>
              <option>상품/배송</option>
              <option>기타</option>
            </C.HelpDiv>
          </C.InputWrapper>
          <C.InputWrapper>
            <C.Label>문의 제목</C.Label>
            <C.HelpTitle placeholder='문의할 내용의 제목을 입력하세요.'></C.HelpTitle>
          </C.InputWrapper>
          <C.ContentWrapper>
            <C.Label>문의 내용</C.Label>
            <C.HelpContent placeholder='문의할 내용을 입력하세요.'></C.HelpContent>
          </C.ContentWrapper>

          <C.BtnWrapper>
            <C.CancelBtn>취소</C.CancelBtn>
            <C.SubmitBtn>작성하기</C.SubmitBtn>
          </C.BtnWrapper>

        </C.BoardForm>
       </C.BoardFormWrapper>

       </C.BoardWrapper>
      </C.Wrapper>
    </>
  )
}