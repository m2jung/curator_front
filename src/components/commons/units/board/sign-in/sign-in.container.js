import {useState} from 'react'
import SignInViewUI from './sign-in.presenter'

export default function SignInContainer() {

  //  활성화시 버튼 스타일 변화 
  const [isActive, setIsActive] = useState(false) //기본값 false로 지정  
  const [password, setPassword] = useState()
  const [userId, setUserId] = useState()
  
  const onClickSubmit = () => {
      console.log("클릭")
  }

  const onChangeId = (event) => {
    setUserId(event.target.value)
  }

  const onChangePw = (event) => {
    setPassword(event.target.value)
  }

    return (
      <SignInViewUI
        onChangeId={onChangeId}
        onChangePw={onChangePw}
        onClickSubmit={onClickSubmit}
        isActive={isActive}
      />
    )
}