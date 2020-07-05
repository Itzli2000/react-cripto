import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import useCoin from '../hooks/useCoin';
import useCriptoCoin from '../hooks/useCriptoCoin';
import axios from 'axios';
import Error from './Error';

const Boton = styled.button`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #fff;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: #326ac0;
        cursor: pointer;
    }
`;

const Form = ({ setCoin, setCriptoCoin }) => {

    const [criptolist, setList] = useState([]);
    const [error, setError] = useState(false);

    const MONEDAS = [
        { codigo: 'USD', nombre: 'Dolar de Estados Unidos' },
        { codigo: 'MXN', nombre: 'Peso Mexicano' },
        { codigo: 'EUR', nombre: 'Euro' },
        { codigo: 'GBP', nombre: 'Libra Esterlina' },
        { codigo: 'CAD', nombre: 'Dolar Canadiense' }
    ];

    const [coin, Select] = useCoin('Elige tu moneda', '', MONEDAS);

    const [criptocoin, SelectCripto] = useCriptoCoin('Elige tu cripto moneda', '', criptolist);

    useEffect(() => {
        const consultApi = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url);
            setList(result.data.Data);

        }

        consultApi();
    }, []);

    const getQuotation = e => {
        e.preventDefault();
        if (coin.trim() === '' || criptocoin.trim() === '') {
            setError(true);
            return;
        }
        setError(false);
        setCoin(coin);
        setCriptoCoin(criptocoin);
    }

    return (
        <form
            onSubmit={getQuotation}
        >
            {
                error ? <Error message="Todos los campos son obligatorios" /> : null
            }
            <Select />
            <SelectCripto />
            <Boton
                type="submit"
            >
                Calcular
            </Boton>
        </form>
    );
};

Form.propTypes = {
    setCoin: PropTypes.func.isRequired,
    setCriptoCoin: PropTypes.func.isRequired,
};

export default Form;