import { useEffect, useRef, useState } from "react";

function DigitacaoUsuario() {
  const [mensagem, setMensagem] = useState("");
  const [estaDigitando, setEstaDigitando] = useState(false);
  const element = useRef(null)

  console.log("referencia: ", element?.current)

  useEffect(()=>{
    element?.current.focus()
  },[element])

  useEffect(() => {
    if (mensagem == "") {
      setEstaDigitando(false);
      return;
    }

    setEstaDigitando(true);

    const timeOut = setTimeout(() => {
      setEstaDigitando(false);
    }, 1000);

    return () => clearTimeout(timeOut);
  }, [mensagem]);

  return (
    <div>
      {estaDigitando && (
        <div style={{ marginBottom: "5px", fontSize: "14px", color: "green" }}>
          Voce está digitando..
        </div>
      )}
      <input
        ref={element}
        type="text"
        value={mensagem}
        onChange={(e) => {
          setMensagem(e.target.value);
        }}
      />
    </div>
  );
}
export default DigitacaoUsuario;
