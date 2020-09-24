import PropTypes from 'prop-types'
import React, { useState } from 'react'
import styled, { backgrounds, css, layout, space, variant } from '@xstyled/styled-components'
import { Icon, Typography } from '../'

const Accordion = ({ accordionItems, variant }) => {
  return (
    <AccordionsContainer variant={variant}>
      {accordionItems.map(({ contour, text, title, divider }, index) => (
        <AccordionItem key={index} contour={contour} title={title} text={text} divider={divider} />
      ))}
    </AccordionsContainer>
  )
}

Accordion.propTypes = {
  accordionItems: PropTypes.array.isRequired,
  variant: PropTypes.string
}

Accordion.defaultProps = {
  accordionItems: [],
  variant: 'mediumDesktop'
}

const AccordionItem = ({ contour, title, text, divider }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledButton onClick={() => setOpen(current => !current)} padding={4} contour={contour}>
        <Typography as='span' fontWeight={1} color='gray.800' fontSize={3} lineHeight={3}>
          {title}
        </Typography>
        <Icon icon={open ? 'expand_less' : 'expand_more'} color='gray.800' />
      </StyledButton>
      <AccordionContent display={open ? 'block' : 'none'} backgroundColor='gray.100'>
        <Typography fontWeight={0} color='gray.800' fontSize={3} lineHeight={3} padding={4}>
          {text}
        </Typography>
      </AccordionContent>
      {divider ? <Divider /> : null}
    </>
  )
}

AccordionItem.propTypes = {
  contour: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
  divider: PropTypes.bool
}

AccordionItem.defaultProps = {
  divider: false
}

const AccordionsContainer = styled.div`
  & > button:first-child {
    border-radius: 4px 4px 0 0;
  }

  & > button:last-of-type {
    border-radius: 0 0 4px 4px;
  }

  ${variant({
    prop: 'variant',
    variants: {
      smallDesktop: css`
        width: 384px;
      `,
      mediumDesktop: css`
        width: 588px;
      `,
      bigDesktop: css`
        width: 1200px;
      `,
      mobile: css`
        width: 328px;
      `,
      smallTablet: css`
        width: 340px;
      `,
      bigTablet: css`
        width: 704px;
      `
    }
  })}
`

const StyledButton = styled.button`
  background: #fff;
  height: 56px;
  width: 100%;
  display: block;
  cursor: pointer;
  border: none;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  outline: none;

  ${variant({
    default: 'shadow',
    prop: 'contour',
    variants: {
      shadow: css`
        box-shadow: 0px 2px 4px rgba(33, 33, 33, 0.2);
      `,
      line: css`
        border: 1px solid;
        border-color: gray.300;
      `
    }
  })}

  ${space}
`

const AccordionContent = styled.div`
  display: none;
  width: 100%;

  ${backgrounds}
  ${layout}
`

const Divider = styled.div`
  border-top: 1px solid;
  height: 0;
  border-color: gray.300;
`

export default Accordion
