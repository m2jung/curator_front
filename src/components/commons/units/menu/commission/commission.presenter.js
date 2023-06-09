import LayoutPageNumber from '../../../layout/page-number/page-number.presenter'

import * as C from './commission.styles' 

export default function CommissionView(props){

  return (
    <>  
      <C.Wrapper>
        <C.CommissionBanner>
          <C.CommissionTitle>작품 의뢰</C.CommissionTitle>
          <C.CommissionSubTitle>Commission</C.CommissionSubTitle>
        </C.CommissionBanner>

        <C.CommissionTableBanner>
         <C.Message> 
            <span>Art Website 는</span>
           고객님들의 소중한 작품 의뢰를 기다립니다.
          </C.Message>
        </C.CommissionTableBanner>

        <C.CommissionTable>
          <C.Table>
              <C.Tr>
                <C.Th>No</C.Th><C.Th>제목</C.Th><C.Th>작성자</C.Th><C.Th>날짜</C.Th>
              </C.Tr>
              <C.Tr>
                <C.No>1</C.No><C.Title> &lt;&lt; 공지사항 &gt;&gt; 작품의뢰 게시글 양식에 맞게 작성 부탁드립니다. 글제목은 '작품의뢰 합니다.' 로 수정하지 말아주세요.</C.Title><C.Writer>관리자</C.Writer><C.Date>2023-06-07</C.Date>
              </C.Tr>
              <C.Tr>
                <C.No>24</C.No><C.Title>작품의뢰 합니다.</C.Title><C.Writer>유미정</C.Writer><C.Date>2023-06-08</C.Date>
              </C.Tr>
              <C.Tr>
                <C.No>23</C.No><C.Title>작품의뢰 합니다.</C.Title><C.Writer>이범석</C.Writer><C.Date>2023-06-08</C.Date>
              </C.Tr>
              <C.Tr>
                <C.No>22</C.No><C.Title>작품의뢰 합니다.</C.Title><C.Writer>이준삼</C.Writer><C.Date>2023-06-08</C.Date>
              </C.Tr>
              <C.Tr>
                <C.No>21</C.No><C.Title>작품의뢰 합니다.</C.Title><C.Writer>이주호</C.Writer><C.Date>2023-06-08</C.Date>
              </C.Tr>
              <C.Tr>
                <C.No>20</C.No><C.Title>작품의뢰 합니다.</C.Title><C.Writer>정연호</C.Writer><C.Date>2023-06-08</C.Date>
              </C.Tr>
            </C.Table>
            <LayoutPageNumber/><C.Link href="/board/comm-board">게시글 작성하기</C.Link>
          
        </C.CommissionTable>

      </C.Wrapper>
    </>
  )
}

