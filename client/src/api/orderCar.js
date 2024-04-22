import axiosClient from "./axiosClient";

const orderCar = {
    potsOrderCar: (car) => {
        const url = '/ordercar';
        return axiosClient.post(url, car);
    }
}

export default orderCar;