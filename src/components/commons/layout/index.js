import LayoutHeader from "./header/header.presenter"
import LayoutFooter from "./footer/footer.presenter"
import LayoutBody from "./body/body.presenter"
import LayoutBanner from "./banner/banner.presenter"


const HIDDEN_HEADERS = [
    //숨기고 싶은 경로 
]

export default function Layout(props){

    return (
        <>
         <LayoutHeader/>
         {/* <LayoutBanner/> */}
         {/* <LayoutBody/>  */}
         <div>{props.children}</div>
        <LayoutFooter/>
        </>
    )

}