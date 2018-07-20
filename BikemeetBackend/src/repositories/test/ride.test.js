import 'babel-polyfill';
import {
    expect
} from 'chai';
import * as ride from '../ride';

describe('GetRidesByLocation()', () => {
    it('should return a list of rides that match a location', async () => {
        // 1. Prepare

        // 2. Test
        var rides = await ride.GetRidesByLocation();

        console.log(rides);

        // 3. Assert
        expect(rides).to.have.lengthOf(1);
    });
});