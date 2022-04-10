import styled from "styled-components";

export const AddTaskInput = styled.input`
    width: 100%;
    padding: 13px 30px;
    border: none;
    border-radius: 5px;
    outline: none;
    background-color: ${(props) => props.darkTheme === true ? 'hsl(235, 24%, 19%)' : '#fff' };
    color: ${(props) => props.darkTheme === true ? '#fff' : '#000'};
`