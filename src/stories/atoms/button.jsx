import React from 'react'
import StyledButton, { StyledLinkButton } from './button.styles';

const Button = ({children, href, onClick, variant='primary'}) => {
if(!href){
    return <StyledButton onClick={onClick} variant={variant}> {children}</StyledButton>
  }
  return <StyledLinkButton href={href} variant={variant}>{children}</StyledLinkButton>
}

export default Button