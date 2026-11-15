//Component sendo chamada em App
import './CardProduto.css'
function CardProduto({ produto }) {
  return (
    <>
      <img src={produto.imagem} className="App-logo" alt="logo" />
      <p>{produto.nome}</p>
      <p>R$ {produto.preco.toFixed(2)}</p>
    </>
  );
}

export default CardProduto;
