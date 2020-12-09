import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonGreen, ButtonYellow, Centerdiv, Container, Content, ContentTwo, MenuBar } from '../styles/styles';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Book List InovaGS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <MenuBar>
        Sistema de Gestão de Livros
    </MenuBar>

      <Container>
        <div>
          <Content>
          <Link href="cadastro" passHref>
            <a style={{ textDecoration: 'none' }}> 
            <Centerdiv>
              <Image
                src="/bookadd.svg"
                width={100}
                height={100}
              />
              <ButtonYellow href="contact">Cadastrar livro</ButtonYellow>
            </Centerdiv>
            </a>  
            </Link>
          </Content>

        </div>

        <div>
          <ContentTwo>
          <Link href="contact">
          <a style = {{ textDecoration: 'none'}}>
            <Centerdiv>
            <Image
                src="/booklist.svg"
                width={100}
                height={100}
              />
              <ButtonGreen>Listar livros</ButtonGreen>
              </Centerdiv>
              </a>
          </Link>
          </ContentTwo>
          
        </div>
      </Container>

    </div>
  )
}
