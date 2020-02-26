const jwt = require('jsonwebtoken');
const config = require('config');

// predicate the router with a check and bail out when needed
  module.exports = function(req, res, next) {
  const token = req.headers['x-auth-token'];
  if (!token) return res.status(401).send('Access denied.No token privided');
   
   try {
       const decoded = jwt.verify(token, config.get('jwtPrivateKey'));

       req.user = decoded;
       next();
   } catch (error) {
       res.status(400).send('Invalid token.');
   }

};
