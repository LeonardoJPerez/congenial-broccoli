import SequelizeMock from 'sequelize-mock';
import {
    definition
} from '../ride';

const dbMock = new SequelizeMock();
export default dbMock.define('ride', definition);