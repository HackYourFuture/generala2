var express = require('express');
var app = express();
var router = express.Router();
var User = require('../../models/user');
var Game = require('../../models/game');
var jwt = require('jsonwebtoken');
var config = require('../../config/token');
var auth = require('../middleware/auth');

router.get('/check-state', auth.verifyToken, (req, res) => {
  let content = {
    success: true,
    message: 'Successfully logged in'
  }
  res.send(content);
});

router.post('/register', (req, res) => {

  var reqUser = req.body;

  process.nextTick( () => {
    User.findOne({ 'email': reqUser.email }, (err, user) => {
      if(err)
        return done(err);
      
      if(user){
        let content = {
          success: false,
          message: 'user already exists'
        };
        res.send(content);
        return;
      } else {
        var newUser = new User();
        newUser.email = reqUser.email;
        newUser.password = newUser.generateHash(reqUser.password);
        newUser.loginState = true;
        newUser.save( (err) => {
            if( err )
                throw err;

            let token = jwt.sign(newUser, config.secret, {
              expiresIn : 60*60*24
            });
            let content = {
              user: newUser,
              success: true,
              message: 'You created a new user',
              token: token
            };
            res.send(content);
            return;
        })
      }
    })
  })
});

router.post('/login', (req, res) => {
  var reqUser = req.body;
  User.findOne({'email' : reqUser.email}, (err, user) => {
    if( err ){
      console.log(err.message);
      return done(err);
    }
    if( !user ) {
      let content = {
        success: false,
        message: 'User does not exists'
      };
      res.send(content);
      return;
    }

    if( !user.validPassword(reqUser.password) ){
      let content = {
        success: false,
        message: 'Incorrect password'
      };
      res.send(content);
      return;
    }
     User.findOneAndUpdate({
       'email' : reqUser.email},{ $set : { "loginState" : true } }, (err, user) => {
    });
    let token = jwt.sign(user, config.secret, {
      expiresIn : 60*60*24
    });
    let content = {
      user: user,
      success: true,
      message: 'You logged in',
      token: token
    };
    res.send(content);
  })

});

//Get logged in users.
router.get('/users', (req, res) => {
  User.find({
    'loginState' : true}, (err, users) => {
      if( err ) {
        return done(err);
      }
      res.send(users);
    });
});

router.get('/games', (req, res) => {
  Game.find({}, (err, games) => {
      if( err ) {
        return done(err);
      }
      res.send(games);
    });
});

router.post('/save', (req, res) => {
  var newGame = new Game();
  newGame.player1 = req.body.player1;
  newGame.player2 = req.body.player2;
  newGame.score1 = req.body.score1;
  newGame.score2 = req.body.score2;
  newGame.save( (err) => {});
  res.send({"state":"success"});
});
router.post('/logout', (req, res) => {
  var reqUser = req.body;
  User.findOneAndUpdate({
    'email' : reqUser.email }, { $set : { "loginState" : false } }, (err, user) => {
  });
  
    res.send({"state":"success"});
});

router.delete('/delete/:email', (req, res) => {
  let arg = req.params.email + '';
  User.remove({ email : arg }, function(err, data) {
  });

  res.send({"state":"success"});
});

module.exports = router;
