import { useEffect } from "react";

export default function App25() {
  useEffect(() => {

    const criarMultiplicador = x => y => x * y;

    const triplicar = criarMultiplicador(3);
    const quadruplicar = criarMultiplicador(4);

    console.log(
      "25. Triplicando 10:",
      triplicar(10)
    );

    console.log(
      "25. Quadruplicando 10:",
      quadruplicar(10)
    );

  }, []);

  return (
    <div>
      <h2>25 - Closure</h2>
      <p>Abra o console (F12)</p>
    </div>
  );
}