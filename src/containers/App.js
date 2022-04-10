import React, { useState, useEffect } from 'react'
import AddTasks from '../components/AddTasks'
import HeaderImg from '../components/HeaderImg'
import ListTasks from '../components/ListTasks'
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs'
import { CenterContainer, GlobalStyle, TaskContainer, TodoTitle } from '../styles/styledComponents/containerStyle'

const App = () => {

  const [darkTheme, setDarkTheme] = useState(false)

  const [iconTheme, setIconTheme] = useState()

  useEffect(() => {
    changeTheme()
  }, [])
  

  const changeTheme = () => {
    if (darkTheme === false) {
      setDarkTheme(true)
      setIconTheme(<BsFillSunFill />)
    } else if (darkTheme === true){
      setDarkTheme(false)
      setIconTheme(<BsFillMoonFill />)
    }
  }

  return (
    <div>
      <GlobalStyle darkTheme={darkTheme}/>
      <HeaderImg darkTheme={darkTheme}/>


      <CenterContainer>


        <TaskContainer>

          <TodoTitle>
            <h1>TODO</h1>

            <div onClick={changeTheme}>
              {iconTheme}
            </div>

          </TodoTitle>

          <AddTasks darkTheme={darkTheme}/>
          <ListTasks darkTheme={darkTheme}/>
        </TaskContainer>
      </CenterContainer>
    </div>

  )
}

export default App