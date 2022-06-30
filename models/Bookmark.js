// Require the mongoose instance configured in connection.js
const mongoose = require('../db/connection');

// Make a new schema with 2 properties, and assign it a variable
const BookmarkSchema = new mongoose.Schema({
    title: String,
    url: String,
});

// Instantiate the model, calling it "Bookmark" and with the schema we just made
const Bookmark = mongoose.model('Bookmark', BookmarkSchema)

// Export the newly created model
module.exports = Bookmark;