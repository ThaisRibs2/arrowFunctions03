import { useEffect } from "react";

export default function App24() {
  useEffect(() => {

    const nums = [1,2,3,4,5,6,7,8,9,10];

    const resultado = nums
      .filter(n => n % 2 === 0)
      .map(n => n * 2)
      .reduce((acc, n) => acc + n, 0);

    console.log(
      "24. Resultado do Encadeamento:",
      resultado
    );

  }, []);

  return (
    <div>
      <h2>24 - Chaining</h2>
      <p>Abra o console (F12)</p>
    </div>
  );
}