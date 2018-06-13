// import FacebookStrategy from "passport-facebook";
// import {facebook} from './config';

// // Transform Google profile into user object
// const transformGoogleProfile = (profile) => ({
//     name: profile.displayName,
//     avatar: profile.image.url,
// });

// const strategy = new FacebookStrategy(facebook,   
//     async (accessToken, refreshToken, profile, done)       
//       => done(null, transformFacebookProfile(profile._json))
// );

// // Register Google Passport strategy
// const strategy = new GoogleStrategy(google,
//     async (accessToken, refreshToken, profile, done)
//       => done(null, transformGoogleProfile(profile._json))
// );
  
// const googleLogin = require('hapi-passport')(strategy);

// export default {
//     method: "GET",
//     path: "/login/google",
//     handler: googleLogin({
//         onSuccess: function (info, request, reply) {
//             // maybe do a redirect?
//         },
//         onFailed: function (warning, request, reply) {
//             // maybe show an error?
//         },
//         onError: function (error, request, reply) {
//             // tell the world that you are angry.
//         }
//     })
// };

export default {
    method: '*',
    path: '/auth/google',
    options: {
        auth: {
            strategy: 'google',
            mode: 'try'
        },
        handler: function (request, h) {
            if (!request.auth.isAuthenticated) {
                return 'Authentication to Google failed due to: ' + request.auth.error.message;
            }

            console.log(request.auth);
            
            return '<pre>' + JSON.stringify(request.auth.credentials, null, 4) + '</pre>';
        }
    }
};
 