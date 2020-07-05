import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family: 'Bebas Neue', cursive;
    color: #fff;
    text-transform: uppercase;
    font-weight: normal;
    font-size: 2.4rem;
    margin-top: 2rem;
    display: block;
`;

const SelectComponent = styled.select`
    width: 100%;
    display: block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;

const useCoin = (label, initialState, coins) => {

    const [state, setState] = useState(initialState);

    const Select = () => (
        <Fragment>
            <Label htmlFor="coin">{label}</Label>
            <SelectComponent
                name="coin"
                id="coin"
                onChange={e => setState(e.target.value)}
                value={state}
            >
                <option value="">-- Selecciona --</option>
                {coins.map(option => (
                    <option value={option.codigo} key={option.codigo}>{option.nombre}</option>
                ))}

            </SelectComponent>
        </Fragment>
    );

    return [state, Select];
}

export default useCoin;