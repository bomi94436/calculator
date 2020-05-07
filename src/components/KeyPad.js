import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
    DEEP_PURPLE,
    GRAY,
} from '../styles/mainColor';

const NumberButton = styled.button`
    width: ${props => {
        if (props.double)
            return '122px';
        else
            return '60px';
    }};
    height: 60px;
    font-size: 22px;
    text-align: center;
    color: black;
    background-color: white;
    border: white;
    border-radius: 50px;
    outline: none;
    cursor: pointer;
    &:hover {
        opacity: 0.7;
        
    }
    &:active {
        filter: brightness(80%);
    }
`;

const CalcButton = styled(NumberButton)`
    background-color: ${GRAY};
`;

const EqualButton = styled(NumberButton)`
    background-color: ${DEEP_PURPLE};
    color: white;
`;

const KeyPad = (props) => {
    return (
        <Fragment>
            <tbody>
                <tr>
                    <td><CalcButton onClick={() => props.changeHandler("/")}>/</CalcButton></td>
                    <td><CalcButton onClick={() => props.changeHandler("*")}>x</CalcButton></td>
                    <td><CalcButton onClick={() => props.changeHandler("-")}>-</CalcButton></td>
                    <td><CalcButton onClick={() => props.changeHandler("+")}>+</CalcButton></td>
                </tr>
                <tr>
                    <td><NumberButton onClick={() => props.changeHandler(7)}>7</NumberButton></td>
                    <td><NumberButton onClick={() => props.changeHandler(8)}>8</NumberButton></td>
                    <td><NumberButton onClick={() => props.changeHandler(9)}>9</NumberButton></td>
                    <td><CalcButton onClick={() => props.changeHandler("FRONT")}>+/-</CalcButton></td>
                </tr>
                <tr>
                    <td><NumberButton onClick={() => props.changeHandler(4)}>4</NumberButton></td>
                    <td><NumberButton onClick={() => props.changeHandler(5)}>5</NumberButton></td>
                    <td><NumberButton onClick={() => props.changeHandler(6)}>6</NumberButton></td>
                    <td><CalcButton onClick={() => props.changeHandler("AC")}>AC</CalcButton></td>
                </tr>
                <tr>
                    <td><NumberButton onClick={() => props.changeHandler(1)}>1</NumberButton></td>
                    <td><NumberButton onClick={() => props.changeHandler(2)}>2</NumberButton></td>
                    <td><NumberButton onClick={() => props.changeHandler(3)}>3</NumberButton></td>
                    <td><CalcButton onClick={() => props.changeHandler("BACK")}>⌫</CalcButton></td>
                </tr>
                <tr>
                    <td colSpan={2}><NumberButton double={1} onClick={() => props.changeHandler(0)}>0</NumberButton></td>
                    <td><NumberButton onClick={() => props.changeHandler(".")}>.</NumberButton></td>
                    <td><EqualButton onClick={() => props.changeHandler("=")}>=</EqualButton></td>
                </tr>
            </tbody>
        </Fragment>
    );
};

export default KeyPad;