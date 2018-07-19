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

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
};

export default (sequelize) => {
    const Rider = sequelize.define('rider', definition);
    Rider.associate = (models) => {
        // associations can be defined here
    };

    return Rider;
};