import React, {useState} from "react"

function Info({info}){
    const [likes, setLikes] = useState(info.likes)
    const [dislikes, setDislikes] = useState(info.dislikes)

    function onSetLikes(){
        setLikes(likes + 1)
    }

    function onSetDislikes(){
        setDislikes(dislikes + 1)
    }

    return(
        <div>
            <h1>{info.title}</h1>
            <p>{info.views} Views | Uploaded {info.createdAt}</p>
            <button onClick={onSetLikes}>{likes} 👍</button>
            <button onClick={onSetDislikes}>{dislikes} 👎</button>
        </div>
    )   
}

export default Info