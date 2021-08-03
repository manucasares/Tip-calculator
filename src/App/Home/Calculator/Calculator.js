import React, { useEffect, useState } from 'react';
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { BsFillPersonFill } from "react-icons/bs";

import { useForm } from 'hooks/useForm';
import {
    Amount,
    Bill,
    CalculatorContainer,
    Description,
    DescriptionContainer,
    Divided,
    Input,
    InputContainer,
    Label,
    People,
    Results,
    Result,
    Tip, 
    TipOption, 
    TipOptions,
    ResetBtn,
    PeopleText,
    ErrorPeople} from './Calculator.elements';


const tipOptions = [ '5', '10', '15', '25', '50' ];


export const Calculator = () => {

    const [ tipXPerson, setTipXPerson ] = useState();
    const [ totalXPerson, setTotalXPerson ] = useState();
    const [ errorPeople, setErrorPeople ] = useState( false )

    const [ formValues, handleInputChange, reset ] = useForm( {
        bill: '',
        tip: '',
        people: '1',
    } );

    const { bill, tip, people } = formValues;

    useEffect( () => {
        
        const number_people = Number( people );

        // People no puede ser 0 o menor
        if ( number_people < 1 || !number_people ) {
            setErrorPeople( true );
            return;
        }

        setErrorPeople( false );

        const number_bill = Number( bill );
        const number_tip = Number( formValues.tip );
        
        // Seteamos el total por persona
        const tip = number_bill * ( number_tip / 100 );
        const total = number_bill + tip;
        setTotalXPerson( ( total / number_people ).toFixed( 2 ) );

        // Seteamos la propina por persona
        setTipXPerson( ( number_tip / number_people ).toFixed( 2 ) );


    }, [ formValues.tip, bill, tip, people ] );
    
    return (
        <CalculatorContainer>
            <Bill>
                <Label htmlFor="bill"> Bill </Label>
                <InputContainer>
                    <RiMoneyDollarCircleFill />
                    <Input
                        id="bill"
                        name="bill"
                        value={ bill }
                        onChange={ handleInputChange }
                        placeholder="0.00"
                    />
                </InputContainer>
            </Bill>

            <Tip>
                <Label as="p"> Select Tip % </Label>
                <TipOptions>
                    { tipOptions.map( option => (
                        <div key={ option }>
                            <Input
                                type="radio"
                                id={ option }
                                name="tip"
                                value={ option }
                                checked={ option === tip }
                                onChange={ handleInputChange }
                                d_none
                            />
                            <TipOption htmlFor={ option }>
                                { option }%
                            </TipOption>
                        </div>
                    ) ) }
                    <Input
                        name="tip"
                        value={ tip }
                        onChange={ handleInputChange }
                        placeholder="Custom"
                        txt_align="center"
                    />
                </TipOptions>
            </Tip>

            <People>
                <PeopleText>
                    <Label htmlFor="people"> Number of People </Label>
                    { ( errorPeople ) &&
                        <ErrorPeople> { people === '' ? "Can't be Empty" : 'Not valid Value' } </ErrorPeople>
                    }
                </PeopleText>
                <InputContainer>
                    <BsFillPersonFill />
                    <Input
                        id="people"
                        name="people"
                        value={ people }
                        onChange={ handleInputChange }
                        placeholder="1"
                        errorPeople={ errorPeople }
                    />
                </InputContainer>
            </People>

            <Results>
                <Result>
                    <DescriptionContainer>
                        <Description> Tip Amount </Description>
                        <Divided> / person </Divided>
                    </DescriptionContainer>
                    <Amount> ${ tipXPerson || '0.00' } </Amount>
                </Result>

                <Result>
                    <DescriptionContainer>
                        <Description> Total </Description>
                        <Divided> / person </Divided>
                    </DescriptionContainer>
                    <Amount> ${ totalXPerson || '0.00' } </Amount>
                </Result>

                <ResetBtn
                    disabled={ !totalXPerson || totalXPerson === '0.00' }
                    onClick={ () => reset() }
                >
                    Reset
                </ResetBtn>

            </Results>
        </CalculatorContainer>
    )
}
