import styled from 'styled-components';

export const TitleContainer = styled.div`
    color: ${ ( { theme } ) => theme.colors.dark_green };
    text-align: center;
`;

export const Title = styled.h2`
    font-size: ${ ( { theme } ) => theme.fz[ '200' ] };
    text-transform: uppercase;
    letter-spacing: .5rem;
`;