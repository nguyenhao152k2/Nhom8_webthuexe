const db = require('../database/connectdb');
const OrderCar = (ordercar) => {
    this.id_xedat = ordercar.id_xedat;
    this.id_xe = ordercar.id_xe;
    this.id_khachhang = ordercar.id_khachhang;
    this.hinhthucnhanxe = ordercar.hinhthucnhanxe;
    this.ngaynhanxe = ordercar.ngaynhanxe;
    this.ngaytraxe = ordercar.ngaytraxe;
    this.dongia = ordercar.dongia;
    this.baohiem = ordercar.baohiem;
    this.thanhtien = ordercar.thanhtien;
    this.trangthai = ordercar.trangthai;
};

OrderCar.get_all = (result) => {
    db.query(
        'SELECT * FROM ordercar',
        (err, ordercar) => {
            if (err || ordercar.lenght === 0) {
                result(null);
            } else {
                result(ordercar);
            }
        }
    );
};

OrderCar.getById = (id, result) => {
    db.query(
        `SELECT * FROM ordercar WHERE id_xedat = ${id}`,
        (err, ordercar) => {
            if (err || ordercar.lenght === 0) {
                result(null);
            } else {
                result(ordercar[0]);
            }
        }
    );
};

OrderCar.create = (data, result) => {
    db.query('INSERT INTO ordercar SET ?', data, (err, ordercar) => {
        if (err) {
            console.log('err', err);
            result(null);
        } else {
            result({ id: ordercar.insertId, ...data });
        }
    });
};

// OrderCar.create = (data, result) => { 
//     // console.log('data', data.id_xe);
//     db.query(
//         `SELECT * FROM ordercar WHERE id_xe = ${1} AND ngaynhanxe = ${'2024-05-01'} AND ngaytraxe = ${'2024-05-02'} AND trangthai = ${1}`,
//         [data.id_xe, data.ngaynhanxe, data.ngaytraxe, '1'], (err, ordercar) => { 
//             if (err) {
//                 result.status(500).json({ error: "Lỗi" });
//             } else {
//                 if (ordercar.lenght > 0) {
//                     result.status(200).json({ error: 'Xe đã được thuê' });
//                 } else {
//                     db.query('INSERT INTO ordercar SET ?', data, (err, ordercar) => {
//                         if (err) {
//                             console.log('err', err);
//                             result(null);
//                         } else {
//                             result({ id: ordercar.insertId, ...data });
//                         }
//                     });
//                 }
//             }
//         }
//     );
// }

OrderCar.remove = (id, result) => {
    db.query('DELETE FROM ordercar WHERE id_xedat = ?', id, (err, ordercar) => {
        if (err) {
            console.log('err', err);
            result(null);
        } else {
            result('Xóa sản phẩm ' + id + 'thành công');
        }
    });
};

//id_xe=?, id_khachhang=?, hinhthucnhanxe=?, ngaynhanxe=?, ngaytraxe=?, dongia=?, baohiem=?, thanhtien=?,
//data.id_xe, data.id_khachhang, data.hinhthucnhanxe, data.ngaynhanxe, data.ngaytraxe, data.dongia, data.baohiem, data.thanhtien,
OrderCar.update = (data, result) => {
    db.query(
        'UPDATE ordercar SET  trangthai=? WHERE id_xedat=?',
        [ data.trangthai, data.id_xedat],
        (err, ordercar) => {
            if (err) {
                console.log('err', err);
                result(null);
            } else {
                result(data);
            }
        }
    );
};

// OrderCar.isBookerCar = () => {
//     db.query(
//         'SELECT * FROM ordercar WHERE trangthai = 1', //o.id_xe, ngaynhanxe, ngaynhanxe, trangthai FROM ordercar o, products p WHERE o.id_xe = p.id_xe AND
//         (err, ordercar) => {
//             if (err || ordercar.lenght === 0) {
//                 result(null);
//             } else {
//                 result(ordercar);
//             }
//         }
//     );
// }

module.exports = OrderCar;
