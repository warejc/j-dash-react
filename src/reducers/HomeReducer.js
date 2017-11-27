import { FETCH_DESTINY_DATA } from '../actions/types';

import {List, Map} from 'immutable';

export const initialState = Map({
    data: {},
    isFetchingDestinyData: false
});

export default function(state = initialState, action) {
    switch(action.type) {
        case `${FETCH_DESTINY_DATA}_REQUEST`:
            return state.set('isFetchingDestinyData', true);
        case `${FETCH_DESTINY_DATA}_ERROR`:
            return state.set('isFetchingDestinyData', false);
        case `${FETCH_DESTINY_DATA}_SUCCESS`:
            return state.merge({
                data: payloadData,
                isFetchingDestinyData: false
            });
    }
}
