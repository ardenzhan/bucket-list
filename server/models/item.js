var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: [true, 'Title is required'], 
            minlength: [5, 'Title must be at least 5 characters'],
            maxlength: [20, 'Title should be max 20 characters']
        },
        description: {
            type: String,
            required: [true, 'Description is required'],
            minlength: [10, 'Description should be at least 10 characters'],
            maxlength: [200, 'Description should be max 200 characters']
        },
        completed: {
            type: Boolean, default: false
        },
        _owner: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        tagged: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        users: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        }]
    },
    { timestamps: true }
);

module.exports = mongoose.model('Item', ItemSchema);