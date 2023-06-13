import * as C from './work.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import { CKEditor } from 'ckeditor4-react'

export default function AdminWorkView(props) {

    return (
        <>
        <C.Wrapper>
        <LayoutSideNavAdmin/>
            <C.WorkWrapper>
            <C.AdminTitle>작품등록</C.AdminTitle>

            <C.BoardForm>
                <C.InputWrapper>
                    <C.Label>작품 제목</C.Label>
                    <C.WorkTitle type="text"/> &nbsp;&nbsp;&nbsp;
                    <C.WorkFile type="file"/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>작품 요약</C.Label>
                    <C.WorkSummary type="text"/> &nbsp;&nbsp;&nbsp;&nbsp;
                    <C.Label>작품 가격</C.Label>
                    <C.WorkSummary type="text"/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>경매</C.Label>
                    <label>Y</label><C.WorkAuction type="radio"/> &nbsp;&nbsp;
                    <label>N</label><C.WorkAuction type="radio"/> 
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>전시회 유무</C.Label>
                    <label>Y</label><C.WorkExhibition type="radio"/> &nbsp;&nbsp;
                    <label>N</label><C.WorkExhibition type="radio"/> 
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>상세설명</C.Label>
                </C.InputWrapper>
                <C.ContentWrapper>
                    <C.WorkContent/>
                </C.ContentWrapper>
                <C.BtnWrapper>
                    <C.CancelBtn type='button'>취소</C.CancelBtn>
                    <C.SubmitBtn type='button'>등록하기</C.SubmitBtn>
                </C.BtnWrapper>
                </C.BoardForm>
            </C.WorkWrapper>
        </C.Wrapper>
        </>
    )
}