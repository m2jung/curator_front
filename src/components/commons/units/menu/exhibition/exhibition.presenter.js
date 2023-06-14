import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'
import * as C from './exhibition.styles' 
import axios from 'axios'
import Image from 'next/image';
import React, {useCallback, useState, useEffect} from 'react';

export default function ExhibitionView(props) {

  const back = process.env.NEXT_PUBLIC_URI

  const [image, setImage] = useState();
  const [data, setData] = useState();
  let dataArr;
  const [base, setBase] = useState();
  const [mapping, setMapping] = useState();
  var imageArray = [];
 
  useEffect(() => {
    axios.get(`${back}exhibitionList`)
          .then((res) => {
            let img;
            let array
            console.log(res.data)
            dataArr = res.data
              for (let i = 0; i < res.data.length; i++) {
                axios.post(`${back}exhibitionImage`, {"exhibitionBanner": res.data[i].exhibitionBanner}, { headers: { "Content-type": "application/json; charset=UTF-8" }, responseType: 'blob' })
                .then((response) => {
                    // console.log(res.data)
                    const myFile = new File([response.data], dataArr[i].exhibitionBanner);
                    const reader = new FileReader();
                    reader.readAsDataURL(myFile);
                    
                    reader.onloadend = () => {
                        // console.log(reader.result)
                       setBase(reader.result);
                    array = {
                      exhibitionSeq: dataArr[i].exhibitionSeq,
                      exhibitionName: dataArr[i].exhibitionName,
                      exhibitionDate: dataArr[i].exhibitionDate,
                      exhibitionExplain: dataArr[i].exhibitionExplain,
                      exhibitionBanner: reader.result,
                    }
                    
                    imageArray.push(array);
                    setMapping(imageArray)
                    // console.log(base64)
                }
                    

                })
                }

        })
        .catch((error) => {    
            
        })
    }, []) 

    console.log(mapping)

  return (
    <>  
        <C.Wrapper>
         <C.ExhibitionBanner>
            <C.BannerTitle>전시회 정보 </C.BannerTitle>
            <C.BannerSubTitle>Exhibition</C.BannerSubTitle>
         </C.ExhibitionBanner>
         
         <C.ExhibitionWrapper>
            <C.ExhibitionMenu>오늘의 전시회</C.ExhibitionMenu>
            <C.ExhibitionTitle>[ 코리아 IT 아카데미 ]
            {mapping?.map((el, i) => (
              <>
                <C.ExhibitionSubTitle>{mapping[i].exhibitionName} </C.ExhibitionSubTitle>
                <C.ExhibitionDate>{mapping[i].exhibitionDate}</C.ExhibitionDate>
                <p>{mapping[i].exhibitionExplain}</p>
                <C.ExhibitionImage src={mapping[i].exhibitionBanner} />
              </>
            ))}
            </C.ExhibitionTitle>            
         </C.ExhibitionWrapper>

          <C.ExhibitionWrapper>
            <C.ExhibitionMenu>작가 전시 정보</C.ExhibitionMenu>
            <C.ExhibitionTitle> 신인 작가 전시회 & 공모전 
            <C.ExhibitionSubTitle>Art Website 에서 작가의 "꿈"을 이루세요.</C.ExhibitionSubTitle>
            </C.ExhibitionTitle> 
              <C.ExhibitionColumn>
               <C.Column>
                <C.ColumnImage></C.ColumnImage>
                <C.ColumnInfo>
                 <C.ColumnTitle>[2023 코리아 아트 첫 전시회] 신인 작가 미술제</C.ColumnTitle>
                 <C.ColumnSubTitle> 유미정 작가 외 4명 </C.ColumnSubTitle>
                 <C.ColumnDate><C.Btn>전시중</C.Btn>2023.06.05 ~ 06.22</C.ColumnDate>
                </C.ColumnInfo>
               </C.Column>
               <C.Column>
               <C.ColumnImage></C.ColumnImage>
                <C.ColumnInfo>
                 <C.ColumnTitle>[START PLUS] '일상속의 예술' _유미정 작가 초대전  </C.ColumnTitle>
                 <C.ColumnSubTitle> 유미정 작가 </C.ColumnSubTitle>
                 <C.ColumnDate><C.Btn>전시중</C.Btn>2023.06.05 ~ 06.22</C.ColumnDate>
                </C.ColumnInfo>
               </C.Column>
               <C.Column>
               <C.ColumnImage></C.ColumnImage>
                <C.ColumnInfo>
                 <C.ColumnTitle>[대치 전시장] 동녘에_꽃이_피다 _이주호 작가 초대전  </C.ColumnTitle>
                 <C.ColumnSubTitle> 이주호 작가 </C.ColumnSubTitle>
                 <C.ColumnDate><C.Btn>전시중</C.Btn>2023.06.05 ~ 06.22</C.ColumnDate>
                </C.ColumnInfo>
               </C.Column>
              </C.ExhibitionColumn>          
              <C.ExhibitionColumn>
               <C.Column>
               <C.ColumnImage></C.ColumnImage>
                <C.ColumnInfo>
                 <C.ColumnTitle>[더 트리니티 갤러리] 정연호: The Light Work</C.ColumnTitle>
                 <C.ColumnSubTitle> 정연호 작가 </C.ColumnSubTitle>
                 <C.ColumnDate><C.Btn>전시중</C.Btn>2023.06.05 ~ 06.22</C.ColumnDate>
                </C.ColumnInfo>
               </C.Column>
               <C.Column>
               <C.ColumnImage></C.ColumnImage>
                <C.ColumnInfo>
                 <C.ColumnTitle>[신라스테이 역삼] 극사실주의 회화, 이범석 초대전_HIDE </C.ColumnTitle>
                 <C.ColumnSubTitle> 이범석 작가  </C.ColumnSubTitle>
                 <C.ColumnDate><C.Btn>전시중</C.Btn>2023.06.05 ~ 06.22</C.ColumnDate>
                </C.ColumnInfo>
               </C.Column>
               <C.Column>
               <C.ColumnImage></C.ColumnImage>
                <C.ColumnInfo>
                 <C.ColumnTitle>[갤러리아카데미] 이준삼 작가 추상회화전_ Movement_Recovery</C.ColumnTitle>
                 <C.ColumnSubTitle> 이준삼 작가 </C.ColumnSubTitle>
                 <C.ColumnDate><C.Btn>전시중</C.Btn>2023.06.05 ~ 06.22</C.ColumnDate>
                </C.ColumnInfo>
               </C.Column>
              </C.ExhibitionColumn>              
          </C.ExhibitionWrapper>


          <LayoutPageNumber/>
        </C.Wrapper>
    </>
  )

}