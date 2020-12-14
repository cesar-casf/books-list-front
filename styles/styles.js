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
    box-sizing: border-box;
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
    box-shadow: rgb(18, 18, 20) 0px 1rem 2rem;
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

export const ContentForm = styled(Content)`
        cursor: default;
        border-color: #DCED31;
        
    `;

export const ContentList = styled(Content)`
        cursor: default;
        border-color: #0CCE6B;
        width: 1000px;
        height: auto;
        display: block;
        :hover{
                border-color: #0CCE6B;
                transition-duration: 0.5s;
    `;

export const MenuBar = styled.div`
    height: 60px;
    background: #201f24;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 30px;
    box-shadow: rgb(18, 18, 20) 0px 1rem 2rem;
    `;

export const Centerdiv = styled.div`
        align-items: center;
        justify-content: center;
        display: inline-grid;
        width: 400px;
        height: 500px;
    `;

export const ButtonYellow = styled.button`
        cursor: pointer;
        background: #DCED31;
        color: #201f24;
        font-size: 1.3em;
        margin: 10px;
        margin-bottom: 30px;
        padding: 0.25em 1em;
        border: 2px solid #DCED31;
        border-radius: 3px;
        :hover{
            background: #201f24;
            color: #DCED31; 
        }
    `;

export const ButtonGreen = styled(ButtonYellow)`
        background: #0CCE6B;
        border: 2px solid #0CCE6B;
        
        :hover{
            background: #201f24;
            color: #0CCE6B;
        }
    `;

export const Input = styled.input`
        background: #121214;
        border: 0.5px solid #76767E;
        height: 30px;
        width: 300px;
        color: #FFF;
        margin: 10px;
    `;

    export const ListDiv = styled.div`
        align-items: top;
        justify-content: center;
        display: flex;
        width: auto;
        height: auto;
    `;
    
    export const Centertwo = styled(Centerdiv)`
        align-items: top;
        height: auto;
        width: 500px;
    `;