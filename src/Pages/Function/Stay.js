import React, { useState, useEffect } from 'react'

const Stay = () => {
    const [stayLists, setStayLists] = useState([])
    const loaddata = async () => {
        const data = await fetch(`http://localhost:8080/api/tamtru/`)
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
                                <td>{stay.idcc}</td>
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
        </div>
    )
}

export default Stay