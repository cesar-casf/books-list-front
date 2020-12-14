import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import { saveData, editData, deleteData } from '../lib/configaxios'
import { Input, ButtonYellow, Centerdiv, Container, ContentForm, MenuBar } from '../styles/styles';
//console.log(form);
//saveData(form);
//editData(form);
//deleteData(form);

const initialValue = {
  title: '',
  autor: '',
  category: '',
}

export default function Cadastro() {
  const [values, setValues] = useState(initialValue);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function clearInput(ev) {
    ev.target.value = '';
  }

  function onSubmit(ev) {
    ev.preventDefault();
    console.log(values);
    saveData(values);
    alert('Cadastrado com sucesso!');
    const myForm = ev.target;
    myForm.reset();
  }
//
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
          </Head>

          <Centerdiv>
            <h3 style={{ justifySelf: "center" }}>Cadastro de Livros</h3>
            <form id="bookForm" name="bookForm" onSubmit={onSubmit}>

              <label style={{ marginLeft: "10px" }} htmlFor="titulo">Título:</label>
              <Input id="title" name="title" onChange={onChange}></Input>
              <label style={{ marginLeft: "10px" }} htmlFor="autor">Autor:</label>
              <Input id="autor" name="autor" onChange={onChange}></Input>
              <label style={{ marginLeft: "10px" }} htmlFor="category">Categoria:</label>
              <Input id="category" name="category" onChange={onChange}></Input>

              <ButtonYellow type='submit'>Enviar</ButtonYellow>
            </form>
          </Centerdiv>

        </ContentForm>
      </Container>


    </div>
  )
}