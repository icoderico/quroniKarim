//
import Head from "next/head";
import Surahs from "../../components/surah";
export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://api.alquran.cloud/v1/surah/${params.number}/uz.sodik`
  );
  const data = await response.json();

  const responseAudio = await fetch(
    `https://api.alquran.cloud/v1/surah/${params.number}/ar.alafasy`
  );
  const dataAudio = await responseAudio.json();

  const responseArabic = await fetch(
    `http://api.alquran.cloud/v1/surah/${params.number}`
  );
  const dataArabic = await responseArabic.json();
  return {
    props: {
      data: data.data,
      dataAudio: dataAudio.data,
      dataArabic: dataArabic.data,
    },
  };
}

export default function Surah({ data, dataAudio, dataArabic }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>home</h1>
      <h2>{data.name + " " + data.englishName}</h2>
      {data.ayahs.map((ayah, index) => (
        <Surahs
          key={ayah.number}
          ayahIndex={ayah.number}
          text={ayah.text}
          audio={dataAudio.ayahs[index].audio}
          arabic={dataArabic.ayahs[index].text}
        ></Surahs>
      ))}

      {console.log(data)}
    </div>
  );
}
