export const colors = {
  green: '#8bbe74',
  turquoise: '#22c1c3',
  purple: '#833ab4',
  red: '#fd1d1d',
  yellow: '#fcb045',
  neutralLight: '#ddd',
  neutralDark: '#333',
}

export const themes = {
  good: {
    primary: colors.green,
    secondary: colors.turquoise,
    neutral: colors.neutralDark,
    text: colors.neutralLight
  },
  medium: {
    primary: colors.yellow,
    secondary: colors.purple,
    neutral: colors.neutralLight,
    text: colors.neutralDark
  },
  bad: {
    primary: colors.yellow,
    secondary: colors.red,
    neutral: colors.neutralLight,
    text: colors.neutralDark
  }
}

// background: linear-gradient(45deg, startColor, endColor);