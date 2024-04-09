import React, { useState } from "react";
import "./SlideBar.css";
import Logo from "../../assets/image/logo.png";
import { SlideBarData } from "./data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import EmployeeTable from "../EmployeeBenefits/EmployeeBenefits";
import MainDash from "../DashBoard/MainDash/MainDash";

const SlideBar = () => {
    const [selected, setSelected] = useState(0);

    const [expanded, setExpaned] = useState(true)

    const sidebarVariants = {
        true: {
            left: '0'
        },
        false: {
            left: '-60%'
        }
    }
    console.log(window.innerWidth)
    return (
        <>
            <div >
                <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpaned(!expanded)}>
                    <UilBars />
                </div>
                <motion.div className='sidebar'
                    variants={sidebarVariants}
                    animate={window.innerWidth <= 768 ? `${expanded}` : ''}
                >
                    {/* logo */}
                    <div >
                        <img src={Logo} alt="logo" width="250" height="250" style={{ marginTop: "-200px", marginBottom: "-120px", marginLeft: '5px' }} />
                    </div>

                    <div className="menu">
                        {SlideBarData.map((item, index) => {
                            return (
                                <div
                                    className={selected === index ? "menuItem active" : "menuItem"}
                                    key={index}
                                    onClick={() => setSelected(index)}
                                >
                                    <item.icon />
                                    <span>{item.heading}</span>
                                </div>
                            );
                        })}

                    </div>
                </motion.div>
                {/* Render the selected component */}
                {selected === 0 && <MainDash />}
                {selected === 4 && <EmployeeTable />}

            </div>
        </>
    );
};

export default SlideBar;