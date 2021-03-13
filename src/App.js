import "./App.css";
import imageInSrc from "./assets/img/imageInSrc.png";
import imageInPublic from "./assets/img/imageInPublic.jpg";

function App() {
  return (
    <div className="App-header">
      <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
        <h1 className="title red">TOUIL Abdelhak</h1>
        <br />
        <img src={imageInSrc} alt="logo" />
        <br />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={imageInPublic} alt="logo2" />
        </div>
      </div>
      <div>
        <video
          controls
          autoPlay
          currentTime={11.3}
          src={
            "https://s3.amazonaws.com/codecademy-content/courses/React/react_video-fast.mp4"
          }
        />
      </div>
    </div>
  );
}

export default App;
