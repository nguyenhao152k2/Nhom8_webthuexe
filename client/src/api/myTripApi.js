import axiosClient from "./axiosClient";

const myTrip = {
    getMyTrip: (trip) => {
        const url = '/mytrip';
        return axiosClient.get(url, { trip });
    },

    getHistoryTrip: (hisTrip) => { 
        const url = '/historyTrip';
        return axiosClient.get(url, { hisTrip });
    },
}

export default myTrip;