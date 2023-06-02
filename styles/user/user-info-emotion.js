import styled from "@emotion/styled";

//회원정보 전체 Wrapper
export const Wrapper = styled.div`
    width: 1300px;
    height: 1600px;
    display: flex;
    margin: 30px;
    padding: 20px;
    margin : auto;
`

export const InfoWrapper= styled.div`
    width: 900px;
    height: 1500px;
    border-radius: 20px;
    box-shadow: 1px 1px 5px rgba(0,0,0,0.3);
    padding: 50px;
`

export const InfoTitle = styled.div`
    font-size: 17px;
    padding: 20px;
`

export const Profile= styled.div`
    display: flex;
    padding: 25px 40px 45px;
    border-bottom: 1px solid rgba(0,0,0,0.1);
`

export const MyImage = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 30px;
    background-image: url('/images/imageiu.jpg');
    background-position: center;
    background-size: cover;
`

// 회원정보 수정 
export const MyProfile = styled.div`
    width: 300px;
    height: 60px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 15px;
`
export const MyName = styled.div`
    color: rgba(0,0,0,0.8);
    font-size: 15px;
    padding: 5px;
`
export const MyEmail = styled.div`
    color: gray;
    font-size: 15px;
`

export const BtnModify = styled.button`
    width: 60px;
    height: 22px; 
    margin-left: auto;
    margin-right: 15px;
`

export const Label = styled.div`
    font-size: 15px;
    text-align: center;
    color: rgba(0,0,0,0.8);
`

export const MyPassword = styled.input`
    width: 200px;
    height: 15px;
    border: none;
    border-bottom: 1px solid gray;
    margin: 0 10px;
`


// 구매내역

export const PaymentWrapper = styled.div`
    width: 1000px;
    height: 300px;
`

export const MembershipTable = styled.div`
    width: 100%;
    height: 55px;
    margin: auto;
    border: 4px solid rgba(0,0,0,0.2);
    display:flex;
    align-items: center;
    justify-content: flex-start;
`
    
export const MembershipInfo = styled.div`
    width: 80px;
    padding-left: 20px;

`
export const MembershipLevel = styled.div`
    font-size: 12px;
    width: 200px;
    display: flex;
    flex-direction: column;
`
export const DottedLine = styled.div`
    border-bottom: 1px dotted rgba(0,0,0,0.2);
    margin: 4px;
`
export const Level = styled.div``
export const Coupon = styled.div``

export const PaymentTable = styled.div`
    border: 2px solid rgba(0,0,0,0.2);
    width: 100%;
    height: 200px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
export const PaymentColumn = styled.div``

export const BtnPayMent = styled.button`
    &:hover {
        color: white;
        background-color: #364D79;;
    }
    width: 130px;
    height: 30px;
    border: 1px solid black;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    background-color: white;
    margin: 10px;
`
export const PaymentMessage = styled.div`
    font-size: 15px;
    margin-top: 20px;
`
export const BtnBoardWrite = styled.button`
    &:hover {
        color: white;
        background-color: #364D79;;
    }
    width: 130px;
    height: 30px;
    border: 1px solid black;
    box-shadow: 1px 1px 1px rgba(0,0,0,0.3);
    background-color: white;
    margin: 10px;
`
