import { useEffect } from "react";

export default function App21() {
  useEffect(() => {
    // 21. Retorno implícito de objeto
    const criarUser = (id, username) => ({ id, username });

    console.log("21. User:", criarUser(1, "gemini_user"));
  }, []);

  return (
    <div>
      <h2>21 - Retorno Implícito de Objeto</h2>
      <p>Abra o console (F12) para ver o resultado</p>
    </div>
  );
}