import React, { useEffect, useState } from "react";

const Howhold = () => {
    const [howholdLists, setHowholdLists] = useState([])
    const loaddata = async () => {
        const data = await fetch(`http://localhost:8080/api/hokhau/chuho`)
            .then((response) => response.json())
        setHowholdLists(data)
    }
    useEffect(() => {
        loaddata()
    }, [howholdLists])
    return (
        <div className="container">
            <table className="custom table table-bordered table-striped">
                <tr className="field">
                    <th>STT</th>
                    <th>Tên chủ hộ</th>
                    <th>Số Căn cước</th>
                    <th>Địa chỉ</th>
                    <th>Mã khu vực</th>
                    <th>Mã gia đình</th>
                    <th>Ngày tạo</th>
                </tr>
                <tbody id="myTable">
                    {
                        howholdLists.map((howhold, index) => (
                            <tr className="data">
                                <td>{howhold.id}</td>
                                <td>{howhold.hoTen}</td>
                                <td>{howhold.canCuoc}</td>
                                <td>{howhold.diaChi}</td>
                                <td>{howhold.idKhuVuc}</td>
                                <td>{howhold.idGiaDinh}</td>
                                <td>{howhold.ngayTao}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Howhold