import { useEffect } from "react";

export default function App22() {
  useEffect(() => {
    const alunos = [
      { nome: "Ana", nota: 8.5 },
      { nome: "Pedro", nota: 5.0 },
      { nome: "Maria", nota: 9.2 },
    ];

    const aprovados = alunos
      .filter(a => a.nota >= 7)
      .map(a => a.nome);

    console.log("22. Nomes dos Aprovados:", aprovados);
  }, []);

  return <h2>22 - Filtro de Objetos</h2>;
}