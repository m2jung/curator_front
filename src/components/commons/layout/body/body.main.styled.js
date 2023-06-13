import styled from "@emotion/styled";

export const BodyWrapper = styled.div`    
    width: 1300px;
    height: 700px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 20px;
    margin-top : 30px;   
`
export const BodyTitle = styled.h1`
    margin: 70px  0 0;
    font-size: 40px;
    border-bottom: 2px solid rgba(0,0,0,0.7);
`
export const LeftWrapper = styled.div`
    width: 550px;
    height: 670px;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const BestArt = styled.img`
    width: 490px;
    height: 625px;
    
`
export const RightWrapper = styled.div`
    width: 685px;
    height: 690px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
`
export const ArtColumn = styled.img`
    width: 210px;
    height: 210px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.5);
    border-radius: 10px;
    opacity: 0.3;

    &:hover {
        opacity: 1;
    }

`


