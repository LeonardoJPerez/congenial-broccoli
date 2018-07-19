import db from '../db'

export async function GetRidesByLocation(startLocation) {
    const rides = await db.ride.findAll({
        where: {
            name: 'A Project'
        }
    });

    return rides
}


export function GetRidesStartingBy(from, to) {

}

export function GetRidesByOwnerID(ownerID) {}
export function GetRidesByTags(tags) {}
export function GetRidesByDate(from, to) {}