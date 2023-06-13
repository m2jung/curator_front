import styled from "@emotion/styled";

// 메뉴 - 장르 

export const Wrapper = styled.div`
    width: 1200px;
    height: 1500px;
    margin: auto;
    padding: 40px;   
`

export const GenreBanner = styled.div`
    width: 1150px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 2px solid rgba(0,0,0,0.1);
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
    margin: 20px 0;
`
export const BannerSubTitle = styled.div`
    font-family: serif;
    font-size: 40px;
    margin-bottom: 30px;
`
export const GenreSelect = styled.div`
    width: 1150px;
    height: 20px;
    display: flex;
    align-items: center;
    margin: auto;
    padding: 35px;
`
export const Select = styled.select`
    width: 110px;
    height: 30px;
    margin-left: auto;
    font-size: 15px;

`

export const Genre = styled.button`
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
    margin-top: 30px;
`

export const GenreColumn = styled.a`
    width: 270px;
    height: 390px;
    box-shadow: 1px 1px 4px rgba(0,0,0,0.3);
    margin: 18px;
    text-decoration: none;
    color: black;
`
export const ColumnImage = styled.div`
    &:hover {
        opacity: 0.7;
        transition: 0.2s ease-in-out; 
    }
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`


export const ColumnInfo = styled.div`
    &:hover {
        z-index: 1;
        opacity: 1;
        transition: 0.2s ease-in-out;
    }
    width: 100%;
    height: 100%;
    opacity: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
`
export const ColumnTitle = styled.div`
    font-weight: 500;
    margin-bottom: 5px;
`

export const ColumnContent = styled.div`
    font-size: 15px;
`
export const ColumnProfile = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 10px;
    background-image: url('/images/imageiu.jpg');
    background-position: center;
    background-size: cover;
    margin-right: 5px;
`

export const ColumnArtist = styled.span`
    display: flex;
    font-size: 14px;
    margin:10px;
`

export const ColumnIcon = styled.div`
    color: #FF4B87;
    margin-left: auto;
`

export const ColumnName = styled.span``

export const ColumnPrice = styled.div``

export const PageNumber = styled.div`
    width: 100px;
    display: flex;
    justify-content: space-between;
    margin: auto;
    margin-top: 40px;
    padding: 3px;
`

export const Page = styled.div`
    
`