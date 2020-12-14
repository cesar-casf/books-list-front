import styled, { css } from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

`;

export const Content = styled.div`
    background: #fff;
    width: 60%;
    height: 60%;
    display: flex;
`;

export const ContentForm = styled.div`
    justify-content: center;
    box-sizing: border-box;
    color: #fff;
    display: flex;
    min-width: 230px;
    max-width: 400px;
    height: 500px;
    margin: 40px;
    margin-top: 10px;
    background: #201f24;
    border: 1px solid #0CCE6B;
    border-radius: 10px;
    padding: 20px;
    box-shadow: rgb(18, 18, 20) 0px 1rem 2rem;
    cursor: default;
    width: 70%;

    @media screen and (max-width: 960px){
        margin: 5px;
    }

    `;