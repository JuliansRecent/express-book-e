// Import Bookmark model
const Bookmark = require('../models/Bookmark');

// Import bookmark seed data
const bookmarks = require('./seeds.json');

// Create new bookmarks with the seed data
Bookmark.insertMany(bookmarks)
    .then((res) => {
        // If successful, log the newly created bookmarks
        console.log(res);
    })
    // If there's an error, log the error
    .catch((err) => console.log(err))
    // Lastly, hang up on the database connection
    .finally(() => process.exit())