import {
    FETCH_DESTINY_DATA,
    SET_CONFIG
} from '../actions/types';

import { Map } from 'immutable';

export const initialState = Map({
    data: {},
    isFetchingDestinyData: false,
    config: {'DESTINY_API_KEY': 'abcd'}
});

export default function(state = initialState, action) {
    const { data: payloadData } = action.payload || {};
    switch(action.type) {
        case `${FETCH_DESTINY_DATA}_REQUEST`:
            return state.set('isFetchingDestinyData', true);
        case `${FETCH_DESTINY_DATA}_ERROR`:
            return state.set('isFetchingDestinyData', false);
        case `${FETCH_DESTINY_DATA}_SUCCESS`:
            return state.merge({
                data: payloadData.Response.data,
                isFetchingDestinyData: false
            });
        case `${SET_CONFIG}`:
            return state.merge({
                config: action.payload
            });
        default:
            return state;


    }
}
