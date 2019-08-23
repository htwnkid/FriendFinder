var friendData = require("../data/friendData");


module.exports = function(app) {
  

    app.get("/api/friends", function(req, res) {
        res.json(friendData);
    });

  app.post("/api/friends", function(req, res) {
    
    if (friendData.length < 7) {
      FriendData.push(req.body);
      res.json(true);
    }
    
  });

  
  
};
