import LayoutHeader from "./header/header.presenter"
import LayoutFooter from "./footer/footer.presenter"
import LayoutBody from "./body/body.presenter"


export default function Layout(props){

    return (
        <>
         <LayoutHeader/>
         {/* <LayoutBody/>  */}
         <div>{props.children}</div>
        <LayoutFooter/>
        </>
    )

}