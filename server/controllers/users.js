var session = require('express-session');
    User    = require('../models/user');

module.exports = {

    // getOtherUsers
    index: (req, res) => {
        User.find({_id: {$ne: session.user_id}}, null, {sort: '-createdAt'}, (err, users) => {
            if (err) { return res.json(err); }
            return res.json(users);
        });
    },

    show: (req, res) => {
        User.find({_id: req.params.id}, (err, user) => {
            if (err) { return res.json(err); }
            return res.json(user);
        });
    },

    create: (req, res) => {
        let newUser = new User(req.body);

        // don't need populate and exec in create
        // Just use .findOne({}, (err,user) => callback..)
        // populate is maybe for other functions
        User.findOne({name: newUser.name})
        // .populate('items')
        .exec((err, user) => {
            if (user) { 
                session.user_id = user._id;
                return res.json(user);
            }

            newUser.save( (err) => {
                if (err) { return res.status(400).json(err.json()); }
                session.user_id = newUser._id;
                return res.json(newUser);
            });
        });
    }
};