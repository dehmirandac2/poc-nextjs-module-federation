import Head from 'next/head';
import styles from '../styles/Home.module.css';

// We need to use top level await on these modules as they are async. 
// This is actually what let's module federation work with NextJS
const Nav = (await import('app1/nav')).default;
const add = (await import('app1/add')).default;
const multiplyByTwo = (await import('app1/multiplyByTwo')).default;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nav color="hotpink" />
        <h2>
          {`Adding 2 and 3 ==>`} {add(2, 3)}
        </h2>
        <h2>
          {`Multiplying 5 by 2  ==>`} {multiplyByTwo(5)}
        </h2>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>
      </main>
    </div>
  );
}
