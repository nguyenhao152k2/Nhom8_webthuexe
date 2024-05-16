const MyTrip = require("../models/MyTripModel");

const get_mytrip = (req, res) => {
    MyTrip.get_my_trip((data) => {
        res.send({ _data: data });
    });

};

const get_historyTrip = (req, res) => {
    MyTrip.get_history_trip((data) => {
        res.send({ _data: data });
    });
}

module.exports = {
    get_mytrip,
    get_historyTrip,
}