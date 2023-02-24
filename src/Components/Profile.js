import React from "react"
import Human from "../asset/human.png"

const Profile = ({ data, setProfile }) => {
    return (
        <div className="wrap_profile">
            <div className="close_btn"
                onClick={() => {
                    setProfile(false)
                }}>&times;</div>
            <img src={Human}></img>
            <div style={{ width: "100%", padding: "5px", margin: "10px" }}>
                <div>Họ và tên: {data.hoTen}</div>
                <div>Giới tính: {data.gioiTinh} </div>
                <div>Ngày sinh: {data.ngaySinh} </div>
                <div>Số CCCD: {data.canCuoc}</div>
                <div>Quê quán: {data.nguyenQuan}</div>
                <div>Địa chỉ thường trú: {data.diaChiThuongTru}</div>
                <div>Địa chỉ hiện tại: {data.diaChiHienTai} </div>
            </div>
        </div>
    )
}

export default Profile