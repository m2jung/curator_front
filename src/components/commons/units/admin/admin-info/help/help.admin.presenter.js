import * as C from './help.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'

export default function AdminHelpView(props) {

    return (
        <>
        <C.Wrapper>
        <LayoutSideNavAdmin/>
            <C.MemberWrapper>
            <C.MemberTitle>문의내역</C.MemberTitle>
            <C.MemberTable>
                <thead>
                <C.Tr>
                    <C.Th>문의제목</C.Th><C.Th>문의내용</C.Th><C.Th>작성날짜</C.Th>
                </C.Tr>
                </thead>
                <tbody>
                <C.Tr>
                    <C.Td>작품을 어떻게 구매하나요???</C.Td><C.Td>제가 작품을 사고싶은데...어떻게 사야될 지 몰라서용..</C.Td><C.Td>2023-06-20</C.Td>
                </C.Tr>
                <C.Tr>
                    <C.Td>작품을 어떻게 구매하나요???</C.Td><C.Td>제가 작품을 사고싶은데...어떻게 사야될 지 몰라서용..</C.Td><C.Td>2023-06-20</C.Td>
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