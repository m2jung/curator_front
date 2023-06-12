import { useState } from 'react'
import axios from 'axios';
import LayoutServiceCenter from '../../../../layout/service-center/service-center.presenter'
import * as C from './board.styles'
import { useRouter } from 'next/router';

export default function ServiceBoardView(props) {

  const [cat, setCat] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const onChangeCat = (event) => {
    setCat(event.target.value)
    console.log(cat);
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
    console.log(title)
  }

  const onChangeContent = (event) => {
    setContent(event.target.value)
    console.log(content)
  }

    // 취소
    const onClickCancel = () => {
      router.push('http://localhost:3000/menu/service.center')
    }
  
    // 전송
    const onClickSubmit = () => {
      const serviceData = {
        memberSeq: sessionStorage.getItem('userSeq'),
        helpTitle: title,
        helpContent: content,
      }
  
      axios.post('http://localhost:8080/root/helpWrite', serviceData)
        .then((res) => {
          if(res.data == 1) {
            alert('게시글 등록이 완료되었습니다.')
            router.push('http://localhost:3000/menu/service.center')
          } else alert('게시물 등록에 실패하였습니다.')
        })
  
    }

  return (
    <>  
      <C.Wrapper>
       <C.BoardWrapper>
       <C.BoardBanner>
          <C.BoardTitle>1:1 문의하기</C.BoardTitle>
          <C.BoardSubTitle>
            <LayoutServiceCenter/>
          </C.BoardSubTitle>
       </C.BoardBanner>

       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.BoardFormTitle>1:1 문의게시판 글쓰기</C.BoardFormTitle>

          <C.Line/>

          <C.InputWrapper>
            <C.Label>문의 유형</C.Label>
            <C.HelpDiv>
              <option onChange={onChangeCat} selected={true}>전체</option>
              <option value={'결제/구매'}>결제/구매</option>
              <option value={'판매/등록'}>판매/등록</option>
              <option value={'경매'}>경매</option>
              <option value={'상품/배송'}>상품/배송</option>
              <option value={'기타'}>기타</option>
            </C.HelpDiv>
          </C.InputWrapper>
          <C.InputWrapper>
            <C.Label>문의 제목</C.Label>
            <C.HelpTitle onChange={onChangeTitle} placeholder='문의할 내용의 제목을 입력하세요.'></C.HelpTitle>
          </C.InputWrapper>
          <C.ContentWrapper>
            <C.Label>문의 내용</C.Label>
            <C.HelpContent onChange={onChangeContent} placeholder='문의할 내용을 입력하세요.'></C.HelpContent>
          </C.ContentWrapper>

          <C.BtnWrapper>
            <C.CancelBtn type='button' onClick={onClickCancel}>취소</C.CancelBtn>
            <C.SubmitBtn type='button' onClick={onClickSubmit}>작성하기</C.SubmitBtn>
          </C.BtnWrapper>

        </C.BoardForm>
       </C.BoardFormWrapper>

       </C.BoardWrapper>
      </C.Wrapper>
    </>
  )
}