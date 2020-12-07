import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Contact() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.title}>
        <h3>Página de contato</h3>
      </div>
        <Link href="/"><a>Acessar o Home</a></Link>


    </div>
  )
}