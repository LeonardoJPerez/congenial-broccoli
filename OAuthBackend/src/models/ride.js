import mongoose from 'mongoose'

const schema = new mongoose.Schema({name: 'string', size: 'string'});
export default mongoose.model('Ride', schema);
