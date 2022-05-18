const jwt=require("jsonwebtoken"),verifyToken=(e,n,o)=>{const t=e.headers.token;if(!t)return n.status(401).json("You aren't authenticated!");{const i=t.split(" ")[1];jwt.verify(i,process.env.JWT_SEC,((t,i)=>{t&&n.status(401).json("Token is not valid!"),e.user=i,o()}))}},verifyTokenAndAuthorization=(e,n,o)=>{verifyToken(e,n,(()=>{e.user.id===e.params.id||e.user.isAdmin?o():n.status(403).json("You are not alowed to do that!")}))},verifyTokenAndAdmin=(e,n,o)=>{verifyToken(e,n,(()=>{e.user.isAdmin?o():n.status(403).json("You are not alowed to do that!")}))};module.exports={verifyToken,verifyTokenAndAuthorization,verifyTokenAndAdmin};