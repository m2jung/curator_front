import * as C from './board.edit.styles'
import axios from 'axios'
import React, {useCallback, useState, useEffect} from 'react';
import { useRouter } from 'next/router';

export default function CommissionBoardEdit(props) {
  
  const router = useRouter();

  const [artistList, setArtistList] = useState();
  const [commContent, setCommContent] = useState();
  const [artistSeq, setArtistSeq] = useState();

  const back = process.env.NEXT_PUBLIC_URI_NAS

  // 작가명 get
  useEffect(() => {
    axios.get(`${back}artistAllList`)
      .then((res) => {
        setArtistList(res.data);
      })
  }, [])

  // onChange
  const onChangeContent = useCallback((e) =>{
    const currContent = e.target.value;
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
          <C.BoardTitle>작품 의뢰 수정하기</C.BoardTitle>
       </C.BoardBanner>

       <C.BoardFormWrapper>
        <C.BoardForm>
          <C.BoardFormTitle>작품 의뢰 글쓰기</C.BoardFormTitle>
          <C.Line/>

          <C.InputWrapper>
            <C.Label>작가 선택</C.Label>
            <C.CommissionDiv onChange={onSelectArtist} >
              <option value={true}>전체</option> 
              {artistList?.map((el, i) => (
                <option value={artistList[i].artistSeq}>{artistList[i].artistName}</option>
              ))}
            </C.CommissionDiv>
          </C.InputWrapper>
          <C.InputWrapper>
            <C.Label>작품 의뢰 제목</C.Label>
            <C.CommissionTitle value='작품 의뢰 합니다.'></C.CommissionTitle>
          </C.InputWrapper>
          <C.ContentWrapper>
            <C.Label>작품 의뢰 내용</C.Label>
            <C.CommissionContent onChange={onChangeContent} placeholder='작품 의뢰 내용을 입력하세요.'></C.CommissionContent>
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