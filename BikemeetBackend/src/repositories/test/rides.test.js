import 'babel-polyfill';
import {
    expect
} from 'chai';
import mockedDB from '../../db/mock';
import RidesRepository from '../rides';

const repo = RidesRepository(mockedDB);

describe('Rides', () => {
    describe('Get By Name', () => {
        it('should return a list of rides that match a location', async () => {
            // 1. Prepare
            mockedDB.ride.$queueResult([
                mockedDB.ride.build({
                    title: 'Leo'
                }),
                mockedDB.ride.build({
                    title: 'Papa'
                })
            ]);

            // 2. Test
            const rides = await repo.GetByTitle('Le');
            console.log(rides);

            // 3. Assert
            expect(rides).to.have.lengthOf(1);
        });
    });
});