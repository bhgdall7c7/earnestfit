var express = require('express');

module.exports.leaders = function(req,res){
    res.render('leaders');
}
module.exports.leaderdetail = function(req,res){
    res.render('leaderdetail');
}
module.exports.leaderdetailJinhyung = function(req,res){
    res.render('leaderdetailJinhyung');
}
module.exports.leaderdetailJunho = function(req,res){
    res.render('leaderdetailJunho');
}
module.exports.signup = function(req,res){
    res.render('signup');
}
module.exports.signin = function(req,res){
    res.render('signin');
}

module.exports.main = function(req,res){
    res.render('main');
}

module.exports.makecodes = function(req,res){
    res.render('makecodes');
}