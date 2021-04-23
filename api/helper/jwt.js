const expressJwt = require('express-jwt');
const secret = process.env.SECRET;
const accountService = require('../routes/AccountRoute');

module.exports = jwt;

function jwt() {
    return expressJwt({ secret, algorithms: ['HS256'], isRevoked }).unless({
        path: [
            // public routes that don't require authentication
            '/accounts/authenticate',
            '/accounts/register'
        ]
    });
}

async function isRevoked(req, payload, done) {
    const account = await accountService.getById(payload.sub);

    // revoke token if user no longer exists
    if (!account) {
        return done(null, true);
    }

    done();
};