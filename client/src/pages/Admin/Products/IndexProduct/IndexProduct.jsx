import React from 'react'
import { Table, Popconfirm } from 'antd';
import axios from 'axios';
import AddProductComp from '../../../../components/AddProductComponent/AddProductComponent';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const dataProducts = [];

const getProducts = () => {
  axios.get('http://localhost:3001/api/products-admin')
    .then(res => {
      dataProducts.data = res.data.result;
    })
    .catch(err => console.error(err));
}

const deleteProduct = (id) => {
  axios.delete('http://localhost:3001/api/products/'+id)
    .then(res => {
      window.location.href = '/admin/products';
    })
    .catch(err => {
      console.error(err);
    });
}

getProducts();

const columns = [
  {
    title: 'ID xe',
    dataIndex: 'id_xe',
    key: 'id_xe',
    width: 100,
    sorter: (a, b) => a.id_xe - b.id_xe,
  },
  {
    title: 'ID khách hàng',
    dataIndex: 'id_khachhang',
    key: 'id_khachhang',
    width: 140,
    sorter: (a, b) => a.id_khachhang - b.id_khachhang,
  },
  {
    title: 'Tên khách hàng',
    dataIndex: 'tenkhachhang',
    key: 'tenkhachhang',
  },
  {
    title: 'Hình ảnh',
    dataIndex: 'hinhanh',
    key: 'hinhanh',
    render: (_, record) => <img style={imgProduct} src={record.hinhanh} />,
    width: 110
  },
  {
    title: 'Tên xe',
    dataIndex: 'tenxe',
    key: 'tenxe',
  },
  {
    title: 'Số chỗ',
    dataIndex: 'socho',
    key: 'socho',
  },
  {
    title: 'Mô tả',
    dataIndex: 'mota',
    key: 'mota',
  },
  {
    title: 'Giá xe',
    dataIndex: 'giaxe',
    key: 'giaxe',
  },
  {
    title: 'Hộp số',
    dataIndex: 'hopso',
    key: 'hopso',
  },
  {
    title: 'Dung tích',
    dataIndex: 'dungtich',
    key: 'dungtich',
  },
  {
    title: 'Nhiên liệu',
    dataIndex: 'nhienlieu',
    key: 'nhienlieu',
  },
  {
    title: 'Nhiên liệu tiêu hao',
    dataIndex: 'nhienlieutieuhao',
    key: 'nhienlieutieuhao',
  },
  {
    title: 'Số chuyển',
    dataIndex: 'sochuyen',
    key: 'sochuyen',
  },
  {
    title: 'Hình thức cho thuê',
    dataIndex: 'hinhthucchothue',
    key: 'hinhthucchothue',
  },
  {
    title: 'Action',
    key: 'operation',
    fixed: 'right',
    width: 120,
    render: (_, record) => <span><Link to={`/admin/products/detail/${record.id_xe}`}>Sửa</Link>
      <Popconfirm title="Bạn có muốn xóa không?" onConfirm={() => deleteProduct(record.id_xe)}>
        <a style={btnDelete}>Xóa</a>
      </Popconfirm></span>
  },
];

const btnDelete = {
  margin: '0 0 0 10px',
  color: 'red'
}

const imgProduct = {
  width: '70px',
  height: '50px'
}

const IndexProduct = () => {
  return (
    <div className="container">
      <AddProductComp></AddProductComp>
      <Table columns={columns} dataSource={dataProducts.data} scroll={{x: 2300,}}/>
    </div>
  )
}

export default IndexProduct