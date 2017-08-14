﻿export const appConfig = {
    apiUrl: process.env.API_URL,
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
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEApw+/1PUjb9ErwROchXI8
VbHcLrY2YY6KvGhDaJqS+Crl3t1ZMCnYe92CkR8gf7i8XXDh7crjw+7S1BSL97eg
QDOMUonaxTyYq9UqU8tOQkqvEH8FXttIYLb3LhD6ciNwpPWCfzKRTWymgx62CLKM
F7579OzTE3BmihEQKZq8u7pHrGdSM9zY63WsE/wZnoOziwCHvN+9nDhiiwyCTdJ2
309mdX5zFQ6K+TQ5KC1/XHyXWbxAZ6uPpSVBA3mIHirc/Xv3f9ooFVqxGaO7QsHn
RjjVH9CwheIR746ZkzdCDGj5mcqCfWTu32zSMzJ51mf6SM/77gKduwsKe33pbilU
SRskY53Cv9EQLPgl/IorK9ukxueAk6SJgZKBBGGetJ2bbcbKGFktgOguFTbUev+7
anH1XzI9ZKcHgNJhc511QadpYoaqOTUx5ZhMNMvkIfndrcs6p+8V6loAapDej9eL
lnmxTcERSEfAXq1FCcOxwiEnNdkdYD2MAXd9UGdhcdGgChuSKubH43P2C0zLgW9Q
+2s/iiTX8mi1hodzJ+TYH6l12ZyuxgLB0o/6V+bsGG1O3ds8AF2dOVrTDUdC1bhM
dLBpQtRV20uX0XKuCUubHFHbcdqpnZ/pWNsxplOYbjWfsox6oXINysSK6JE+tuS3
rBM5WhalJd/fNCcCmcaD9iECAwEAAQ==
-----END PUBLIC KEY-----
    `,
    handshakeUrl: "handshake"
};