import Sequelize from 'sequelize';
import {
    SkillLevel,
    RideType
} from '../enums';

export const definition = {
    id: {
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

export default (sequelize) => {
    const Motorcycle = sequelize.define('motorcycle', definition);
    Motorcycle.associate = function (models) {      
        Motorcycle.belongsTo(models.rider);
    };

    return Motorcycle;
};