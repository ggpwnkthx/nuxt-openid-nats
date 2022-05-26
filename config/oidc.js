export const oidcSettings = {
  authority: 'https://nats.vradulthub.com/.well-known/member-openid-configuration',
  clientId: '1',
  redirectUri: 'http://localhost:3000/oidc-callback',
  responseType: 'code',
  scope: 'openid email',
  automaticSilentRenew: true,
  silentRedirectUri: 'http://localhost:3000/silent-renew-oidc.html'
}
