import styled from 'styled-components';

export const CalculatorContainer = styled.main`
    display: grid;
    grid-gap: 1.75rem;
    grid-template-areas:
        'bill'
        'tip'
        'people'
        'result'
    ;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 5px 5px rgba(0, 0, 0, .2);
    padding: 1.2rem;
`;

export const Bill = styled.div`
    grid-area: 'bill';
`;

export const Label = styled.label.attrs( props => ( {
    htmlFor: props.htmlFor || ''
} ) )`
    display: inline-block;
    font-size: ${ ( { theme } ) => theme.fz[ '200' ] };
    color: ${ ( { theme } ) => theme.colors.dark_green };
    font-weight: 700;
    margin-bottom: .35rem;
`;

export const InputContainer = styled.div`
    position: relative;
    
    & > svg {
        position: absolute;
        top: 50%;
        left: .9rem;
        transform: translateY( -50% );
        font-size: ${ ( { theme } ) => theme.fz[ '500' ] };  
        color: ${ ( { theme } ) => theme.colors.dark_green };
    }
`;

export const Input = styled.input.attrs( ( { type, id, name, value, onChange, placeholder } ) => ( {
    type: type || 'text',
    id: id || '',
    name,
    value,
    onChange,
    placeholder: placeholder || '',
    autoComplete: 'off'
} ) )`
    display: ${ ( { d_none } ) => d_none ? 'none' : 'inline-block' };
    width: 100%;
    background: ${ ( { theme } ) => theme.colors.light_cyan };
    border-radius: .5rem;
    outline: none;
    border: 2px solid transparent;
    padding: .65rem .9rem;

    &:focus {
        border: 2px solid ${ ( { theme } ) => theme.colors.cyan };
    }

    &, ::placeholder {
        text-align: ${ ( { txt_align } ) => txt_align || 'right' };
        font-size: ${ ( { theme } ) => theme.fz[ '400' ] };
    }
`;

export const Tip = styled.section`
    grid-area: 'tip';
`;

export const TipOptions = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;

    input[type="radio"]:checked + label {
        background: ${ ( { theme } ) => theme.colors.cyan };
        color: ${ ( { theme } ) => theme.colors.dark_green };
    }
`;

export const TipOption = styled.label.attrs( props => ({
    htmlFor: props.htmlFor
}) )`
    display: block;
    text-align: center;
    padding: 1rem;
    color: white;
    font-size: ${ ( { theme } ) => theme.fz[ '500' ] };
    background: ${ ( { theme } ) => theme.colors.dark_green };
    border-radius: 10px;
    font-weight: 700;
    transition: all .3s ease;
    cursor: pointer;

    &:hover {
        background: ${ ( { theme } ) => theme.colors.cyan };
        color: ${ ( { theme } ) => theme.colors.dark_green };
    }
`;

export const People = styled.section`
    grid-area: 'people';
`;

export const Results = styled.section`
    grid-area: 'result';
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
    background: ${ ( { theme } ) => theme.colors.dark_green };
    border-radius: 10px;
    padding: 1.5rem;
`;

export const Result = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const DescriptionContainer = styled.div`
    text-align: center;
    color: white;
`;

export const Description = styled.p`
    font-size: ${ ( { theme } ) => theme.fz[ '400' ] };
    margin-bottom: .3rem;
`;

export const Divided = styled.p`
    font-size: ${ ( { theme } ) => theme.fz[ '200' ] };
    opacity: .5;
`;

export const Amount = styled.h3`
    font-size: ${ ( { theme } ) => theme.fz[ '600' ] };
    color: ${ ( { theme } ) => theme.colors.cyan };
`;

export const ResetBtn = styled.button`
    padding: .8rem;
    font-size: ${ ( { theme } ) => theme.fz[ '500' ] };
    text-transform: uppercase;
    border: none;
    border-radius: 10px;
    color: rgba(255, 255, 255, .5);
    background: ${ ( { theme } ) => theme.colors.grayish_cyan };
    font-weight: 700;
`;