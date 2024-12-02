const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Test GET API Endpoint
app.get('/test', (req, res) => {
    res.status(200).json({ message: 'API is working correctly!!!!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
