import * as C from './sign-in.styles' //한방에 가져오기 
  
export default function SignInView(props) {
    return (
      <>
        <SignInWrapper>
          <Login></Login>
          <Password></Password>
        </SignInWrapper>
      </>
    )
}