import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Qur'oni Karim || Home</title>
        <meta name="description" content="Куьрон китоби, узбекча ва арабча талкинда." />
        <link rel="icon" href="/icon22.jpg" />
      </Head>
      <img className="yozuv" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Shahadah-1.svg/1200px-Shahadah-1.svg.png" alt="" />
      <Link href={"/surahs"}>Boshlash</Link>
    </div>
  );
}
