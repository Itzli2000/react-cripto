import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResultadoDiv = styled.div`
    color: #fff;
    font-family: Arial, Helvetica, sans-serif;
`;

const Parrafos = styled.p`
    font-size: 18px;

    span {
        font-weight: bold;
    }
`;

const Precio = styled.p`
    font-size: 30px;
`;

const Quotation = ({ quotation }) => {

    if (Object.keys(quotation).length === 0) return null;

    return (
        <ResultadoDiv>
            <Precio>El precio es: <span>{quotation.PRICE}</span></Precio>
            <Parrafos>Precio más alto del día: <span>{quotation.HIGHDAY}</span></Parrafos>
            <Parrafos>Precio más bajo del día: <span>{quotation.LOWDAY}</span></Parrafos>
            <Parrafos>Variación últimas 24 horas: <span>{quotation.CHANGEPCT24HOUR}</span></Parrafos>
            <Parrafos>Última actualización: <span>{quotation.LASTUPDATE}</span></Parrafos>
        </ResultadoDiv>
    );
};

Quotation.propTypes = {
    quotation: PropTypes.object.isRequired,
};

export default Quotation;