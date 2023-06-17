import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { faUser } from "@fortawesome/free-solid-svg-icons"
import LayoutSideNav from '../../../layout/side-nav/side-nav.presenter'
import Instagram from '../../../../../../public/icons/instagram.svg'
import * as C from './user.info.styles'
import Link from "next/link"
import { useState, useEffect } from "react"
import axios from "axios"

export default function UserInfoView(props) {

    // 회원정보 
    const [grade, setGrade] = useState();
    const [nickName, setNickName] = useState();
    const [id, setId] = useState();
    const [seq, setSeq] = useState();
    const back = process.env.NEXT_PUBLIC_URI

    useEffect(() => {
        setNickName(sessionStorage.getItem('userNickname'))
        setId(sessionStorage.getItem('userId'))
        setGrade(sessionStorage.getItem('userGrade'))
        setSeq(sessionStorage.getItem('userSeq'))
    }, [])

    // 장바구니 
    const [cartList, setCartList] = useState();
    useEffect(() => {
        axios.get(`${back}cartList?memberSeq=${seq}`)
        .then((res) => {
            setCartList(res.data);
        })
    },[])

    // 즐겨찾기 
    const [artistTop, setArtistTop] = useState();
    useEffect(() => {
        axios.get(`${back}artistTop?markSeq=${seq}`)
        .then((res) => {
            setCartList(res.data);
        })
    },[])

    // 나의 문의
    const [helpList, setHelpList] = useState();
    useEffect(() => {
        axios.get(`${back}helpAllList`)
        .then((res) => {
            setHelpList(res.data);
        })
    },[])

    return (
        <>
        <C.Wrapper>
        <LayoutSideNav/>
            <C.InfoWrapper>
            <C.InfoTitle>회원정보</C.InfoTitle>
            <C.Profile>
                <C.MyProfile>
                    <C.MyIcon><FontAwesomeIcon icon={faUser}/>&nbsp;{nickName}</C.MyIcon>
                    <C.MyIcon><FontAwesomeIcon icon={faEnvelope}/>&nbsp;{id}</C.MyIcon>                 
                </C.MyProfile>    
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
                    <C.Level>{nickName}님은 [ Lv.{grade} 일반회원 ] 입니다. </C.Level>
                    <C.DottedLine></C.DottedLine>
                    <C.Coupon>적립금 0원&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 예치금 0원</C.Coupon>
                    </C.MembershipLevel>
                </C.MembershipTable>
                <C.MyPayTable>
                    <C.MyPayColumn1>
                        <C.ProductProfile>
                         <C.ProductDelivery>배송전</C.ProductDelivery>
                         <C.Image/>
                        </C.ProductProfile>
                        <C.ProductInfo>
                            <C.ProductTitle> 텔레토비 </C.ProductTitle>
                            <C.ProductContent>작가 김세동</C.ProductContent>
                            <C.ProductPrice>20,000,000 원</C.ProductPrice>
                        </C.ProductInfo>
                    </C.MyPayColumn1>
                    <C.MyPayColumn2>
                        <C.ProductBtn>배송조회</C.ProductBtn>
                        <C.ProductBtn>교환,반품 신청</C.ProductBtn>
                        <C.ProductBtn>판매자 문의 </C.ProductBtn>
                    </C.MyPayColumn2>
                </C.MyPayTable>
                <C.PaymentTable>
                    <C.Table>
                        {/* 장바구니 */}
                    <thead> 
                        <C.Tr>
                            <C.Th>제목</C.Th><C.Th>내용</C.Th><C.Th>작성날짜</C.Th>
                        </C.Tr>
                    </thead>
                    <tbody>
                        {artistTop?.map((el,i) => (
                        <C.Tr key={i}>
                            <C.Td>{el.artist}</C.Td><C.Td>{el.helpContent}</C.Td><C.Td>{new Date(el.helpDate).toLocaleString()}</C.Td>
                        </C.Tr>
                        ))}    
                    </tbody>
                    </C.Table>
                    {/* <C.PaymentColumn>
                        <C.Link href="#">전체상품 주문</C.Link>
                        <C.Link href="#">선택상품 주문</C.Link>
                    </C.PaymentColumn> */}
                </C.PaymentTable>
                </C.PaymentWrapper>
            </C.Profile>
            <C.InfoTitle>즐겨찾기</C.InfoTitle>
            <C.Profile>
            <C.ServiceTable>
                <C.Table>
                    <thead>
                        <C.Tr>
                            <C.Th>제목</C.Th><C.Th>내용</C.Th><C.Th>작성날짜</C.Th>
                        </C.Tr>
                    </thead>
                    <tbody>
                        {artistTop?.map((el,i) => (
                        <C.Tr key={i}>
                            <C.Td>{el.artist}</C.Td><C.Td>{el.helpContent}</C.Td><C.Td>{new Date(el.helpDate).toLocaleString()}</C.Td>
                        </C.Tr>
                        ))}    
                    </tbody>
                    </C.Table>
            </C.ServiceTable>
            </C.Profile>


            <C.InfoTitle>나의문의</C.InfoTitle>
            <C.Profile>       
            <C.ServiceTable>
                <C.PaymentColumn>
                    <C.Table>
                    <thead>
                        <C.Tr>
                            <C.Th>제목</C.Th><C.Th>내용</C.Th><C.Th>작성날짜</C.Th>
                        </C.Tr>
                    </thead>
                    <tbody>
                        {helpList?.map((el,i) => (
                        <C.Tr key={i}>
                            <C.Td>{el.helpTitle}</C.Td><C.Td>{el.helpContent}</C.Td><C.Td>{new Date(el.helpDate).toLocaleString()}</C.Td>
                        </C.Tr>
                        ))}    
                    </tbody>
                    </C.Table>
                </C.PaymentColumn>
            </C.ServiceTable>
            {/* <C.Btn>
                <C.Link href='menu/service.center/board/new'>1:1 문의하기</C.Link>
            </C.Btn> */}
            
            </C.Profile >
            </C.InfoWrapper>
        </C.Wrapper>
        </>
    )
}