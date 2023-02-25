import React, { useState, useEffect } from 'react'

const Stay = () => {
    const [stayLists, setStayLists] = useState([])
    const loaddata = async () => {
        const data = await fetch(`http://localhost:8080/api/tamtru/danhsach`)
            .then((response) => response.json())
        setStayLists(data)
    }
    useEffect(() => {
        loaddata()
    }, [stayLists])
    return (
        <div className="container">
            <table className="custom table table-bordered table-striped">
                <tr className="field">
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Căn cước</th>
                    <th>Giới tính</th>
                    <th>Nghề nghiệp</th>
                    <th>Địa chỉ tạm trú</th>
                    <th>Ngày bắt đầu</th>
                    <th>Ngày kết thúc</th>
                    <th>Số điện thoại</th>
                    <th>Lý do</th>
                    <th>Mã tạm trú</th>
                </tr>
                <tbody id="myTable">
                    {
                        stayLists.map((stay, index) => (
                            <tr className="data">
                                <td>{stay.id}</td>
                                <td>{stay.hoTen}</td>
                                <td>{stay.idcc}</td>
                                <td>{stay.gioiTinh}</td>
                                <td>{stay.ngheNghiep}</td>
                                <td>{stay.diaChiHienTai}</td>
                                <td>{stay.ngayBatDau}</td>
                                <td>{stay.ngayKetThuc}</td>
                                <td>{stay.soDT}</td>
                                <td>{stay.lyDo}</td>
                                <td>{stay.maTamTru}</td>
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
            }}>Thêm tạm trú</div>
        </div>
    )
}

export default Stay