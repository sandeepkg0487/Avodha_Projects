
const jwt = require('jsonwebtoken');
const secretKey = "hi iam key";
function verifyJWT(token) {
    try {
        // Verify the JWT using the secret key
        const decoded = jwt.verify(token, secretKey);
        return decoded;
    } catch (err) {
        // If the token is invalid or expired, an error will be thrown
        console.error('JWT verification failed:', err.message);
        return null;
    }
}



//   create JWT token

function generateJWT(user) {
    console.log('start generating token');
    // JWT payload containing user information
    const payload = {
        userId: user._id,
        username: user.email,
    };
    

    // JWT options: expiresIn specifies the token's expiration time (e.g., 1 hour)
    const options = {
        expiresIn: '1h',
    };
    // Generate and return the JWT
    const token = jwt.sign(payload, secretKey, options);
    return token;
    
}

module.exports = { generateJWT,verifyJWT }