import styled from "@emotion/styled";

//Main WebSize
// export const Body = styled.body`
//     width: 100vw;
// `
export const Wrapper = styled.div`
    width: 1300px;
    height: 3000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeaderWrapper = styled.div`
    width: 1400px;
    height: 800px;
    display: flex;
    margin-top : 50px;
`

// export const HeaderTitle = styled.div`
//     margin: 40px auto 20px 10px;
//     font-size: 40px;
    
// `

export const WrapperBoxLeft = styled.div`
    width: 750px;
    height: 700px;
    display: flex;
    background-color: beige;

`
export const WrapperBoxRight = styled.div`
    display: grid;
    grid-template-columns: 375px 375px; 
    grid-template-rows: 330px 370px; 
    
`
export const ContentBox1 = styled.div`
    background-color: #FBFBFB; 
`
export const ContentBox2 = styled.div`
    background-image: url('/images/art10.jpeg');
    background-position: center;
    background-size: cover;
`
export const ContentBox3 = styled.div`
    background-image: url('/images/art09.jpg');
    background-position: center;
    background-size: cover;

`
export const ContentBox4 = styled.div`
    background-color: #FBFBFB;    
`




export const FooterWrapper = styled.div`
    width: 1500px;
    height: 700px;
    border: 1px solid black;
`