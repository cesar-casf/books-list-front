import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.title}>
        <h3>Minha Home Page</h3>
      </div>
      <Link href='/contact'><a>Acessar o Contact</a></Link>
      
    </div>
  )
}
