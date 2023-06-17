import { useState, useEffect } from 'react'
import axios from 'axios';
import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'
import * as C from './genre.styles'
import { useCallback } from 'react';

export default function GenreView(props) {

   const back = process.env.NEXT_PUBLIC_URI

   const [genreList, setGenreList] = useState();
   const [postList, setPostList] = useState();
   const [mapping, setMapping] = useState();
   const [file, setFile] = useState();
   var imageArray = [];
   var array;
   var dataArr; 

   
    // 장르명 get
  useEffect(() => {
   axios.get(`${back}genreList`)
     .then((res) => {
       setGenreList(res.data);
     })

   axios.get(`${back}postList`) 
     .then((res) => {
        setMapping(res.data)   
     })
   }, [])

   const onClickPostAll = async () => {
      setMapping([])
      axios.get(`${back}postList`) 
      .then((res) => {
         setMapping(res.data)   
      })
   }
 
   const onClickPost = (genreSeq) => {  
      axios.get(`${back}genreView?genreSeq=${genreSeq}`)
      .then((res) => {
        let img;
        let array
        console.log(res.data)
        dataArr = res.data
          for (let i = 0; i < res.data.length; i++) {
           axios.post(`${back}genrePostImageName`, {"postImageName": res.data[i].postImageName}, { headers: { "Content-type": "application/json; charset=UTF-8" }, responseType: 'blob' })
            .then((response) => {       
               setMapping(imageArray)
            })
            .catch((error) => {    
               
            })
         }         
      })
   }

   
   

  return (
    <>   
        <C.Wrapper>
         <C.GenreBanner>
            <C.BannerTitle>작품 판매 </C.BannerTitle>
            <C.BannerSubTitle>Buy Original Paintings</C.BannerSubTitle>
         </C.GenreBanner>
            <C.GenreSelect>
               <C.Genre onClick={onClickPostAll} >전체보기</C.Genre> 
               {genreList?.map((el, i) => (
               <C.Genre onClick={() => onClickPost(el.genreSeq)} >{el.genreName}</C.Genre>
               ))}
               <C.Select>
                  <option value={true}>추천순</option>
                  <option>인기순</option>
                  <option>최신순</option>
                  <option>리뷰 많은순</option>
                  <option>저가순</option>
                  <option>고가순</option>
               </C.Select>
            </C.GenreSelect> 
         <C.GenreWrapper> 
         {mapping?.map((el, i) => (
            <C.GenreColumn key={el.postSeq} href="/art/work">
               <div>
                  <C.ColumnImage src={el.postImageName} fill={true} /> 
                     <C.ColumnInfo>
                        <C.ColumnTitle>{el.postTitle}</C.ColumnTitle>
                        <C.ColumnContent>{el.postSummary}</C.ColumnContent>
                        <C.ColumnArtist> 
                           <C.ColumnPrice>{el.postPrice} 원</C.ColumnPrice>
                        </C.ColumnArtist>
                        <C.ColumnArtist>
                           <C.ColumnProfile></C.ColumnProfile>
                           <C.ColumnName>유미정</C.ColumnName>
                        </C.ColumnArtist>
                     </C.ColumnInfo>
                  </div>
            </C.GenreColumn>
         ))}
         </C.GenreWrapper>
         <LayoutPageNumber/>

        </C.Wrapper>
    </>
  )

}