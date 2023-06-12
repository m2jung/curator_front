import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import * as C from './side-nav.styles' 

export default function LayoutSideNav(props) {
 
  const onClickScrollInfo = () => {
    window.scrollTo({
         top: 200,
         behavior: 'smooth',
    });
  }
    const onClickScrollPur = () => {
      window.scrollTo({
           top: 500,
           behavior: 'smooth',
      });
    }

  const onClickScrollMark = () => {
    window.scrollTo({
         top: 1200,
         behavior: 'smooth',
    });
  }

  const onClickScrollService = () => {
    window.scrollTo({
        top: 1450,
        behavior: 'smooth',
    });
  }

  return (
    <>  
        <C.Wrapper>
         <C.InfoWrapper>
            <C.InfoMenu>
                <C.InfoProfile>
                    <C.ProfileImage></C.ProfileImage>
                    <C.UserName>{sessionStorage.getItem('userNickname')}</C.UserName>
                    <C.UserEmail>{sessionStorage.getItem('userId')}</C.UserEmail>
                </C.InfoProfile>
                <C.InfoList>
                    <C.List onClick={props.ScrollInfo}>회원정보</C.List>
                    <C.List onClick={props.ScrollPur}>구매내역</C.List>
                    <C.List onClick={props.ScrollMark}>즐겨찾기</C.List>
                    <C.List onClick={props.ScrollService}>나의문의</C.List>
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