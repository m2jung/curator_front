import styled from "@emotion/styled";

//에러 메세지
export const EmailError = styled.div`
    color: gray;
    font-size: 14px;
`
export const PasswordError = styled.div`
    color: gray;
    font-size: 14px;
`

// 로그인 
export const Wrapper = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: row;
`
export const SignInForm = styled.form`
    width: 480px;
    height: 470px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    margin: auto;
`

export const SignInTitle = styled.div`
    font-size: 23px;
`

export const InputWrapper = styled.div`
    width: 350px;
    height: 300;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`

export const Email = styled.input`
    width: 100%;
    height: 33px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid gray;
`
export const Password = styled.input`
    width: 100%;
    height: 33px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid gray;
`
export const LoginCheck = styled.input`
`
export const InputSpan = styled.span`
    font-size: 14px;
    padding: 15px 10px;
`
export const SignInBtn = styled.button`
    &:hover {
        color: white;
        background-color: #364D79;
    }
    
    width: 100%;
    height: 40px;
    border: none;
    margin: 5px;

`
export const SignUpLogin = styled.span`
    font-size: 15px;
    &:hover {
        font-weight: 600;
    }
`
export const FindUser = styled.span`
    font-size: 15px;
    &:hover {
        font-weight: 600;
    }
`
export const InputLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin: 10px;
    font-size: 15px;
`



