import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios'
import useSWR from 'swr'
import { MdDelete, MdEdit } from 'react-icons/md'
import React, { useState } from 'react';
import { ListDiv, Centertwo, Centerdiv, ContentForm, Container, ContentList, MenuBar } from '../styles/styles';
import { fetchData } from '../lib/configaxios'

const initialValue = {
    title: '',
    autor: '',
    category: '',
    id: '',
  }

  //

export default function Livros({ dados }) {

    const { data }  = useSWR('https://books-listapi.herokuapp.com/api/books', fetchData, { initialData: dados, refreshInterval: 10 })

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
        <Link href="/"><a style={{ textDecoration: 'none', color: '#fff', margin: '30px' }}> ← Voltar</a></Link>
            </MenuBar>
            <Container>
              <ContentList>
                    <Head>
                        <title>Create Next App</title>
                    </Head>

                        <Centertwo>
                            

                        <h3>Lista de Livros</h3>
                            <table>
                                
                                <thead>
                                <tr>
                                    <th>Título</th>
                                    <th>Autor</th>
                                    <th>Categoria</th>
                                    <th></th>
                                </tr>
                                </thead>

                                <tbody>
                                        {data.map(({id, title, autor, category}) => ( 
                                            <tr key={id}>
                                            <td>{title}</td>
                                            <td>{autor}</td>
                                            <td>{category}</td>
                                            <td>
                                                
                                                <MdEdit style={{cursor: "pointer", color: "lightblue"}}></MdEdit>
                                                <MdDelete style={{cursor: "pointer", color: "#F10"}} onClick={(e) => onClick({id, title, autor, category})}></MdDelete>
                                            </td>
                                            </tr>
                                        ))}  
                                </tbody>
                            </table>
                   
                    </Centertwo>

                    </ContentList>
            </Container>


        </div>
    )
}

export async function getStaticProps(){

    const dados = await fetchData('https://books-listapi.herokuapp.com/api/books');
    return {
        props: {dados}
    }
}