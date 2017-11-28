import { FETCH_DESTINY_DATA, SET_CONFIG } from './types';
import axios from 'axios';

export function fetchDestinyData(key) {
    const config = {
        'headers': {"X-API-Key": key}
    };

    const urlString = `https://www.bungie.net/Platform`;
    const request = axios.get(urlString, config);

    return {
        type: FETCH_DESTINY_DATA,
        payload: request
    };
}

export function setConfig(config) {
    return {
        type: SET_CONFIG,
        payload: config
    };
}
