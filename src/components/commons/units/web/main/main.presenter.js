//Main View UI 부분
// import {
//     Wrapper,
//     MainTitle,
//     Navigator,
//     Menu,
//     // Search,
//     // Section,
//     HeaderWrapper,
//     BodyWrapper,
//     FooterWrapper,
//   } from './main.styles'

import * as C from './main.styles' //한방에 가져오기 
  
export default function MainViewUI(props) {

    return (
        <>
        <C.Wrapper>
         <C.HeaderWrapper>
           <C.MainTitle>Title</C.MainTitle>
           <C.MyProfile>
            <C.SignIn>로그인</C.SignIn>
            <C.Signup>회원가입</C.Signup>
              {/* <C.MyName>안녕하세요.<span>OOO</span> 님</C.MyName>
              <C.MyImage></C.MyImage> */}
           </C.MyProfile>
           <C.Navigator>
             <C.Menu>About</C.Menu>
             <C.Menu>Shop</C.Menu>
             <C.Menu>Work</C.Menu>
             <C.Menu>Work</C.Menu>
             <C.Menu>Work</C.Menu>
           </C.Navigator>
         </C.HeaderWrapper>

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

         <C.FooterWrapper>
          <C.Copyright>Copyright</C.Copyright>
         </C.FooterWrapper>
        </C.Wrapper>
     </>
    )
}
        //  <div>
        //     <div>
        //          <div>
        //          <button onClick={props.list}>getList</button><br />
        //          <button onClick={props.get}>get</button><br />
        //          <button onClick={props.post}>post</button><br />
        //          <button onClick={props.put}>put</button><br />
        //          <button onClick={props.delete}>delete</button>
        //          </div>
            
        //     </div>
        // </div>