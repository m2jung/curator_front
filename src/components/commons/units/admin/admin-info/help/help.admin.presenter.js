import * as C from './help.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentDots} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function AdminHelpView(props) {

    const [helpList, setHelpList] = useState();

    const back = process.env.NEXT_PUBLIC_URI_NAS

    useEffect(() => {
        axios.get(`${back}helpAllList`)
        .then((res) => {
            setHelpList(res.data);
        })
    },[])
    

    return (
        <>
        <C.Wrapper>
        <LayoutSideNavAdmin/>
            <C.HelpWrapper>
            <C.AdminTitle>문의내역</C.AdminTitle>
            <C.HelpTable>
                <thead>
                <C.Tr>
                    <C.Th>문의제목</C.Th><C.Th>문의내용</C.Th><C.Th>작성날짜</C.Th><C.Th></C.Th>
                </C.Tr>
                </thead>
                <tbody>
                {helpList?.map((el,i) => (
                <C.Tr key={i}>
                    <C.Td>{el.helpTitle}</C.Td><C.Td>{el.helpContent}</C.Td><C.Td>{new Date(el.helpDate).toLocaleString()}</C.Td><C.Td><Link href={`/menu/service.center/${el.helpSeq}`}><FontAwesomeIcon icon={faCommentDots} size='xl'/></Link></C.Td>
                </C.Tr>
                ))}    
                </tbody>
            </C.HelpTable>
            <C.HelpBtn>
             <C.Btn>삭제하기</C.Btn>    
            </C.HelpBtn>
            </C.HelpWrapper>
        </C.Wrapper>
        </>
    )
}