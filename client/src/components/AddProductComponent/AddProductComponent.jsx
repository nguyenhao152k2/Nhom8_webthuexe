import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { Button, Col, Drawer, Form, Input, Row, Space, message } from 'antd';
import axios from 'axios';
const AddProductComp = () => {

    const [open, setOpen] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const btnAdd = {
        margin: '10px'
    };

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });
    };

    const [formData, setFormData] = useState({
        id_khachhang: '',
        hinhanh: '',
        tenxe: '',
        socho: '',
        mota: '',
        giaxe: '',
        hopso: '',
        dungtich: '',
        nhienlieu: '',
        nhienlieutieuhao: '',
        sochuyen: '',
        hinhthucchothue: ''
    });

    const addProduct = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3001/api/products', formData)
            .then(res => {
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

    return (
        <>
            <Button style={btnAdd} type="primary" onClick={showDrawer} icon={<PlusOutlined />}>
                Thêm
            </Button>
            <Drawer
                title="Thêm sản phẩm"
                width={720}
                onClose={onClose}
                open={open}
                styles={{
                    body: {
                        paddingBottom: 80,
                    },
                }}
                extra={
                    <Space>
                        <Button onClick={onClose}>Hủy</Button>
                        <Button form='add-product-form' type="primary" htmlType='submit'>
                            Xác nhận
                        </Button>
                    </Space>
                }
            >
                <form id='add-product-form' layout="vertical" onSubmit={addProduct}>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="ID khách hàng"
                            >
                                <Input name='id_khachhang' value={formData.id_khachhang} onChange={handleInputChange} required />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Hình ảnh"
                            >
                                <Input name='hinhanh' value={formData.hinhanh} onChange={handleInputChange} required />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Tên xe"
                            >
                                <Input name='tenxe' value={formData.tenxe} onChange={handleInputChange} required />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Số chỗ"
                            >
                                <Input name='socho' value={formData.socho} onChange={handleInputChange} required />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                label="Mô tả"
                            >
                                <Input.TextArea rows={4} name='mota' value={formData.mota} onChange={handleInputChange} required />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Giá xe"
                            >
                                <Input name='giaxe' value={formData.giaxe} onChange={handleInputChange} required />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Hộp số"
                            >
                                <Input name='hopso' value={formData.hopso} onChange={handleInputChange} required />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Dung tích"
                            >
                                <Input name='dungtich' value={formData.dungtich} onChange={handleInputChange} required />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Nhiên liệu"
                            >
                                <Input name='nhienlieu' value={formData.nhienlieu} onChange={handleInputChange} required />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item
                                label="Nhiên liệu tiêu hao"
                            >
                                <Input name='nhienlieutieuhao' value={formData.nhienlieutieuhao} onChange={handleInputChange} required />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item
                                label="Số chuyển"
                            >
                                <Input name='sochuyen' value={formData.sochuyen} onChange={handleInputChange} required />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Row gutter={16}>
                        <Col span={24}>
                            <Form.Item
                                label="Hình thức cho thuê"
                            >
                                <Input name='hinhthucchothue' value={formData.hinhthucchothue} onChange={handleInputChange} required />
                            </Form.Item>
                        </Col>
                    </Row>
                </form>
            </Drawer>
        </>
    );
};
export default AddProductComp