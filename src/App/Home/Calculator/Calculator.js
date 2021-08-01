import React from 'react';
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
    ResetBtn} from './Calculator.elements';


const tipOptions = [ 5, 10, 15, 25, 50 ];


export const Calculator = () => {

    const [ { bill, custom, people }, handleInputChange ] = useForm( {
        bill: '',
        custom: '',
        people: '',
    } );

    return (
        <CalculatorContainer>
            <Bill>
                <Label htmlFor="bill"> Bill </Label>
                <InputContainer>
                    <RiMoneyDollarCircleFill />
                    <Input
                        id="bill"
                        name="bill"
                        // value={ bill }
                        // onChange={ handleInputChange }
                        placeholder="0.00"
                    />
                </InputContainer>
            </Bill>

            <Tip>
                <Label as="p"> Select Tip % </Label>
                <TipOptions>
                    { tipOptions.map( option => (
                        <TipOption key={ option }>
                            { option }%
                        </TipOption>
                    ) ) }
                    <Input
                        name="custom"
                        // value={ bill }
                        // onChange={ handleInputChange }
                        placeholder="Custom"
                        txt_align="center"
                    />
                </TipOptions>
            </Tip>

            <People>
                <Label htmlFor="people"> Number of People </Label>
                <InputContainer>
                    <BsFillPersonFill />
                    <Input
                        id="people"
                        name="people"
                        // value={ people }
                        // onChange={ handleInputChange }
                        placeholder="1"
                    />
                </InputContainer>

            </People>

            <Results>
                <Result>
                    <DescriptionContainer>
                        <Description> Tip Amount </Description>
                        <Divided> / person </Divided>
                    </DescriptionContainer>
                    <Amount> $0.00 </Amount>
                </Result>

                <Result>
                    <DescriptionContainer>
                        <Description> Total </Description>
                        <Divided> / person </Divided>
                    </DescriptionContainer>
                    <Amount> $0.00 </Amount>
                </Result>

                <ResetBtn> Reset </ResetBtn>

            </Results>
        </CalculatorContainer>
    )
}
