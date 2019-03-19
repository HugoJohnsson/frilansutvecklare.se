const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const Jobb = require('../models/jobb');
const User = require('../models/user');
const Bid = require('../models/bid');
const jwt = require('jsonwebtoken');
const passport = require('passport');

// passport
require('../config/passport');

// jobs with pagination
router.get('/jobs/p/:page', (req, res) => {
  let limit = 2;   // number of records per page
  let offset = 0;
  Jobb.findAndCountAll()
  .then((data) => {
    let page = req.params.page;      // page number
    let pages = Math.ceil(data.count / limit);
		offset = limit * (page - 1);
    Jobb.findAll({
      limit: limit,
      offset: offset,
    })
    .then((jobb) => {
      res.status(200).json({'jobb': JSON.stringify(jobb), 'count': data.count, 'pages': pages});
    });
  })
  .catch(function (error) {
		res.status(500).send('Internal Server Error');
	});
});

// get all jobs
router.get('/jobs', (req, res) => {
  Jobb.findAll({
      raw: true,
      include: [{
          model: User,
          attributes: { exclude: ["password"] },
      }]
  })
  .then(jobb => {
    res.json({
      "jobb": JSON.stringify(jobb)
    })
  })
  .catch((err) => console.log(err));
});

// get data for a job
router.get('/jobs/:id', (req, res) => {
  Jobb.findOne({ raw: true, where: { id: req.params.id }, include: [{ model: User, attributes: { exclude: ["password"] } }] })
  .then(jobb => res.json(jobb))
  .catch(err => res.json({ success: false }))
});

// search job
router.get('/search', (req, res) => {
  let { term } = req.query;

  term = term.toLowerCase();

  Jobb.findAll({ raw: true, where: { 
    $or: [
      {
        technologies: { [Op.like]: '%' + term + '%' }
      },
      {
        title: { [Op.like]: '%' + term + '%' }
      },
      {
        description: { [Op.like]: '%' + term + '%' }
      }
  ]
  },
  include: [{
    model: User,
    attributes: { exclude: ["password"] },
  }]
  })
  .then(jobb => {
    res.json({
      "jobb": JSON.stringify(jobb)
    });
  })
  .catch(err => console.log(err));
});

// create a job
router.post('/add', passport.authenticate('jwt', { session: false }), (req, res) => {
  const data = {
    title: req.body.title,
    technologies: req.body.technologies,
    budget: req.body.budget,
    description: req.body.description,
    contact_email: req.body.contact_email,
    owner_id: req.body.owner_id
  };

  let { title, technologies, budget, description, contact_email, owner_id } = data;

  Jobb.create({
    title,
    technologies,
    budget,
    description,
    contact_email,
    owner_id
  })
  .then(jobb => {
    res.json({ success: true });
  })
  .catch(err => {
    res.json({ success: false });
  });
});

// delete a job
router.delete('/remove_job/:jobId', passport.authenticate('jwt', { session: false }), (req, res) => {
  Jobb.findOne({ where: { id: req.params.jobId }})
  .then(job => job.destroy())
  .then(() => res.json({ success: true }))
  .catch(err => res.json({ success: false }))
});

// get all the jobs of one user
router.get('/user_jobs/:user_id', passport.authenticate('jwt', { session: false }), (req, res) => {
  Jobb.findAll({ raw: true, where: { owner_id: req.params.user_id } })
  .then(jobb => {
    const plainArr = JSON.parse(JSON.stringify(jobb));
    var promises = plainArr.map(function(obj){
      return Bid.findAll({ 
        where: { jobb_id: obj.id, new: 1 }
      })
      .then(function(results){
        obj.newBidsCount = JSON.parse(JSON.stringify(results)).length
        return obj
      })
    })
    Promise.all(promises).then(function(results) {
      res.json({
        "jobb": JSON.stringify(results)
      });
    })
  })
  .catch(err => console.log(err));
});

router.get('/user_data/:userId', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findOne({ where: { id: req.params.userId }, attributes: { exclude: ["password"] }})
  .then(user => res.json({ success: true, userData: JSON.stringify(user)}))
  .catch(err => res.json({ success: false }));
});

// get all bids for a job
router.get('/bids/:jobbId', passport.authenticate('jwt', { session: false }), (req, res) => {
  Bid.findAll(
  { raw: false,
    include: [
      {
        model: User,
        attributes: { exclude: ["password"] },
      },
      {
        model: Jobb
      }
  ],
    where: { jobb_id: req.params.jobbId },
    order: [
      ['createdAt', 'DESC']
    ]
    })
  .then(bids => {
    bids.forEach(bid => {
      bid.new = 0,
      bid.save()
    })
    Jobb.findOne({ where: { id: req.params.jobbId }})
    .then(jobb => {
      res.json({"bids": bids, "jobb": jobb});
    })
  })
  .catch(err => console.log(err));
});

router.post('/send_bid', passport.authenticate('jwt', { session: false }), (req, res) => {
  Bid.create({
    amount: req.body.amount,
    message: req.body.message,
    jobb_id: req.body.jobb_id,
    user_id: req.body.user_id
  })
  .then(bid => res.json({ success: true }))
  .catch(err => res.json({ success: false }));
});

// remove bid
router.delete('/remove_bid/:bidId', passport.authenticate('jwt', { session: false }), (req, res) => {
  Bid.findOne({ where: { id: req.params.bidId }})
  .then(bid => bid.destroy())
  .then(() => res.json({ success: true }))
  .catch(err => res.json({ success: false }))
});

// update profile
router.put('/update_profile', passport.authenticate('jwt', { session: false }), (req, res) => {
  User.findOne({ where: { id: req.body.user_id }})
  .then(user => {
    user.update({ description: req.body.description, skills: req.body.skills })
    .then(() => res.json({ success: true }))
    .catch(err => res.json({ success: false }));
  })
  .catch(err => res.json({ success: false }));
});

module.exports = router;
