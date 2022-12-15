import styled from "styled-components";


export const Container = styled.div `
     width: 800px;
     margin: 0 auto;
     padding: 15px 30px;
    
`;

export const MainTitle = styled.h1 `
     text-align: center;
     font-size: 60px;
     margin-bottom: 60px;
`;

export const Title = styled.h2`
     text-align: center;
     font-size: 40px;
     margin-bottom: 60px;
`;

export const OpenModalBtn = styled.button`
background: #FF4742;
border: 1px solid #FF4742;
border-radius: 6px;
box-shadow: rgba(0, 0, 0, 0.1) 1px 2px 4px;
box-sizing: border-box;
color: #FFFFFF;
cursor: pointer;
display: block;
font-size: 24px;
font-weight: 600;
line-height: 1.36;
letter-spacing: 0.1em;
text-transform: uppercase;
min-height: 40px;
outline: 0;
padding: 12px 14px;
text-align: center;
margin: 0 auto;


&:hover {
background-color: initial;
color: #FF4742;
}
`;
