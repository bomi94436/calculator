import React, { Fragment, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
    SKY_BLUE,
    DEEP_BLUE,
    DEEP_PURPLE,
    GRAY,
} from '../mainColor';

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    background-color: ${DEEP_PURPLE};
  }
  td {
      padding: 5px;
      border: 1px solid white;
  }
`;

const Container = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-top: 120px;
`;

const Table = styled.table`
    padding: 30px;
    border-radius: 50px;
    background-color: white;
    border-spacing: 0px;
`;

const InputArea = styled.h1`
    font-size: 25px;
    color: black;
    text-align: right;
    margin: 0;
    padding: 15px 10px 15px 10px;
    background-color: white;
`;

const ProcessArea = styled.p`
    font-size: 15px;
    background-color: white;
    color: gray;
    margin: 0;
    padding: 5px 10px;
    text-align: right;
`;


const Title = styled.p`
    padding-top: 10px;
    font-weight: bold;
    font-size: 30px;
    color: ${DEEP_PURPLE};
    margin: 0;
`;

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


let result = 0;
let numberBuffer = "";
let afterCalc = false;
let afterEqual = false;

const Calculator = () => {
    const [value, setValue] = useState("0");
    const [process, setProcess] = useState("0");

    const changeHandler = (btn) => {
        if (typeof btn === 'number') {
            if (afterCalc) {
                afterCalc = false;
                numberBuffer = String(btn);
            }
            else if (afterEqual) {
                afterEqual = false;
                result = "";
                numberBuffer += String(btn);
            }
            else if (value === "0") {
                numberBuffer = String(btn);
            }
            else if (btn === 0) {
                if (numberBuffer === 0 || numberBuffer === "") {
                    numberBuffer = String(btn);
                }
                else {
                    numberBuffer += String(btn);
                }
            }
            else {
                numberBuffer += String(btn);
            }

            setValue(numberBuffer);
            setProcess(((Number(result) === 0) ? "" : result) + numberBuffer);
        }
        else {
            switch (btn) {
                case "=":
                    result += Number(numberBuffer);

                    try {
                        result = eval(result);
                    } catch (e) {
                        setValue("error");
                    }

                    numberBuffer = "";
                    afterEqual = true;
                    setValue(result);
                    break;

                case "AC":
                    result = "";
                    numberBuffer = "";
                    setValue(0);
                    setProcess(0);
                    break;

                case "FRONT":
                    if (numberBuffer > 0) {
                        numberBuffer = "-" + numberBuffer;
                        setValue(numberBuffer);
                    }
                    else if (numberBuffer < 0) {
                        numberBuffer = numberBuffer.replace("-", "");
                        setValue(numberBuffer);
                    }
                    break;

                case "BACK":
                    if (numberBuffer) {
                        numberBuffer = numberBuffer.slice(0, -1);
                        if (numberBuffer)
                            setValue(numberBuffer);
                        else
                            setValue(0);
                    }
                    break;

                case ".":
                    if (numberBuffer.indexOf(".") === -1) {
                        numberBuffer += ".";
                        setValue(numberBuffer);
                    }
                    afterCalc = false;
                    break;

                default:
                    if (afterCalc) {
                        result = result.slice(0, -1);
                    }
                    result += (Number(numberBuffer) ? Number(numberBuffer) : "");
                    result += btn;
                    numberBuffer = "0";
                    afterCalc = true;
                    break;
            }

            if (!result && !Number(numberBuffer)) {
                setProcess(0);
            }
            else
                setProcess((Number(result) === 0 ? "" : result)
                    + (Number(numberBuffer) === 0 ? "" : numberBuffer));

        }

        console.log(result, numberBuffer);
    }

    return (
        <Fragment>
            <GlobalStyle />
            <Container>
                <Table>
                    <thead>
                        <tr>
                            <td colSpan={4}><Title>Calculator</Title></td>
                        </tr>
                        <tr>
                            <td colSpan={4}><InputArea>{value}</InputArea></td>
                        </tr>
                        <tr>
                            <td colSpan={4}><ProcessArea>{process}</ProcessArea></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><CalcButton onClick={() => changeHandler("/")}>/</CalcButton></td>
                            <td><CalcButton onClick={() => changeHandler("*")}>x</CalcButton></td>
                            <td><CalcButton onClick={() => changeHandler("-")}>-</CalcButton></td>
                            <td><CalcButton onClick={() => changeHandler("+")}>+</CalcButton></td>
                        </tr>
                        <tr>
                            <td><NumberButton onClick={() => changeHandler(7)}>7</NumberButton></td>
                            <td><NumberButton onClick={() => changeHandler(8)}>8</NumberButton></td>
                            <td><NumberButton onClick={() => changeHandler(9)}>9</NumberButton></td>
                            <td><CalcButton onClick={() => changeHandler("FRONT")}>+/-</CalcButton></td>
                        </tr>
                        <tr>
                            <td><NumberButton onClick={() => changeHandler(4)}>4</NumberButton></td>
                            <td><NumberButton onClick={() => changeHandler(5)}>5</NumberButton></td>
                            <td><NumberButton onClick={() => changeHandler(6)}>6</NumberButton></td>
                            <td><CalcButton onClick={() => changeHandler("AC")}>AC</CalcButton></td>
                        </tr>
                        <tr>
                            <td><NumberButton onClick={() => changeHandler(1)}>1</NumberButton></td>
                            <td><NumberButton onClick={() => changeHandler(2)}>2</NumberButton></td>
                            <td><NumberButton onClick={() => changeHandler(3)}>3</NumberButton></td>
                            <td><CalcButton onClick={() => changeHandler("BACK")}>⌫</CalcButton></td>
                        </tr>
                        <tr>
                            <td colSpan={2}><NumberButton double={1} onClick={() => changeHandler(0)}>0</NumberButton></td>
                            <td><NumberButton onClick={() => changeHandler(".")}>.</NumberButton></td>
                            <td><EqualButton onClick={() => changeHandler("=")}>=</EqualButton></td>
                        </tr>
                    </tbody>
                </Table>
            </Container>
        </Fragment>
    );
};

export default Calculator;