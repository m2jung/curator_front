import * as C from './side-nav.styles' 
import Link from 'next/link'

export default function LayoutSideNav(props) {

  return (
    <>
       <C.Wrapper>
         <C.InfoWrapper>
            <C.InfoMenu>
                <C.InfoProfile>
                    <C.ProfileImage></C.ProfileImage>
                    <C.UserName>유미정</C.UserName>
                    <C.UserEmail>119755@naver.com</C.UserEmail>
                </C.InfoProfile>
                <C.InfoList>
                    <Link href="/login/user/user-info"><C.List>회원정보</C.List></Link>
                    <Link href="/login/user/user-pur"><C.List>구매내역</C.List></Link>
                    <Link href="/login/user/user-mark"><C.List>즐겨찾기</C.List></Link>
                    <Link href="/login/user/user-help"><C.List>나의문의</C.List></Link>
                </C.InfoList>
            </C.InfoMenu>
            <C.InfoContent>
            <div>{props.children}</div>
            </C.InfoContent> 
         </C.InfoWrapper>
        </C.Wrapper>  
    </>
  )

}