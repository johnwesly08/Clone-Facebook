const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    
    const token = req.header('Authorization') && req.header('Authorization').split(' ')[1];
    
    if (!token) {
        return res.status(401).json("Access Denied. No Token provided");
    } 

    jwt.verify(token, process.env.SECRET_[KEY], (err, decoded) => {
        if(err) {
            return res.status(403).json("Invalid or Expired Token. ");
        }

        req.user = decoded;
        next();
    });
};

module.exports = verifyToken;