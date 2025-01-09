const request = require('supertest');
const app = require('../server'); // Make sure this is the path to your Express app
const jwt = require('jsonwebtoken');
const User = require('../models/User'); // Your User model, if necessary for testing

describe('verifyToken middleware', () => {

    it('should return 401 if token is not provided', async () => {
        const response = await request(app).get('/profile');  // Hitting the /profile endpoint
        expect(response.status).toBe(401); // Expecting 401 Unauthorized
        expect(response.text).toBe('Access Denied. No Token provided');
    });

    it('should pass with a valid token', async () => {
        // Create a valid token
        const token = jwt.sign({ id: '123' }, process.env.SECRET_KEY);

        const response = await request(app)
            .get('/profile')
            .set('Authorization', `Bearer ${token}`); // Setting the Authorization header with Bearer token

        // Expect the status to be 200 (OK) when the token is valid
        expect(response.status).toBe(200);
        // Optionally, check that the response contains data about the user
        expect(response.body.id).toBe('123');
    });
});
