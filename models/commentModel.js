const { Schema, model } = require('mongoose');

const commentSchema = Schema({
    post_id: { 
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'Post' 
    },
    author_id: { 
        type: Schema.Types.ObjectId, 
        required: true, 
        ref: 'User' 
    },
    content: { 
        type: String, 
        required: true 
    },
    timestamp: { 
        type: Date, 
        default: Date.now 
    }
},
{ versionKey: false });

module.exports = model('Comment', commentSchema);