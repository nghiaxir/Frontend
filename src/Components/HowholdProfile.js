import React, { useState, useEffect } from "react";
import House from "../asset/house.png"
const HowholdProfile = ({ data, setIsHowhold }) => {
    const [giadinh, setGiadinh] = useState([])
    const loaddata = async () => {
        const data_main = await fetch(`http://localhost:8080/api/giadinh/BK000`)
            .then((response) => response.json())
        setGiadinh(data_main)
    }
    // console.log(giadinh);
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
                    <div style={{ margin: '1px' }}>Mã khu vực: {data.idKhuVuc}</div>
                    <div style={{ margin: '1px' }}>Địa chỉ: {data.diaChi}</div>
                    <div style={{ margin: '1px' }}>Ngày tạo: {data.ngayTao}</div>
                </div>
            </div>
            <div>Thông tin các thành viên trong hộ khẩu</div>

            <div className="table1">
                <table className="custom table table-bordered table-striped">
                    <tr className="field">
                        <th>STT</th>
                        <th>Họ và tên</th>
                        <th>Số Căn cước</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Nghề nghiệp</th>
                        <th>Địa chỉ hiện tại</th>
                        <th>Quan hệ với chủ hộ</th>
                        <th>Xoá</th>
                    </tr>
                    <tbody id="myTable">
                        {
                            giadinh.map((thanhvien) => (
                                <tr className="data"
                                // onClick={() => {
                                //     setData(howhold)
                                //     setIsHowhold(true)
                                // }}
                                >
                                    <td>{thanhvien.id}</td>
                                    <td>{thanhvien.hoTen}</td>
                                    <td>000000000000</td>
                                    <td>{thanhvien.ngaySinh}</td>
                                    <td>Nam</td>
                                    <td>{thanhvien.ngheNghiep}</td>
                                    <td>Hà Nội</td>
                                    <td>{thanhvien.quanHeVoiChuHo}</td>
                                    <td>&times;</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default HowholdProfile