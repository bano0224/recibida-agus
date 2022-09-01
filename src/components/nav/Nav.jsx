import React from "react";
import style from './Nav.module.css';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import agus from '../../assets/agusPic.jpeg'

export const Nav = () => {
    return (
    <div className={style.container}>
        <nav className="navbar" style={{backgroundColor: "#FFB3B3"}}>
            <div className="container-fluid">
                <div className={style.circle}>
                    <img src={agus} alt="Agus" className={style.profile}/>
                </div>
            </div>
        </nav>
    </div>
    )
}