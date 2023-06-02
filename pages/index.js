import React, { Component } from "react";
import Slider from "react-slick";
import * as C from '../styles/emotion'

// 메인 홈페이지 
// 실제적인 페이지 접속 구간  (유지보수를 위해 , 셋팅 - 페이지접속 - 컨테이너 - 프레젠터)

// export default function WebMainView(){
export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
  return (
  <>
      <C.Wrapper>
        <C.Content>
          <C.ContentTitle>BestArtist</C.ContentTitle>
          <C.Article>
          <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
            </Slider>
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
      </C.Content>
     </C.Wrapper>
  </>

  );
}

}

