import React from 'react'
import bgImgDark from '../img/bg-desktop-dark.jpg'
import bgImgLight from '../img/bg-desktop-light.jpg'
import { ImgHeader } from '../styles/styledComponents/headerStyle'

const HeaderImg = ({darkTheme}) => {

    return (
      <ImgHeader darkTheme={darkTheme}>

          {/* <img width="100%" src={bgImgDark} alt="" /> */}
      </ImgHeader>
    )

}

export default HeaderImg