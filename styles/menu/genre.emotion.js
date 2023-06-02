import styled from "@emotion/styled"

export const Wrapper = styled.div`
    width: 1200px;
    height: 1700px;
    margin: auto;
    padding: 40px;   
`

export const GenreBanner = styled.div`
    width: 1200px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-bottom: 2px solid rgba(0,0,0,0.2);
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
`
export const GenreSelect = styled.div`
    width: 1150px;
    height: 20px;
    display: flex;
    align-items: center;
    margin: auto;
    padding: 30px;
`
export const Select = styled.select`
    width: 110px;
    height: 15px;
    padding: 20px;  
    border-radius: 20px;
    margin-left: auto;
`

export const Genre = styled.div`
    &:active {
        color: white;
        background-color: black;
    }
    width: 70px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 10px;
    border: 1px solid black;
    border-radius: 20px;
    padding: 2px;
    
`

// =================
export const GenreWrapper = styled.div`
    display: flex;
    justify-content: center;
`

export const GenreColumn = styled.div`
    width: 270px;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    border-radius: 10px;
    margin: 23px;
`
