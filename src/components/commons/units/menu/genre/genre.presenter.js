import * as C from './genre.styles'


export default function GenreView(props) {
 
  return (
    <>  
        <C.Wrapper>
         <C.GenreBanner>
            <C.BannerTitle>장르별 </C.BannerTitle>
            <C.BannerSubTitle>Buy Original Paintings</C.BannerSubTitle>
         </C.GenreBanner>
            <C.GenreSelect>
               <C.Genre>장르1</C.Genre>
               <C.Genre>장르2</C.Genre>
               <C.Genre>장르3</C.Genre>
               <C.Select>
                  <option disabled="true" selected="true">추천순</option>
                  <option>인기순</option>
                  <option>최신순</option>
                  <option>리뷰 많은순</option>
                  <option>저가순</option>
                  <option>고가순</option>
               </C.Select>
            </C.GenreSelect>
         <C.GenreWrapper>
            <C.GenreColumn>
            </C.GenreColumn>
            <C.GenreColumn></C.GenreColumn>
            <C.GenreColumn></C.GenreColumn>
            <C.GenreColumn></C.GenreColumn>
         </C.GenreWrapper>
         <C.GenreWrapper>
            <C.GenreColumn></C.GenreColumn>
            <C.GenreColumn></C.GenreColumn>
            <C.GenreColumn></C.GenreColumn>
            <C.GenreColumn></C.GenreColumn>
         </C.GenreWrapper>
         <C.GenreWrapper>
            <C.GenreColumn></C.GenreColumn>
            <C.GenreColumn></C.GenreColumn>
            <C.GenreColumn></C.GenreColumn>
            <C.GenreColumn></C.GenreColumn>
         </C.GenreWrapper>
        </C.Wrapper>
    </>
  )

}