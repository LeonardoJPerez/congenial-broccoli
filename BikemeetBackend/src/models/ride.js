import Sequelize from 'sequelize';
import uuidv4 from 'uuid/v4';

import {
    SkillLevel,
    RideType
} from '../enums';

export const definition = {
    id: {
        type: Sequelize.UUID,
        primaryKey: true,
        defaultValue: uuidv4()
    },

    chatRoomID: {
        type: Sequelize.INTEGER,
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false
    },

    distance: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    },

    duration: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: ''
    },

    eventDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },

    isPrivate: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },

    ownerID: {
        type: Sequelize.INTEGER,
    },

    rideType: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: RideType.Any,
    },

    rsvpd: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0
    },

    skillLevel: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: SkillLevel.Any
    },

    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
}

export default (sequelize) => {
    const Ride = sequelize.define('ride', definition);
    Ride.associate = function (models) {
        Ride.belongsTo(models.rider, {
            as: 'creator'
        });
    };

    return Ride;
};