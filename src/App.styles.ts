import styled from "styled-components";

export const Container = styled.div `
    background-color: #27282f;
    color: #fff;
    min-height: 100vh;
`;

export const Aria = styled.div `
    margin: auto;
    max-width: 980;
    padding: 30px 0px;
`;

export const Header = styled.h1 `
    margin: 0;
    padding: 0;
    text-align: center;
    margin-bottom: 30px;
`;

export const ScreenWarning = styled.div `
    text-align: center;

    .emoji {
        font-size: 50px;
        margin-bottom: 20px;
    }
`;

export const PhotoList = styled.div `
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
`;

export const UpLoadForm = styled.form `
    background-color: #3d3f43;
    border-radius: 10px;
    padding: 15px;
    margin-bottom: 30px;

    input[type=submit] {
        background-color: #756df4;
        border: 0;
        color: #fff;
        padding: 8px 16px;
        font-size: 13px;
        border-radius: 10px;
    }
`;