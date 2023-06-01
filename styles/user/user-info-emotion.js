import styled from "@emotion/styled";

export const Wrapper= styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`

export const InfoWrapper= styled.div`
    width: 800px;
    height: 500px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 50px;
`

export const InfoTitle = styled.div`
    font-size: 20px;
    padding: 30px;
`

export const Profile = styled.div`
    display: flex;
    padding: 20px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`
export const MyImage = styled.div`
    width: 60px;
    height: 60px;
    background-color: gray;
    border-radius: 30px;
`
export const MyProfile = styled.div`
    width: 300px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
`
export const MyName = styled.div`
    font-size: 18px;
    padding: 5px;
`
export const MyEmail = styled.div`
    color: gray;
    font-size: 15px;
`

export const BtnModify = styled.button`
    width: 60px;
    height: 22px;
    margin: 15px 0 0 auto;
`