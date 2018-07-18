import Sequelize from 'sequelize';
import {
    SkillLevel,
    RideType
} from './enums';

export default Motorcycle = {
    identifier: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    displacement: {
        type: Sequelize.STRING,
    },

    engineHP: {
        type: Sequelize.STRING,
    },

    image: {
        type: Sequelize.STRING,
        allowNull: false
    },

    make: {
        type: Sequelize.STRING,
        allowNull: false
    },

    makeID: {
        type: Sequelize.STRING,
        allowNull: false
    },

    model: {
        type: Sequelize.STRING,
        allowNull: false
    },

    modelID: {
        type: Sequelize.STRING,
        allowNull: false
    },

    riderID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            // This is a reference to another model
            model: Rider,

            // This is the column name of the referenced model
            key: 'id',
        }
    },

    rideType: {
        type: Sequelize.INTEGER,
        allowNull: false
    },

    thumbnail: {
        type: Sequelize.STRING,
        allowNull: false
    },

    vin: {
        type: Sequelize.STRING,
        allowNull: false
    },

    nickname: {
        type: Sequelize.STRING,
        allowNull: false
    },

    year: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
};