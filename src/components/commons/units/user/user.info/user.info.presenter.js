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
    const back = process.env.NEXT_PUBLIC_URI
    
    const [cartList, setCartList] = useState([]);
    const [artistList, setArtistList] = useState([]);
    const array = []
    const cartArray = []
    const [data, setData] = useState([]);
    const [cartData, setCartData] = useState([]);

    useEffect(async() => {
        setNickName(sessionStorage.getItem('userNickname'))
        setId(sessionStorage.getItem('userId'))
        setGrade(sessionStorage.getItem('userGrade'))
        const seq = sessionStorage.getItem('userSeq');
         
        // 장바구니 
        await axios.get(`${back}cartList?memberSeq=${seq}`)
        .then((res) => {
            setCartData(res.data)
            cartData?.map((el, i) => {
                axios.get(`${back}postView?postSeq=${el.postSeq}`)
                    .then((res) => {
                        cartArray.push(res.data)
                    })
                })
            })
            setCartList(cartArray); 
    

        // 즐겨찾기 
        await axios.get(`${back}bookmarkArtistList?memberSeq=${seq}`)
        .then((res) => {
            setData(res?.data);
            console.log(data)
            data?.map((el, i) => {
                axios.get(`${back}artistInform?artistSeq=${el.artistSeq}`)
                    .then((res) => { 
                        array.push(res.data)
                    })      
            })      
        })
        setArtistList(array)
    },[])

    // 나의 문의
    const [helpList, setHelpList] = useState();
    useEffect(() => {
        axios.get(`${back}helpAllList`)
        .then((res) => {
            setHelpList(res.data);
        })
    }, [artistList, cartList])

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
                            <C.Th>이미지</C.Th><C.Th>상품정보</C.Th><C.Th>금액</C.Th>
                        </C.Tr>                
                    </thead>
                    <tbody>
                        {cartList?.map((el,i) => (
                        <C.Tr key={i}>
                            <C.Td><img style={{width: 50, height: 50}} src={el.postImageName}></img></C.Td><C.Td>{el.postSummary}</C.Td><C.Td>{el.postPrice}</C.Td>
                        </C.Tr>  
                        ))}    
                    </tbody>
                    </C.Table>
                </C.PaymentTable>
                </C.PaymentWrapper>
            </C.Profile>
            <C.InfoTitle>즐겨찾기</C.InfoTitle>
            <C.Profile>
            <C.ServiceTable> 
                <C.Table> 
                    <thead> 
                        <C.Tr>
                            <C.Th style={{width: 100}}>이름</C.Th><C.Th>프로필</C.Th><C.Th>SNS</C.Th>
                        </C.Tr>
                    </thead> 
                    <tbody>
                        {artistList?.map((el,i) => (
                        <C.Tr key={i}>
                            <C.Td>{el.artistName}</C.Td><C.Td>{el.artistProfile}</C.Td><C.Td>{el.artistSns}</C.Td>
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
            </C.Profile >
            </C.InfoWrapper>
        </C.Wrapper>
        </>
    )
}