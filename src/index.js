import React from "react";
import ReactDOM from "react-dom";
import Pdf from "react-to-pdf";

import "./styles.css";
const ref = React.createRef();

function App() {
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <h1>FORA DA IMPRESSAO</h1>
      <div ref={ref}>        
        <h2>Teste!</h2>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
