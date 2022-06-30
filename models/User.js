// Require the mongoose instance configured in connection.js
const mongoose = require('../db/connection');

// Make a new schema with 2 properties, and assign it a variable
const UserSchema = new mongoose.Schema({
	name: String,
	email: String,
});

// Instantiate the model, calling it "Bookmark" and with the schema we just made
const User = mongoose.model('User', UserSchema);

// Export the newly created model
module.exports = User;
