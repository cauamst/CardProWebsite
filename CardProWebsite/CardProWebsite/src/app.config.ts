export const appConfig = {
    apiUrl: process.env.API_URL,
    authenticateUrl: 'auth/credentials ',
	toTokenUrl: 'auth/session-to-token',
    googleOAuth2AuthenticateUrl: 'auth/GoogleOAuth',
    logoutUrl: 'auth/logout',
    getCardsUrl: 'cards',
    registerCard: "/card/register",
    anonymousRegister: "card/anonymousRegister",
    //lazy load
    minimumHeight: 300, //px to top
    numberOfResults: 5, //for every loading time
    lazyLoadDelayTime: 200, //in miliseconds

    // to top
    minimumDistance: 500 // bottomOfScroll/scrollHeight
};

export const HandShakeConfig = {
    publicKey: `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAvXzm7NUxeQWJ8t1nLM5o
h67D+TRs6veF7HIktLDsdJ4+nJroxpQjTMnlVWPuw/7h7Ww9W8TnkiDUV/me2Io8
d/pYxvmIDnFl/c89qHgMhQh8H1JR9sbL/LfjqUSNZ9P9yQ3+ogUmL5sNH9D109dF
9nP/YE8ClraPMvkxZax6noSgVLk9x0pg86v8XRJtmlLiO3rVnt0TCO9D0M/13iji
Anc66kEtyuoXXejZpNe5jnRspewp1RfLTQKH+JP8UDc39rGZBYkZu6RKr/zyhyMK
bqH3I2CbRvjjBWAqpl0pzu4O9MRheVrbyrtLxhKbbuV0kkrJ7UPzuNuiW/qutKhr
gIiG56n8yxOzNAJkm6qDTjyVAsGSsHi2tlt9x1yAlXj/STB3l9QB0KLAVKli3WiE
yyYcMSUirPJiNYtFDGU77FIGbj9ikLSatE4EsDSLjxIz6ceBLaNrzpAG3PHGEo0W
RNnsfYhOsugmqQGzkbNzKHDIbKfz4ZXrskCQUpe58nsH8pyTK5kKswptOeSe0Wz9
q3JQLSCN5Q5ekoh45vRUqe8hu2+fyPjiEEgYfbGHoS20Y5W4lKGfcAAnNKk/LUqW
vZtTPsj7qRfFFBNPIBjLXKOvx8PLzC8vt5x1MyMget2SwBiM0yw1kYBwpR2B3ng3
rGWCJW10xSKpDBWuUMQO0tECAwEAAQ==
-----END PUBLIC KEY-----
    `,
    handshakeUrl: "handshake"
};