import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import logo from "public/logo.svg";
import styles from "src/styles/home.module.css";

const Home = () => (
  <>
    <Head>
      <title>OG - Yuwang Cai</title>
    </Head>
    <main className={styles.container}>
      <Image src={logo} alt="Logo" width="44" height="60" />
      <h1>og.mrcai.dev</h1>
      <p>OG Image Generator</p>
      <p className={styles.example}>
        Visit&nbsp;
        <Link href="/api/home">
          <a className={styles.link}>/api/home</a>
        </Link>
        &nbsp;for homepage OG image
      </p>
      <p className={styles.example}>
        Visit&nbsp;
        <Link href="/api/blog?title=Hello%20world">
          <a className={styles.link}>/api/blog?title=Hello%20world</a>
        </Link>
        &nbsp;for blog post OG image
      </p>
    </main>
  </>
);

export default Home;
