import videoData from "../data/video.js";
import Video from "./Video.js";

function App() {
  console.log("Here's your data:", videoData);

  return (
    <div className="App">
      {/*  */}
      <Video videoData={videoData}/>
    </div>
  );
}

export default App;
