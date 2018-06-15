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

            const profile = transformGoogleResponse(request)
            return h.redirect('OAuthLogin://login?user=' + JSON.stringify(profile));
        }
    }
};

const transformGoogleResponse = (request) => {
    const credentials = request.auth.credentials
    const profile = request.auth.credentials.profile;

    return {
        avatar: profile.raw.picture,
        email: profile.email,
        expiresIn: credentials.expiresIn,
        name: profile.name.given_name,
        familyName: profile.name.family_name,
        displayName: profile.displayName,
        provider: credentials.provider,
        refreshToken: credentials.refreshToken,
        token: credentials.token
    };
}
