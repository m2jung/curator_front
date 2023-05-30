import * as C from './sign-in.styles' //한방에 가져오기 
  
export default function SignInViewUI(props) {

    return (
      <>
        <div>
            아이디: <input type="text" onChange={props.onChangeId}/>
            비밀번호 : <input type="password" onChange={props.onChangePw}/>
            <C.Button onClick={props.onClickSubmit} isActive={props.isActive}>로그인</C.Button>
        </div>
      </>
    )
}