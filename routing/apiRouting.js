const db = require('../models');


module.exports = function (app) {
  app.get('/api/products', function (req, res) {
    db.Product.findAll().then(function (dbModel) {
      res.json(dbModel);
    })
  })

  app.get("/banana", function (req, res) {
    res.json('Here is your banana!');
  });

  // app.post("/api/friends", function (req, res) {

  //   if (friendData.length < 7) {
  //     FriendData.push(req.body);
  //     res.json(true);
  //   }

  // });



};
