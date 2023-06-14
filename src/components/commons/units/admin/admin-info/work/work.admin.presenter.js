import * as C from './work.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import { CKEditor } from 'ckeditor4-react'
import { useEffect } from 'react'
import React, {useCallback, useState} from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function AdminWorkView(props) {
    
    const back = process.env.NEXT_PUBLIC_URI_NAS
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [price, setPrice] = useState('');
    const [content, setContent] = useState('');
    const [auction, setAuction] = useState('');
    const [exhibition, setExhibition] = useState('');


    //input
    const onChangeTitle = useCallback((e)=>{
        const curr = e.target.value;
        setTitle(curr);
    }, [])

    const onChangeSummary = useCallback((e) => {
        const curr = e.target.value;
        setSummary(curr);
    },[])
    const onChangePrice = useCallback((e) => {
        const curr = e.target.value;
        setPrice(curr);
    },[])
    const onChangeContent = useCallback((e) => {
        const curr = e.target.value;
        setContent(curr);
    },[])
    const onChangeAuction = useCallback((e) => {
        const curr = e.target.value;
        setAuction(curr);
    },[])

    const onChangeExhibition = useCallback((e) => {
        const curr = e.target.value;
        setExhibition(curr);
    },[])

    
    //파일
    const handleChange = useCallback((e) => { 
        if (e.target.files === null) return;

        if (e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    }, []);

    //submit
    const handleClick = useCallback(async () => {
        if (!file) return;

        const formData = new FormData();
        await formData.append('artistPostFile', file);
        const uploader = {     
            genreSeq: 1,
            artistSeq: 3,
            exhibitionSeq: 1,
            postTitle: title,
            postSummary: summary,
            postContent: content,
            postPrice: price,
            postAuction: auction,
            postExhibition: exhibition, 
        };
        const uploaderString = JSON.stringify(uploader);
        await formData.append('postDTO', new Blob([uploaderString], {type: 'application/json'}));
        const res = await axios.post(
            `${back}artistPostWrite`,
            formData,
            {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }
            )
            
        if (res.status === 201) console.log(res.data);
    }, [file]);


    return (
        <>
        <C.Wrapper>
        <LayoutSideNavAdmin/>
            <C.WorkWrapper>
            <C.AdminTitle>작품등록</C.AdminTitle>
            <C.BoardForm>
                <C.InputWrapper>
                    <C.Label>작품 제목</C.Label>
                    <C.WorkTitle type="text" onChange={onChangeTitle}/> &nbsp;&nbsp;&nbsp;
                    <C.WorkFile type="file" onChange={handleChange}/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>작품 요약</C.Label>
                    <C.WorkSummary type="text" onChange={onChangeSummary}/> &nbsp;&nbsp;&nbsp;&nbsp;
                    <C.Label>작품 가격</C.Label>
                    <C.WorkSummary type="text" onChange={onChangePrice}/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>경매</C.Label>
                    <label>Y</label><C.WorkAuction type="radio" value={1} onChange={onChangeAuction}/> &nbsp;&nbsp;
                    <label>N</label><C.WorkAuction type="radio" value={2} onChange={onChangeAuction}/> 
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>전시회 유무</C.Label>
                    <label>Y</label><C.WorkExhibition type="radio" value={1} onChange={onChangeExhibition}/> &nbsp;&nbsp;
                    <label>N</label><C.WorkExhibition type="radio" value={2} onChange={onChangeExhibition}/> 
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>상세설명</C.Label>
                </C.InputWrapper>
                <C.ContentWrapper>
                    <C.WorkContent onChange={onChangeContent}/>
                </C.ContentWrapper>
                <C.BtnWrapper>
                    <C.CancelBtn type='button'>취소</C.CancelBtn>
                    <C.SubmitBtn type='button' onClick={handleClick}>등록하기</C.SubmitBtn>
                </C.BtnWrapper>
                </C.BoardForm>
            </C.WorkWrapper>
        </C.Wrapper>
        </>
    )
}