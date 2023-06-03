import styled from "@emotion/styled"

export const Wrapper = styled.div`
    width: 1200px;
    height: 1700px;
    margin: auto;
    padding: 40px;   
    border: 1px solid black;
`

export const ExhibitionBanner = styled.div`
    width: 1200px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    padding: 20px;
    margin: auto;
   
    /* background-image: url('/images/pattern.png');
    background-size: cover;
    opacity: 0.8; */
`

export const BannerTitle = styled.div`
    font-family: serif;
    font-size: 35px;
    margin-bottom: 20px;
`
export const BannerSubTitle = styled.div`
    font-family: serif;
    font-size: 40px;
    margin-bottom: 30px;
`

export const ExhibitionWrapper = styled.div`
    width: 1100px;
    height: 1500px;    
    display: flex;
    justify-content: space-between;
    padding: 60px;
`

export const ExhibitionImage = styled.div`
    width: 600px;
    height: 700px;
    background-image: url('/images/gogh.jpg');
    background-position: center;
    background-size: cover;
    position: relative;
`

export const ExhibitionInfo = styled.div`
    height: 700px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`
export const InfoTitle = styled.div`
    font-size: 70px;
`
export const InfoSubTitle = styled.div`

`

export const SubTitle_1 = styled.div`
    font-size: 30px;
`
export const SubTitle_2 = styled.div`
    font-size: 20px;
`