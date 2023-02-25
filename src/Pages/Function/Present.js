import React, { useState, useEffect } from "react";
import Award from "../../Components/Award";

const Present = () => {
    const [presentLists, setPresentLists] = useState([])
    const [data, setData] = useState([])
    const [award, setAward] = useState(false)
    const loaddata = async () => {
        const data = await fetch(`http://localhost:8080/api/giaithuong/`)
            .then((response) => response.json())
        setPresentLists(data)
    }
    // console.log(data);
    useEffect(() => {
        loaddata()
    }, [presentLists])
    return (
        <div>
            <table className="custom table table-bordered table-striped">
                <tr className="field">
                    <th>STT</th>
                    <th>Tên giải thưởng</th>
                </tr>
                <tbody id="myTable">
                    {
                        presentLists.map((present, index) => (
                            <tr className="data"
                                onClick={() => {
                                    setData(present)
                                    setAward(true)
                                }}>
                                <td>{present.id}</td>
                                <td>{present.tenGiai}</td>
                            </tr>
                        ))
                    }
                </tbody>
                {award ? <Award data={data} setAward={setAward} /> : <div></div>}
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
            }}>Thêm giải thưởng</div>
        </div>
    )
}

export default Present