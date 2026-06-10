import { useEffect } from "react";

export default function App30() {
  useEffect(() => {

    class ContadorTempo {

      constructor() {
        this.segundos = 0;
      }

      iniciar() {

        this.timer = setInterval(() => {

          this.segundos++;

          console.log(
            `30. Tempo decorrido: ${this.segundos}s`
          );

          if (this.segundos >= 3) {
            clearInterval(this.timer);
          }

        }, 1000);

      }

    }

    const meuRelogio = new ContadorTempo();

    meuRelogio.iniciar();

  }, []);

  return (
    <div>
      <h2>30 - Simulador de Contexto</h2>
      <p>Abra o console (F12)</p>
    </div>
  );
}