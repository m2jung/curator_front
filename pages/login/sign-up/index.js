import * as C from '../../../styles/login/sign-up-emotion'
// 회원가입 페이지 
export default function SignUpView(){

  return (
    <>
      <C.Wrapper>
        <C.SignUpForm>
          <C.SignUpInput>
          <C.SignUpTitle>회원정보 입력</C.SignUpTitle>
            <C.Label>아이디(이메일)</C.Label>
            <C.Email type="text"></C.Email>
            <C.Label>이름</C.Label>
            <C.Name type="text"></C.Name>
            <C.Label>비밀번호</C.Label>
            <C.Password type="password"></C.Password>
            <C.Label>비밀번호 확인</C.Label>
            <C.RePassword type="text"></C.RePassword>
            <C.SignUpCheck>
              <C.LoginCheck type="checkbox" id="login" name="login"/> [필수] 개인정보 및 수집 이용 동의
            </C.SignUpCheck>
            <C.SignUpCheck>
              <C.LoginCheck type="checkbox" id="login" name="login"/> [선택] 마케팅 이용 수신 및 정보 동의
            </C.SignUpCheck>
            <C.SignUpBtn type="submit">회원가입</C.SignUpBtn>
          </C.SignUpInput>
        </C.SignUpForm>
      </C.Wrapper>
    </>
  )
}