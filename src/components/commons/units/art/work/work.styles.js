import styled from "@emotion/styled";

export const Table = styled.table `
    width: 380px;
    height: 180px;
    margin: 10px auto;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 10px;
    text-align: center;
    font-size: 16px;
`
export const Tr = styled.tr`
`
export const Th = styled.th``
export const ThNumber = styled.th`
    width: 30px;
`
export const Td = styled.td``
export const Number = styled.td`
`
// 상세 페이지 
export const Wrapper = styled.div`
    width: 1200px;
    height: 2000px;
    margin: 50px auto;
`

export const WorkWrapper = styled.div`
    width: 1150px;
    height: 600px;
    margin: auto;
    padding: 40px;  
    border-top : 2px solid rgba(0,0,0,0.1);
    display: flex;
    justify-content: space-evenly;
`

export const WorkSection = styled.div`
    width: 530px;
    height: 580px;
    margin-top: 5햣0px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
`

export const WorkImage = styled.div`
    width: 510px;
    height: 580px;
    align-content: flex-end;
    background-image: url('/images/art03.jpeg');
    background-position: center;
    background-size: cover;
`

export const WorkInfo = styled.div`
    width: 400px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    font-size: 18px;
    padding: 30px;
`

export const WorkColumn = styled.div`
    height: 300px;    
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
`

export const WorkTitle = styled.div`
    font-size: 25px;
    font-weight: 600;
    padding: 10px;
`
export const WorkNo = styled.div`
    width: 100px;
    padding: 5px 0;
    margin: 0 0 25px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #364D79;
`
export const WorkSummary = styled.div`
    width: 100%;
    color: rgba(0,0,0,0.8);
    font-size: 18px;    
    padding: 25px 10px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

export const WorkMemo = styled.div`
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-around;
    font-size: 17px;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

export const WorkPrice = styled.div`
    height: 75px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`


export const WorkSize = styled.div`
    margin-bottom: 10px;
`
export const WorkType = styled.div``

export const Price = styled.div`
    font-size: 17px;
    font-weight: 600;
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
export const Btn = styled.button`
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
    display: flex;
    padding: 15px;
    justify-content: space-between;   
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