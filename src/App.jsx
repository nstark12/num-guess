import { useState } from 'react'
import styled from 'styled-components'
import Button from './components/Button'
import Container from './components/Container'
import Header from './components/Header'
import { themes } from './utils/constants'
import { useThemeContext } from './utils/themeContext'
import { useGameContext } from './utils/gameContext'


const AppContainer = styled.main`
  background: black;
  height: 100vh;
  width: 100vw;
  display: grid;
  place-items: center;
  background: ${props => `linear-gradient(45deg, ${props.theme.primary}, ${props.theme.secondary})`};
`

const App = () => {
  const { theme } = useThemeContext()
  const { dispatch } = useGameContext()

  const handleButtonClick = num => {
    dispatch({
      type: 'SUBMIT_ANSWER', 
      payload: 0
    })
  }

  return (


    <AppContainer theme={theme}>
      <Container>

        <Header></Header> 

        <Button 
          onClick={() => handleButtonClick(0)}
          
          >
            0
        </Button>
       
        <Button 
          onClick={() => handleButtonClick(1)}
          
          >
            1
        </Button>
        
        <Button 
          onClick={() => handleButtonClick(2)}
          
          >
            2
        </Button>
      </Container>
    </AppContainer>
  )
}

export default App