const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
    res.send('Backend is running!');
});

// Test route
app.get('/test', (req, res) => {
    res.json({ message: 'Test endpoint works!' });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
