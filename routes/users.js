const express = require('express');
const router = express.Router();
const db = require('../config/database');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const secret = require('../config/config');

const User = require('../models/user');

// register
router.post('/register', (req, res, next) => {
  const newUser = {
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  };

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if(err) throw err;
      newUser.password = hash;
      User.create({
        name: newUser.name,
        username: newUser.username,
        email: newUser.email,
        password: newUser.password
      })
      .then(() => {
        res.json({ success: true, msg: 'user registered' })
      })
      .catch(err => {
        res.json({ success: false, msg: 'failed to register user' });
      })
    })
  })
})


// auth
router.post('/auth', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;

  User.findOne({ where: { username: username } })
  .then(user => {
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if(err) throw err;

      if(isMatch) {
        const token = jwt.sign({data:user}, secret, {
          expiresIn: 604800 // 1 week
        });

        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user.id,
            name: user.name,
            username: user.username,
            email: user.email,
            description: user.description,
            skills: user.skills
          }
        });
      } else {
        return res.json({ success: false, msg: 'Fel lösenord!' });
      }

    })
  })
  .catch(err => {
    return res.json({ success: false, msg: 'Användaren kunde inte hittas.' });
  })

});

// update profile
router.post('/update', passport.authenticate('jwt', { session: false }), (req, res) => {
  console.log(req.body.description )
  const description = req.body.description;
  const skills = req.body.skills;
  User.findOne({ where: { id: req.body.user_id } })
  .then(user => {
    user.updateAttributes({ description: description })
    .then(() => res.json({ success: true }))
    .catch(() => res.json({ success: false }));
  })
});

module.exports = router;
