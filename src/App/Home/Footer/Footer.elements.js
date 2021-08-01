import styled from 'styled-components';

export const FooterText = styled.p`
    font-size: ${ ( { theme } ) => theme.fz[ '100' ] };
    text-align: center;
`

export const FooterLink = styled.a.attrs( ( { href } ) => ({
    href: href || '#'
}) )`
    text-decoration: underline;
   
`