import { useState } from "react";
import html2canvas from "html2canvas";
import "./App.css";
import "./memes/meme1.png";
import "./memes/meme2.png";
import "./memes/meme3.png";
import "./memes/meme4.png";
import "./memes/meme5.png";
import "./memes/meme6.png";


function App() {
  const [linea1, setLinea1] = useState("");
  const [linea2, setLinea2] = useState("");
  const [imagen, setImagen] = useState("1");

  const onChangeLine1 = (e) => {
    setLinea1(e.target.value);
  };

  const onChangeLine2 = (e) => {
    setLinea2(e.target.value);
  };

  const onChangeImagen = (e) => {
    setImagen(e.target.value);
  };

  const onClickExportar = () => {
    html2canvas(document.querySelector("#meme")).then((canvas) => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement("a");
      link.download = "meme.png";
      link.href = img;
      link.click();
    });
  };

  return (
    <div className="App">
      <div 
      className="contenedorArriba">
        <h1 className="titulo">Meme Generator</h1>
        <select onChange={onChangeImagen} className="selector">
          <option value="1">Meme 1</option>
          <option value="2">Meme 2</option>
          <option value="3">Meme 3</option>
          <option value="4">Meme 4</option>
          <option value="5">Meme 5</option>
          <option value="6">Meme 6</option>
        </select>
        <br />
        <input onChange={onChangeLine1} type="text" placeholder="Line1" className="linea1"/>
      <br />
      <input onChange={onChangeLine2} type="text" placeholder="line2" className="linea2"/>
      <br />
      <button onClick={onClickExportar}>Exportar</button>
      </div>
      <div className="contenedorImagen" id="meme">
        <span className={imagen != 4 ? "span1" : "span1B"}>{linea1}</span>
        <br />
        <span className="span2">{linea2}</span>
        <img src={`/memes/meme${imagen}.png`} className="imagen" />
      </div>
    </div>
  );
}

export default App;
