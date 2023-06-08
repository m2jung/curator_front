import LayoutServiceCenter from '../../../../layout/service-center/service-center.presenter'
import * as C from './board.styles'

export default function CommissionBoardView(props) {

  return (
    <>  
      <C.Wrapper>
       <C.BoardWrapper>
        
       <C.BoardBanner>
          <C.BoardTitle>작품 의뢰 글쓰기</C.BoardTitle>
          <C.BoardSubTitle>

          <LayoutServiceCenter/>
          
          </C.BoardSubTitle>
        </C.BoardBanner>

       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.BoardFormTitle>작품 의뢰 글쓰기</C.BoardFormTitle>
          <C.WriterWrapper>
            <C.WriterName>
             <C.Label>* 이름</C.Label>
             <C.Name type="text"/>
            </C.WriterName>
            <C.WriterPassword>
             <C.Label>* 비밀번호</C.Label>
             <C.Password type="password"></C.Password>
            </C.WriterPassword>
            <C.WriterEmail>
             <C.Label>* 이메일</C.Label>
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
            <C.Label>작품 유형</C.Label>
            <C.CommissionDiv>
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
            <C.Label>파일 첨부</C.Label>
            <C.CommissionFile type="file"></C.CommissionFile>
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