import {
    Op
} from 'sequelize'
import faker from 'faker';

export default (dbContext) => {
    return {
        GetByDate: async (from, to) => {},

        GetByLocation: async (startLocation) => {},

        GetByOwnerID: async (ownerID) => {},

        GetByTags: async (tags) => {},

        GetByTitle: async (query) => {
            return await dbContext.ride.findAll({
                where: {
                    title: {
                        [Op.like]: '%' + query.toLowerCase() + '%'
                    }
                }
            });
        },

        Get: async (qty = 10) => {
            return await dbContext.ride.findAll({
                limit: 10
            });
        },

        GetStartingBy: async (from, to) => {},
    }
}