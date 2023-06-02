import styled from "@emotion/styled";

//회원정보 전체 Wrapper
export const Wrapper = styled.div`
    width: 100%;
    height: 1500px;
    display: flex;
    margin: 30px;
    padding: 20px;
`

export const InfoWrapper = styled.div`
    width: 200px:
    height: 100%;
    margin: auto;
    display: flex;
    flex-direction: row; 
`

export const InfoMenu = styled.div`
    width: 200px;
    height: 500px;
    padding: 80px 60px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
`
export const InfoProfile = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
`

export const InfoList = styled.ul`
    font-size: 17px;
    list-style: none;
`
export const List = styled.li`
    &:hover{
        font-weight: bold;
    }
    padding: 20px;
`

export const ProfileImage = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 50px;
    background-color: gray;
    margin: 30px;
`
export const UserName = styled.div``
export const UserEmail = styled.div``

export const InfoContent = styled.div`
    width: 80%;
    height: 100%;

`
export const MyPassword = styled.div``