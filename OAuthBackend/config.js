require('dotenv').config();

export const facebook = {
    provider: 'facebook',
    password: 'cookie_encryption_password_secure',
    isSecure: false,
    clientId: process.env.FACEBOOK_CLIENT_ID,
    clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    location: 'http://localhost:3000/auth/facebook/callback'
};

export const google = {
    provider: 'google',
    password: 'cookie_encryption_password_secure',
    isSecure: false,
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    location: 'http://localhost:3000/auth/google/callback'
};