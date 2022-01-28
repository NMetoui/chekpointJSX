import logo from "./logo.svg";
import "./App.css";
import imsrc from "./imageInSrc.jpg";
import "./style.css";
function App() {
  return (
    <div className="App">
      <div>
        <div style={{ border: "solid 1px noir", maxWidth: "100vw" }}>
          <h1 className="titlered">Metoui Naima</h1>
          <div className="flex-im">
            <img className="image" src={imsrc} />

            <img className="image" src="/imageInPublic.jpg" />
          </div>
        </div>
        <commandes vidéo width={320} height={240}>
          <source src="maVideo.mp4" type="video/mp4" />
        </commandes>
      </div>
    </div>
  );
}

export default App;
