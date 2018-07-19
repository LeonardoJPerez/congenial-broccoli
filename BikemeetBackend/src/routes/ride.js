import Ride from '../models/ride'

const ROUTE_GROUP = 'api/ride';

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