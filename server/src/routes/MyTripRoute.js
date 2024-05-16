module.exports = (router) => {
    const {
        get_mytrip,
        get_historyTrip,
    } = require('../controllers/MyTripController');

    router.get('/api/mytrip', get_mytrip);
    router.get('/api/historyTrip', get_historyTrip);
}