import 'babel-polyfill';
import {
    expect
} from 'chai';
import mockedDB from '../../db/mock';
import RidesRepository from '../ride';

const repo = RidesRepository(mockedDB);

describe('GetRidesByLocation()', () => {
    it('should return a list of rides that match a location', async () => {
        // 1. Prepare

        // 2. Test
        var rides = await repo.GetRidesByLocation();

        // 3. Assert
        expect(rides).to.have.lengthOf(1);
    });
});