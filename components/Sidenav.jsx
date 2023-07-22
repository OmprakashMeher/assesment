import React from "react";
import style from "../styles/Sidenav.module.css";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import NoteAltOutlinedIcon from '@mui/icons-material/NoteAltOutlined';
import QuizOutlinedIcon from '@mui/icons-material/QuizOutlined';
import AssignmentLateOutlinedIcon from '@mui/icons-material/AssignmentLateOutlined';

const Sidenav = (props) => {
  return (
    <div className={style.div}>
      <div className={props.onop === false ? style.no : style.bg}>
      <div className={style.divw}>
        <div className={style.header}>
          <p className={style.p}>Menu</p>
          <span className={style.x} onClick={props.onclose}>&times;</span>
        </div>
        <div className={style.divi}>
          <div className={style.divi1}>
            <DashboardOutlinedIcon/>
            <p>Dashboard</p>
          </div>
          <div className={`${style.divi2} ${style.active}`}>
            <NoteAltOutlinedIcon/>
            <p>Assesment</p>
          </div>
          <div className={style.divi3}>
            <QuizOutlinedIcon/>
            <p>My Library</p>
          </div>
        </div>
        <div className={style.divm}></div>
        <div className={style.divii}>
          <div className={style.divia}>
            <p className={style.admin}>Admin</p>
          </div>
          <div className={style.divil}>
            <AssignmentLateOutlinedIcon/>
            <p>Round Status</p>
          </div>
        </div>
      </div>
      </div>
      <div className={style.child}>{props.children}</div>
    </div>
  );
};

export default Sidenav;
