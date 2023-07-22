import Sidenav from "../components/Sidenav";
import React, { useState } from "react";
import style from "../styles/Home.module.css";
import Card from "@/components/Card";
import User from "@/components/User";
import Modal from "../components/Modal";
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';

import SortIcon from '@mui/icons-material/Sort';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import BarChartIcon from '@mui/icons-material/BarChart';

const Index = () => {
  const [open, setOpen] = useState(false);
  const [box, setBox] = useState(false);

  const [on, setOn] = useState(false)

  const boxOpen = () => {
    setBox(!box);
  };

  const arr = [1, 1, 1, 1, 1, 1, 1, 1];
  return (
    <Sidenav
      onop={on}
      onclose={()=> setOn(false)}
    >
      <div className={style.top}>
        <p className={style.p1}>
          <span className={style.spli} onClick={()=> setOn(true)}><SortIcon/></span> Assesment
        </p>
        <span className={style.span} />
        <div className={style.pdiv}>
          <p className={style.p2}>My Assesments</p>
          <p className={style.p21}>Unstop Assesments</p>
        </div>
      </div>
      <div className={box === false ? style.mid : `${style.mid} ${style.mido}`}>
        <p className={style.pho}>Assesments Overview</p>
        <div className={style.whole}>
          <div className={style.count1a}>
            <div className={style.count111}>
              <p className={style.ph1}>Total Assignment</p>
              <div className={style.lower}>
                <p className={style.icon1}><ViewAgendaOutlinedIcon/></p>
                <h2 className={style.itext}>34</h2>
              </div>
            </div>
            <div className={style.count112}>
              <p className={style.ph1}>Total Purpose</p>
              <div className={style.lower}>
                <p className={style.icon3}><InsertLinkOutlinedIcon/></p>
                <h2 className={style.itext}>11</h2>
              </div>
            </div>
          </div>
          <div className={style.count2}>
            <p className={style.ph1}>Candidates</p>
            <div className={style.lower}>
              <p className={style.icon1}><GroupOutlinedIcon/></p>
              <div>
                <div className={style.tup}>
                  <h2 className={style.itext}>11,145</h2>
                  <p className={style.ptext}>+89</p>
                </div>
                <p className={style.dtext}>Total Candidate</p>
              </div>
              <span className={style.span1} />
              <div>
                <div className={style.tup}>
                  <h2 className={style.itext}>1,14</h2>
                  <p className={style.ptext}>+89</p>
                </div>
                <p className={style.dtext}>Who Attampted</p>
              </div>
            </div>
          </div>
          <div className={style.count3}>
            <p className={style.ph1}>Candidate Source</p>
            <div className={style.lower}>
              <p className={style.icon2}><LanguageOutlinedIcon/></p>
              <div>
                <div className={style.tup}>
                  <h2 className={style.itext}>11,000</h2>
                  <p className={style.ptext}>+89</p>
                </div>
                <p className={style.dtext}>E-mail</p>
              </div>
              <span className={style.span1} />
              <div>
                <div className={style.tup}>
                  <h2 className={style.itext}>145</h2>
                  <p className={style.ptext}>+89</p>
                </div>
                <p className={style.dtext}>Social Share</p>
              </div>
              <span className={style.span1} />
              <div>
                <div className={style.tup}>
                  <h2 className={style.itext}>145</h2>
                  <p className={style.ptext}>+89</p>
                </div>
                <p className={style.dtext}>Unique Link</p>
              </div>
            </div>
          </div>
          <div className={style.count1}>
            <p className={style.ph1}>Total Purpose</p>
            <div className={style.lower}>
              <p className={style.icon3}><InsertLinkOutlinedIcon/></p>
              <h2 className={style.itext}>11</h2>
            </div>
          </div>
        </div>
      </div>
      <div className={box === false ? style.bot : style.bota}>
        <div className={style.ttl}>
          <p className={style.ph}>My Assesment</p>
          <div className={style.icons}>
            <p><SearchIcon/></p>
            <p><FilterAltIcon/></p>
            <p
              className={box === false ? style.none : style.aicon}
              onClick={boxOpen}
            >
              <BarChartIcon/>
            </p>
          </div>
        </div>
        <div className={style.cards}>
          <div className={style.card} onClick={() => setOpen(true)}>
            <p className={style.plus}>+</p>
            <p className={style.ph}>New Assesment</p>
            <p className={style.text}>
              From here you can add question of multiple types like MCQs,
              subjective (test or paragraph)!
            </p>
          </div>
          <Card users={style.users1} addcl={style.add} add="+324">
            <User cln={style.user1} />
          </Card>
          <Card users={style.users} addcl={style.add} add="+324">
            <User cln={style.user1} />
            <User cln={style.user2} />
            <User cln={style.user3} />
          </Card>
          <div className={style.cardgr}>
            {arr.map((arr,i) => (
              <Card users={style.users} addcl={style.add1} add="+324" key={i}>
                <User cln={style.user1} />
                <User cln={style.user2} />
                <User cln={style.user3} />
              </Card>
            ))}
          </div>
        </div>
      </div>
      {open === true ? <Modal close={() => setOpen(false)} /> : <></>}
    </Sidenav>
  );
};

export default Index;
