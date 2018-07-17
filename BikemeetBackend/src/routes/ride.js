import Ride from '../models/ride'

const ROUTE_GROUP = 'api/ride';

/*

Methods (Review since this might be affected by the search epic)
- GetRidesByLocation(startLocation *Address)
- GetRidesStartingBy(from, to string)
- GetRidesByOwnerID(ownerID int)
- GetRidesByTags(tags []string)
- GetRidesByDate(from, to)

- create
- update
- delete
- get

*/

export default [{
    method: 'GET',
    path: `/${ROUTE_GROUP}/{rideid}`,
    options: {
        handler: function (request, h) {
            let r = new Ride()

            console.log(r);
            return r;
        }
    }
}];