import LayoutSideNav from "../../../../src/components/commons/layout/side-nav/side-nav.presenter"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import * as C from "../../../../styles/user/user-info-emotion"

export default function UserInfoView() {

    return (
       <>
        <LayoutSideNav>
            <C.Wrapper>
             <C.InfoWrapper>
             <C.InfoTitle>회원정보</C.InfoTitle>
             <C.Profile>
                <C.MyImage></C.MyImage>
                <C.MyProfile>
                 <C.MyName>유미정</C.MyName>
                 <C.MyEmail><FontAwesomeIcon icon={faEnvelope}/> 119755@naver.com</C.MyEmail>                 
                </C.MyProfile>    
                <C.BtnModify>수정</C.BtnModify>
             </C.Profile>
             <C.Profile>
                {/* <C.MyPassword type="password"/> */}
             </C.Profile>
             <C.Profile></C.Profile>
             <C.Profile></C.Profile>
    
             </C.InfoWrapper>
            </C.Wrapper>    
        </LayoutSideNav>   

       </>
    ) 
}