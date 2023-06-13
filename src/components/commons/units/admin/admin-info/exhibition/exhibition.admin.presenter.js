import * as C from './exhibition.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import { useState, useEffect } from "react"

export default function AdminExhibitionView(props) {

    return (
        <>
        <C.Wrapper>
        <LayoutSideNavAdmin/>
            <C.ExhibitionWrapper>
            <C.AdminTitle>전시회 등록</C.AdminTitle>

            <C.BoardForm>
                <C.InputWrapper>
                    <C.Label>전시회 제목</C.Label>
                    <C.ExhibitionTitle type="text"/> &nbsp;&nbsp;&nbsp;
                    <C.ExhibitionFile type="file"/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>전시회 기간</C.Label>
                    <C.ExhibitionDate type="date"/>&nbsp;~&nbsp; 
                    <C.ExhibitionDate type="date"/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>전시회 설명</C.Label>
                </C.InputWrapper>
                <C.ContentWrapper>
                    <C.ExhibitionContent/>
                </C.ContentWrapper>
                <C.BtnWrapper>
                    <C.CancelBtn type='button'>취소</C.CancelBtn>
                    <C.SubmitBtn type='button'>등록하기</C.SubmitBtn>
                </C.BtnWrapper>
                </C.BoardForm>
            </C.ExhibitionWrapper>
        </C.Wrapper>
        </>
    )
}