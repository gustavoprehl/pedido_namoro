"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const fotos = [
  "/images/IMG-20250608-WA0054.jpg",
  "/images/IMG-20250608-WA0056.jpg",
];

const paginas = [
  {
    texto: (
      <>
        {/* ESCREVA SUA HISTÓRIA AQUI */}
        <h1 style={{ color: '#311d39' }}>A gente</h1>
        <p style={{ color: 'darkred' }}>
          {/* Conte aqui toda a história de vocês! Escreva o quanto quiser, este espaço é seu. */}
          Nossa história é meio atípica, nos conhecemos no tinder, primeiro encontro é você me acompanhando para comprar roupa, um sorvete no big e uma prosa de um bom tempo.
          Depois veio o carnaval, onde foi um pouco conturbado, a gente tentava se encontrar e toda hora perdia o sinal, ou um ia para um lado e o outro para a casa do chapéu.
          Depois dessas loucuras, tivemos um momento de paz, uns rolês sozinhos, e o grande dia 24/02. Lembro até hoje do cara no carro me xingando por eu não ter te beijado KKKKKKKK, piada.
          Naquele dia, eu tive a certeza que era você a pessoa certa para mim, que seu jeito, suas loucuras, seu sorriso, era o que eu queria ter para o resto da vida.
          Eu tive a certeza que eu queria te chamar de amor, que a chance para o amor estava batendo na minha porta e eu não poderia abrir mão.
          E desde esse momento, a cada dia que passa eu me apaixono mais por ti, eu entendo melhor o que é o amor, o que é dividir a vida com outra pessoa, o que é ser um pelo o outro o tempo todo.
          Isadora, estar com você é sempre o melhor momento dos meus dias, mesmo quando estamos brigados, estamos de cara emburrada, ou somente sem ter o que falar um para o outro.
          Eu amo sua companhia, amo o seu toque, amo sua voz, seus olhos, seu cabelo.. eu amo tudo em você, eu amo você!
        </p>
      </>
    ),
    imagem: null,
    galeria: false,
  },
  {
    texto: (
      <>
        {/* ESCOLHA SUAS FOTOS FAVORITAS */}
        <h1 style={{ color: '#311d39' }}>Nossas Fotos</h1>
        <p style={{ color: 'darkred' }}>Alguns dos nossos melhores momentos juntos:</p>
      </>
    ),
    imagem: null,
    galeria: true,
  },
  {
    texto: (
      <>
        {/* ESCREVA O PEDIDO DE NAMORO AQUI */}
        <h1 style={{ color: '#311d39' }}>Aceita continuar compartilhando a vida comigo?</h1>
        <p style={{ color: 'darkred' }}>Sim ou sim?</p>
      </>
    ),
    imagem: "/images/IMG-20250608-WA0054.jpg",
    galeria: false,
    pedido: true,
  },
];

export default function Home() {
  const [pagina, setPagina] = useState(0);
  const [naoPos, setNaoPos] = useState(0);
  const router = useRouter();

  // Função para mover o botão "Não"
  function moverBotaoNao() {
    setNaoPos(Math.random() * 180 - 90); // Move entre -90px e +90px
  }

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.texto}>{paginas[pagina].texto}</div>
        {/* Galeria de fotos na segunda página */}
        {paginas[pagina].galeria && (
          <div className={styles.galeria}>
            {fotos.map((foto, idx) => (
              <Image
                key={idx}
                src={foto}
                alt={`Foto ${idx + 1}`}
                width={100}
                height={100}
                className={styles.fotoGaleria}
              />
            ))}
          </div>
        )}
        {/* Imagem única nas outras páginas */}
        {paginas[pagina].imagem && !paginas[pagina].galeria && !paginas[pagina].pedido && (
          <Image
            src={paginas[pagina].imagem}
            alt={`Imagem página ${pagina + 1}`}
            width={300}
            height={300}
            className={styles.imagem}
          />
        )}
        {/* Página do pedido de namoro com música e botões interativos */}
        {paginas[pagina].pedido && (
          <>
            {/* Removido o player de áudio daqui, pois agora está global */}
            <div className={styles.botoesPedido}>
              <button
                className={styles.sim}
                onClick={() => router.push("/sim")}
              >
                Sim
              </button>
              <button
                className={styles.nao}
                style={{ transform: `translateX(${naoPos}px)` }}
                onMouseEnter={moverBotaoNao}
                onClick={e => e.preventDefault()}
                tabIndex={-1}
              >
                Não
              </button>
            </div>
          </>
        )}
        {/* Botões de navegação */}
        {!paginas[pagina].pedido && (
          <div className={styles.botoes}>
            {pagina > 0 && (
              <button onClick={() => setPagina(pagina - 1)}>Anterior</button>
            )}
            {pagina < paginas.length - 1 ? (
              <button onClick={() => setPagina(pagina + 1)}>Próxima</button>
            ) : null}
          </div>
        )}
      </div>
    </main>
  );
}
