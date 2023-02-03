import React from "react";
import video from "../data/video";
import Info from "./Info.js"
import Comments from "./Comments";

function App() {
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        allowFullScreen
        title="Thinking in React"
      />
      <Info info={video}/>
      <Comments info={video}/>
    </div>
  );
}

export default App;
