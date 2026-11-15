import { useState } from "react";

function Contador() {

    //let quantidade = 0;

    const[quantidade,setQuantidade] = useState(0)

    console.log("quantidade: ", quantidade)
    


  return (
    <div>
      <p>Quantidade: {quantidade}</p>
      <button onClick={()=> setQuantidade(quantidade + 1)}>Adicionar</button>
    </div>
  );
}

export default Contador;