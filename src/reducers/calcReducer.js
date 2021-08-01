import { types } from 'types/types';

export const calcReducer = ( state = {}, action ) => {

    switch ( action.type ) {
        case types.calcReducer:
            console.log('asd')
            break;
    
        default:
            return state;
    }
}
