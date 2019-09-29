const mongoose = require('mongoose');
mongoose.set('useCreateIndex', true) // needed to suppress errors

module.exports = class db {
    static newConnection(connectionString, options) {
        let defaultOptions = {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }
        return mongoose.createConnection(connectionString, { ...options, ...defaultOptions });
    }
}