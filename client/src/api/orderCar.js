import axiosClient from "./axiosClient";

const orderCar = {
    getAll: (car) => {
        const url = '/ordercar';
        return axiosClient.get(url, { car });
    },

    getById: (id) => {
        const url = `/products/${id}`;
        return axiosClient.get(url);
    },

    potsOrderCar: (car) => {
        const url = '/ordercar';
        return axiosClient.post(url, car);
    },

    // checkBookerCar: (car) => {
    //     const url = '/checkOrderCar';
    //     return axiosClient.post(url, car);
    // }
};

export default orderCar;