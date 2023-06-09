import * as C from './header.styles' 
import Link from 'next/link'
import { useRouter } from "next/router"
import { useState, useEffect } from "react"

export default function LayoutHeader(props){

  // login 판별
  const [loginStatue, setLoginStatus] = useState();
  useEffect(() => {
    setLoginStatus(localStorage.getItem('loginStatus'));
  })

    return (
        <C.HeaderWrapper>
        <Link href="/"><C.MainTitle></C.MainTitle></Link>
        <C.SubTitle>Artist Garden</C.SubTitle>
        <C.MyProfile>
          {
            loginStatue ?
            <><Link href="/sign/sign-out"><C.SignInMenu>로그아웃</C.SignInMenu></Link><Link href="/user/user-info"><C.InfoMenu>회원정보</C.InfoMenu></Link></> 
            : <><Link href="/sign/sign-in"><C.SignInMenu>로그인</C.SignInMenu></Link><Link href="/sign/sign-up"><C.SignupMenu>회원가입</C.SignupMenu></Link></>
          }
        </C.MyProfile>
        <C.Navigator>
          <Link href="/menu/exhibition"><C.Menu onClick={props.exhibition}>전시회</C.Menu></Link>
          <Link href="/menu/artist"><C.Menu onClick={props.artist}>작가소개</C.Menu></Link>
          <Link href="/menu/genre"><C.Menu onClick={props.genre}>작품판매</C.Menu></Link>
          <Link href="/menu/commission"><C.Menu onClick={props.commission}>작품의뢰</C.Menu></Link>
          <Link href="/menu/service.center"><C.Menu onClick={props.service}>고객센터</C.Menu></Link>
        </C.Navigator>
      
      </C.HeaderWrapper> 
    )
}