import styled from "@emotion/styled";

//Main WebSize
// export const Body = styled.body`
//     width: 100vw;
// `
export const Wrapper = styled.div`
    width: 1550px;
    height: 3000px;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const HeaderWrapper = styled.div`
    width: 1500px;
    height: 700px;
    background-color: yellow;
    display: flex;
    margin-top : 50px;
`

// export const HeaderTitle = styled.div`
//     margin: 40px auto 20px 10px;
//     font-size: 40px;
    
// `

export const WrapperBoxLeft = styled.div`
    width: 750px;
    height: 750px;
    display: flex;
    background-image: url('/images/art07.jpeg');
    background-position: center;
    background-size: cover;
    border: 1px solid blue;
`
export const WrapperBoxRight = styled.div`
    display: grid;
    grid-template-columns: 375px 375px; 
    grid-template-rows: 375px 375px; 
`
export const ContentBox1 = styled.div`
    background-color: #FBFBFB; 
`
export const ContentBox2 = styled.div`
    background-image: url('/images/art05.jpg');
    background-position: center;
    background-size: cover;
    border: 1px solid black;
`
export const ContentBox3 = styled.div`
        background-image: url('/images/art06.jpg');
    background-position: center;
    background-size: cover;
    border: 1px solid black;
`
export const ContentBox4 = styled.div`

`




export const FooterWrapper = styled.div`
    width: 1500px;
    height: 700px;
    background-color: blue;
`