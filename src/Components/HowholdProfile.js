import React, { useState, useEffect } from "react";
import House from "../asset/house.png"
import AddFmMem from "./AddFmMem";
const HowholdProfile = ({ data, setIsHowhold }) => {
    const [onShow, setOnShow] = useState(false)
    const [giadinh, setGiadinh] = useState([])
    const loaddata = async () => {
        const data_main = await fetch(`http://localhost:8080/api/giadinh/${data.idGiaDinh}`)
            .then((response) => response.json())
        setGiadinh(data_main)
    }
    useEffect(() => {
        loaddata()
    }, [giadinh])
    return (
        <div className="wrap_hhprofile">
            <div div className="close_btn"
                onClick={() => {
                    setIsHowhold(false)
                }}>&times;
            </div>
            <div className="wrap_header">
                <div style={{ width: '30%' }}>
                    <img src={House} alt="asnh ho khau"></img>
                </div>
                <div className="base_hhin4">
                    <div style={{ margin: '3px' }}>Mã khu vực: {data.idKhuVuc}</div>
                    <div style={{ margin: '3px' }}>Địa chỉ: {data.diaChi}</div>
                    <div style={{ margin: '3px' }}>Ngày tạo: {data.ngayTao}</div>
                </div>
            </div>
            <div style={{ fontSize: "20px", marginLeft: "5px" }}>Danh sách các thành viên trong hộ khẩu:</div>

            <div className="table1">
                <table className="custom table table-bordered table-striped">
                    <tr className="field">
                        <th>STT</th>
                        <th>Họ và tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Nghề nghiệp</th>
                        <th>Địa chỉ hiện tại</th>
                        <th>Quan hệ với chủ hộ</th>
                        <th
                        >Xoá</th>
                    </tr>
                    <tbody id="myTable">
                        {
                            giadinh.map((thanhvien) => (
                                <tr className="data">
                                    <td>{thanhvien.id}</td>
                                    <td>{thanhvien.hoTen}</td>
                                    <td>{thanhvien.ngaySinh}</td>
                                    <td>{thanhvien.gioiTinh}</td>
                                    <td>{thanhvien.ngheNghiep}</td>
                                    <td>{thanhvien.diaChiHienTai}</td>
                                    <td>{thanhvien.quanHeVoiChuHo}</td>
                                    <td
                                        style={{ cursor: "pointer", fontSize: "20px" }}
                                        onClick={() => {
                                            const requestOptions = {
                                                method: 'DELETE',
                                                redirect: 'follow'
                                            };

                                            fetch(`http://localhost:8080/api/giadinh/${thanhvien.id}`, requestOptions)
                                                .then(response => response.text())
                                                .then(result => console.log(result))
                                                .catch(error => console.log('error', error));
                                        }}>&times;</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <div
                    style={{
                        border: "1px solid #000",
                        width: "100%",
                        textAlign: "center",
                        borderRadius: '5px',
                        backgroundColor: '#f7f740',
                        color: 'black',
                        cursor: "pointer"
                    }}
                    onClick={() => {
                        setOnShow(!onShow)
                        console.log(data);
                    }}>Thêm nhân khẩu</div>
                {
                    onShow ? <AddFmMem data={data} setOnShow={setOnShow} /> : <div></div>
                }
                <div
                    style={{
                        border: "1px solid #000",
                        width: "100%",
                        textAlign: "center",
                        borderRadius: '5px',
                        backgroundColor: 'green',
                        color: 'white',
                        cursor: "pointer",
                        marginTop: '5px',
                    }}>Chỉnh sửa</div>
                <div
                    style={{
                        marginTop: "5px",
                        marginBottom: "5px",
                        border: "1px solid #000",
                        width: "100%",
                        textAlign: "center",
                        borderRadius: '5px',
                        backgroundColor: 'red',
                        color: 'white',
                        cursor: "pointer"
                    }}
                    onClick={() => {
                        const requestOptions = {
                            method: 'DELETE',
                            redirect: 'follow'
                        };

                        fetch(`http://localhost:8080/api/hokhau/${data.id}`, requestOptions)
                            .then(response => response.text())
                            .then(result => {
                                console.log(result)
                                setGiadinh(false)
                            })
                            .catch(error => console.log('error', error));
                    }}
                >Xoá</div>
            </div>
        </div >

    )
}

export default HowholdProfile