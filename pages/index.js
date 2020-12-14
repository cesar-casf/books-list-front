import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonGreen, ButtonYellow, Centerdiv, Container, Content, ContentTwo, MenuBar } from '../styles/styles';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home - Book List InovaGS</title>
      </Head>

      <MenuBar>
        Sistema de Gestão de Livros
    </MenuBar>

      <Container>
        <div>
          <Content>
            <Link href="/cadastro">
              <a style={{ textDecoration: 'none' }}>
                <Centerdiv>
                  <Image
                    src="/bookadd.svg"
                    width={100}
                    height={100}
                  />
                  <ButtonYellow href="/cadastro">Cadastrar livro</ButtonYellow>
                </Centerdiv>
              </a>
            </Link>
          </Content>

        </div>

        <div>
          <ContentTwo>
            <Link href="/livros">
              <a style={{ textDecoration: 'none' }}>
                <Centerdiv>
                  <Image
                    src="/booklist.svg"
                    width={100}
                    height={100}
                  />
                  <ButtonGreen href="/livros">Listar livros</ButtonGreen>
                </Centerdiv>
              </a>
            </Link>
          </ContentTwo>

        </div>
      </Container>

    </div>
  )
}
