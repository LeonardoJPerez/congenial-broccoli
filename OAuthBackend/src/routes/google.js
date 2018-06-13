export default {
    method : '*',
    path : '/auth/google/callback',
    options : {
        auth: {
            strategy: 'google',
            mode: 'try'
        },
        handler: function (request, h) {
            if (!request.auth.isAuthenticated) {
                return 'Authentication to Google failed due to: ' + request.auth.error.message;
            }
 
            const profile = request.auth.credentials.profile;
            const googleProfile = {
                name: profile.displayName,
                avatar: profile.raw.picture
            };             

            return h.redirect('OAuthLogin://login?user=' + JSON.stringify(googleProfile));
        }
    }
};
