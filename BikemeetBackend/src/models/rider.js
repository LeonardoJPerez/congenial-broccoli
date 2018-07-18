import Sequelize from 'sequelize';
import {
    SkillLevel,
    RideType
} from './enums';

export default Rider = {
    identifier: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },

    email: {
        type: Sequelize.STRING,
        allowNull: false
    },
};