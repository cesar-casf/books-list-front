import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import { BiArrowBack } from "react-icons/bi";
import { saveData } from '../lib/configaxios'
import { Input, ButtonYellow, Centerdiv, FlexContainer, ContentForm, MenuBar } from '../styles/styles';
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

  function onSubmit(ev) {
    ev.preventDefault();
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
            <Link href="/"><a style={{ textDecoration: 'none', color: '#fff', margin: '30px' }}> <BiArrowBack></BiArrowBack> Voltar</a></Link>
      </MenuBar>

      <FlexContainer>
        <ContentForm>
          <Head>
            <title>Sistema de Gestão de Livros</title>
            <link rel="shortcut icon" href="/favicon.ico" />
          </Head>

          <Centerdiv>
            <h3 style={{ justifySelf: "center" }}>Cadastro de Livros</h3>
            <form id="bookForm" name="bookForm" onSubmit={onSubmit}>

              <label style={{ marginLeft: "2px" }} htmlFor="titulo">Título:</label>
              <Input id="title" name="title" onChange={onChange} require="required"></Input>
              <label style={{ marginLeft: "2px" }} htmlFor="autor">Autor:</label>
              <Input id="autor" name="autor" onChange={onChange} required="required"></Input>
              <label style={{ marginLeft: "2px" }} htmlFor="category">Categoria:</label>
              <Input id="category" name="category" onChange={onChange} required="required"></Input>

              <ButtonYellow type='submit'>Enviar</ButtonYellow>
            </form>
          </Centerdiv>

        </ContentForm>
      </FlexContainer>

    </div>
  )
}