const express = require('express');
const session = require('express-session');
const app = express();
// Middleware to set up session management
app.use(session({
  secret: 'secret-key',      // Replace with a strong secret key
  resave: false,             // Whether to save the session data if there were no modifications
  saveUninitialized: true,   // Whether to save new but not modified sessions
  cookie: { secure: false }  // Set to true in production with HTTPS
}));
// POST endpoint for handling login
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Simulated user authentication (replace with actual logic)
  if (username === 'user' && password === 'password') {
    req.session.user = username;  // Store user information in session
    res.send('Logged in successfully');
  } else {
    res.send('Invalid credentials');
  }
});
// GET endpoint for accessing dashboard
app.get('/dashboard', (req, res) => {
  if (req.session.user) {
    res.send(`Welcome ${req.session.user}`);  // Display welcome message with user's name
  } else {
    res.send('Please log in first');
  }
});
// Start the server on port 3000
app.listen(3000, () => console.log('Server running on port 3000'));


/*Explanation:
Express Setup: This code sets up an Express application and configures session management using express-session.
Session Configuration: Express-session middleware is configured with a secret key (secret: 'secret-key') for encrypting the session data, 
and other options like resave and saveUninitialized.Login Endpoint (/login): Handles POST requests for user login. If the provided username 
and password match, it stores the username (req.session.user) in the session.Dashboard Endpoint (/dashboard): Checks if the user is authenticated 
(req.session.user exists). If authenticated, it welcomes the user; otherwise, it prompts them to log <in className=""></in> */