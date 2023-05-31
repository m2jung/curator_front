import axios from 'axios'
import {useState} from 'react'
import LayoutBanner from './banner.presenter'
import * as C from './banner.styles' //한방에 가져오기 
import { carousel } from 'antd'
import { create } from 'domain'

const { createRoot } = ReactDOM;


export default function BannerContainer() {
const App = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };

}
  return (
    <C.Carousel afterChange={onChange}>
      <div>
        <C.ContentStyle>1</C.ContentStyle>
      </div>
      <div>
        <C.ContentStyle>2</C.ContentStyle>
     </div>
      <div>
        <C.ContentStyle>3</C.ContentStyle>
      </div>
      <div>
        <C.ContentStyle>4</C.ContentStyle>
      </div>
    </C.Carousel>
  );
};
const ComponentDemo = App;


createRoot(mountNode).render(<ComponentDemo />);
