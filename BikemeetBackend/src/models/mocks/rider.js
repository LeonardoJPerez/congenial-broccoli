import SequelizeMock from 'sequelize-mock';
import {
    definition
} from '../rider';

const dbMock = new SequelizeMock();
export default dbMock.define('rider', definition);