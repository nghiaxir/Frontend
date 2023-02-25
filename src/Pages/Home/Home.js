import React, { useState, useEffect } from "react";
import Howhold from "../Function/Howhold";
import Person from "../Function/Person";
import Search from "../Function/Search";
import Stay from "../Function/Stay";
import Leave from "../Function/Leave";
import Profile from "../../Components/Profile";
import Present from "../Function/Present";
const Home = () => {
    const [close, setClose] = useState(false)
    const [person, setPerson] = useState(false)
    const [howhold, setHowhold] = useState(false)
    const [stay, setStay] = useState(false)
    const [leave, setLeave] = useState(false)
    const [present, setPresent] = useState(false)

    return (
        <div className="home">
            <div className="header">
                <strong style={{ color: "white", fontSize: "30px", }}>QUẢN LÝ DÂN CƯ</strong>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
                <div className="function">
                    <ul className="navbar">
                        <li className="nav_item" id="special">Quản lý nhân khẩu
                            <ul className="item">
                                <li className="nav_item child"
                                    onClick={() => {
                                        setClose(true)
                                        setPerson(true)
                                        setHowhold(false)
                                        setStay(false)
                                        setLeave(false)
                                        setPresent(false)
                                    }}>Thông tin nhân khẩu</li>
                                <li className="nav_item child"
                                    onClick={() => {
                                        setClose(true)
                                        setHowhold(false)
                                        setPerson(false)
                                        setStay(true)
                                        setLeave(false)
                                        setPresent(false)
                                    }}>Tạm trú</li>
                                <li className="nav_item child"
                                    onClick={() => {
                                        setClose(true)
                                        setHowhold(false)
                                        setPerson(false)
                                        setStay(false)
                                        setLeave(true)
                                        setPresent(false)
                                    }}>Tạm vắng</li>
                            </ul>
                        </li>
                        <li className="nav_item" id="special"
                            onClick={() => {
                                setClose(true)
                                setHowhold(true)
                                setPerson(false)
                                setStay(false)
                                setLeave(false)
                                setPresent(false)
                            }}>Quản lý hộ khẩu
                        </li>
                        <li className="nav_item"
                            onClick={() => {
                                setClose(true)
                                setHowhold(false)
                                setPerson(false)
                                setStay(false)
                                setLeave(false)
                                setPresent(true)
                            }}>Quản lý cấp thưởng</li>
                    </ul>
                </div>
                <div className="work">
                    {close
                        ? <div className="close_btn"
                            onClick={() => {
                                setClose(false)
                                setPerson(false)
                                setHowhold(false)
                                setStay(false)
                                setLeave(false)
                                setPresent(false)
                            }}
                        >
                            &times;
                        </div>
                        : <div></div>}
                    {person ? <Person />
                        : <div></div>}
                    {howhold ? <Howhold />
                        : <div></div>}
                    {stay ? <Stay />
                        : <div></div>}
                    {leave ? <Leave />
                        : <div></div>}
                    {present ? <Present />
                        : <div></div>}
                </div>
                <div className="left">
                    <Search />
                </div>
            </div >
        </div >
    )
}

export default Home