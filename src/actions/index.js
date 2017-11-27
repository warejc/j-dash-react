import { FETCH_DESTINY_DATA } from './types';
import axios from './axios';


export function fetchDestinyData() {
    const apiKey = 'somereallylongstringofcharacters';
    const config = {
        'headers': {"X-API-Key": apiKey}
    };

    urlString = `https://www.bungie.net/PC/Destiny/Manifest/InventoryItem/1274330687/`
    const request = axios.get(urlString, config)
}
