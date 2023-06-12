import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import * as C from './side-nav-admin.styles' 
import { useState, useEffect } from 'react';

export default function LayoutSideNavAdmin() {

  // const [nickName, setNickName] = useState();
  // const [id, setId] = useState();

  // useEffect(() => {
  //     setNickName(sessionStorage.getItem('userNickname'))
  //     setId(sessionStorage.getItem('userId'))
  // }, [])

 
  // const onClickScrollInfo = () => {
  //   window.scrollTo({
  //        top: 200,
  //        behavior: 'smooth',
  //   });
  // }
  //   const onClickScrollPur = () => {
  //     window.scrollTo({
  //          top: 500,
  //          behavior: 'smooth',
  //     });
  //   }

  // const onClickScrollMark = () => {
  //   window.scrollTo({
  //        top: 1200,
  //        behavior: 'smooth',
  //   });
  // }

  // const onClickScrollService = () => {
  //   window.scrollTo({
  //       top: 1450,
  //       behavior: 'smooth',
  //   });
  // }
  
  return (
    <>  
        <C.Wrapper>
         <C.InfoMenu>
              <C.InfoList>
                  <C.List href="/admin/admin-info">회원관리</C.List>
                  <C.List href="/admin/admin-info/">작가관리</C.List>
                  <C.List href="/admin/admin-info/">문의내역</C.List>
                  <C.List href="/admin/admin-info/">작품등록</C.List>
                  <C.List href="/admin/admin-info/">전시회등록</C.List>
                  <C.List href="/admin/admin-info/">의뢰내역확인</C.List>
              </C.InfoList>
          </C.InfoMenu> 
        </C.Wrapper>
    </>
  )

}