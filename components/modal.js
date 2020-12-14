import Head from 'next/head'
import { Container, ContentForm } from '../styles/modal'
import { Input, ButtonGreen, ButtonRed, Centerdiv } from '../styles/styles'
import React, { useState } from 'react';
import { editData } from '../lib/configaxios'

const initialValue = {
  title: '',
  autor: '',
  category: '',
  id: '',
}

export default function Modal({ onClose = () => { }, dados }) {


  initialValue.id = (dados.initialData.id);

  function imprimeValue() {
    console.log(initialValue.id)
  }


  const [values, setValues] = useState(initialValue);

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  function onSubmit(ev) {
    ev.preventDefault();
    editData(values);
    alert('Editado com sucesso!');
    const myForm = ev.target;
    myForm.reset();
    onClose();
  }

  return (
    <Container>
      <Head>
      </Head>

      <ContentForm>
        <Centerdiv>
          <h3 style={{ justifySelf: "center" }}>Editar Livro: {dados.initialData.title}</h3>
          <form id="bookForm" name="bookForm" onSubmit={onSubmit}>

            <label style={{ marginLeft: "2px" }} htmlFor="titulo">Título:</label>
            <Input id="title" name="title" onChange={onChange} required="required"></Input>
            <label style={{ marginLeft: "2px" }} htmlFor="autor">Autor:</label>
            <Input id="autor" name="autor" onChange={onChange}required="required"></Input>
            <label style={{ marginLeft: "2px" }} htmlFor="category">Categoria:</label>
            <Input id="category" name="category" onChange={onChange}required="required"></Input>

            <ButtonGreen type='submit'>Enviar</ButtonGreen>
            <ButtonRed type='reset' onClick={onClose}>Cancelar</ButtonRed>
          </form>
        </Centerdiv>
      </ContentForm>
    </Container>
  )
}