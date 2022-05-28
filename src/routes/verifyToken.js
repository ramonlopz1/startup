const jwt = require("jsonwebtoken")

const verifyToken = (req, res, next) => {
  // Recebe o token vindo do headers
  const authHeader = req.session.token;
  
  if (authHeader) {
    // retira o Baerer e recebe apenas o hash
    const token = authHeader

    // Verifica se o token é válido
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {

      if (err) res.status(401).json("Token is not valid!")

      // se o token for válido, ele retorna os dados do user
      req.user = user;

      next();
    });
  } else {
    return res.status(401).json("You aren't authenticated!");
  }
}

const verifyTokenAndAuthorization = (req, res, next) => {
  verifyToken(req, res, () => {

    if (req.user.id === req.params.id || req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }


  });
};

const verifyTokenAndAdmin = (req, res, next) => {

  verifyToken(req, res, () => {

    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("You are not alowed to do that!");
    }

  });
};

module.exports = {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
}