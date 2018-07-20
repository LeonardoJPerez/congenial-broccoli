import db from '../db';
import faker from 'faker';

// Getters
export async function GetRidesByLocation(startLocation) {
    const aRide = db.ride.build({
        title: faker.name.findName(),
        description: 'woot woot. this will make me a rich man',
    });

    //const res = await aRide.save();

    const rides = await db.ride.findAll({
        where: {
            title: 'Laney Weber'
        }
    });

    return rides;
}

export function GetRidesStartingBy(from, to) {

}

export function GetRidesByOwnerID(ownerID) {}
export function GetRidesByTags(tags) {}
export function GetRidesByDate(from, to) {}