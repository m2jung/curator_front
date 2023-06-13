import { useState } from 'react'
import * as C from './body.main.styled'


export default function LayoutBodyMain(props){

    const [img, setImg] = useState('./images/column1.png');
    const onClickImg = (image) => {
        setImg(image)
    }
    
    return (
        <>
        <C.BodyTitle>Best Art</C.BodyTitle>
        <C.BodyWrapper>
         <C.LeftWrapper>
            <C.BestArt src={img}/>
         </C.LeftWrapper>
         <C.RightWrapper>
            <C.ArtColumn onClick={()=> onClickImg('./images/column1.png')} src={'./images/column1.png'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/column2.jpg')} src={'./images/column2.jpg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/column3.jpg')} src={'./images/column3.jpg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/column4.jpg')} src={'./images/column4.jpg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/column5.png')} src={'./images/column5.png'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/column6.jpg')} src={'./images/column6.jpg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/column7.jpg')} src={'./images/column7.jpg'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/column8.png')} src={'./images/column8.png'}></C.ArtColumn>
            <C.ArtColumn onClick={()=> onClickImg('./images/column9.jpeg')} src={'./images/column9.jpeg'}></C.ArtColumn>
         </C.RightWrapper>
        </C.BodyWrapper>
        </>
    
    )
}