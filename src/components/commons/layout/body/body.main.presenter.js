import { useState } from 'react'
import * as C from './body.main.styled'


export default function LayoutBodyMain(props){

    const [img, setImg] = useState();


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
            <C.ArtColumn onClick={() => onClickImg("./images/artcat.png")} src={'./images/artcat.png'}></C.ArtColumn>
            <C.ArtColumn></C.ArtColumn>
            <C.ArtColumn></C.ArtColumn>
            <C.ArtColumn></C.ArtColumn>
            <C.ArtColumn></C.ArtColumn>
            <C.ArtColumn></C.ArtColumn>
            <C.ArtColumn></C.ArtColumn>
            <C.ArtColumn></C.ArtColumn>
            <C.ArtColumn></C.ArtColumn>
         </C.RightWrapper>
        </C.BodyWrapper>
        </>
    
    )
}