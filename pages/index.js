import * as C from '../styles/emotion'
// 메인 홈페이지 
// 실제적인 페이지 접속 구간  (유지보수를 위해 , 셋팅 - 페이지접속 - 컨테이너 - 프레젠터)

export default function WebMainView(){

  return (
  <>
      <C.Wrapper>
        <C.Content>
          <C.ContentTitle>BestArtist</C.ContentTitle>
          <C.Article>
            <C.ArticleImage></C.ArticleImage>
            <C.ArticleImage></C.ArticleImage>
            <C.ArticleImage></C.ArticleImage>
            <C.ArticleImage></C.ArticleImage>
          </C.Article>
        </C.Content>
      </C.Wrapper>


     <C.Wrapper>
      <C.Content>
      <C.ContentTitle>Exhibition</C.ContentTitle>
        <C.Exhibition></C.Exhibition>
      </C.Content>
     </C.Wrapper>
  </>

  )
}



