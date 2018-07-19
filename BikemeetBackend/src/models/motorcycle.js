import Sequelize from 'sequelize';
import {
    SkillLevel,
    RideType
} from '../enums';

const definition = {
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
    Motorcycle.associate = (models) => {
        // associations can be defined here
    };

    return Motorcycle;
};