import * as C from '../../../styles/login/sign-in-emotion'
import Link from 'next/link'

// 로그인 페이지 
export default function SignInView() {

  return (
      <C.Wrapper>
        <C.SignInForm>
          <C.InputWrapper>
           <C.Email type="text" placeholder="이메일"></C.Email>
           <C.Password type="password" placeholder="비밀번호"></C.Password>
           <C.InputSpan>
            <C.LoginCheck type="checkbox" id="login" name="login"/> 자동 로그인
           </C.InputSpan>
           <C.SignInBtn type="submit">로그인</C.SignInBtn>
           <C.SignInBtn type="submit">비회원 로그인</C.SignInBtn>
           <C.InputLink>
            <Link href="../login/sign-up">
              <C.SignUpLogin>회원가입</C.SignUpLogin>
              </Link>
            <Link href="#">
              <C.FindUser>아이디/비밀번호 찾기</C.FindUser>
              </Link>
            </C.InputLink>
          </C.InputWrapper>
        </C.SignInForm>  
      </C.Wrapper>
  )
}

