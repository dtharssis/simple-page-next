import Head from 'next/head'
import styles from '../styles/Home.module.css'

function About() {
  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          About
        </h1>

        <div className={styles.grid}>

        </div>
      </main>

      <footer className={styles.footer}>
                
      </footer>
    </div>
  )
}

export default About
