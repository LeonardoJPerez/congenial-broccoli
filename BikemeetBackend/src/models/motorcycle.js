import mongoose from 'mongoose'

const schema = new mongoose.Schema({
    createdAt: 'date',   
    deletedAt: 'date',
    displacement: 'string',
    engineHP: 'string',
    image: 'string',
    make: 'string',
    makeID: 'string',
    model: 'string',
    modelID: 'string',
    nickname: 'string',
    rideType: 'number',
    thumbnail: 'string',
    updatedAt: 'date',
    userID: 'number',
    vin: 'string',
    year: 'string'
});

export default mongoose.model('Motorcycle', schema);
