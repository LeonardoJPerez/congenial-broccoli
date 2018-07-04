import Motorcycle from '../models/motorcycle';
import {getMakes, getModels, decodeVIN} from '../services/nhtsa';

const ROUTE_GROUP = 'api/bikes';
export default[
    {
        method : 'GET',
        path : `/${ROUTE_GROUP}/u/{userid}`, // Returns all motorcycles created by the user.
        options : {
            handler: async function (request, h) {
                let m = new Motorcycle({make: 'Lexus', model: 'IS350', year: 2006});
                const res = await getModels(770);
                console.log(res);

                return m;
            }
        }
    }, {
        method : 'GET',
        path : `/${ROUTE_GROUP}/makes`,
        options : {
            handler: async() => await getMakes()
        }
    }, {
        method : 'GET',
        path : `/${ROUTE_GROUP}/models/{makeid}`,
        options : {
            handler: async(request) => await getModels(encodeURIComponent(request.params.makeid))
        }
    }, {
        method : 'GET',
        path : `/${ROUTE_GROUP}/decode/{vin}/{year}`,
        options : {
            handler: async(request) => await decodeVIN(encodeURIComponent(request.params.vin), encodeURIComponent(request.params.year))
        }
    }
];
