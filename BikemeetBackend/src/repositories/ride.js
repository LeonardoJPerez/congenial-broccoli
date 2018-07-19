import db from '../db';
import faker from 'faker';

import Ride from '../models/ride';


export async function GetRidesByLocation(startLocation) {
    const aRide = Ride.build({
        title: faker.name.findName(),
        description: 'woot woot. this will make me a rich man',
    });

    console.log(aRide);
    await aRide.save();

    const rides = await db.ride.findAll({
        where: {
            title: aRide.title
        }
    });

    return rides;
}


export function GetRidesStartingBy(from, to) {

}

export function GetRidesByOwnerID(ownerID) {}
export function GetRidesByTags(tags) {}
export function GetRidesByDate(from, to) {}