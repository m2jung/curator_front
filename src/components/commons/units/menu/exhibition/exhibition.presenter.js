import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"

import * as C from './exhibition.styles' 

export default function ExhibitionView(props) {
 
  return (
    <>  
        <C.Wrapper>
         <C.ExhibitionBanner>
            <C.BannerTitle>전시회 정보 </C.BannerTitle>
            <C.BannerSubTitle>Exhibition</C.BannerSubTitle>
         </C.ExhibitionBanner>
         
         <C.ExhibitionWrapper>
            <C.ExhibitionMenu>오늘의 전시회</C.ExhibitionMenu>
            <C.ExhibitionTitle>[ 코리아 IT 아카데미 ]
            <C.ExhibitionSubTitle>[ 레플리카 전시 ] 프렌치 살롱, 빛의 화가들 </C.ExhibitionSubTitle>
            <C.ExhibitionDate>2022.04.01 ~ 05.01</C.ExhibitionDate>
            <C.ExhibitionBtn>신청하기</C.ExhibitionBtn>
            <C.ExhibitionBtn>자세히 보기</C.ExhibitionBtn>
            </C.ExhibitionTitle>            
            <C.ExhibitionImage/>
         </C.ExhibitionWrapper>

          <C.ExhibitionWrapper>
            <C.ExhibitionMenu>작가 전시 정보</C.ExhibitionMenu>
            <C.ExhibitionTitle> 신인 작가 전시회 & 공모전 
            <C.ExhibitionSubTitle>Art Website 에서 작가의 "꿈"을 이루세요.</C.ExhibitionSubTitle>
            </C.ExhibitionTitle> 
              <C.ExhibitionColumn>
               <C.Column>
                <C.ColumnImage></C.ColumnImage>
                <C.ColumnInfo>
                 <C.ColumnTitle>[2023 코리아 아트 첫 전시회] 신인 작가 미술제</C.ColumnTitle>
                 <C.ColumnSubTitle> 유미정 작가 외 4명 </C.ColumnSubTitle>
                 <C.ColumnDate><C.Btn>전시중</C.Btn>2023.06.05 ~ 06.22</C.ColumnDate>
                </C.ColumnInfo>
               </C.Column>
               <C.Column>
               <C.ColumnImage></C.ColumnImage>
                <C.ColumnInfo>
                 <C.ColumnTitle>[START PLUS] '일상속의 예술' _유미정 작가 초대전  </C.ColumnTitle>
                 <C.ColumnSubTitle> 유미정 작가 </C.ColumnSubTitle>
                 <C.ColumnDate><C.Btn>전시중</C.Btn>2023.06.05 ~ 06.22</C.ColumnDate>
                </C.ColumnInfo>
               </C.Column>
               <C.Column>
               <C.ColumnImage></C.ColumnImage>
                <C.ColumnInfo>
                 <C.ColumnTitle>[대치 전시장] 동녘에_꽃이_피다 _이주호 작가 초대전  </C.ColumnTitle>
                 <C.ColumnSubTitle> 이주호 작가 </C.ColumnSubTitle>
                 <C.ColumnDate><C.Btn>전시중</C.Btn>2023.06.05 ~ 06.22</C.ColumnDate>
                </C.ColumnInfo>
               </C.Column>
              </C.ExhibitionColumn>          
              <C.ExhibitionColumn>
               <C.Column>
               <C.ColumnImage></C.ColumnImage>
                <C.ColumnInfo>
                 <C.ColumnTitle>[더 트리니티 갤러리] 정연호: The Light Work</C.ColumnTitle>
                 <C.ColumnSubTitle> 정연호 작가 </C.ColumnSubTitle>
                 <C.ColumnDate><C.Btn>전시중</C.Btn>2023.06.05 ~ 06.22</C.ColumnDate>
                </C.ColumnInfo>
               </C.Column>
               <C.Column>
               <C.ColumnImage></C.ColumnImage>
                <C.ColumnInfo>
                 <C.ColumnTitle>[신라스테이 역삼] 극사실주의 회화, 이범석 초대전_HIDE </C.ColumnTitle>
                 <C.ColumnSubTitle> 이범석 작가  </C.ColumnSubTitle>
                 <C.ColumnDate><C.Btn>전시중</C.Btn>2023.06.05 ~ 06.22</C.ColumnDate>
                </C.ColumnInfo>
               </C.Column>
               <C.Column>
               <C.ColumnImage></C.ColumnImage>
                <C.ColumnInfo>
                 <C.ColumnTitle>[갤러리아카데미] 이준삼 작가 추상회화전_ Movement_Recovery</C.ColumnTitle>
                 <C.ColumnSubTitle> 이준삼 작가 </C.ColumnSubTitle>
                 <C.ColumnDate><C.Btn>전시중</C.Btn>2023.06.05 ~ 06.22</C.ColumnDate>
                </C.ColumnInfo>
               </C.Column>
              </C.ExhibitionColumn>              
          </C.ExhibitionWrapper>


          <C.PageNumber>
            <C.Page><FontAwesomeIcon icon={faChevronLeft}/></C.Page>
            <C.Page>1</C.Page>
            <C.Page>2</C.Page>
            <C.Page>3</C.Page>
            <C.Page><FontAwesomeIcon icon={faChevronRight}/></C.Page>
          </C.PageNumber>
        </C.Wrapper>
    </>
  )

}