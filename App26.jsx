import { useEffect } from "react";

export default function App26() {
  useEffect(() => {

    const datasStrings = [
      "15/05/2024",
      "20/12/2025",
      "01/01/2026"
    ];

    const datasObjetos = datasStrings.map(data => {

      const [dia, mes, ano] = data.split("/");

      return { dia, mes, ano };

    });

    console.table(datasObjetos);

  }, []);

  return (
    <div>
      <h2>26 - Formatação de Dados</h2>
      <p>Abra o console (F12)</p>
    </div>
  );
}