import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import * as C from './artist.styles'
import { useEffect, useState } from 'react'


export default function ArtistView(props) {

  const [isOpen , setIsOpen] = useState(160); //초기값 false
  
  useEffect(()=>{
    setIsOpen(document.getElementById('toggle'));
  }, [])

  const toggleColumn = () => {  
    isOpen.style.height = '700px';
  }
  const toggleLeave = () => {
    isOpen.style.height = '160px';
  }

  return (
    <>  
      <C.Wrapper>
        <C.ArtistBanner>
         <C.ArtistTitle>작가 정보</C.ArtistTitle>
         <C.ArtistSubTitle>Artist Profile</C.ArtistSubTitle>
        </C.ArtistBanner>
 
        <C.ArtistWrapper>         
          <C.ArtistSearch>
            <C.SearchInput type="input" placeholder='작가를 검색하세요.'></C.SearchInput>
            <C.Icon><FontAwesomeIcon icon={faMagnifyingGlass}/></C.Icon>
          </C.ArtistSearch>
       
          <C.ArtistColumn id='toggle' onMouseEnter={toggleColumn} onMouseLeave={toggleLeave} style={{width:1100,height:isOpen}}>
           <C.ProfileSection>
            <C.ProfileImage></C.ProfileImage>
            <C.Profile>
              <C.Name>이지은</C.Name> 
              <C.Email>119755@naver.com</C.Email>
              <C.Sns><C.Image/>M2jung2</C.Sns>
              {/* icon color: #E44C7E; */}
              <C.Heart><FontAwesomeIcon icon={faHeart} color='gray'/></C.Heart>
            </C.Profile> 
            <C.ProfileInfo>
              <C.Following>Following <span>2844</span></C.Following>
              <C.Sales>Total Sales <span>29</span></C.Sales>
              <C.Intro>
                현대인의 심리적 불안상태를 색과 공간적 조형언어로 표현하는 작가 이지은은 판타지하고 생동감 넘치는 에너지와 감성적 이야기를 보여준다. 기억을 기반으로 공간을 창조하며 감성과 생각을 효과적으로 전달한다. 현대사회를 살아가는 누구나 순간순간 느낄 수 있는 생존과 생계에 대한 위협, 트라우마적 기억, 길을 잃은 감각 등의 다양한 감정들이 복합적으로 작용한다. 
              {/* <C.ProfileBtn>작가 상세보기</C.ProfileBtn> */}
              </C.Intro>
            </C.ProfileInfo>
           </C.ProfileSection>
           <C.Line/> 
           <C.ProfileSection>
            <C.History>
              <C.HistoryTitleLeft>Record</C.HistoryTitleLeft>
              <C.Record>
              2022 &nbsp; 특별기획전 《LILAC》, 서소문성지역사박물관, 서울 <br/>
              2019 &nbsp; The Love Poem 인사아트센터, 서울<br/>
              2018 &nbsp; 이지은 개인전 밤편지, 백상예술갤러리 서울<br/>
              2017 &nbsp; Pallete: I am 25, 가나 컨템포러리, 서울<br/>
              </C.Record>
            </C.History>
            <C.History>
              <C.HistoryTitleRight>대표작품</C.HistoryTitleRight>
              <C.Record>
              Modern Times (2023) <br/>
              너의 의미 (2018)<br/>
              나의 옛날 이야기 (2018)<br/>
              ZeZe (2016)<br/>
              </C.Record>
            </C.History>
           </C.ProfileSection>
          {/* ====== 상세보기 클릭시 나오는 이력 ====== */}
          {/* 그림 클릭시 등록된 작품 판매 게시글로 이동 */}
            <C.Work>
              <C.WorkImage>
                <C.WorkTitle>Modern Times</C.WorkTitle>
              </C.WorkImage>
              <C.WorkImage>
                <C.WorkTitle>너의 의미</C.WorkTitle>
              </C.WorkImage>
              <C.WorkImage>
                <C.WorkTitle>나의 옛날 이야기</C.WorkTitle>
              </C.WorkImage>
              <C.WorkImage>
                <C.WorkTitle>ZeZe</C.WorkTitle>
              </C.WorkImage>  
            </C.Work>
          </C.ArtistColumn>
          <C.ArtistColumn onMouseEnter={toggleColumn} onMouseLeave={toggleLeave}style={{width:1100,height:isOpen}}>
           <C.ProfileSection>
            <C.ProfileImage></C.ProfileImage>
            <C.Profile>
              <C.Name>이지은</C.Name> 
              <C.Email>119755@naver.com</C.Email>
              <C.Sns><C.Image/>M2jung2</C.Sns>
              {/* icon color: #E44C7E; */}
              <C.Heart><FontAwesomeIcon icon={faHeart} color='gray'/></C.Heart>
            </C.Profile> 
            <C.ProfileInfo>
              <C.Following>Following <span>2844</span></C.Following>
              <C.Sales>Total Sales <span>29</span></C.Sales>
              <C.Intro>
                현대인의 심리적 불안상태를 색과 공간적 조형언어로 표현하는 작가 이지은은 판타지하고 생동감 넘치는 에너지와 감성적 이야기를 보여준다. 기억을 기반으로 공간을 창조하며 감성과 생각을 효과적으로 전달한다. 현대사회를 살아가는 누구나 순간순간 느낄 수 있는 생존과 생계에 대한 위협, 트라우마적 기억, 길을 잃은 감각 등의 다양한 감정들이 복합적으로 작용한다. 
              {/* <C.ProfileBtn>작가 상세보기</C.ProfileBtn> */}
              </C.Intro>
            </C.ProfileInfo>
           </C.ProfileSection>
           <C.Line/> 
           <C.ProfileSection>
            <C.History>
              <C.HistoryTitleLeft>Record</C.HistoryTitleLeft>
              <C.Record>
              2022 &nbsp; 특별기획전 《LILAC》, 서소문성지역사박물관, 서울 <br/>
              2019 &nbsp; The Love Poem 인사아트센터, 서울<br/>
              2018 &nbsp; 이지은 개인전 밤편지, 백상예술갤러리 서울<br/>
              2017 &nbsp; Pallete: I am 25, 가나 컨템포러리, 서울<br/>
              </C.Record>
            </C.History>
            <C.History>
              <C.HistoryTitleRight>대표작품</C.HistoryTitleRight>
              <C.Record>
              Modern Times (2023) <br/>
              너의 의미 (2018)<br/>
              나의 옛날 이야기 (2018)<br/>
              ZeZe (2016)<br/>
              </C.Record>
            </C.History>
           </C.ProfileSection>
          {/* ====== 상세보기 클릭시 나오는 이력 ====== */}
          {/* 그림 클릭시 등록된 작품 판매 게시글로 이동 */}
            <C.Work>
              <C.WorkImage>
                <C.WorkTitle>Modern Times</C.WorkTitle>
              </C.WorkImage>
              <C.WorkImage>
                <C.WorkTitle>너의 의미</C.WorkTitle>
              </C.WorkImage>
              <C.WorkImage>
                <C.WorkTitle>나의 옛날 이야기</C.WorkTitle>
              </C.WorkImage>
              <C.WorkImage>
                <C.WorkTitle>ZeZe</C.WorkTitle>
              </C.WorkImage>  
            </C.Work>
          </C.ArtistColumn>
       
       
        </C.ArtistWrapper>
      </C.Wrapper>
    </>
  )
}