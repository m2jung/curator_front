import * as C from './commission.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import { useState, useEffect } from "react"
import axios from 'axios';

export default function AdminCommissionView(props) {

    const [commList, setCommList] = useState();

    const back = process.env.NEXT_PUBLIC_URI_NAS
    
    useEffect(() => {
        axios.get(`${back}commAllList`)
        .then((res) => {
            setCommList(res.data);
        })
    },[])
    
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
                {commList?.map((el,i) => (
                <C.Tr key={i}>
                    <C.Td>{el.commSeq}</C.Td><C.Td>{el.commTitle}</C.Td><C.Td>{el.commContent}</C.Td><C.Td>{el.commDate}</C.Td>
                </C.Tr>
                ))}
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