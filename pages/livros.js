import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import useSWR from 'swr'
import { MdDelete, MdEdit } from 'react-icons/md'
import { BiArrowBack } from "react-icons/bi";
import React, { useState } from 'react';
import { Tr, Td, Th, Table, ButtonDelete, ButtonEdit, ListDiv, Centertwo, Centerdiv, ContentForm, Cont, ContentList, MenuBar } from '../styles/styles';
import { fetchData } from '../lib/configaxios'

const initialValue = {
    title: '',
    autor: '',
    category: '',
    id: '',
  }

  //

export default function Livros({ dados }) {

    const { data }  = useSWR('https://books-listapi.herokuapp.com/api/books', fetchData, { initialData: dados, refreshInterval: 100 })
    const [values, setValues] = useState(initialValue);

    async function deleteData(livro)
    { 
    await axios.delete('https://books-listapi.herokuapp.com/api/book', {data: livro}).then(function(response)
    {
      console.log("Livro deletado");

     })
     .catch(function(error){
      console.warn(error);
    });



    }

    

    function testeFunc(livro){
        console.log(livro);
    }


    function onLoad(ev) {
        const { name, value } = ev.target;
        setValues({ ...values, [name]: value });
        console.log(values);
    }

    function onClick(livro) {
        console.log(livro);
        deleteData(livro);
        alert("Livro excluido!");
      }

    return (
        <div>
            <MenuBar>
                Sistema de Gestão de Livros
        <       Link href="/"><a style={{ textDecoration: 'none', color: '#fff', margin: '30px' }}> <BiArrowBack></BiArrowBack> Voltar</a></Link>
            </MenuBar>
            <Cont>
              <ContentList>
                    <Head>
                        <title>Create Next App</title>
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
                                        {data.map(({id, title, autor, category}) => ( 
                                            <Tr key={id}>
                                            <Td>{title}</Td>
                                            <Td>{autor}</Td>
                                            <Td>{category}</Td>
                                            <Td>
                                                <ButtonDelete onClick={(e) => onClick({id, title, autor, category})}> <MdDelete></MdDelete> </ButtonDelete>
                                                <ButtonEdit> <MdEdit></MdEdit> </ButtonEdit>
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

export async function getStaticProps(){

    const dados = await fetchData('https://books-listapi.herokuapp.com/api/books');
    return {
        props: {dados}
    }
}