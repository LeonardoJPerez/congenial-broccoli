import SequelizeMock from 'sequelize-mock';
import {
    definition
} from '../ride';

export default rideMock = new SequelizeMock().define('ride', definition);