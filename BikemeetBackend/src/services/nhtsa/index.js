import fetch from 'node-fetch';
import {isEmpty} from 'lodash'
import omitEmpty from 'omit-empty';

const baseURL = 'https://vpic.nhtsa.dot.gov/api/';
const execute = async(urlPath, options) => {
    if (isEmpty(urlPath)) {
        throw new Error('URI path cannot be null or empty.');
    }

    let url = `${baseURL}/${urlPath}`;
    if (!url.includes('?format=json')) {
        url = `${baseURL}/${urlPath}?format=json`;
    }

    const data = await fetch(url, options || {}).then((response) => {
        if (response.status >= 400) {
            throw new Error('Bad response from server');
        }
        return response.json();
    }).then((json) => {
        return json;
    });

    return data;
}

export const getMakes = async() => {
    const url = `vehicles/GetMakesForVehicleType/moto`;
    return await execute(url);
}

export const getModels = async(makeID) => {
    if (!makeID) {
        console.log('boooooo')
        throw new Error('Make identifier cannot be null or empty.');
    }

    const url = `vehicles/GetModelsForMakeIdYear/makeId/${makeID}/vehicletype/moto`;
    console.log(url)

    return await execute(url);
}

export const decodeVIN = async(vin, year) => {
    if (!vin) {
        throw new Error('VIN cannot be null or empty.');
    }

    if (!year) {
        throw new Error('VIN cannot be null or empty.');
    }

    const url = `vehicles/decodevinvaluesextended/${vin}?format=json&modelyear=${year}`;
    const resp = await execute(url);

    return omitEmpty(resp);
}