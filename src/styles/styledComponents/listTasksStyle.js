import styled from "styled-components";

export const ListContainer = styled.div`
    color: ${(props) => props.darkTheme === true ? 'hsl(0, 0%, 98%)' : '#000'};
    background-color: ${(props) => props.darkTheme === true ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)'};
    margin: 20px 0;
    border-radius: 8px;
    padding: 5px 0;
    width: 100%;
`
export const ListTasksDiv = styled.div`
    padding: 10px 20px;
    border-bottom: 1px solid ${(props) => props.darkTheme === true ? 'hsl(235, 19%, 35%)' : 'hsl(0, 0%, 98%)'};
    background-color: ${(props) => props.darkTheme === true ? 'hsl(235, 24%, 19%)' : 'hsl(0, 0%, 98%)'};
    display: flex;
    align-items: center;
    justify-content: space-between;

    label{
        word-wrap: break-word;
        display: flex;
        align-items: center;
        gap: 10px;

        input {
            visibility: hidden;

            &::before {
                content: "";
                position: relative;
                visibility: visible;
                padding: 0 8px;
                left: 0;
                bottom: 6px;
                border-radius: 50%;
                border: 1px solid hsl(235, 19%, 35%);
                cursor: pointer;
            }

            &:checked{
                margin-left: 20px;

                &::before {
                background-color: green;
                }
            }
        }

    }

    button{
        border: none;
        background-color: transparent;
        font-size: 30px;
        margin: 0 10px;
        color: ${(props) => props.darkTheme === true ? 'hsl(235, 19%, 35%)' : 'hsl(235, 24%, 19%)'};
        transition: .2s;
        width: 45px;
        border-radius: 50%;
    }

    button:hover{
        background-color: ${(props) => props.darkTheme === true ? 'hsl(235, 21%, 25%)' : 'hsl(233, 11%, 84%)'};
    }
`
export const FooterList = styled.div`
    display: flex;
    justify-content: space-around;
    margin: 20px 20px 0 20px;
    font-size: 13px;
    flex-wrap: wrap;
    gap: 20px;

    a{
        color: ${(props) => props.darkTheme === true ? 'hsl(235, 19%, 35%)' : '#000'} ;
        user-select: none;
    }
`
export const FilterContainer = styled.div`
    display: flex;
    a{
        cursor: pointer;
        text-decoration: none;
        transition: .1s;

        &:hover{
            color: ${(props) => props.darkTheme === true ? 'hsl(236, 33%, 92%)' : 'hsl(234, 11%, 52%)'} ;
            transform: scale(1.1);
        }
    }
`
export const ClearAll = styled.a`
    cursor: pointer;
    text-decoration: none;
    transition: .1s;

    &:hover{
        color: ${(props) => props.darkTheme === true ? 'hsl(236, 33%, 92%)' : 'hsl(234, 11%, 52%)'};
        transform: scale(1.1);
    }
`