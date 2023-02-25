import React, { useState, useEffect } from 'react'

const Leave = () => {
    const [leaveLists, setLeaveLists] = useState([])
    const loaddata = async () => {
        const data = await fetch(`http://localhost:8080/api/tamvang/danhsach`)
            .then((response) => response.json())
        setLeaveLists(data)
    }
    useEffect(() => {
        loaddata()
    }, [leaveLists])
    return (
        <div className="container">
            <table className="custom table table-bordered table-striped">
                <tr className="field">
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Căn cước</th>
                    <th>Giới tính</th>
                    <th>Nghề nghiệp</th>
                    <th>Địa chỉ hiện tại</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Số điện thoại</th>
                    <th>Lý do</th>
                    <th>Mã tạm vắng</th>
                </tr>
                <tbody id="myTable">
                    {
                        leaveLists.map((leave, index) => (
                            <tr className="data">
                                <td>{leave.id}</td>
                                <td>{leave.hoTen}</td>
                                <td>{leave.idcc}</td>
                                <td>{leave.gioiTinh}</td>
                                <td>{leave.ngheNghiep}</td>
                                <td>{leave.diaChiHienTai}</td>
                                <td>{leave.ngayBatDau}</td>
                                <td>{leave.ngayKetThuc}</td>
                                <td>{leave.soDT}</td>
                                <td>{leave.lyDo}</td>
                                <td>{leave.maTamVang}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <div style={{
                fontSize: "20px",
                color: "blue",
                backgroundColor: "#91edde",
                justifyContent: 'center',
                width: '15%',
                marginLeft: '42%',
                minWidth: '150px',
                padding: '2px',
            }}>Thêm tạm vắng</div>
        </div>
    )
}

export default Leave