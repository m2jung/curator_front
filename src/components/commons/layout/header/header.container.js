import { useRouter } from "next/router"
import { useState } from "react"
import LayoutHeader from "./header.presenter"

export default function HeaderContainer() {

    const [showMenu, setShowMenu] = useState(false);

    const onClickArtist = () => {
    }


    return (
        <LayoutHeader/>
    )
}