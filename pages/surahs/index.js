import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/list.module.scss";

export const getStaticProps = async () => {
  const response = await fetch("http://api.alquran.cloud/v1/surah");
  const data = await response.json();
  return {
    props: {
      data: data.data,
    },
  };
};
export default function Surahs({ data }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ul className={styles.wrapList}>
        {data.map((sura, index) => {
          console.log(sura);
          return (
            <>
              <li key={index}>
                <Link href={`/surahs/${sura.number}`}>
                  <a>
                    <span></span>
                    {sura.number + "   " + sura.englishName}
                  </a>
                </Link>
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
