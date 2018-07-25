import Sequelize from 'sequelize';

export const definition = {
    id: {
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
    Rider.associate = function (models) {
        // associations can be defined here
    };

    return Rider;
};