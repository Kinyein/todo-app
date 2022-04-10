import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

	body {
		background-color: ${(props) => props.darkTheme === true ? 'hsl(235, 21%, 11%)' : 'hsl(236, 33%, 92%)'};
        user-select: none;
	}
`

export const CenterContainer = styled.div`
    display: flex;
    justify-content: center;
    
    /* background-color: purple; */
    /* margin-top: -9%; */

`
export const TodoTitle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #fff;
`
export const TaskContainer = styled.div`
    max-width: 90%;
    margin: -150px 5%;
    /* background-color: hsl(235, 24%, 19%); */
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
`