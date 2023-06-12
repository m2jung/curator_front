import styled from "@emotion/styled";

// 메뉴 - 고객센터 
export const Wrapper = styled.div`
    width: 1200px;
    height: 1100px;
    margin: auto;
    padding: 30px;   
`

export const ServiceWrapper = styled.div`
    width: 1200px;
    height: 1100px;
`

export const ServiceBanner = styled.div`
    width: 1150px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-top: 2px solid rgba(0,0,0,0.1);
    border-bottom: 2px solid rgba(0,0,0,0.1);
    padding: 30px;
    margin: auto;
`

export const ServiceTitle = styled.div`
    font-family: serif;
    font-size: 35px;
    margin: 20px 0;
`

export const ServiceSubTitle = styled.div`
    font-family: serif;
    font-size: 40px;
    margin-bottom: 30px;
`

export const ServiceBtn = styled.div`
    width: 1200px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 20px  auto;
`
export const Btn = styled.div`
      display: flex;
`
export const Link = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;
    
    width: 130px;
    height: 40px;

    text-decoration: none;
    font-size: 16px;    
    color: white;
    background-color: black;
`

export const Select = styled.select`
    width: 150px;
    height: 30px;
    margin: 15px;
    font-size: 15px;
`
export const ServiceTable = styled.table`
    width: 1200px;
    height: 520px;
    display: flex;
    font-size: 18px;
    color: rgba(0,0,0,0.9);
    margin-top: 10px;
`
export const Table = styled.table`
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 35px;
`
export const Tr = styled.tr `
    height: 30px;
`
export const Div = styled.td `
    font-size: 16px;
    width: 130px;
`
export const Title = styled.td `
    font-weight: 600;
    width: 1200px;
`
export const Icon = styled.td`
    cursor: pointer;
    text-align: end;
    color: #364D79;
`