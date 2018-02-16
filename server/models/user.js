var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema(
    {
        name: {
            type: String, 
            required: [true, 'Name is required'], 
            minlength: [4, 'Minimum name length is 4'],
            maxlength: [15, 'Maximum name length is 15']
        },
        items: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Item'
        }]
    },
    { timestamps: true }
);

module.exports = mongoose.model('User', UserSchema);