import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

function Componente(){
  return(
    //uma tag aberta e fechada sem nada se chama fragmento//
    <>
    <p>Estou trabalhando com next</p>
    </>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Meu projeto</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        
         Olá mundo

         <Componente></Componente>
      </main>
    </>
  );
}
