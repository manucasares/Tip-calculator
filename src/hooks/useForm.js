import { useState } from "react"

export const useForm = ( initialState = {} ) => {
    
    const [ values, setValues ] = useState(initialState);

    const reset = () => {
        setValues( initialState );
    }

    const handleInputChange = ({ target }) => {

        if ( target.name === 'custom' ) {
            setValues({
                ...values,
                custom: target.value,
                tip: target.value
            });
            return;
        }

        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }

    return [ values, handleInputChange, reset ];
}