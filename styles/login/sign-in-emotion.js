import styled from "@emotion/styled";


export const Wrapper = styled.div`
    width: 100%;
    height: 700px;
    display: flex;
    flex-direction: row;
`
// Login SignIn
export const SignInForm = styled.div`
    width: 400px;
    height: 380px;
    border: 1px solid white;
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
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`

export const Email = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 25px;
    border: none;
    border-bottom: 1px solid gray;
`
export const Password = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid gray;
`
export const LoginCheck = styled.input`
`
export const InputSpan = styled.span`
    font-size: 12px;
    margin: 10px;
`
export const SignInBtn = styled.button`
    &:hover {
        color: white;
        background-color: #364D79;;
    }
    
    width: 100%;
    height: 40px;
    border: none;
    margin: 5px;

`
export const SignUpLogin = styled.span`
`
export const FindUser = styled.span`
`
export const InputLink = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
    margin: 20px;
    font-size: 15px;
`

