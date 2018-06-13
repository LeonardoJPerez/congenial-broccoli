export default {
    method : "GET",
    path : "/auth/facebook/callback",
    options : {
        auth: {
            strategy: 'facebook',
            mode: 'try'
        },
        handler: function (request, h) {
            if (!request.auth.isAuthenticated) {
                return 'Authentication failed due to: ' + request.auth.error.message;
            }

            console.log(request.auth);
            const profile = request.auth.credentials.profile;
            const facebookProfile = {
                name: profile.displayName,
                avatar: profile.raw.picture
            };

            console.log(facebookProfile);

            return h.redirect('OAuthLogin://login?user=' + JSON.stringify(facebookProfile));;
        }
    }
};