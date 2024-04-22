var OrderCar = require('../models/OrderCarModel');

const get_list = (req, res) => {
    OrderCar.get_all((data) => {
        res.send({ data });
    });
};

const get_detail = (req, res) => {
    OrderCar.getById(req.params.id, (result) => {
        res.send({ _result: result });
    });
};

const add_ordercar = (req, res) => {
    var data = req.body;
    OrderCar.create(data, (result) => {
        res.send({ result: result });
    });
};

const remove_ordercar = (req, res) => {
    var id = req.params.id;
    OrderCar.remove(id, (result) => {
        res.send({ result: result });
    });
};

const update_ordercar = (req, res) => {
    var data = req.body;
    OrderCar.update(data, (result) => {
        res.send({ result: result });
    });
};

module.exports = {
    get_list,
    get_detail,
    add_ordercar,
    remove_ordercar,
    update_ordercar,
};
