import Motorcycle from '../models/motorcycle';
import fetch from 'node-fetch';

 
const baseURL                 = "https://vpic.nhtsa.dot.gov/api/"
const jsonFormat              = "format=json"
// const modelsEndpointFormat    = "/vehicles/GetModelsForMakeIdYear/makeId/%s/vehicletype/moto?%s"
// const makeEndpointFormat      = "/vehicles/GetMakesForVehicleType/moto?%s"
// const decodeVINEndpointFormat = "/vehicles/decodevinvaluesextended/%s?%s&modelyear=%d"

const ROUTE_GROUP = 'bike';
export default [{
    method : 'GET',
    path : `/${ROUTE_GROUP}/u`,
    options : {         
        handler: function (request, h) {
            let m = new Motorcycle({
                make: 'Lexus',
                model: 'IS350',
                year: 2006 
            });

            console.log(m);


            fetch(`${baseURL}/vehicles/GetMakesForVehicleType/moto?${jsonFormat}`)
                .then( (response) => {
                    if (response.status >= 400) {
                        throw new Error("Bad response from server");
                    }
                    return response.json();
                })
                .then( (makes) => {
                    console.log(makes);
                });

            return m;
        }
    }
}];
