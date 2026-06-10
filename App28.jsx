import { useEffect } from "react";

export default function App28() {
  useEffect(() => {

    const calcular = (a, b, operacao) => operacao(a, b);

    const soma = (x, y) => x + y;

    const potencia = (x, y) => Math.pow(x, y);

    console.log(
      "28. Usando soma via HOF:",
      calcular(5, 5, soma)
    );

    console.log(
      "28. Usando potência via HOF:",
      calcular(2, 3, potencia)
    );

  }, []);

  return (
    <div>
      <h2>28 - High Order Function</h2>
      <p>Abra o console (F12)</p>
    </div>
  );
}