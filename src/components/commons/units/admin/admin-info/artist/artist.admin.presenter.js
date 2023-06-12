import * as C from './artist.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'


export default function AdminArtistView(props) {

    return (
        <>
        <C.Wrapper>
         <LayoutSideNavAdmin/>
            <C.ArtistWrapper>
            <C.ArtistTitle>작가관리</C.ArtistTitle>
            <C.ArtistTable>
                <thead>
                <C.Tr>
                    <C.Th>선택</C.Th><C.Th>이름</C.Th><C.Th>소셜네트워크</C.Th><C.Th>판매점수</C.Th>
                </C.Tr>
                </thead>
                <tbody>
                <C.Tr>
                    <C.Td><C.CheckBox type="checkbox"/></C.Td><C.Td>유미정</C.Td><C.Td>M2jung</C.Td><C.Td>1000</C.Td>
                </C.Tr>
                <C.Tr>
                    <C.Td><C.CheckBox type="checkbox"/></C.Td><C.Td>이주호</C.Td><C.Td>orot</C.Td><C.Td>700</C.Td>
                </C.Tr>
                </tbody>
            </C.ArtistTable>
            <C.ArtistBtn>
             <C.Btn>추가하기</C.Btn>
             <C.Btn>삭제하기</C.Btn>    
            </C.ArtistBtn>
            </C.ArtistWrapper>
        </C.Wrapper>
        </>
    )
}