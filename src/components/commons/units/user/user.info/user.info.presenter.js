import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import LayoutSideNav from "../../../layout/side-nav/side-nav.presenter"
import Instagram from '../../../../../../public/icons/instagram.svg'
import * as C from './user.info.styles'
import Link from "next/link"

export default function UserInfoView(props) {

    return (
        <>
        <C.Wrapper>
        <LayoutSideNav/>
            <C.InfoWrapper>
            <C.InfoTitle>회원정보</C.InfoTitle>
            <C.Profile>
                <C.MyProfile>
                <C.MyName>{sessionStorage.getItem('userNickname')}</C.MyName>
                <C.MyEmail><FontAwesomeIcon icon={faEnvelope}/> {sessionStorage.getItem('userId')}</C.MyEmail>                 
                <C.MySns><Instagram fill='gray' width={19} height={19}/>&nbsp;M2jung2</C.MySns>
                </C.MyProfile>    
                <C.BtnModify>수정하기</C.BtnModify>
            </C.Profile>
                <C.InfoTitle>비밀번호 설정</C.InfoTitle>
            <C.Profile>
                <C.Label>현재 비밀번호 : </C.Label>
                <C.MyPassword type="password"/>
                <C.Label>새 비밀번호 : </C.Label>
                <C.MyPassword type="password"/>  
                <C.BtnModify>수정하기</C.BtnModify>
            </C.Profile>
            <C.InfoTitle>구매내역</C.InfoTitle>
            <C.Profile>
                <C.PaymentWrapper>
                <C.MembershipTable>
                <C.MembershipInfo>혜택정보</C.MembershipInfo>
                <C.MembershipLevel>
                    <C.Level>{sessionStorage.getItem('userNickname')}님은 [일반회원] 입니다. </C.Level>
                    <C.DottedLine></C.DottedLine>
                    <C.Coupon>적립금 0원&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 예치금 0원</C.Coupon>
                    </C.MembershipLevel>
                </C.MembershipTable>

                <C.PaymentTable>
                    <C.PaymentColumn>
                        <C.PaymentMessage>장바구니가 비어있습니다.</C.PaymentMessage>
                    </C.PaymentColumn>
                    <C.PaymentColumn>
                        <C.Link>전체상품 주문</C.Link>
                        <C.Link>선택상품 주문</C.Link>
                    </C.PaymentColumn>
                </C.PaymentTable>
                </C.PaymentWrapper>
            </C.Profile>


            <C.InfoTitle>즐겨찾기</C.InfoTitle>
            <C.Profile>
            <C.ServiceTable>
                <C.PaymentColumn>
                    <C.PaymentMessage>즐겨찾기 작품이 없습니다.</C.PaymentMessage>    
                </C.PaymentColumn>
                <C.PaymentColumn>
                    <C.Link href='/menu/genre'>작품 둘러보기</C.Link>
                </C.PaymentColumn>
            </C.ServiceTable>
            </C.Profile>


            <C.InfoTitle>나의문의</C.InfoTitle>
            <C.Profile>       
            <C.ServiceTable>
                <C.PaymentColumn>
                    <C.PaymentMessage>등록된 문의가 없습니다.</C.PaymentMessage>    
                </C.PaymentColumn>
                <C.PaymentColumn>
                    <C.Link href='/board/service-board'>1:1 문의하기</C.Link>
                </C.PaymentColumn>
            </C.ServiceTable>
            </C.Profile>
            </C.InfoWrapper>
        </C.Wrapper>
        </>
    )
}
