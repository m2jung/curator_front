import * as C from './service.styles'
import Link from 'next/link'
import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

import ServiceContainer from './service.container'

export default function ServiceView(props) {


  return (
    
    <>  
      <C.Wrapper>
       <C.ServiceWrapper>
        <C.ServiceBanner>
          <C.ServiceTitle>고객센터</C.ServiceTitle>
          <C.ServiceSubTitle>
            <C.Link href="#">자주 묻는 질문</C.Link> &nbsp;
            <C.Link href="/board">1:1 문의하기</C.Link>
          </C.ServiceSubTitle>
        </C.ServiceBanner>

        {/* 구현예정..? */}
        <C.Select>
            <option disabled="true" selected="true">전체</option>
            <option>결제/구매</option>
            <option>판매/등록</option>
            <option>경매</option>
            <option>상품/배송</option>
            <option>기타</option>
        </C.Select>

          {/* Icon 클릭시 밑으로 상세 문의 내용 창이 주르륵 내려옴  */}
        <C.ServiceTable>
          <C.Table>
            <C.Tr>
              <C.Div>기타</C.Div><C.Title>무슨 웹사이트인가요?</C.Title><C.Icon><FontAwesomeIcon icon={faCaretDown} size="lg"/></C.Icon>
            </C.Tr>
            <C.Tr>
              <C.Div>결제/구매</C.Div><C.Title>작품 구매는 어떻게 하나요?</C.Title><C.Icon><FontAwesomeIcon icon={faCaretDown} size="lg"/></C.Icon>
            </C.Tr>
            <C.Tr>
              <C.Div>판매/등록</C.Div><C.Title>작품 판매는 어떻게 하나요?</C.Title><C.Icon><FontAwesomeIcon icon={faCaretDown} size="lg"/></C.Icon>
            </C.Tr>
            <C.Tr>
              <C.Div>판매/등록</C.Div><C.Title>작가, 작품 등록은 어떻게 하나요?</C.Title><C.Icon><FontAwesomeIcon icon={faCaretDown} size="lg"/></C.Icon>
            </C.Tr>
            <C.Tr>
              <C.Div>경매</C.Div><C.Title>경매는 어떻게 진행되나요?</C.Title><C.Icon><FontAwesomeIcon icon={faCaretDown} size="lg"/></C.Icon>
            </C.Tr>
          </C.Table>
        </C.ServiceTable>

        <LayoutPageNumber/>

       </C.ServiceWrapper>
      </C.Wrapper>
    </>
  )

}