const db = require('../database/connectdb');
const MyTrip = (mytrip) => {
    this.id_xe = mytrip.id_xe;
    this.hinhanh = mytrip.hinhanh;
    this.tenxe = mytrip.tenxe;
    this.ngaynhanxe = mytrip.ngaynhanxe;
    this.ngaytraxe = mytrip.ngaytraxe;
    this.thanhtien = mytrip.thanhtien;
};

MyTrip.get_my_trip = (result) => {
    const query =
        'SELECT o.id_xe, o.ngaynhanxe, o.ngaytraxe, o.thanhtien, p.hinhanh, p.tenxe FROM ordercar o, products p WHERE o.id_xe = p.id_xe AND trangthai = 1';
    db.query(query, (err, mytrip) => {
        if (err || mytrip.lenght === 0) {
            result(null);
        } else {
            result(mytrip);
        }
    });
};

MyTrip.get_history_trip = (result) => {
    const query =
        'SELECT o.id_xe, o.ngaynhanxe, o.ngaytraxe, o.thanhtien, p.hinhanh, p.tenxe FROM ordercar o, products p WHERE o.id_xe = p.id_xe AND trangthai = 0';
    db.query(query, (err, mytrip) => {
        if (err || mytrip.lenght === 0) {
            result(null);
        } else {
            result(mytrip);
        }
    });
};

module.exports = MyTrip;
