import React from "react";
import style from "../styles/Card.module.css";
import User from "./User";
import BusinessCenterOutlinedIcon from '@mui/icons-material/BusinessCenterOutlined';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';

const Card = (props) => {
  return (
    <div className={style.card}>
      <div className={style.head}>
        <p className={style.icon1}><BusinessCenterOutlinedIcon/></p>
        <p className={style.icon2}><MoreVertIcon/></p>
      </div>
      <div className={style.bod}>
        <p className={style.ph}>New Assesment</p>
        <div className={style.job}>
          <span className={style.ph1}>Job</span>
          <span className={style.span} />
          <span className={style.date}>
            <span className={style.cal}><CalendarMonthIcon/></span>
            20 Apr 2023
          </span>
        </div>
      </div>
      <span className={style.span1} />
      <div className={style.foot}>
        <div className={style.left}>
          <div>
            <p className={style.ph1}>00</p>
            <p className={style.text}>Duration</p>
          </div>
          <div>
            <p className={style.ph1}>00</p>
            <p className={style.text}>Questions</p>
          </div>
        </div>
        <div className={style.right}>
            <div className={style.share}>
                <span><InsertLinkOutlinedIcon/></span>
                <span>Share</span>
            </div>
            <div className={props.users}>
                {props.children}
            </div>
            <p className={props.addcl}>{props.add}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
