import React, { useEffect, useState } from 'react';
import { Button, Form, message } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const UpdateProduct = ({ }) => {
  const { id } = useParams();
  const [id_khachhang, setIdkhachhang] = useState('');
  const [hinhanh, setHinhanh] = useState('');
  const [tenxe, setTenxe] = useState('');
  const [socho, setSocho] = useState('');
  const [mota, setMota] = useState('');
  const [giaxe, setGiaxe] = useState('');
  const [hopso, setHopso] = useState('');
  const [dungtich, setDungtich] = useState('');
  const [nhienlieu, setNhienLieu] = useState('');
  const [nhienlieutieuhao, setNhienLieutieuhao] = useState('');
  const [sochuyen, setSochuyen] = useState('');
  const [hinhthucchothue, setHinhthucchothue] = useState('');


  useEffect(() => {
    getDetailProduct();
  }, []);

  const getDetailProduct = () => {
    axios.get(`http://localhost:3001/api/products-admin/${id}`)
      .then(res => {
        const { id_khachhang, hinhanh, tenxe, socho, mota, giaxe, hopso,
          dungtich, nhienlieu, nhienlieutieuhao, sochuyen, hinhthucchothue } = res.data.result;
        setIdkhachhang(id_khachhang);
        setHinhanh(hinhanh);
        setTenxe(tenxe);
        setSocho(socho);
        setMota(mota);
        setGiaxe(giaxe);
        setHopso(hopso);
        setDungtich(dungtich);
        setNhienLieu(nhienlieu);
        setNhienLieutieuhao(nhienlieutieuhao);
        setSochuyen(sochuyen);
        setHinhthucchothue(hinhthucchothue);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const updateProduct = () => {

    const updatedProduct = {
      id: id,
      id_khachhang: id_khachhang,
      hinhanh: hinhanh,
      tenxe: tenxe,
      socho: socho,
      mota: mota,
      giaxe: giaxe,
      hopso: hopso,
      dungtich: dungtich,
      nhienlieu: nhienlieu,
      nhienlieutieuhao: nhienlieutieuhao,
      sochuyen: sochuyen,
      hinhthucchothue: hinhthucchothue
    };
    console.log(updatedProduct);

    axios.put(`http://localhost:3001/api/products/${id}`, updatedProduct)
      .then(async res => {
        if(res.data.result==0){
          message.error('Lỗi xảy ra');
        } else{
          message.success('Thành công');
          setTimeout(() => {
            window.location.href = '/admin/products';
          }, 1000);
        } 
      })
      .catch(err => {
        console.error(err);
      });
  };

  const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 6,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 14,
      },
    },
  };

  return (
    <div>
      <br></br>
      <Form onFinish={updateProduct}
        {...formItemLayout}
        style={{
          maxWidth: 600,
        }}
      >
        <Form.Item
          label="ID khách hàng"
        >
          <input type="text" value={id_khachhang} onChange={e => setIdkhachhang(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Hình ảnh"
        >
          <input type="text" value={hinhanh} onChange={e => setHinhanh(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Tên xe"
        >
          <input type="text" value={tenxe} onChange={e => setTenxe(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Số chỗ"
        >
          <input type="text" value={socho} onChange={e => setSocho(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Mô tả"
        >
          <textarea cols="30" rows="3" value={mota} onChange={e => setMota(e.target.value)}></textarea>
        </Form.Item>

        <Form.Item
          label="Giá xe"
        >
          <input type="text" value={giaxe} onChange={e => setGiaxe(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Hộp số"
        >
          <input type="text" value={hopso} onChange={e => setHopso(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Dung tích"
        >
          <input type="text" value={dungtich} onChange={e => setDungtich(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Nhiên liệu"
        >
          <input type="text" value={nhienlieu} onChange={e => setNhienLieu(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Nhiên liệu tiêu hao"
        >
          <input type="text" value={nhienlieutieuhao} onChange={e => setNhienLieutieuhao(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Số chuyển"
        >
          <input type="text" value={sochuyen} onChange={e => setSochuyen(e.target.value)} />
        </Form.Item>

        <Form.Item
          label="Hình thức cho thuê"
        >
          <input type="text" value={hinhthucchothue} onChange={e => setHinhthucchothue(e.target.value)} />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Cập nhập
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}

export default UpdateProduct