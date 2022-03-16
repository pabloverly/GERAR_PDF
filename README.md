## React-to-pdf


Começar com react-pdf é extremamente simples.

### INSTALL

```sh 
npm i react-to-pdf
```

### USE
```sh 
import Pdf from "react-to-pdf"
```
### CODE
```sh 
<div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <h1>FORA DA IMPRESSAO</h1>
      <div ref={ref}>        
        <h2>Teste!</h2>
      </div>
 </div>
```
https://www.npmjs.com/package/react-to-pdf


