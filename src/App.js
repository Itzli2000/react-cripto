import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import imagen from './cryptomonedas.png';
import Form from './components/Form';
import Quotation from './components/Quotation';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;

const Imagen = styled.img`
  max-width: 100%;
  margin-top: 5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #fff;
  text-align: left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66a2fe;
    display: block;
  }

`;

function App() {

  const [coin, setCoin] = useState('');
  const [criptocoin, setCriptoCoin] = useState('');

  const [quotation, setQuotation] = useState({});

  useEffect(() => {
    if (criptocoin === '') return;

    const consultPriceApi = async () => {

      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${criptocoin}&tsyms=${coin}`;
      const result = await axios.get(url);
      setQuotation(result.data.DISPLAY[criptocoin][coin]);

    }

    consultPriceApi();

  }, [coin, criptocoin]);

  return (
    <Contenedor>
      <div>
        <Imagen
          src={imagen}
          alt="Criptomonedas"
        />
      </div>
      <div>
        <Heading>Cotiza criptomonedas al instante</Heading>

        <Form
          setCoin={setCoin}
          setCriptoCoin={setCriptoCoin}
        />

        <Quotation
          quotation={quotation}
        />
      </div>
    </Contenedor>
  );
}

export default App;
