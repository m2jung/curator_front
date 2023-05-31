import axios from 'axios'
import BoardListView from "./BoardList.presenter"   

export default function BoardListContainer() {

    async function onClickBoardList() {
        const result = await axios.get("https://koreanjson.com/posts/1");
        console.log(result);
        console.log("dd");
    }

    return (
       <BoardListView
        get={onClickBoardList}
       />
    )
}