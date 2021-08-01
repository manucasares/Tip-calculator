import React from 'react';

import { Container } from 'shared/shared.elements';
import { AppTitle } from './AppTitle/AppTitle';
import { Calculator } from './Calculator/Calculator';
import { Footer } from './Footer/Footer';

export const Home = () => {
    return (
        <Container>
            <AppTitle />
            <Calculator />
            <Footer />
        </Container>
    )
}
