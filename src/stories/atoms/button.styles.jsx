import styled from 'styled-components'

const StyledButton = styled.button`
 display: inline-block;
 background-color:  ${({theme, variant}) => theme[variant]};
 padding: 10px;
 border-radius: 8px;
`


export const StyledLinkButton = styled(StyledButton).attrs({as: 'a'})`
 background-color:  ${({theme, variant}) => theme[variant]};
`


export default StyledButton