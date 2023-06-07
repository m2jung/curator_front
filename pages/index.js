import React, { Component } from "react";
import * as C from '../styles/emotion'

// 메인 홈페이지 
// 실제적인 페이지 접속 구간  (유지보수를 위해 , 셋팅 - 페이지접속 - 컨테이너 - 프레젠터)

// export default function WebMainView(){
export default function Main() {
  return (
  <>
      <C.Wrapper>
        {/* <C.HeaderTitle>이달의 베스트 작가</C.HeaderTitle> */}
         <C.HeaderWrapper>
          <C.WrapperBoxLeft></C.WrapperBoxLeft>
          <C.WrapperBoxRight>
            <C.ContentBox1></C.ContentBox1>
            <C.ContentBox2></C.ContentBox2>
            <C.ContentBox3></C.ContentBox3>
            <C.ContentBox4></C.ContentBox4>
          </C.WrapperBoxRight>
        </C.HeaderWrapper>
        <C.FooterWrapper></C.FooterWrapper>
        {/* <C.Content>
          <C.ContentTitle>이달의 베스트 작가</C.ContentTitle>
          <C.Article>
            <C.ArticleImage></C.ArticleImage>
            <C.ArticleImage></C.ArticleImage>
            <C.ArticleImage></C.ArticleImage>
            <C.ArticleImage></C.ArticleImage> 
          </C.Article>
        </C.Content>
      </C.Wrapper>
     <C.Wrapper>
      <C.Content>
      <C.ContentTitle>Exhibition</C.ContentTitle>
        <C.Exhibition></C.Exhibition>
      </C.Content> */}
     </C.Wrapper>
  </>

  );
}



