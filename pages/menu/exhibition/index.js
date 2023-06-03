import * as C from '../../../styles/menu/exhibition.emotion'

export default function ExhibitionView() {

    return (
        <>
        <C.Wrapper>
         <C.ExhibitionBanner>
            <C.BannerTitle>전시회 정보 </C.BannerTitle>
            <C.BannerSubTitle>Exhibition</C.BannerSubTitle>
         </C.ExhibitionBanner>
         
         <C.ExhibitionWrapper>
            <C.ExhibitionInfo>
                <C.InfoTitle>Vincent <br/>Van Gogh</C.InfoTitle>
                <C.InfoSubTitle>
                </C.InfoSubTitle>
            </C.ExhibitionInfo>
            <C.ExhibitionImage></C.ExhibitionImage>
         </C.ExhibitionWrapper>
         <C.ExhibitionWrapper></C.ExhibitionWrapper>

        </C.Wrapper>
        </>
    )
}