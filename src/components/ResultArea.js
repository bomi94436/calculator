import React, { Fragment } from 'react';
import styled from 'styled-components';
import {
    DEEP_PURPLE,
    GRAY,
} from '../styles/mainColor';

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

const ResultArea = (props) => {
    return (
        <Fragment>
            <tr>
                <td colSpan={4}><Title>Calculator</Title></td>
            </tr>
            <tr>
                <td colSpan={4}><InputArea>{props.value}</InputArea></td>
            </tr>
            <tr>
                <td colSpan={4}><ProcessArea>{props.process}</ProcessArea></td>
            </tr>
        </Fragment>
    );
};

export default ResultArea;