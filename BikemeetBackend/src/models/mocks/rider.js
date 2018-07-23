import SequelizeMock from 'sequelize-mock';
import {
    definition
} from '../rider';

export default riderMock = new SequelizeMock().define('rider', definition);