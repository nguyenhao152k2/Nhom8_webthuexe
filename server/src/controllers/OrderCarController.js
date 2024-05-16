var OrderCar = require('../models/OrderCarModel');

const get_list = (req, res) => {
    OrderCar.get_all((data) => {
        res.send({_data: data});
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

// const add_ordercar = (req, res) => {
//     const { id_xe, ngaynhanxe, ngaytraxe, trangthai } = req.body;
//     const data = req.body;

//     OrderCar.create(data, (result) => {
//         res.send({ result: result });
//     });
// }

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

// const checkOrderCar = (req, res) => {
//     const isBookerCar = (req, res) => {
//         OrderCar.get_all((data) => {
//             res.send({ data });
//         });
//     };
//     const { id_xe, ngaynhanxe, ngaytraxe, trangthai } = req.body;

//     //
//     const isDuplicate = isBookerCar.some(booking =>
//         booking.id_xe === id_xe && booking.ngaynhanxe === ngaynhanxe
//         && booking.ngaytraxe === ngaytraxe && booking.trangthai === trangthai);
    
//     res.json({ isDuplicate });
// }

module.exports = {
    get_list,
    get_detail,
    add_ordercar,
    remove_ordercar,
    update_ordercar,
    // get_mytrip,
    // checkOrderCar,
};
