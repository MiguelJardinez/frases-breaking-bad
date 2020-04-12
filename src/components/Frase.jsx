import React from 'react'
import styled from '@emotion/styled'

const ContenedorFrase = styled.div`
    padding: 2rem; 
    border-radius: 0.5rem;
    background-color: white; 
    max-width: 800px;

    @media (min-width: 992px) {
        margin-top: 10rem;
    }

    h1{
        font-family: Arial, Helvetica, sans-serif; 
        text-align: center; 
        position: relative; 
        padding-left: 4rem; 
        font-size: 2rem;

        &::before{
            content: open-quote; 
            font-size: 6rem;
            color: black;
            position: absolute; 
            left: -1rem; 
            top: -2rem;
        }
    }

    p{
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 1rem;
        text-align: right;
        color: #666;
        margin-top: 2rem;
        font-weight: bold;
    }
`;

const Frase = ({ frase }) => {

    const { quote, author } = frase;

    return (
        <ContenedorFrase>
            <h1>{ quote }</h1>
            <p>- { author }</p>
        </ContenedorFrase>
    );
}

export default Frase;