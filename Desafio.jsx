import { useEffect } from "react";

export default function AppDesafio() {

  useEffect(() => {

    // Classe Produto
    class Produto {

      constructor(nome, preco, emPromocao) {

        this.nome = nome;
        this.preco = preco;
        this.emPromocao = emPromocao;

      }

    }

    // Classe Loja
    class Loja {

      constructor() {

        this.produtos = [];

      }

      adicionarProduto(produto) {

        this.produtos.push(produto);

      }

      // Filtrar produtos em promoção
      filtrarPromocoes() {

        return this.produtos.filter(
          p => p.emPromocao
        );

      }

    }

    // Criando loja
    const minhaLoja = new Loja();

    // Adicionando produtos
    minhaLoja.adicionarProduto(
      new Produto("Teclado Mecânico", 300, true)
    );

    minhaLoja.adicionarProduto(
      new Produto("Mouse Gamer", 150, false)
    );

    minhaLoja.adicionarProduto(
      new Produto("Monitor 144hz", 1200, true)
    );

    // Filtrando promoções
    const itensPromocionais =
      minhaLoja.filtrarPromocoes();

    console.log("Produtos em Oferta:");

    itensPromocionais.forEach(item => {

      console.log(
        `- ${item.nome}: R$ ${item.preco}`
      );

    });

  }, []);

  return (
    <div>
      <h1>Desafio ES6 - Loja</h1>

      <p>
        Abra o console (F12) para ver os resultados
      </p>
    </div>
  );

}