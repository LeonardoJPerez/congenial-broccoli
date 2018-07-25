import SequelizeMock from 'sequelize-mock';
import {
    definition
} from '../motorcycle';

const dbMock = new SequelizeMock();
export default dbMock.define('motorcycle', definition);