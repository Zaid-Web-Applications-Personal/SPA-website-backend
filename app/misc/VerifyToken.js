var jwt = require('jsonwebtoken');
var config = require('../config/jwt.config');

function verifyToken(req, res, next) {
  if(!req.headers.authorization){
    return res.status(403).send({ auth: false, message: 'No token provided.' });
  }
  console.log(req.headers)
  var token = req.headers.authorization.split(" ")[1];
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, config.secret, function(err, decoded) {
    if (err)
    {
      console.log(err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
    }
      
    req.userId = decoded.id;
    next();
  });
}

module.exports = verifyToken;