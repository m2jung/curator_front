import LayoutHeader from "./header/header.presenter"
import LayoutFooter from "./footer/footer.presenter"


export default function Layout(props){

    return (
        <>
         <LayoutHeader/>
         <div>{props.children}</div>
        <LayoutFooter/>
        </>
    )

}