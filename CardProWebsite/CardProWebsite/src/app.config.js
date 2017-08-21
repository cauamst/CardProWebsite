"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appConfig = {
    apiUrl: 'http://localhost:9999/api/',
    authenticateUrl: 'auth/credentials ',
    googleOAuth2AuthenticateUrl: 'auth/GoogleOAuth',
    logoutUrl: 'auth/logout',
    getCardsUrl: 'cards',
    registerCard: "/card/register",
    //lazy load
    minimumHeight: 300,
    numberOfResults: 5,
    lazyLoadDelayTime: 200,
    // to top
    minimumDistance: 500 // bottomOfScroll/scrollHeight
};
exports.HandShakeConfig = {
    publicKey: "-----BEGIN PUBLIC KEY-----\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEApw+/1PUjb9ErwROchXI8\nVbHcLrY2YY6KvGhDaJqS+Crl3t1ZMCnYe92CkR8gf7i8XXDh7crjw+7S1BSL97eg\nQDOMUonaxTyYq9UqU8tOQkqvEH8FXttIYLb3LhD6ciNwpPWCfzKRTWymgx62CLKM\nF7579OzTE3BmihEQKZq8u7pHrGdSM9zY63WsE/wZnoOziwCHvN+9nDhiiwyCTdJ2\n309mdX5zFQ6K+TQ5KC1/XHyXWbxAZ6uPpSVBA3mIHirc/Xv3f9ooFVqxGaO7QsHn\nRjjVH9CwheIR746ZkzdCDGj5mcqCfWTu32zSMzJ51mf6SM/77gKduwsKe33pbilU\nSRskY53Cv9EQLPgl/IorK9ukxueAk6SJgZKBBGGetJ2bbcbKGFktgOguFTbUev+7\nanH1XzI9ZKcHgNJhc511QadpYoaqOTUx5ZhMNMvkIfndrcs6p+8V6loAapDej9eL\nlnmxTcERSEfAXq1FCcOxwiEnNdkdYD2MAXd9UGdhcdGgChuSKubH43P2C0zLgW9Q\n+2s/iiTX8mi1hodzJ+TYH6l12ZyuxgLB0o/6V+bsGG1O3ds8AF2dOVrTDUdC1bhM\ndLBpQtRV20uX0XKuCUubHFHbcdqpnZ/pWNsxplOYbjWfsox6oXINysSK6JE+tuS3\nrBM5WhalJd/fNCcCmcaD9iECAwEAAQ==\n-----END PUBLIC KEY-----\n    ",
    handshakeUrl: "handshake"
};
//# sourceMappingURL=app.config.js.map