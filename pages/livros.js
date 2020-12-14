import Head from 'next/head'
import Link from 'next/link'
import useSWR from 'swr'
import Modal from '../components/modal'
import { MdDelete, MdEdit } from 'react-icons/md'
import { BiArrowBack } from "react-icons/bi";
import React, { useState } from 'react';
import { Tr, Td, Th, Table, ButtonDelete, ButtonEdit, Centertwo, Cont, ContentList, MenuBar, FlexContainer } from '../styles/styles';
import { deleteData, fetchData } from '../lib/configaxios'

var initialData = {
    title: '',
    autor: '',
    category: '',
    id: '',
}

export default function Teste({ dados }) {

    const { data } = useSWR('https://books-listapi.herokuapp.com/api/books/', fetchData, { initialData: dados, refreshInterval: 10 });

    const [isModalVisible, setIsModalVisible] = useState(false);

    function onClick(livro) {
        console.log(livro);
        deleteData(livro);
        alert("Livro excluido!");
    }

    function openModal(livro){
        initialData = livro;
        setIsModalVisible(true);
    }

    return (
        <div>

            <MenuBar>
                Sistema de Gestão de Livros
                <Link href="/">
                    <a style={{textDecoration: 'none', color: '#fff', margin: '30px' }}>
                        <BiArrowBack></BiArrowBack> Voltar
                    </a>
                </Link>
            </MenuBar>

            {isModalVisible ? <Modal  dados={{initialData}} onClose={() => setIsModalVisible(false)}> </Modal> : null}

            <Cont>
                <ContentList>
                    <Head>
                        <title>Sistema de Gestão de Livros</title>
                        <link rel="shortcut icon" href="/favicon.ico" />
                    </Head>

                    <Centertwo>
                        <h2>Lista de Livros</h2>
                        <Table>

                            <thead>
                                <Tr>
                                    <Th>Título</Th>
                                    <Th>Autor</Th>
                                    <Th>Categoria</Th>
                                    <Th>Operação</Th>
                                </Tr>
                            </thead>

                            <tbody>
                                {data.map(({ id, title, autor, category }) => (
                                      
                                    <Tr key={id}>
                                        <Td>{title}</Td>
                                        <Td>{autor}</Td>
                                        <Td>{category}</Td>
                                        <Td>
                                            <ButtonDelete onClick={(e) => onClick({ id, title, autor, category })}> <MdDelete></MdDelete> </ButtonDelete>
                                            <ButtonEdit onClick={(e) => openModal({ id, title }) }> <MdEdit></MdEdit> </ButtonEdit>
                                        </Td>
                                    </Tr>
                                ))}
                            </tbody>
                        </Table>
                    </Centertwo>

                </ContentList>
            </Cont>


        </div>
    )
}

export async function getStaticProps() {

    const dados = await fetchData('https://books-listapi.herokuapp.com/api/books/');
    return {
        props: {
            dados
        },
        revalidate: 1
    }

}