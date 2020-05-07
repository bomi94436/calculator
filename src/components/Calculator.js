import React, { Fragment, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import {
    DEEP_PURPLE,
    GRAY,
} from '../styles/mainColor';
import KeyPad from './KeyPad';
import ResultArea from './ResultArea';

const Table = styled.table`
    padding: 30px;
    border-radius: 50px;
    background-color: white;
    border-spacing: 0px;
`;

let result = 0;
let numberBuffer = "";
let afterCalc = false;
let afterEqual = false;

const Calculator = () => {
    const [value, setValue] = useState("0");
    const [process, setProcess] = useState("0");

    const changeHandler = (btn) => {
        // 입력받은 parameter가 숫자일 경우
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
        // 입력받은 parameter가 문자일 경우
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

        // console.log(result, numberBuffer);
    }

    return (
        <Fragment>
            <Table>
                <thead>
                    <ResultArea value={value} process={process} />
                </thead>
                <tbody>
                    <KeyPad changeHandler={changeHandler} />
                </tbody>
            </Table>
        </Fragment>
    );
};

export default Calculator;