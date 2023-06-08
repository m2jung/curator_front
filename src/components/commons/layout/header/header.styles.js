import styled from "@emotion/styled";


export const HeaderWrapper = styled.div`
    width: 1200px;
    height: 310px;
    display: flex;
    flex-direction: column;
    margin: auto;
`
export const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    justify-content: center;
`

export const MainTitle = styled.div`
    width: 20px;
    height: 60px;
    margin: 30px auto;
    border-style: outset;
    background-image: url('/images/pop06.png');
    background-position: center;
    background-size: cover;
    display: flex;
    justify-content:center;
    align-items:center;
    padding: 20px;
`
export const SubTitle = styled.div`
    font-size: 40px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: 3px 3px 1px lightgray;
    margin: auto;
`
export const MyProfile = styled.div`
    width: 1200px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`
export const SignInMenu = styled.a`
    &:hover{
    font-weight: bold;
    }
    margin: 0 10px;
`
export const SignupMenu = styled.a`
    &:hover{
    font-weight: bold;
    }
    margin: 0 10px;
    
`
export const InfoMenu = styled.a`
    &:hover{
    font-weight: bold;
    }
   margin: 0 10px;
`

export const MyName = styled.div``

export const MyImage = styled.div`
    width: 40px;
    height: 40px;
    background-color: pink;
    border-radius: 20px;
    margin: 0 10px;
`
export const Navigator = styled.div`
    border: 1px white solid;
    display: flex;
    justify-content: center;
    margin: 15px;
`
export const Menu = styled.div`
    &:hover{
        font-weight: bold;
    }
    font-size: 19px;
    margin: 20px 25px;
`
export const Line = styled.div`
    width: 1200px;
    border: 1px solid rgba(0,0,0,0.2);
    margin: 10px auto ;
`
