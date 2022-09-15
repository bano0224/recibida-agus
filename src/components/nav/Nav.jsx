import React from "react";
import style from './Nav.module.css';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import agus from '../../assets/agusPic.jpeg'
import background from '../../assets/background.jpeg'

export const Nav = () => {
    return (
    <div className={style.container}>
        <nav className={style.navBar} /* style={{backgroundImage: url`${background}`}} */>
            <div className="container-fluid">
                <div className={style.circle}>
                    <img src={agus} alt="Agus" className={style.profile}/>
                </div>
            </div>
        </nav>
    </div>
    )
}