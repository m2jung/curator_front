import * as C from './commission.admin.styles'
import LayoutSideNavAdmin from '../../../layout/side-nav-admin/side-nav-admin.presenter'
import { useState, useEffect } from "react"

export default function AdminInfoView(props) {

    return (
        <>
        <C.Wrapper>
        <LayoutSideNavAdmin/>
            <C.MemberWrapper>
            <C.MemberTitle>회원관리</C.MemberTitle>
            <C.MemberTable>
                <thead>
                <C.Tr>
                    <C.Th>회원번호</C.Th><C.Th>이메일</C.Th><C.Th>비밀번호</C.Th><C.Th>닉네임</C.Th><C.Th>이름</C.Th><C.Th>번호</C.Th><C.Th>주소</C.Th><C.Th>회원등급</C.Th><C.Th>가입일자</C.Th>
                </C.Tr>
                </thead>
                <tbody>
                <C.Tr>
                    <C.Td>1</C.Td><C.Td>119755@naver.com</C.Td><C.Td>123</C.Td><C.Td>딱지찡</C.Td><C.Td>유미정</C.Td><C.Td>1</C.Td><C.Td>경기도 고양시</C.Td><C.Td>일반등급</C.Td><C.Td>2023-06-12</C.Td>
                </C.Tr>
                <C.Tr>
                    <C.Td>2</C.Td><C.Td>adsajd@naver.com</C.Td><C.Td>234</C.Td><C.Td>테스트</C.Td><C.Td>정미유</C.Td><C.Td>2</C.Td><C.Td>서울시</C.Td><C.Td>일반등급</C.Td><C.Td>2023-06-12</C.Td>
                </C.Tr>
                </tbody>
            </C.MemberTable>
            <C.MemberBtn>
             <C.Btn>삭제하기</C.Btn>    
            </C.MemberBtn>
            </C.MemberWrapper>
        </C.Wrapper>
        </>
    )
}