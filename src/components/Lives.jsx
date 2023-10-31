import styled from 'styled-components'
import { useThemeContext } from '../utils/themeContext'
import { useGameContext } from '../utils/gameContext'

const StyledSpan = styled.span`
  display: flex;
  font-size: 44px;
  color: ${props => props.theme.text}
`

const Lives = () => {
  const { theme } = useThemeContext()
  const { state } = useGameContext()

  return (
    <StyledSpan theme={theme}>
      {[...Array(state.lives)].map((_, i) => {
        return (
          <span key={i}>&hearts;</span>
        )
      })}
    </StyledSpan>
  )
}

export default Lives