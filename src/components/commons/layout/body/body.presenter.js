import * as C from './body.styles' 

export default function LayoutBody(props){

    return (
    <>
        <C.BodyWrapper>
        <C.AsideContent>
          <C.ArticleTitle>BestArtist</C.ArticleTitle>
        </C.AsideContent>
        <C.AsideContent>
          <C.ArticleTitle>BestSeller</C.ArticleTitle>
        </C.AsideContent>
       </C.BodyWrapper>
       <C.BodyWrapper>
        <C.Section>
        <C.ArticleTitle>Exhibition</C.ArticleTitle>
        </C.Section>
       </C.BodyWrapper>
    </>

    )
}