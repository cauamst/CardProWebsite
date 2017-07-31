export const appConfig = {
    apiUrl: 'http://localhost:9999/api/',
    authenticateUrl: 'auth/credentials ',
    googleOAuth2AuthenticateUrl: 'auth/GoogleOAuth',
    logoutUrl: 'auth/logout',
    getCardsUrl: 'cards',
    registerCard: "/card/register",

    //lazy load
    minimumHeight: 300, //px to top
    numberOfResults: 5, //for every loading time
    lazyLoadDelayTime: 200, //in miliseconds

    // to top
    minimumDistance: 500 // bottomOfScroll/scrollHeight
};

export const HandShakeConfig = {
    publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEApK9J/LDxduixXnnQIYRq
Q/hZtR7hpNqtSLprMytIpVV1sTTMT15MD7hCXdSORNyYUsiiOnMRSvap+SNwdlea
SOWwwaTAxmZeuiMjBwAckgWmZ0ypHI+uoo2sVlk0k5HAw/LNMPX9GoSSnOix7NEc
f6dMcBTfeOUVR4GlbFuijMXFgTK6/AJHHlOT8jK+3QQU3ShvDUAcV4pF2ftn90oO
0XYPNP39OMcRsZhB5NimzQ8uonyNmPo2WtuHaQP08f74MlKNk+vtMGwcm8W7flvZ
Jzc8iXgj3vgtjbhruSzAt7BCd6nGIKLaB8d9IPF5YHGn0PClVaIVKwEALZw+uhG4
RQIDAQAB
-----END PUBLIC KEY-----
    `,
    handshakeUrl: "handshake"
};