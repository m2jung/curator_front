import styled from "@emotion/styled";

// Login SignUp

export const Wrapper = styled.div`
    width: 100%;
    height: 850px;
    display: flex;
    flex-direction: row;
`
export const SignUpForm = styled.form`
    width: 450px;
    height: 550px;
    padding: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
`
export const SignUpTitle = styled.span`
    font-size: 22px;    
    border-bottom: 2px solid gray;
    padding: 20px;
    margin-bottom: 25px;
`

export const SignUpInput = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 1px solid white;
`
export const SectionColumn = styled.div``

export const SectionRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 15px 0 5px;
`

export const Label = styled.div`
    font-size: 15px;
    margin: 5px 0 10px 0;
    opacity: 70%;
`    
export const Email = styled.input`
    width: 195px;
    height: 30px;
    margin-bottom: 10px;
    
    border: none;
    border-bottom: 1px solid gray;
`
export const Domain = styled.select`
    width: 155px;
    height: 25px;
    margin-left: 10px;
`
export const Button = styled.button `
    width: 63px;
    height: 25px;
    margin-left: 5px;
    border: 1px solid black;
`

export const EmailCheck = styled.div`
    display: flex;
    flex-direction: row;
    margin: 7px 0;
`

// export const Timer = styled.span`
//     text-align: center;
//     font-size: 14px;
//     margin-left: auto;
//     padding: 4px;

// `
export const EmailToken = styled.input`
    width: 110px;
    height: 20px;
    font-size: 12px;
`

export const BtnToken = styled.button`
    width: 65px;
    height: 25px;
    font-size: 12px;
    border: 1px solid black;
    border-radius: 5px;
    margin-left: 5px;
    background-color: #364D79;
    color: white;
`


export const Name = styled.input`
    width: 150px;
    height: 30px;
    margin-bottom: 10px;
    border: none;
    border-bottom: 1px solid gray;
`
export const NicName = styled.input`
    width: 150px;
    height: 30px;       
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid gray;
`
export const Tel = styled.input `
    width: 100px;
    height: 30px;       
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid gray;
    text-align: center;
`

export const Password = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid gray;
`
export const RePassword = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid gray;
` 
export const Addr = styled.input`
    width: 100%;
    height: 30px;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid gray;
` 
export const LoginCheck = styled.input`
`
export const SignUpCheck = styled.div`
    font-size: 13px;
    margin: 5px;
`
export const SignUpBtn = styled.button`
    &:hover {
        color: white;
        background-color: #364D79;;

    }
    width: 200px;
    height: 40px;
    margin: 20px auto;
    border: none;
`
