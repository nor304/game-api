const db = require('../helper/db');
const fs = require('fs');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Account = db.Account

const getAll = async (req, res, next) => {
    let accounts;
    try {
        accounts = await Account.find();
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed' });
		return next(err);
    }
    res.json(accounts);
}

const getById = async (req, res, next) => {
    let account;
    try {
        account = await Account.findById(req.params.account_id);
    } catch (err) {
        res.status(500).json({ message: 'Fetch failed' });
		return next(err);
    }
    if(!account) {
        res.status(404).json({ message: 'User not found'}); 
    }
    res.json(account);
}

const register = async (req, res, next) => {
	const email = req.body.email;

	let existingAccount;
    //Search for existing account
	try {
		existingAccount = await Account.findOne({ email: email });
	} catch (err) {
		res.status(500).json({ message: 'Register failed' });
		return next(err);
	}

	if (existingAccount) {
		res.status(422).json({ message: 'Username exists' });
		return;
	}
    //Check for invalid email or empty input email
	try {
		schema.validate(req.body);
	} catch (err) {
		res.status(500).json({ message: 'Register failed' });
		return next(err);
	}

	const account = new Account({
		...req.body,
	});
    
    //Hash password
    account.password = await bcrypt.hash(req.body.password, 10);

    try {
		await account.save();
	} catch (err) {
		res.status(500).json({ message: 'Register failed' });
		return next(err);
	}

	const token = jwt.sign(
		{ email: account.email, account_id: accound.id },
		config,
		{ expiresIn: '7d' }
	);

    res.status(201).json({
		account: {
			account_id: account.id,
			email: account.email,
			name: account.name,
			avatar: account.avatar,
		},
		token: token,
	});
}

const login = async (req, res, next) => {
	let account;
	try {
		account = await Account.findOne({ email: req.body.email });
	} catch (err) {
		res.status(500).json({ message: 'Login failed' });
		return next(err);
	}

	if (!account) {
		res.status(404).json({ message: 'User not found. Please register.' });
		return;
	}

	if (bcrypt.compareSync(req.body.password, account.password)) {
		const token = jwt.sign(
			{ email: account.email, account_id: account.id },
			config,
			{ expiresIn: '7d' }
		);
		res.status(201).json({
			account: {
				account_id: account.id,
				email: account.email,
				name: account.name,
				avatar: account.avatar,
			},
			token: token,
		});
	} else {
		res.status(400).json({ message: 'Username or password is incorrect' });
	}
};

exports.register = register;
exports.login = login;
exports.getAll = getAll;
exports.getById = getById;