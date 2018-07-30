import 'babel-polyfill';
import {
    expect
} from 'chai';
import mockedDB from '../../db/mock';
import RidesRepository from '../rides';

import db from '../../db';
const repo = RidesRepository(db);
const mockedRepo = RidesRepository(mockedDB);

describe('Rides', () => {
    describe('Get By Name (Live)', () => {
        it('should return a list of rides that match a location', async () => {           
            // 1. Test
            const rides = await repo.GetByTitle('leo');
            console.log(rides[0].get());

            // 2. Assert
            expect(rides).to.have.lengthOf(1);
        });
    });
    describe('Get By Name', () => {
        it('should return a list of rides that match a location', async () => {
            // 1. Prepare
            mockedDB.ride.$queueResult([
                mockedDB.ride.build({
                    title: 'Leo'
                }),
                mockedDB.ride.build({
                    title: 'Papa'
                }), 
                mockedDB.ride.build({
                    title: 'Mama'
                })
            ]);

            // 2. Test
            const rides = await mockedRepo.GetByTitle('Le');
            console.log(rides);

            // 3. Assert
            expect(rides).to.have.lengthOf(1);
        });
    });
});