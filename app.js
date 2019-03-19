const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./config/database');
const cors = require('cors');
const passport = require('passport');
const jwt = require('jsonwebtoken');
require('./models/user');


db.authenticate()
.then(() => console.log('Database connected'))
.catch(err => console.log(err));

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(passport.initialize());
app.use(passport.session());
require('./config/passport')(passport);

// routes
app.use('/api', require('./routes/api'));
app.use('/users', require('./routes/users'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
