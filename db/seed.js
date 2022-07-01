const mongoose = require('./connection');

const Bookmark = require('../models/Bookmark');
const User = require('../models/User');
const bookmarkseeds = require('./seeds.json');

Bookmark.deleteMany({})
	.then(() => User.deleteMany({}))
	.then(() => {
		return User.create({ email: 'fake@email.com', name: 'Fake Person' })
			.then((user) =>
				bookmarkseeds.map((bookmark) => ({ ...bookmark, owner: user._id }))
			)
			.then((bookmarks) => Bookmark.insertMany(bookmarks));
	})
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});
// // Create new bookmarks with the seed data
// User.insertMany(users)
//     .then((res) => {
//         // If successful, log the newly created bookmarks
//         console.log(res);
//     })
//     // If there's an error, log the error
//     .catch((err) => console.log(err))
//     // Lastly, hang up on the database connection
//     .finally(() => process.exit())

// Create new bookmarks with the seed data
// Bookmark.insertMany(bookmarks)
//     .then((res) => {
//         // If successful, log the newly created bookmarks
//         console.log(res);
//     })
//     // If there's an error, log the error
//     .catch((err) => console.log(err))
//     // Lastly, hang up on the database connection
//     .finally(() => process.exit())
