import React, {useState} from "react"
import Comment from "./Comment"

function Comments({info}){
    const [show, setShow] = useState(true)

    function onSetShow(){
        setShow(!show)
    }

    return (
        <div>
            <button onClick={onSetShow}>Hide Comments</button>
            <h2>{info.comments.length} Comments</h2>
            <ul>
                {show ?
                    info.comments.map(comment => (
                        <Comment comment={comment}/>
                    ))
                : <></>}
            </ul>
        </div>
    )
}

export default Comments