import styled from "@emotion/styled";

// 상세 페이지 
export const Wrapper = styled.div`
    width: 1200px;
    height: 3000px;
    margin: 30px auto;
`

export const WorkWrapper = styled.div`
    width: 1200px;
    height: 700px;
    margin: auto;
    padding: 40px;  
    display: flex;
    justify-content: space-between;
`

export const WorkSection = styled.div`
    width: 570px;
    height: 570px;
    display: flex;
    justify-content: center;
`

export const WorkImage = styled.div`
    width: 500px;
    height: 570px;
    background-image: url('/images/art03.jpeg');
    background-position: center;
    background-size: cover;
`

export const WorkInfo = styled.div`
    border-top: 3px solid rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    font-size: 18px;
    padding: 20px;
`
export const WorkTitle = styled.div`
    font-size: 23px;
    font-weight: 600;
`
export const WorkNo = styled.div`
    width: 100px;
    text-align: center;
    color: white;
    background-color: black;
`
export const No = styled.span``
export const WorkSummary = styled.div``

export const WorkMemo = styled.div``
export const WorkSize = styled.div`
    margin-bottom: 10px;
`
export const WorkType = styled.div``

export const WorkPrice = styled.div`
    font-size: 17px;
`
export const WorkBuy = styled.span`
    width: 45px;
    height: 20px;
`

export const WorkDate = styled.div`
    font-size: 14px;
`

export const WorkBtn = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
`
export const BuyBtn = styled.button`
    &:hover{
        color: white;
        background-color: black;
    }
    width: 170px;
    height: 47px;
    font-size: 17px;
    background-color: white;
    margin-right: 15px;
`
export const WishBtn = styled.button`
    &:hover{
        color: white;
        background-color: black;
    }
    width: 170px;
    height: 47px;
    font-size: 17px;
    background-color: white;
`
export const FavoritBtn = styled.div`
    font-size: 25px;
    color: pink;
    margin-left: auto;
    padding: 5px;
`
export const WorkContent = styled.div`
    width: 1200px;
    height: 600px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`
export const WorkContentImage = styled.div`
    width: 250px;
    height: 200px;
    background-image: url('/images/real.png');
    background-position: center;
    background-size: cover;
`
export const WorkContentBox = styled.div`
    width: 450px;
    height: 80px;
    font-size: 22px;
    line-height: 40px;
    margin: 20px;
`

export const WorkArticle = styled.div`
    width:  900px;
    height: 600px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin: 200px auto;
`

export const Article = styled.div`
    width: 320px;
    height: 450px;
    border: 2px solid rgba(0,0,0,0.1);
    border-radius: 20px;
    box-shadow: 1px 1px 5px white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    line-height: 30px;
    padding: 30px;
`

export const ArticleImage = styled.div`
    width: 400px;
    height: 500px;
    background-image: url('/images/art03.jpeg');
    background-position: center;
    background-size: cover;
`

export const WorkProfile = styled.div`
    width: 1000px;
    height: 100px;
    border: thick double gray;
`