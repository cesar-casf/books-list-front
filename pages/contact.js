import Head from 'next/head'
import Link from 'next/link'
import { Container, Content, MenuBar } from '../styles/styles';

export default function Contact() {
  return (
    <div>
      <MenuBar>
        Sistema de Gestão de Livros
      </MenuBar>
      <Container>
        <Content>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <div>
            <h3>Página de contato</h3>
            <Link href="/"><a>Acessar o Home</a></Link>
          </div>
        </Content>
      </Container>


    </div>
  )
}