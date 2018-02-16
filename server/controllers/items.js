var session = require('express-session');
    Item    = require('../models/item');

module.exports = {
    index: (req, res) => {
        Item.find({users: session.user_id})
        .populate('_owner')
        .exec((err, items) => {
            if (err) { return res.status(400).json(err); }
            return res.json(items);
        });
    },

    create: (req, res) => {
        const item = new Item(req.body);
        item._owner = session.user_id;

        item.users.push(session.user_id);
        if (item.tagged) item.users.push(item.tagged);

        console.log("Items Controller added item:", item);

        item.save( (err) => {
            if (err) { return res.status(400).json(err); }
            return res.json(item);
        });

    },

    showOther: (req, res) => {
        Item.find({users: req.params.id})
        .populate('_owner')
        .exec((err, items) => {
            if (err) { return res.json(err); }
            return res.json(items);
        });
    },

    updateStatus: (req, res) => {
        Item.findOne({_id: req.params.id})
        .exec((err, item) => {
            if (err) { return res.status(400).json(err); }
            item.completed = !item.completed;
            item.save((err) => {
                if (err) { return res.status(400).json(err); }
                return res.json(item);
            })
        })
    }


};
