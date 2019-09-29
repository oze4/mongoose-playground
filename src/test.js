require('dotenv').config();
const db = require('../db');
const UserSchema = require('../schema/User');

const rootdb = db.newConnection(process.env.CONNECTION_STRING);
const database = rootdb.useDb(process.env.DB_PLAYGROUND);
const playground = database.model(database, UserSchema, process.env.COL_PLAYGROUND);

playground.find({}, (err, res) => {
    if(err) throw err;

    if(res) {
        console.log(res);
        database.close();
    }
})