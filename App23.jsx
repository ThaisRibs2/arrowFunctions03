import { useEffect } from "react";

export default function App23() {
  useEffect(() => {
    // 23. Ordenação Decrescente

    const precos = [45, 12, 89, 5, 110];

    precos.sort((a, b) => b - a);

    console.log("23. Preços Ordenados (Maior p/ Menor):", precos);

  }, []);

  return (
    <div>
      <h2>23 - Ordenação Decrescente</h2>
      <p>Abra o console (F12) para ver o resultado</p>
    </div>
  );
}