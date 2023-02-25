import React, { useState, useEffect } from "react";

const Award = ({ data, setAward }) => {
    const [costLists, setCostLists] = useState([])
    const [lists, setLists] = useState([])
    const loaddata = async () => {
        const data_1 = await fetch(`http://localhost:8080/api/nhankhau/capthuong/${data.id}`)
            .then((response) => response.json())
        setLists(data_1)

        const data_2 = await fetch(`http://localhost:8080/api/tienthuong/giaithuong/${data.id}`)
            .then((response) => response.json())
        setCostLists(data_2)
    }
    // console.log(lists);
    useEffect(() => {
        loaddata()
    }, [lists])
    return (
        <div className="wrap_hhprofile">
            <div div className="close_btn"
                onClick={() => {
                    setAward(false)
                }}>&times;
            </div>
            <div style={{ fontSize: "20px", marginLeft: "5px" }}>Danh sách các học sinh được phát thưởng:</div>
            <div className="table1">
                <table className="custom table table-bordered table-striped">
                    <tr className="field">
                        <th>STT</th>
                        <th>Họ và tên</th>
                        <th>Ngày sinh</th>
                        <th>Giới tính</th>
                        <th>Địa chỉ hiện tại</th>
                        <th>Tiền thưởng</th>
                        <th>Sách</th>
                        <th>Vở</th>
                        <th>Quà</th>
                        <th>Thành tích</th>
                    </tr>
                    <tbody id="myTable">
                        {
                            lists.map((list) => (
                                <tr className="data">
                                    <td>{list.id}</td>
                                    <td>{list.hoTen}</td>
                                    <td>{list.ngaySinh}</td>
                                    <td>{list.gioiTinh}</td>
                                    <td>{list.diaChiHienTai}</td>
                                    <td>{list.tienThuong}</td>
                                    <td>{list.sach}</td>
                                    <td>{list.vo}</td>
                                    <td>{list.qua}</td>
                                    <td>{list.thanhTich}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
            <div style={{ fontSize: "20px", marginLeft: "5px" }}>Danh sách mua sắm quà thưởng:</div>
            <div className="table1">
                <table className="custom table table-bordered table-striped">
                    <tr className="field">
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                    </tr>
                    <tbody id="myTable">
                        {
                            costLists.map((list) => (
                                <tr className="data">
                                    <td>{list.id}</td>
                                    <td>{list.sanPham}</td>
                                    <td>{list.soLuong}</td>
                                    <td>{list.giatien}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Award