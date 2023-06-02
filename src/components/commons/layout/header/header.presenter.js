import * as C from './header.styles' 
import Link from 'next/link'

export default function LayoutHeader(props){

    return (
        <C.HeaderWrapper>
        <Link href="/"><C.MainTitle></C.MainTitle></Link>
        <C.SubTitle>Artist Website</C.SubTitle>
        <C.MyProfile>
          <Link href="/login/sign-in">
            <C.SignInMenu>로그인</C.SignInMenu>
          </Link>
          /
          <Link href="/login//sign-up">
            <C.SignupMenu>회원가입</C.SignupMenu>
          </Link>
          <Link href="login/user/user-info">
            <C.InfoMenu>회원정보</C.InfoMenu>
          </Link>
        </C.MyProfile>
        <C.Navigator>
          <Link href="menu/artist"><C.Menu onClick={props.artist}>작가</C.Menu></Link>
          <Link href="menu/genre"><C.Menu onClick={props.genre}>장르</C.Menu></Link>
          <Link href="menu/commission"><C.Menu onClick={props.commission}>작품의뢰</C.Menu></Link>
          <Link href="menu/exhibition"><C.Menu onClick={props.exhibition}>전시회</C.Menu></Link>
          <Link href="menu/servicepage"><C.Menu onClick={props.service}>고객센터</C.Menu></Link>
        </C.Navigator>
        <C.Line></C.Line>
      </C.HeaderWrapper> 
    )
}