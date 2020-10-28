const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const editorSchema = new Schema({
    content:{
        type: String
    }
});

module.exports = mongoose.model('Editor',editorSchema);