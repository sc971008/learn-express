const express = require('express')
const router = express.Router();

  router.get('/read/usernames', (req, res) => {
    let usernames = req.users.map(function(user) {
      return {id: user.id, username: user.username};
    });
    res.send(usernames);
  });

  router.get('/read/username/:name',(req, res) => {
    var {name} = req.params
    res.send(users.filter((a) => a.username === name))
  })

  module.exports = router
