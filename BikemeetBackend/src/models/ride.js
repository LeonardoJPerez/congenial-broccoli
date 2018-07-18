import Sequelize from 'sequelize';
import {
    SkillLevel,
    RideType
} from './enums';
import Rider from './rider';

export default Ride = {
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
        references: {
            model: Rider,
            key: 'id',
        }
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