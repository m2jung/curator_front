import * as C from './body.footer.styled'
import { useState } from 'react';

export default function LayoutBodyFooter() {

    return (
        <>
        <C.FootTitle>Exhibition</C.FootTitle>
        <C.FootWrapper>
         <C.ExhibitionImage src={'./images/exhibition03.png'}>
            <C.ExhibitionTitle>기안84 <br/>제 1회 개인전</C.ExhibitionTitle>
         </C.ExhibitionImage>
         <C.ExhibitionColumn>
            <C.ExhibitionInfo>
            <C.InfoTitle>전시명</C.InfoTitle>
            <C.Info>기안84 제 1회 개인전</C.Info>
            <C.InfoTitle>기간</C.InfoTitle>
            <C.Info>2022. 03. 26 (토) - 2022. 04. 05 (화)
            INVITATION ONLY : 2022. 03. 25 (금)</C.Info>    
            <C.InfoTitle>장소</C.InfoTitle>
            <C.Info>슈페리어 갤러리 (Superior Gallery)
            서울특별시 강남구 테헤란로 528
            슈페리어타워 B1</C.Info>
            <C.InfoTitle>문의</C.InfoTitle>
            <C.Info>스타트아트코리아 02-3486-1110</C.Info>
            
            </C.ExhibitionInfo>
            {/* <C.ExhibitionInfo>
            지난 10여년 간 매주 웹툰을 연재해 온 기안84 작가는
            ‘패션왕’와 ‘복학왕’으로 자신만의 예술세계를 창출해 냈고
            끊임없는 도전과 변화로 새로운 예술을 구축해 왔다.
            2021년 복학왕의 마지막 회차를 끝으로 웹툰연재라는
            긴 여정을 마무리한 기안84는 그동안 구축해 온 세계관 속
            구성요소의 역할을 재해석하여 새롭게 확장되는 스토리를
            ‘캔버스’ 위에서 다시한번 연재하려고 한다.
            </C.ExhibitionInfo> */}
         </C.ExhibitionColumn>
        </C.FootWrapper>
        </>
    )
}