import { useEffect } from "react";

export default function App29() {
  useEffect(() => {

    const boletim = [
      { nome: "João", notas: [7, 8, 9] },
      { nome: "Bia", notas: [10, 9, 10] }
    ];

    const mediasFinal = boletim.map(aluno => ({

      nome: aluno.nome,

      media: (
        aluno.notas.reduce(
          (acc, nota) => acc + nota,
          0
        ) / aluno.notas.length
      ).toFixed(1)

    }));

    console.log(
      "29. Médias Finais:",
      mediasFinal
    );

  }, []);

  return (
    <div>
      <h2>29 - Média de Notas</h2>
      <p>Abra o console (F12)</p>
    </div>
  );
}