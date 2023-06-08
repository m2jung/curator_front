import styled from "@emotion/styled";

// 메뉴 - 고객센터 
export const Wrapper = styled.div`
    width: 1200px;
    height: 900px;
    margin: auto;
    padding: 40px;   
`

export const ServiceWrapper = styled.div`
    width: 1200px;
    height: 800px;
`

export const ServiceBanner = styled.div`
    width: 1150px;
    height: 230px;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-bottom: 2px solid rgba(0,0,0,0.1);
    padding: 20px;
    margin: auto;
`

export const ServiceTitle = styled.div`
    font-family: serif;
    font-size: 35px;
`

export const ServiceSubTitle = styled.div`
    font-family: serif;

    margin-bottom: 16px;
`

export const Link = styled.a`
    text-decoration: none;
    font-size: 17px;
    padding: 12px;
    color: white;
    background-color: black;
`

export const Select = styled.select`
    width: 150px;
    height: 26px;
    margin: 15px;
`
export const ServiceTable = styled.table`
    width: 1200px;
    height: 530px;
    display: flex;
    font-size: 18px;
    color: rgba(0,0,0,0.9);
    margin-top: 10px;
`
export const Table = styled.table`
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 40px;
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
