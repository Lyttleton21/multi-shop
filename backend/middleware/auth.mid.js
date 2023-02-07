const { verify } = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = req.session.token;
    try {
        if (!token) {
            return res.status(401).send({
              message: "No token provided!",
            });
        }
        verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send({
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