import * as C from './board.edit.styles'

export default function ServiceBoardEditView(props) {

  return (
    <>  
      <C.Wrapper>
       <C.BoardWrapper>
        
       <C.BoardBanner>
          <C.BoardTitle>작품 의뢰 글쓰기</C.BoardTitle>
       </C.BoardBanner>

       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.BoardFormTitle>작품 의뢰 글쓰기</C.BoardFormTitle>
          <C.Line/>

          <C.InputWrapper>
            <C.Label>작가 선택</C.Label>
            <C.CommissionDiv>
              {/* 옵션은 Map으로 구성 예장 */}
              <option disabled="true" selected="true">전체</option>
              <option>회화</option>
              <option>조소</option>
              <option>건축/공예</option>
              <option>조각/판화</option>
            </C.CommissionDiv>
          </C.InputWrapper>
          <C.InputWrapper>
            <C.Label>작품 의뢰 제목</C.Label>
            <C.CommissionTitle value='작품 의뢰 합니다.'></C.CommissionTitle>
          </C.InputWrapper>
          <C.ContentWrapper>
            <C.Label>작품 의뢰 내용</C.Label>
            <C.CommissionContent placeholder='작품 의뢰 내용을 입력하세요.'></C.CommissionContent>
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