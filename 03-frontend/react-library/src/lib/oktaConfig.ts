export const oktaConfig = {
     clientId: 'p7Mhv83WWXXvLxcSayhzZkrDfIGJwiK1',
     issuer: 'https://dev-dggfis7w512u1z75/oauth2/default',
     redirectUri: 'https://localhost:3000/login/callback',
     scope: ['openid', 'profile', 'email'],
     pkce: true,
     disableHttpsCheck: true,
}