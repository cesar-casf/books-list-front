import Head from 'next/head'
import Link from 'next/link'
import { Button, Container, ContentForm, MenuBar } from '../styles/styles';

export default function Cadastro() {
  return (
    <div>
      <MenuBar>
        Sistema de Gestão de Livros
        <Link href="/"><a style={{ textDecoration: 'none', color: '#fff', margin: '30px' }}> ← Voltar</a></Link>
      </MenuBar>
      <Container>
        <ContentForm>
          <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
          </Head>

        </ContentForm>
      </Container>


    </div>
  )
}