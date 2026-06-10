import { useEffect } from "react";

export default function App27() {
  useEffect(() => {

    const itens = [
      'maçã',
      'banana',
      'maçã',
      'laranja',
      'banana',
      'maçã'
    ];

    const estoqueContado = itens.reduce((contador, fruta) => {

      contador[fruta] = (contador[fruta] || 0) + 1;

      return contador;

    }, {});

    console.log(
      "27. Frequência de itens:",
      estoqueContado
    );

  }, []);

  return (
    <div>
      <h2>27 - Reduce</h2>
      <p>Abra o console (F12)</p>
    </div>
  );
}