// import FacebookStrategy from "passport-facebook";
// import {facebook} from './config';
// import { EDEADLK } from "constants";

// // Transform Facebook profile because Facebook and Google profile objects look different
// // and we want to transform them into user objects that have the same set of attributes
// const transformFacebookProfile = (profile) => ({
//     name: profile.name,
//     avatar: profile.picture.data.url,
// });

// const strategy = new FacebookStrategy(facebook,
     
//     async (accessToken, refreshToken, profile, done)       
//       => done(null, transformFacebookProfile(profile._json))
// );

// const facebookLogin = require('hapi-passport')(strategy);

export default {
    method: "GET",
    path: "/auth/facebook",
    options: {
        auth: {
            strategy: 'facebook',
            mode: 'try'
        },
        handler: function (request, h) {
            if (!request.auth.isAuthenticated) {
                return 'Authentication failed due to: ' + request.auth.error.message;
            }

            console.log(request.auth);

            return '<pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>';
        }
    }
};

 
