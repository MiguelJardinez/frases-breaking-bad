import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled'
import './assets/style.scss';

//Componentes
import Frase from './components/Frase'


const Contenedor = styled.div`
  display: flex;
  align-items: center; 
  padding-top: 8rem; 
  flex-direction: column;
`;

const Button = styled.button`
  background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%); 
  background-size: 300px; 
  font-family: Arial, Helvetica, sans-serif; 
  color: white; 
  margin-top: 3rem; 
  padding: 1rem 3rem;
  font-size: 2rem;
  border: 2px solid black; 
  cursor: pointer;
  transition: all 300ms ease-in-out;

  &:hover{
    background-size: 4000;
  }
`;

function App() {

  //State de frases
  const [ frase, guardarFrase ] = useState({});

  const consultarApi = async () => {
    const API = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    //construyendo la promesa 
    const frase = await API.json();
    guardarFrase(frase[0]);
  }

  //Cargar una frase en cuanto cargue el documento
  useEffect( () => {
    consultarApi();
  }, []);


  return (
    <Contenedor>
      <Frase 
        frase= { frase }
      />
      <Button
        onClick={ () => consultarApi() }
      >
        Nueva frase
      </Button>
    </Contenedor>
  );
}

export default App;
