export const appConfig = {
    apiUrl: 'http://localhost:9999/api/',
    authenticateUrl: 'auth/credentials ',
    logoutUrl: 'auth/logout',
    getCardsUrl: 'cards',

    //lazy load
    minimumHeight: 300, //px to top
    numberOfResults: 5, //for every loading time
    lazyLoadDelayTime: 200, //in miliseconds
};