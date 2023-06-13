import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import * as C from './board.view.styles'
import Router, { useRouter } from 'next/router'


export default function ServiceBoardView(props) {

  const router = useRouter();

  const onClickEdit = () => {
    router.push('http://localhost:3000/menu/service.center/board/edit');
  }

  const onClickList = () => {
    router.push('http://localhost:3000/menu/service.center');
  }

  return (
    <>  
      <C.Wrapper>
       <C.BoardWrapper>
        
       <C.BoardBanner>
          <C.BoardTitle>1:1 문의하기</C.BoardTitle>
          <C.BoardSubTitle>
              <C.Link href={'/menu/service.center'}>
                <FontAwesomeIcon icon={faArrowLeft}/><C.Span>뒤로가기</C.Span>
              </C.Link> 
          </C.BoardSubTitle>
       </C.BoardBanner>
       <C.BoardFormWrapper>

        <C.BoardForm>
          <C.BoardFormTitle>게시글 확인하기</C.BoardFormTitle>
          <C.Line/>
          <C.InputWrapper>
            <C.Label>문의 유형</C.Label>
            <C.CommissionDiv>
            <option selected={true}>전체</option>
              <option value={'결제/구매'}>결제/구매</option>
              <option value={'판매/등록'}>판매/등록</option>
              <option value={'경매'}>경매</option>
              <option value={'상품/배송'}>상품/배송</option>
              <option value={'기타'}>기타</option>
            </C.CommissionDiv>
          </C.InputWrapper>
          <C.InputWrapper>
            <C.Label>문의한 제목</C.Label>
            <C.CommissionTitle value='작품 의뢰 합니다.'></C.CommissionTitle>
          </C.InputWrapper>
          <C.ContentWrapper>
            <C.Label>문의한 내용</C.Label>
            <C.CommissionContent placeholder='작품 의뢰 내용을 입력하세요.'></C.CommissionContent>
          </C.ContentWrapper>
          <C.BtnWrapper>
            <C.ListBtn onClick={onClickList}>목록보기</C.ListBtn>
            <C.EditBtn onClick={onClickEdit}>수정하기</C.EditBtn>
          </C.BtnWrapper>
        </C.BoardForm>
       </C.BoardFormWrapper>



       </C.BoardWrapper>
      </C.Wrapper>
    </>
  )
}