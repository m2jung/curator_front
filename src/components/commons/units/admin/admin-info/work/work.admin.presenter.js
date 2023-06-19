import * as C from './work.admin.styles'
import LayoutSideNavAdmin from '../../../../layout/side-nav-admin/side-nav-admin.presenter'
import { CKEditor } from 'ckeditor4-react'
import { useEffect } from 'react'
import React, {useCallback, useState} from 'react';
import axios from 'axios';
import Image from 'next/image';
import { route } from 'next/dist/server/router';
import { useRouter } from 'next/router';

export default function AdminWorkView(props) {
    
    const router = useRouter();
    const back = process.env.NEXT_PUBLIC_URI
    const [file, setFile] = useState(null);
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [price, setPrice] = useState();
    const [content, setContent] = useState('');
    const [auction, setAuction] = useState('');
    const [exhibition, setExhibition] = useState('');
    const [artistList, setArtistList] = useState([]);
    const [artistSeq, setArtistSeq] = useState();

    //input
    const onChangeTitle = (e)=>{
        const currTitle = e.target.value;
        setTitle(currTitle);
    }

    const onChangeSummary = (e) => {
        const currSummary = e.target.value;
        setSummary(currSummary);
    }
    const onChangePrice = (e) => {
        const currPrice = e.value;
        setPrice(currPrice);
    }
    const onChangeContent = (e) => {
        const currContent = e.value;
        setContent(currContent);
    }
    const onChangeAuction = (e) => {
        console.log(e)
        const currAuction = e.value;
        setAuction(currAuction);
    }

    const onChangeExhibition = (e) => {
        const currExhibition = e.value;
        setExhibition(currExhibition);
    }

    
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

    const onClickCancel = () => {
        router.push('/')
    }

    //작가 선택 불러오기
    useEffect(() => {
        axios.get(`${back}artistAllList`)
          .then((res) => {
            setArtistList(res.data);
          })
      }, [])

    // onSelect
    const onSelectArtist = (e) => {
    const currArtist = e.target.value;
    setArtistSeq(currArtist);
    console.log(artistSeq)
  }




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
                    <C.Label>작가 선택</C.Label>
                    <C.WorkArtist onChange={onSelectArtist} >
                        <option value={true}>전체</option> 
                        {artistList?.map((el, i) => (
                        <option key={i} value={artistList[i].artistSeq}>{artistList[i].artistName}</option>
                    ))}
                    </C.WorkArtist>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>작품 요약</C.Label>
                    <C.WorkSummary type="text" onChange={onChangeSummary}/> &nbsp;&nbsp;&nbsp;&nbsp;
                    <C.Label>작품 가격</C.Label>
                    <C.WorkSummary type="text" onChange={onChangePrice}/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>경매</C.Label>
                    <label>Y</label><C.WorkAuction type="radio" name='auction' value={1} onChange={onChangeAuction}/> &nbsp;&nbsp;
                    <label>N</label><C.WorkAuction type="radio" name='auction' value={2} onChange={onChangeAuction} checked/> 
                    <C.Label>전시회 유무</C.Label>
                    <label>Y</label><C.WorkExhibition type="radio" name='exhibition' value={1} onChange={onChangeExhibition}/> &nbsp;&nbsp;
                    <label>N</label><C.WorkExhibition type="radio" name='exhibition' value={2} onChange={onChangeExhibition} checked/> 
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.WorkFile type="file" onChange={handleChange}/>
                </C.InputWrapper>
                <C.InputWrapper>
                    <C.Label>상세설명</C.Label>
                </C.InputWrapper>
                <C.ContentWrapper>
                    <C.WorkContent onChange={onChangeContent}/>
                </C.ContentWrapper>
                <C.BtnWrapper>
                    <C.CancelBtn type='button' onClick={onClickCancel}>취소</C.CancelBtn>
                    <C.SubmitBtn type='button' onClick={handleClick}>등록하기</C.SubmitBtn>
                </C.BtnWrapper>
                </C.BoardForm>
            </C.WorkWrapper>
        </C.Wrapper>
        </>
    )
}