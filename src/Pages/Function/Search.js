import React from 'react';

export default function Search() {

    return (
        <div className="container"
            style={{ width: "100%", padding: "5px", border: "1px solid #000", marginTop: "5px" }}>
            <h2>Tìm kiếm</h2>
            <p>Nhập thông tin tìm kiếm dưới đây:</p>
            <input className="form-control" id="myInput" type="text" placeholder="Search.." />
            <br />
        </div>
    );
}