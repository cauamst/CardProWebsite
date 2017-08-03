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
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDUSqNJ2p9Gsp0JET+s4Mxt90cM
afpxl8+czgkDjnLTPCWYOVttWFUmwBvveHItCXIWCRA+0QWFlwct4c7Hihrwy9Gv
xndMoYH13wo2q9ajCg0azxXBIq+7EsvTWzk3MJqYgt6Zd+C4sVUL5hkEGHCHVG0p
NRJkaDP6vDQJtAcbBwIDAQAB
-----END PUBLIC KEY-----
    `,
    handshakeUrl: "handshake"
};