import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import * as C from './work.styles'

export default function WorkView(props) {
 
  return (
    <>  
      <C.Wrapper>
        <C.WorkWrapper>
          <C.WorkSection>
            <C.WorkImage/>
          </C.WorkSection>
          <C.WorkSection>
            <C.WorkInfo>
              <C.WorkNo>No.1234</C.WorkNo>
              <C.WorkTitle>[속초 바다]</C.WorkTitle>  
              <C.WorkSummary>혼자 속초 바다를 보러 갔다가 영감을 얻어서 그린 그림이다.</C.WorkSummary>
              <C.WorkMemo>
                <C.WorkSize>90.8 X 112.8cm</C.WorkSize>
                <C.WorkType>Acrylic</C.WorkType>
              </C.WorkMemo>
              <C.WorkPrice>130,000,000 ₩</C.WorkPrice>
              <C.WorkDate>등록일자 2023.06.05</C.WorkDate>
            <C.WorkBtn>
              <C.BuyBtn>구매하기</C.BuyBtn>
              <C.WishBtn>찜하기</C.WishBtn>
              <C.FavoritBtn><FontAwesomeIcon icon={faHeart}/></C.FavoritBtn>
            </C.WorkBtn>
            </C.WorkInfo>  
          </C.WorkSection>
        </C.WorkWrapper>

        <C.WorkContent>
         <C.WorkContentBox>" 모든 작품에 대하여 <b>Art WebSite 가 책임지고 보증합니다.</b> 구매시 작품보증서가 함께 첨부됩니다. "</C.WorkContentBox>
         <C.WorkContentImage/>
         </C.WorkContent>
         
         <C.WorkContent>
         <C.WorkArticle>
          <C.ArticleImage></C.ArticleImage>
          <C.Article> 
            &lt; 작가의 작품 한마디 &gt; <br/><br/><br/>
            ‘FLOW’시리즈는 스킨스쿠버의 메카 제주문섬 바다를 모티브로 합니다. 10여 년 전 작가는 스쿠버다이빙을 통해 에메랄드 바닷빛 물고기 무리의 신비로운 생명력을 체험합니다. 떼지어 움직이는 물고기, 그 위로 스며든 햇빛, 일순간 휘몰아치는 물살의 역동성은 미지의 바닷속을 걷는 듯 신비합니다. 핑크‘FLOW’는 바다를 물들인 듯한 핑크산호가 모티브입니다. 작품의 다양한 핑크색은 수많은 레이어를 쌓아 완성되었고 자유분방한 선들은 물고기의 힘찬 flow입니다 
          </C.Article>
         </C.WorkArticle>
        </C.WorkContent>

        <C.WorkContent>
          <C.WorkProfile>
              
          </C.WorkProfile>
        </C.WorkContent>


      </C.Wrapper>
    </>
  )

}