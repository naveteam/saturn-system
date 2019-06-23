import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Component = props => {
  const { as, children, ...rest } = props
  return React.createElement(as, rest, children)
}

const Typography = styled(Component)`
  ${({ theme, aditionalStyles, color, fontSize, fontFamily }) => {
    return `
      font-family: ${fontFamily || 'Roboto'};
      color: ${color || theme.colors.darkGrey};
      ${fontSize ? `font-size: ${fontSize};` : ''}
      ${aditionalStyles ? aditionalStyles : ''}
    `
  }};
`

Typography.defaultProps = {
  as: 'p'
}

Typography.propTypes = {
  as: PropTypes.string,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontFamily: PropTypes.string
}

export default Typography