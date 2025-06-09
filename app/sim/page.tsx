import Image from "next/image";
import styles from "../page.module.css";

const fotos = [
  "/images/Imagem do WhatsApp de 2025-06-08 à(s) 21.01.44_24b6fce0.jpg",
  "/images/IMG-20250608-WA0053.jpg",
];

export default function SimPage() {
  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.texto}>
          {/* ESCREVA SUAS DECLARAÇÕES AQUI */}
          <h1 style={{ color: '#311d39' }}>Obrigado por fazer parte da minha vida. Que venham muitos momentos juntos!</h1>
          <p style={{ color: 'darkred' }}>
            {/* Escreva aqui mais declarações, agradecimentos, sonhos, etc. */}
            Eu te amo infinitamente, só de imaginar viver sem você me dói! Obrigado por me dar a chance novamente de sermos felizes juntos!
          </p>
        </div>
        <div className={styles.galeria}>
          {fotos.map((foto, idx) => (
            <Image
              key={idx}
              src={foto}
              alt={`Foto ${idx + 1}`}
              width={120}
              height={200}
              className={styles.fotoGaleria}
            />
          ))}
        </div>
      </div>
    </main>
  );
} 