// Create web server
// 1. Create a web server
// 2. Create a router for comments
// 3. Create a route to get all comments
// 4. Create a route to get a single comment
// 5. Create a route to add a comment
// 6. Create a route to update a comment
// 7. Create a route to delete a comment
// 8. Listen on port 3000
// 9. Create a route to get all comments for a post
// 10. Create a route to get all comments for a user
// 11. Create a route to get all comments for a user and a post

// 1. Create a web server
const express = require('express');
const app = express();

// 2. Create a router for comments
const commentsRouter = express.Router();

// 3. Create a route to get all comments
commentsRouter.get('/', (req, res) => {
    res.json({ message: 'Get all comments' });
});

// 4. Create a route to get a single comment
commentsRouter.get('/:id', (req, res) => {
    res.json({ message: `Get comment with id ${req.params.id}` });
});

// 5. Create a route to add a comment
commentsRouter.post('/', (req, res) => {
    res.json({ message: 'Add a comment' });
});

// 6. Create a route to update a comment
commentsRouter.put('/:id', (req, res) => {
    res.json({ message: `Update comment with id ${req.params.id}` });
});

// 7. Create a route to delete a comment
commentsRouter.delete('/:id', (req, res) => {
    res.json({ message: `Delete comment with id ${req.params.id}` });
});

// 9. Create a route to get all comments for a post
commentsRouter.get('/post/:postId', (req, res) => {
    res.json({ message: `Get all comments for post with id ${req.params.postId}` });
});

// 10. Create a route to get all comments for a user
commentsRouter.get('/user/:userId', (req, res) => {
    res.json({ message: `Get all comments for user with id ${req.params.userId}` });
});

// 11. Create a route to get all comments for a user and a post
commentsRouter.get('/user/:userId/post

