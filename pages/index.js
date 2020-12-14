import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { ButtonGreen, ButtonYellow, Centerdiv, Container, Content, ContentTwo, MenuBar } from '../styles/styles';

export default function Home() {
  return (
    <div style={{height: "100%", width: "100%"}}>
      <MenuBar>
      Sistema de Gestão de Livros
      </MenuBar>
      <Head>
        <title>Home - Book List InovaGS</title>
      </Head>

    <Container>
          <Content>
              <a style={{ textDecoration: 'none' }}>
                <Centerdiv>
                  <Image
                    src="/bookadd.svg"
                    width={100}
                    height={100}
                  />
                 <Link href="/cadastro">
                   <ButtonYellow>Cadastrar livro</ButtonYellow>
                </Link>
                </Centerdiv>
              </a>
            
          </Content>

        

        
          <ContentTwo>
            
              <a style={{ textDecoration: 'none' }}>
                <Centerdiv>
                  <Image
                    src="/booklist.svg"
                    width={100}
                    height={100}
                  />
                <Link href="/livros">
                  <ButtonGreen>Listar livros</ButtonGreen>
                </Link>
                </Centerdiv>
              </a>
            
          </ContentTwo>

        
      </Container>
      </div>
  )
}
