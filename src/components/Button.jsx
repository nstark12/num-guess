import styled from 'styled-components'
import { useTheme } from 'styled-components'
import { useThemeContext } from '../utils/themeContext'

const StyledButton = styled.button`
  padding: 10px 22px;
  font-family: 'Nunito', sans-serif;
  background-color: ${props => props.theme.neutral};
  color: ${props => props.theme.text};
`

const Button = ({ children, onClick }) => {
  const { theme } = useThemeContext()
  
  return (
    <StyledButton 
      onClick={onClick}
      theme={theme}
      >
        {children}
    </StyledButton>
  )
}

export default Button