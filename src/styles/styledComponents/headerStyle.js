import styled from "styled-components";

const bgDark = 'https://i.ibb.co/xhnbBZT/bg-desktop-dark.jpg'
const bglight = 'https://i.ibb.co/6ssZMWN/bg-desktop-light.jpg'
const mobileBgDark = 'https://i.ibb.co/Px2vb5X/bg-mobile-dark.jpg'
const mobileBglight = 'https://i.ibb.co/qYrGQqf/bg-mobile-light.jpg'

export const ImgHeader = styled.div`
    background-image: ${(props) => props.darkTheme === true ? `url(${bgDark})` : `url(${bglight})`} ;
    background-position: fixed;
    background-repeat: no-repeat;
    background-size: 100%;
    height: 240px;

    @media screen and (max-width: 700px) {
        background-image: ${(props) => props.darkTheme === true ? `url(${mobileBgDark})` : `url(${mobileBglight})`} ;
    }
`