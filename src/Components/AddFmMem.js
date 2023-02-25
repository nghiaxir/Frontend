import React, { useState } from "react";
import { Button, Checkbox, Form, Input } from 'antd';

const AddFmMem = ({ data, setOnShow }) => {
    // console.log(data);
    const [finalData, setFinalData] = useState({})
    const onFinish = (values) => {
        setFinalData({ ...values, idHoKhau: data.id, maGiaDinh: data.idGiaDinh })
        console.log(finalData);

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify(finalData)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/api/nhankhau/themmoi", requestOptions)
            .then(response => response.text())
            .then(result => {
                console.log(result)
                setOnShow(false)
            })
            .catch(error => console.log('error', error));
    };
    // console.log(data);
    // setFinalData({ ...finalData, maGiaDinh: data.idGiaDinh, idHoKhau: data.id });
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
    return (
        <div className="addfmmem">
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Mã số CCCD:"
                    name="canCuoc"
                    rules={[
                        {
                            required: true,
                            message: 'Bắt buộc',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Ngày cấp:"
                    name="ngayCap"
                    rules={[
                        {
                            required: true,
                            message: 'Bắt buộc',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Nơi cấp:"
                    name="noiCap"
                    rules={[
                        {
                            required: true,
                            message: 'Bắt buộc',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Họ và tên:"
                    name="hoTen"
                    rules={[
                        {
                            required: true,
                            message: 'Bắt buộc',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Ngày sinh:"
                    name="ngaySinh"
                    rules={[
                        {
                            required: true,
                            message: 'Bắt buộc',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Nguyên quán:"
                    name="nguyenQuan"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Dân tộc:"
                    name="danToc"
                    defaultValue="Kinh"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Quốc tịch:"
                    name="quocTich"
                    defaultValue="Việt Nam"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Nghề nghiệp"
                    name="ngheNghiep"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Địa chỉ hiện tại:"
                    name="diaChiHienTai"

                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Địa chỉ thường trú:"
                    name="diaChiThuongTru"
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Giới tính:"
                    name="gioiTinh"
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Quan hệ với chủ hộ:"
                    name="quanHeVoiChuHo"
                    rules={[
                        {
                            required: true,
                            message: 'Bắt buộc',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default AddFmMem