// var { conn, sql } = require('../database/connectdb');

// module.exports = function() {
//     this.getAll = async (result) => {
//         var pool = await conn;
//         var sqlString = 'SELECT * FROM CarProduct';
//         return await pool.request().query(sqlString, (err, data) => {
//             if (data.recordset.length > 0) {
//                 result(null, data.recordset);
//             } else {
//                 result(true, null);
//             }
//         });
//     };
        
//     this.getOne = async (id, result) => {
//         var pool = await conn;
//         var sqlString = 'SELECT * FROM CarProduct WHERE id = @varId';
//         return await pool
//         .request()
//         //kiểm tra điều kiện đầu vào phải là int
//         .input('varId', sql.Int, id)
//         .query(sqlString, (err, data) => {
//             // console.log(err, data.recordset);
//             if (data.recordset.length > 0) {
//                 result(null, data.recordset);
//             } else {
//                 result(true, null);
//             }
//         });
//     };

//     this.create = async (newData, result) => {
//         var pool = await conn;
//         var sqlString =
//             'INSERT INTO CarProduct (Tenxe, Socho) VALUES (@tenxe, @socho)';
//         return await pool
//         .request()
//         .input('tenxe', sql.NVarChar, newData.Tenxe) //req.body.'Tên trường trong SQL'
//         .input('socho', sql.Int, newData.Socho)
//         .query(sqlString, (err, data) => {
//             // console.log(req.body);
//             if (err) {
//                 result(true, null);
//             } else {
//                 result(null, newData);
//             }
//         });
//     };

//     this.update = async (newData, result) => {
//     var pool = await conn;
//     var sqlString =
//         'UPDATE CarProduct SET Tenxe = @tenxe, Socho = @socho WHERE Id = @id';
//     return await pool
//         .request()
//         .input('tenxe', sql.NVarChar, newData.Tenxe) //req.body.'Tên trường trong SQL'
//         .input('socho', sql.Int, newData.Socho)
//         .input('id', sql.Int, newData.Id)
//         .query(sqlString, (err, data) => {
//             if (err) {
//                 result(true, null);
//             } else {
//                 result(null, newData);
//             }
//         });
//     };

//     this.delete = async (id, result) => {
//     var pool = await conn;
//     var sqlString = 'DELETE from CarProduct WHERE Id = @id';
//     return await pool
//         .request()
//         .input('id', sql.Int, id)
//         .query(sqlString, (err, data) => {
//             if (err) {
//                 result(true, null);
//             } else {
//                 result(null, data);
//             }
//         });
//     };
// }
const db = require('../database/connectdb');
const Products = (products) => {
    this.id_xe = products.id_xe;
    this.id_khachhang = products.id_khachhang;
    this.hinhanh = products.hinhanh;
    this.tenxe = products.tenxe;
    this.socho = products.socho;
    this.mota = products.mota;
    this.giaxe = products.giaxe;
    this.hopso = products.hopso;
    this.dungtich = products.dungtich;
    this.nhienlieu = products.nhienlieu;
    this.nhienlieutieuhao = products.nhienlieutieuhao;
    this.sochuyen = products.sochuyen;
    this.hinhthucchothue = products.hinhthucchothue;
}

Products.get_all = (result) => {
    db.query(
        'SELECT p.id_xe, p.hinhanh, p.tenxe, p.giaxe, p.hopso, p.sochuyen, p.hinhthucchothue, c.diachi FROM products p, custommer c WHERE p.id_khachhang = c.id_khachhang LIMIT 0,8',
        (err, product) => {
            if (err || product.lenght === 0) {
                result(null);
            } else {
                result(product);
            }
        }
    );
}

Products.get_all_admin = (result) => {
    db.query(
        'SELECT * from products join custommer on products.id_khachhang = custommer.id_khachhang',
        (err, product) => {
            if (err || product.lenght === 0) {
                result(null);
            } else {
                result(product);
            }
        }
    );
}

Products.getByIdAdmin = (id, result) => {
    db.query(
        `SELECT * FROM products WHERE id_xe = ${id}`,
        (err, product) => {
            if (err || product.lenght === 0) {
                result(null);
            } else {
                result(product[0]);
            }
        }
    );
}

Products.getById = (id, result) => {
    db.query(
        `SELECT * FROM products WHERE p.id_khachhang = c.id_khachhang AND id_xe = ${id}`,
        (err, product) => {
            if (err || product.lenght === 0) {
                result(null);
            } else {
                result(product[0]);
            }
        }
    );
}

Products.create = (data, result) => {
    db.query('INSERT INTO products SET id_khachhang=?, hinhanh=?, tenxe=?, socho=?, mota=?, giaxe=?, hopso=?, dungtich=?, nhienlieu=?, nhienlieutieuhao=?, sochuyen=?, hinhthucchothue=?', 
    [data.id_khachhang, data.hinhanh, data.tenxe, data.socho, data.mota, data.giaxe, data.hopso, data.dungtich,
        data.nhienlieu, data.nhienlieutieuhao, data.sochuyen, data.hinhthucchothue], (err, product) => {
        if (err) {
            result(0);
        } else {
            result("Thêm sản phẩm thành công");
        }
    })
};

Products.remove = (id, result) => {
    db.query('DELETE FROM products WHERE id_xe = ?', id, (err, product) => {
        if (err) {
            result(null);
        } else {
            result("Xóa sản phẩm " + id + "thành công");
        }
    });
}

Products.update = (data, result) => {
    db.query('UPDATE products SET id_khachhang=?, hinhanh=?, tenxe=?, socho=?, mota=?, giaxe=?, hopso=?, dungtich=?, nhienlieu=?, nhienlieutieuhao=?, sochuyen=?, hinhthucchothue=? WHERE id_xe=?',
     [data.id_khachhang, data.hinhanh, data.tenxe, data.socho, data.mota, data.giaxe, data.hopso, data.dungtich,
        data.nhienlieu, data.nhienlieutieuhao, data.sochuyen, data.hinhthucchothue, data.id], (err, product) => {
        if (err) {
            result(0);
        } else {
            result("Cập nhập sản phẩm " + data.id + " thành công");
        }
    });
};

module.exports = Products;