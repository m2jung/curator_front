import * as C from './sign.in.styles'
import Link from 'next/link'
import { Cookies, useCookies } from 'react-cookie'  // cookie 
import { useState, useCallback  } from 'react';
import axios from 'axios'
import jwt from 'jsonwebtoken'; // jwt
import Router, { useRouter } from 'next/router'

// 로그인 페이지 
export default function SignInView(props) {

   // router, cookie 객체
   const router = useRouter();
   const [cookies, setCookie] = useCookies();
 
   // 입력 state
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
 
   // 출력 message
   const [emailMsg, setEmailMsg] = useState("");
   const [pwdMsg, setPwdMsg] = useState('');
 
   // 유효성 검증
   const validateEmail = (email) => {
     return email
       .toLowerCase()
       .match(/([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/);
   };
 
   const validatePwd = (password) => {
     return password
       .toLowerCase()
       .match(/^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/);
   };
 
   // onChange method
   const onChangeEmail = useCallback((e) => {
     const currEmail = e.target.value;
     setEmail(currEmail);
     
     if (!validateEmail(currEmail)) {
       setEmailMsg("이메일 형식이 올바르지 않습니다.")} 
     else { setEmailMsg("") }
     })
     
    const onChangePwd = useCallback((e) =>{
       const currPwd = e.target.value;
       setPassword(currPwd);
     
       if (!validatePwd(currPwd)) {
         setPwdMsg("영문, 숫자, 특수기호 조합으로 8자리 이상 입력해주세요.")
       } else {
         setPwdMsg("")
       }
   }, [])
   // onChange method end
 
   // 유효성 검사로 걸러주기 위해 변수로 넣어준다. return에서 삼항 연산자로 쓰인다.
   const isEmailValid = validateEmail(email);
   const isPwdValid = validatePwd(password);
 
   // 회원가입과 같이 유효성 검사가 통과되어야만 버튼 활성화가 된다.
   const isAllValid = isEmailValid && isPwdValid;
 
   // onClickSubmit method
   const onClickSubmit = (event) => {
     if(isAllValid) {
       const JWT_EXPIRY_TIME = 24 * 3600 * 1000; // 만료 시간 (24시간 밀리 초로 표현)
       const data = {
               memberEmail: email,
               memberPw: password,
       };
       
       axios.post('https://git.walpie.com/curator_back/login', data, { withCredentials: true })
           .then(function(res) {
            if(res.data != null) {
              // 토큰값 헤더 저장
              const { accessToken, refreshToken } = res.data;
              if(refreshToken) {
                setCookie('refreshToken', refreshToken, {
                  path: '/',
                  secure: true,
                  sameSite: 'none'
                });
              }
              axios.defaults.headers.common['Authorization'] = `Bearer + ${accessToken}`;
              console.log(axios.defaults.headers.common.Authorization);
              
              // 토큰값 localstorage에 저장
              localStorage.setItem("accessToken", accessToken);
              localStorage.setItem("loginStatus", "login");
  
  
              // 토큰값 페이로드 세션에 저장
              const data = jwt.decode(accessToken);
              console.log(data);
              sessionStorage.setItem("userId", data.email);
              sessionStorage.setItem("userGrade", data.grade);
              sessionStorage.setItem("userNickname", data.nickname);
              sessionStorage.setItem("userSeq", data.seq);
      
              //홈화면 라우팅
              router.push("/");
              
              // accessToken 만료하기 1분 전에 로그인 연장
              setTimeout(onSilentRefresh, JWT_EXPIRY_TIME - 60000);
            } 
           })
           .catch(function (error) {
             console.log(error)
           });
         }
   }
   // onClickSubmit method end

  return (            
    <>
      <C.Wrapper>
        <C.SignInForm>
          <C.SignInTitle>Login</C.SignInTitle>
          <C.InputWrapper>
            <C.Email type="text" onChange={onChangeEmail} placeholder="이메일"></C.Email>
            <C.EmailError>{emailMsg}</C.EmailError>
            <C.Password type="password" onChange={onChangePwd} placeholder="비밀번호"></C.Password>
            <C.PasswordError>{pwdMsg}</C.PasswordError>
        
           <C.InputSpan>
            <C.LoginCheck type="checkbox" id="login" name="login"/> 자동 로그인
           </C.InputSpan>
           
           <C.SignInBtn type="button" onClick={onClickSubmit}>로그인</C.SignInBtn>
           <C.SignInBtn type="submit">비회원 주문확인</C.SignInBtn>
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
    </>
  )
}
