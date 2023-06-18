import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import * as C from './board.new.styles'
import { CKEditor } from 'ckeditor4-react'
import { useState } from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';

export default function ServiceBoardNewView(props) {

  const [cat, setCat] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  const back = process.env.NEXT_PUBLIC_URI

  const onChangeCat = (event) => {
    setCat(event.target.value)
    console.log(cat);
  }

  const onChangeTitle = (event) => {
    setTitle(event.target.value)
    console.log(title)
  }

  const onChangeContent = (e) => {
    console.log(e)
    setContent(e.target.value)
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
  
      axios.post(`${back}helpWrite`, serviceData)
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
              <C.Link href={'/menu/service.center'}>
              <FontAwesomeIcon icon={faArrowLeft}/><C.Span>뒤로가기</C.Span>
              </C.Link> 
          </C.BoardSubTitle>
       </C.BoardBanner>

       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.BoardFormTitle>게시글 작성하기</C.BoardFormTitle>
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
            <CKEditor
                initData=""
                onChange={onChangeContent}
                onInstanceReady={ () => {
                } }
            />
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