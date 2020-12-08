import { useState } from 'react';
import styled, { css } from 'styled-components';


export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    vertical-align: top;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    justify-content: center;
    color: #fff;
    display: flex;
    width: 400px;
    height: 500px;
    margin: 80px;
    margin-top: 10px;
    background: #201f24;
    border: 1px solid #201f24;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
    :hover{
        border-color: #DCED31;
        transition-duration: 0.5s;
    
    }
    `;

    export const ContentTwo = styled(Content)`
        :hover{
            border-color: #0CCE6B;
            transition-duration: 0.5s;
        }
    `;

    export const MenuBar = styled.div`
    height: 60px;
    background: #201f24;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 30px;

    `;
