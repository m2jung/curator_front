import * as C from './banner.styles' 
import { contentStyle } from './banner.styles'

export default function LayoutBanner(props){

    return (
        <>
        <C.BannerWrapper>
            <C.Carousel afterChange={props.change}>
            <div>
                <C.contentStyle>1</C.contentStyle>
            </div>
            <div>
                <C.contentStyle>2</C.contentStyle>
            </div>
            <div>
                <C.contentStyle>3</C.contentStyle>
            </div>
            <div>
                <C.contentStyle>4</C.contentStyle>
            </div>
            </C.Carousel>
        </C.BannerWrapper>
        </>
    )
}