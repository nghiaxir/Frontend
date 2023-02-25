import React, { useEffect, useState } from "react";
import HowholdProfile from "../../Components/HowholdProfile";

const Howhold = () => {

    const [howholdLists, setHowholdLists] = useState([])
    const [data, setData] = useState([])
    const [isHowhold, setIsHowhold] = useState(false)

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
                            <tr className="data"
                                onClick={() => {
                                    setData(howhold)
                                    setIsHowhold(true)
                                }}>
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
                {isHowhold ? <HowholdProfile data={data} setIsHowhold={setIsHowhold} /> : <div></div>}
            </table>
            <div style={{
                fontSize: "20px",
                color: "blue",
                backgroundColor: "#91edde",
                justifyContent: 'center',
                width: '15%',
                marginLeft: '42%',
                minWidth: '170px',
                padding: '2px',
            }}>Thêm hộ khẩu</div>
        </div>
    )
}

export default Howhold