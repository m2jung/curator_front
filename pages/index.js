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
          <C.LeftWrapper></C.LeftWrapper>
          <C.RightWrapper>
            <C.Column>
              <C.Image1></C.Image1>
              <C.Image2></C.Image2>
            </C.Column>
            <C.Column>
              <C.Image3></C.Image3>
              <C.Image4></C.Image4>
            </C.Column>
          </C.RightWrapper>
         </C.HeaderWrapper>
          
{/* 
          <C.HeaderWorkBanner>
            <C.HeaderWorkImage1></C.HeaderWorkImage1>
            <C.HeaderWorkImage2></C.HeaderWorkImage2>
            <C.HeaderWorkImage3></C.HeaderWorkImage3>
            <C.HeaderWorkImage4></C.HeaderWorkImage4>
          </C.HeaderWorkBanner>
 */}

 






        
      
     </C.Wrapper>
  </>

  );
}



