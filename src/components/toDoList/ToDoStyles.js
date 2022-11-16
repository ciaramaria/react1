import styled, { css } from 'styled-components';


export const ToDoContainerStyled = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #151d52;
    height: 600px;
    width: 1000px;
    border-radius: 20px;

        
`;

// export const ToDoSpanStyled = styled.span `

//     padding: 10px;
//     width: 100px;
//     font-size: 2rem;
//     text-align: center;
    
// `;

export const ToDoFormStyled = styled.form `

    padding: 20px 25px;
    background-color: #363c63;
    border: 3px solid #6873bd;
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-radius: 14px;
`


export const ToDoButtonStyled = styled.button`
padding: 10px 30px;
background-color:#3e4470;
border: 1px solid #151d52;
margin: 3px;
border-radius: 3px;

${props =>
props.left &&
 css`
    border-top-left-radius: 9px;
    border-bottom-left-radius: 9px;
    `}

${props =>
props.rigth &&
css`
    border-top-right-radius: 9px;
    border-bottom-right-radius: 9px;
    `
}
cursor: pointer;

`;