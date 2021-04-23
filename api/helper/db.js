const mongoose = require('mongoose');

const db = process.env.MONGO_URI;

mongoose
	.connect(db, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useFindAndModify: false,
	})
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.log(err));

mongoose.Promise = global.Promise;

module.exports = {
	Game: require('../models/GameModel'),
	Account: require('../models/AccountModel'),
	Cart: require('../models/CartModel'),
};