const router=require("express").Router(),User=require("../models/User"),CryptoJS=require("crypto-js"),jwt=require("jsonwebtoken");router.post("/register",(async(s,e)=>{const r=new User({username:s.body.username,email:s.body.email,password:CryptoJS.AES.encrypt(s.body.password,process.env.PASS_SEC).toString()});try{const s=await r.save();e.status(201).json(s)}catch(s){e.status(500).json(s)}})),router.post("/login",(async(s,e)=>{try{const r=await User.findOne({username:s.body.username});!r&&e.status(401).json("Wrong credentials!");const o=CryptoJS.AES.decrypt(r.password,process.env.PASS_SEC);o.toString(CryptoJS.enc.Utf8)!==s.body.password&&e.status(401).json("Wrong credentials!");const t=jwt.sign({id:r._id,isAdmin:r.isAdmin},process.env.JWT_SEC,{expiresIn:"3d"}),{password:n,...a}=r._doc;e.render("painel.html")}catch(s){console.log(s+"ERROOOO")}})),module.exports=router;