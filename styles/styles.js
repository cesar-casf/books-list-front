import { useState } from 'react';
import styled, { css } from 'styled-components';

export const Cont = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    grid-template-columns: 440px 440px;
    vertical-align: top;
    justify-content: center;
    align-items: center;
`;

export const Container = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    grid-template-columns: 440px 440px;
    vertical-align: top;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 960px){
        display: block;
        align-self: center;
        justify-self: center;
    }
`;

export const Content = styled.div`
    justify-content: center;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    width: 40%;
    min-width: 230px;
    max-width: 400px;
    height: 500px;
    margin: 40px;
    margin-top: 10px;
    background: #201f24;
    border: 1px solid #201f24;
    border-radius: 10px;
    padding: 20px;
    box-shadow: rgb(18, 18, 20) 0px 1rem 2rem;
    :hover{
        border-color: #DCED31;
        transition-duration: 0.5s;
    
    }

    @media screen and (max-width: 960px){
        margin: 5px;
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
        width: 70%;
    `;

export const ContentList = styled(Content)`
        cursor: default;
        border-color: #0CCE6B;
        max-width: 1000px;
        width: 90%;
        min-width: 300px;
        height: auto;
        display: block;
        :hover{
                border-color: #0CCE6B;
                transition-duration: 0.5s;
        }
        @media screen and (max-width: 960px){
        
        }

    `;
   

export const MenuBar = styled.nav`
    height: 60px;
    width: 100%;
    background: #201f24;
    color: #fff;
    display: flex;
    align-items: center;
    padding: 0 30px;
    box-shadow: rgb(18, 18, 20) 0px 1rem 2rem;
    font-weight: bold;
    `;

export const Centerdiv = styled.div`
        align-items: center;
        justify-content: center;
        display: inline-grid;
        width: 80%px;
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

export const ButtonRed = styled(ButtonYellow)`
        background: #C70039;
        border: 2px solid #C70039;

        :hover{
            background: #201f24;
            color: #C70039;
        }
`;

export const Input = styled.input`
        background: #121214;
        border: 0.5px solid #76767E;
        height: 30px;
        width: 100%;
        color: #FFF;
        margin: 10px;
        display: block;



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
        width: 100%;
        font-size: 70%;
    `;

    export const Table = styled.table`
        margin-top: 30px;
        font-size: 1.5em;
        border-collapse: collapse;
        border: 2px solid #525252;
        display: inline-table;

                @media screen and (max-width: 1020px){
                    font-size: 1em;
                }
                @media screen and (max-width: 800px){
                    font-size: .7em;
                }
                @media screen and (max-width: 799px){
                    font-size: .5em;
                }

    `;

    export const Td = styled.td`
        border: 1px solid #525252;
        padding: 12px;
        height: 40px;
        max-width: 200px;
        width: 60%;
        min-width: 200px;
        
        @media screen and (max-width: 1000px){
            max-width: auto;
            width: 60%;
            height: auto;
            min-width: auto;
                }

    `;

    export const Th = styled(Td)`
        background: #398D53;
        
    `;

    export const Tr = styled.tr`

        :hover{
            background: #121214;
        }
    `;

export const ButtonDelete = styled.button`
        cursor: pointer;
        background: #C70039;
        color: #201f24;
        font-size: 25px;
        margin: 2px;
        padding: 5px, 5px;
        border: 1px solid #C70039;
        border-radius: 3px;
        width: 70px;
        height: 30px;
        :hover{
            background: #201f24;
            color: #C70039; 
        }
    `;
export const ButtonEdit = styled.button`
cursor: pointer;
background: #4F74DE;
color: #201f24;
font-size: 25px;
margin: 2px;
padding: 5px, 5px;
border: 1px solid #4F74DE;
border-radius: 3px;
width: 70px;
height: 30px;
:hover{
    background: #201f24;
    color: #4F74DE; 
}
`;