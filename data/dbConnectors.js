import mongoose from 'mongoose';
import Sequelize from 'sequelize';
import _ from 'lodash';
import casual from 'casual';

// Mongo Connection
mongoose.Promise = global.Promise;
mongoose.connect('http://localhost:8081/db/friends', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const friendSchema = new mongoose.Schema({
    firstName: {String},
    lastName: {String},
    gender: {String},
    age: {Number},
    language: {String},
    email: {String},
    contacts: Array
})

const Friends = mongoose.model('friends', friendSchema)

//SQL 
const sequelize = new Sequelize('database', null, null, {
    dialect: 'sqlite',
    storage: './alien.sqlite'
})

const Aliens = sequelize.define('aliens', {
    firstName: {type: Sequelize.STRING},
    lastName: {type: Sequelize.STRING},
    planet: {type: Sequelize.STRING},

})

export { Friends, Aliens }