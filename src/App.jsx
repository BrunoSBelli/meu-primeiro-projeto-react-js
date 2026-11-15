import meia from "./assets/meia.jpg";
import tenis from "./assets/tenis.jpg";
import "./App.css";
import CardProduto from "./components/CardProduto";
import Contador from "./components/Contador";
import { useState } from "react";
import DigitacaoUsuario from "./components/DigitacaoUsuario";

function App() {
  const [tema, setTema] = useState("light");

  function alterarTema(){
     setTema(() => (tema === "dark" ? "light" : "dark"));
  }

  const produtos = [
    //array de produtos
    { id: 1, nome: "Tênis", imagem: tenis, preco: 300.0, disponivel: true },
    { id: 2, nome: "Meia", imagem: meia, preco: 50.0, disponivel: false },
  ];

  return (
    <div className="App">
      <header className={`App-header ${tema}`}>
        <DigitacaoUsuario/>
        {/* <Contador/>
        <button onClick={alterarTema}>Alterar tema</button>
        {produtos.map((produto) => {
          // index usado melhor quando são dados estáticos, id melhor usado para listas dinâmicas
          if (produto.disponivel) {
            //Renderização Condicional
            return <CardProduto key={produto.id} produto={produto} />;
          }
        })} */}
      </header>
    </div>
  );
}

export default App;
