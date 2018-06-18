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

            const profile = transformFacebookResponse(request)
            return h.redirect('bikemeet://login?user=' + JSON.stringify(profile));
        }
    }
};

const transformFacebookResponse = (request) => {
    const credentials = request.auth.credentials
    const profile = request.auth.credentials.profile;

    return {
        avatar: profile.picture.data.url,
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