import faker from 'faker';

export default riders = (dbContext) => {
    return {
        GetRidesByLocation: async (startLocation) => {
            const aRide = dbContext.ride.build({
                title: faker.name.findName(),
                description: 'woot woot. this will make me a rich man',
            });

            //const res = await aRide.save();
            return await dbContext.ride.findAll({
                where: {
                    title: 'Laney Weber'
                }
            });
        },

        GetRidesStartingBy: (from, to) => {},

        GetRidesByOwnerID: (ownerID) => {},

        GetRidesByTags: (tags) => {},

        GetRidesByDate: (from, to) => {},
    }
}