import * as C from './commission.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import { useState, useEffect } from "react"

export default function AdminCommissionView(props) {

    return (
        <>
        <C.Wrapper>
        <LayoutSideNavAdmin/>
            <C.CommWrapper>
            <C.AdminTitle>의뢰내역확인</C.AdminTitle>
            <C.CommTable>
                <thead>
                <C.Tr>
                    <C.Th>의뢰번호</C.Th><C.Th>의뢰제목</C.Th><C.Th>의뢰내용</C.Th><C.Th>작성날짜</C.Th>
                </C.Tr>
                </thead>
                <tbody>
                <C.Tr>
                    <C.Td>1</C.Td><C.Td>작품의뢰 합니당</C.Td><C.Td>샬라샬라</C.Td><C.Td>2023.06.13</C.Td>
                </C.Tr>
                </tbody>
            </C.CommTable>
            <C.CommBtn>
             <C.Btn>삭제하기</C.Btn>    
            </C.CommBtn>
            </C.CommWrapper>
        </C.Wrapper>
        </>
    )
}