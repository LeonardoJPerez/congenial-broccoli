import SequelizeMock from 'sequelize-mock';
import {
    definition
} from '../motorcycle';

export default motorcycleMock = new SequelizeMock().define('motorcycle', definition);