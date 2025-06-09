"use client";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

const fotos = [
  "/images/IMG-20250608-WA0054.jpg",
  "/images/IMG-20250608-WA0056.jpg",
  "/images/IMG-20250608-WA0057.jpg",  
  "/images/IMG-20250608-WA0058.jpg",
  "/images/IMG-20250608-WA0059.jpg",
];

const paginas = [
  {
    texto: (
      <>
        {/* ESCREVA SUA HISTÓRIA AQUI */}
        <h1 style={{ color: '#311d39' }}>Nós!</h1>
        <p style={{ color: 'darkred' }}>
          {/* Conte aqui toda a história de vocês! Escreva o quanto quiser, este espaço é seu. */}
          Nossa história é um tanto diferente… Nos conhecemos no Tinder, e nosso primeiro encontro foi você me acompanhando para comprar roupa, depois tomamos um sorvete no Big e tivemos uma boa conversa, daquelas que a gente nem vê o tempo passar.
          Depois veio o carnaval meio caótico, confesso. A gente tentava se encontrar, mas o sinal caía, um ia para um lado, o outro sumia no meio da multidão.
          No meio dessas loucuras, conseguimos um pouco de paz: alguns rolês só nossos e, claro, o inesquecível dia 24/02. Nunca vou esquecer o cara no carro me xingando porque eu não te beijei — KKKK, foi bastante engraçado.
          Naquele dia, eu soube. Tive a certeza de que era você a pessoa certa pra mim. Seu jeito, suas loucuras, seu sorriso… tudo em você me fez querer viver ao seu lado pra sempre.
          Eu soube que queria te chamar de amor. Que o amor estava batendo na minha porta e eu não podia, de jeito nenhum, deixá-lo passar.
          Desde então, a cada dia que passa, eu me apaixono mais por você. Entendo cada vez melhor o que é amar, o que é dividir a vida com alguém, o que é estar junto de verdade.
          Isadora, estar com você é sempre o melhor momento dos meus dias. Mesmo quando brigamos, estamos de cara fechada ou em silêncio… só de estar ao seu lado, tudo faz sentido.
          Eu amo sua companhia, amo seu toque, sua voz, seus olhos, seu cabelo… amo tudo em você. Eu amo você!
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
        <h1 style={{ color: '#311d39' }}>Alguns dos nossos melhores momentos juntos:</h1>
        <p style={{ color: 'darkred' }}>É impressionante como esse ano passou tão rápido, vivemos tantas coisas.</p>
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

  function moverBotaoNao() {
    setNaoPos(Math.random() * 180 - 90); 
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
