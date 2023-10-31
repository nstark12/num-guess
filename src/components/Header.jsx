import styled from 'styled-components'
import Lives from './Lives'
import { useThemeContext } from '../utils/themeContext'

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`

const StyledSpan = styled.span`
  font-size: 64px;
`

const Header = () => {

  const { theme } = useThemeContext()

  return (
    <StyledHeader>
      <h1>Num Guess</h1>
      <StyledSpan>?</StyledSpan>
      <Lives />
    </StyledHeader>
  )
}

export default Header