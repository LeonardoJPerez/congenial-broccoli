import Sequelize from 'sequelize';
import {
    SkillLevel,
    RideType
} from '../enums';

const definition = {
    identifier: {
        type: Sequelize.UUID,
        primaryKey: true
    },

    chatRoomID: {
        type: Sequelize.INTEGER,
    },

    creatorID: {
        type: Sequelize.INTEGER,
    },

    description: {
        type: Sequelize.STRING,
        allowNull: false
    },

    distance: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: '0'
    },

    duration: {
        type: Sequelize.STRING,
        allowNull: false
    },

    eventDate: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
    },

    isPrivate: {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
    },

    ownerID: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },

    rideType: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: RideType.Any
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
    Ride.associate = (models) => {
        // associations can be defined here
    };

    return Ride;
};