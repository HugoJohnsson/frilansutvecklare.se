const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const secret = require('../config/config');

module.exports = function(passport) {
  let opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = secret;
  passport.use(new JwtStrategy(opts, (jwt_payload, done) => {
    User.findOne({ where: { id: jwt_payload.data.id }})
    .then(user => {
      return done(null, user);
    })
    .catch(err => {
      return done(err, false);
    })
  }));
}
