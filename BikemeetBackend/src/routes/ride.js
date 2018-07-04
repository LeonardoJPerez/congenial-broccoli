import Ride from '../models/ride'

const ROUTE_GROUP = 'api/ride';

/*
Methods
- GetRidesByLocation(startLocation *Address)
- GetRidesStartingBy(from, to string)
- GetRidesByOwnerID(ownerID uint)
- GetRidesByTags(tags []string)
- GetRidesByDate(from, to)
*/

export default[
    {
        method : 'GET',
        path : `/${ROUTE_GROUP}/u`,
        options : {
            handler: function (request, h) {
                let r = new Ride()

                console.log(r);
                return r;
            }
        }
    }
];
