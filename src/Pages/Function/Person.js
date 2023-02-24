import React, { useState, useEffect } from 'react'
import Profile from '../../Components/Profile'
const Person = () => {
    const [personLists, setPersonLists] = useState([])
    const [data, setData] = useState([])
    const [profile, setProfile] = useState(false)

    const loaddata = async () => {
        const data = await fetch(`http://localhost:8080/api/nhankhau/cancuoc`)
            .then((response) => response.json())
        setPersonLists(data)
    }
    useEffect(() => {
        loaddata()
    }, [personLists])

    return (
        <div className="container">
            <table className="custom table table-bordered table-striped">
                <tr className="field">
                    <th>STT</th>
                    <th>Họ và tên</th>
                    <th>Giới tính</th>
                    <th>Ngày sinh</th>
                    <th>Số căn cước</th>
                    <th>Nguyên quán</th>
                    <th>Dân tộc</th>
                    <th>Quốc tịch</th>
                    <th>Nghề Nghiệp</th>
                    <th>Địa chỉ hiện tại</th>
                    <th>Địa chỉ thường trú</th>
                </tr>
                <tbody id="myTable">
                    {
                        personLists.map((person, index) => (
                            <tr className="data"
                                onClick={() => {
                                    setData(person)
                                    setProfile(true)
                                }}>
                                <td>{person.id}</td>
                                <td>{person.hoTen}</td>
                                <td>{person.gioiTinh}</td>
                                <td>{person.ngaySinh}</td>
                                <td>{person.canCuoc}</td>
                                <td>{person.nguyenQuan}</td>
                                <td>{person.danToc}</td>
                                <td>{person.quocTich}</td>
                                <td>{person.ngheNghiep}</td>
                                <td>{person.diaChiHienTai}</td>
                                <td>{person.diaChiThuongTru}</td>
                            </tr>
                        ))
                    }
                </tbody>
                {profile ? < Profile data={data} setProfile={setProfile} /> : <div></div>}
            </table>
        </div>
    )
}

export default Person