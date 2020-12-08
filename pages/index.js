import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Container, Content, ContentTwo, MenuBar } from '../styles/styles';

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
            <div>
              <h3>Cadastrar livros</h3>
              <Image
                src="/bookadd.png"
                alt="Picture of the author"
                width={100}
                height={100}
              />

            </div>
          </Content>

        </div>

        <div>
          
          <ContentTwo>
          <Link href="contact">
          <a>
            <div>
              <h3>Acessar lista de livros</h3>
            <Image
                src="/booklist.png"
                alt="Picture of the author"
                width={100}
                height={100}
              />
              </div>
              </a>
          </Link>
          </ContentTwo>
          
        </div>
      </Container>

    </div>
  )
}
