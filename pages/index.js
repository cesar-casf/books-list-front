import Head from 'next/head'
import Image from 'next/image'
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
                src="/images/bookadd.png"
                alt="Picture of the author"
                width={500}
                height={500}
              />

            </div>
          </Content>

        </div>

        <div>

          <ContentTwo>
            <div>
              <h3>Acessar lista de livros</h3>
            </div>
          </ContentTwo>

        </div>
      </Container>

    </div>
  )
}
