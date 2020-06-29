import Amplify from 'aws-amplify';
console.log(process.env.NEXT_PUBLIC_IDENTITY_POOL_ID);
Amplify.configure({
    Auth: {
        // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
        identityPoolId: process.env.NEXT_PUBLIC_IDENTITY_POOL_ID,

        // REQUIRED - Amazon Cognito Region
        region: process.env.NEXT_PUBLIC_REGION,

        // OPTIONAL - Amazon Cognito Federated Identity Pool Region
        // Required only if it's different from Amazon Cognito Region
        identityPoolRegion: process.env.NEXT_PUBLIC_IDENITITY_POOL_REGION,

        // OPTIONAL - Amazon Cognito User Pool ID
        userPoolId: process.env.NEXT_PUBLIC_USER_POOL_ID,

        // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
        userPoolWebClientId: process.env.NEXT_PUBLIC_USER_POOL_WEB_CLIENT_ID,
    },
});
