import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from '@material-ui/core'
import * as C from './board.new.styles'
import { CKEditor } from 'ckeditor4-react'
import React, {useCallback, useState, useEffect} from 'react';
import { useRouter } from 'next/router';
import axios from 'axios'


export default function CommissionBoardNewView(props) {

  
  const router = useRouter();

  const [artistList, setArtistList] = useState();
  const [commContent, setCommContent] = useState();
  const [artistSeq, setArtistSeq] = useState();

  const back = process.env.NEXT_PUBLIC_URI

  // 작가명 get
  useEffect(() => {
    axios.get(`${back}artistAllList`)
      .then((res) => {
        setArtistList(res.data);
      })
  }, [])

  const onChangeContent = useCallback((e) =>{
  console.log(e.editor.getData())
    const currContent = e.editor.getData();
    setCommContent(currContent);
  }, [])

  // onSelect
  const onSelectArtist = (e) => {
    const currArtist = e.target.value;
    setArtistSeq(currArtist);
    console.log(artistSeq)
  }

  // 취소
  const onClickCancel = () => {
    router.push('http://localhost:3000/menu/commission')
  }

  // 전송
  const onClickSubmit = () => {
    const commData = {
      memberSeq: sessionStorage.getItem('userSeq'),
      commTitle: '작품 의뢰 합니다.',
      commContent: commContent,
      artistSeq: artistSeq,
    }

    axios.post(`${back}commissionWrite`, commData)
      .then((res) => {
        console.log(res.data)
        if(res.data == 1) {
          alert('게시글 등록이 완료되었습니다.')
          router.push('http://localhost:3000/menu/commission')
        } else alert('게시물 등록에 실패하였습니다.')
      })

  }

  return (
    <>  
      <C.Wrapper>
       <C.BoardWrapper>
        
       <C.BoardBanner>
          <C.BoardTitle>작품 의뢰</C.BoardTitle>
          <C.BoardSubTitle>
              <C.Link href={'/menu/commission'}>
              <FontAwesomeIcon icon={faArrowLeft}/><C.Span>뒤로가기</C.Span>
              </C.Link> 
          </C.BoardSubTitle>
          
       </C.BoardBanner>

       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.BoardFormTitle>게시글 작성하기</C.BoardFormTitle>
          <C.Line/>
          <C.InputWrapper>
            <C.Label>작가 선택</C.Label>
            <C.CommissionDiv onChange={onSelectArtist} >
              <option value={true}>전체</option> 
              {artistList?.map((el, i) => (
                <option key={i} value={artistList[i].artistSeq}>{artistList[i].artistName}</option>
              ))}
            </C.CommissionDiv>
          </C.InputWrapper>
          <C.InputWrapper>
            <C.Label>작품 의뢰 제목</C.Label>
            <C.CommissionTitle value='작품 의뢰 합니다.'></C.CommissionTitle>
          </C.InputWrapper>
          <C.ContentWrapper>
            <C.Label>작품 의뢰 내용</C.Label>
            {/* <C.CommissionContent placeholder='작품 의뢰 내용을 입력하세요.'> */}
              
              <CKEditor
                onBlur={onChangeContent}
                onInstanceReady={ () => {
                } }
            />
            {/* </C.CommissionContent> */}
          </C.ContentWrapper>


          <C.BtnWrapper>
            <C.CancelBtn onClick={onClickCancel}>취소</C.CancelBtn>
            <C.SubmitBtn onClick={onClickSubmit}>작성하기</C.SubmitBtn>
          </C.BtnWrapper>
        </C.BoardForm>
       </C.BoardFormWrapper>



       </C.BoardWrapper>
      </C.Wrapper>
    </>
  )
}