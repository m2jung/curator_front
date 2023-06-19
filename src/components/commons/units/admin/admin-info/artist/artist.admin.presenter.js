import * as C from './artist.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import { useState, useEffect } from 'react';
import axios from 'axios'

export default function AdminArtistView(props) {

    const [artistList, setArtistList] = useState();
    const back = process.env.NEXT_PUBLIC_URI

    useEffect(() => {
        axios.get(`${back}artistAllList`)
        .then((res) => {
            setArtistList(res.data);
        })
    },[])
    
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
                {artistList?.map((el,i) => (
                <C.Tr key={i}>
                    <C.Td><C.CheckBox type="checkbox"/></C.Td><C.Td>{el.artistName}</C.Td><C.Td>{el.artistSns}</C.Td><C.Td>{el.artistHit}</C.Td>
                </C.Tr>
                ))}
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