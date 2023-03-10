const { verify } = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authorization = req.headers['authorization'].split(' ');
    try {
        if (authorization[0] !== 'Bearer') {
            return res.status(401).send({
              message: "No token provided!",
            });
        }
        verify(authorization[1], process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.status(403).send({
                  message: "Unauthorized!",
                });
            }
            req.id = decoded.id;
            next();
        });
    } catch (error) {
        res.status(401).send("No token provided");
    }
}