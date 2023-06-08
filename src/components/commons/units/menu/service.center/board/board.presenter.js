import * as C from './board.styles'

export default function BoardView(props) {

  return (
    <>  
      <C.Wrapper>
       <C.BoardWrapper>
       <C.BoardBanner>
          <C.BoardTitle>1:1 문의하기</C.BoardTitle>
          <C.BoardSubTitle>Q&A</C.BoardSubTitle>
        </C.BoardBanner>

       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.BoardFormTitle>1:1 문의게시판 글쓰기</C.BoardFormTitle>
          <C.WriterWrapper>
            <C.WriterName>
             <C.Label>이름</C.Label>
             <C.Name type="text"/>
            </C.WriterName>
            <C.WriterPassword>
             <C.Label>비밀번호</C.Label>
             <C.Password type="password"></C.Password>
            </C.WriterPassword>
            <C.WriterEmail>
             <C.Label>이메일</C.Label>
             <C.Email></C.Email>&nbsp;@&nbsp;
             <C.EmailSelect>
              <option disabled="true" selected="true">이메일을 선택하세요.</option>
              <option>naver.com</option>
              <option>hanmail.net</option>
              <option>gmail.com</option>
            </C.EmailSelect>
            </C.WriterEmail>
          </C.WriterWrapper>

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