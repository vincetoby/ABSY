const express = require('express');
const cors = require('cors');


const app = express();

// Enable CORS for all origins
app.use(cors());

// or specify allowed origins and methods
app.use(
	cors({
		origin: 'http://localhost:3000', //Replace with your react app's URL
		methods: ['GET', 'POST', 'PUT', 'DELETE'],
		credentials: true, //if you need cookies
	})
);

app.use(express.json());

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the ABSY API!');
});

// Example route
app.get('/api', (req, res) => {
	res.json({ message: 'Welcome to Absy!' });
});

const PORT = 5000;
app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});
