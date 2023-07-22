import React from 'react'
import style from '../styles/Modal.module.css'

const Modal = (props) => {
  return (
    <div className={style.back}>
      <div className={style.modal}>
        <div className={style.head}>
            <h2>Create New Assement</h2>
            <span onClick={props.close} className={style.x}>&times;</span>
        </div>
        <div className={style.form}>
            <div className={style.fdiv}>
                <label>Name of the Assesment</label>
                <input type="text" className={style.input} placeholder={'Type here'}/>
            </div>
            <div className={style.fdiv}>
                <label>Purpose of the test is</label>
                <select className={style.input}>
                    <option value="select">Select</option>
                </select>
            </div>
            <div className={style.fdiv}>
                <label>Description</label>
                <select className={style.input}>
                    <option value="select">Select</option>
                </select>
            </div>
            <div className={style.fdiv}>
                <label>Skills</label>
                <div>
                <div className={style.set}>
                    <p className={style.chip}>UI/UX and Design <span>&times;</span></p>
                    <p className={style.chip}>No of Question <span>&times;</span></p>
                    <p className={style.chip}>Wev Development <span>&times;</span></p>
                    <p className={style.chip}>UI/UX and Design <span>&times;</span></p>
                    <p className={style.chip}>Wev Development <span>&times;</span></p>
                </div>
                <input type="text" className={style.input1} placeholder={'Type here'}/>
                </div>
            </div>
            <div className={style.fdiv}>
                <label>Duration of Assesment</label>
                <input type="text" className={style.input} placeholder={'HH:MM:SS'}/>
            </div>
        </div>
        <div className={style.bott}>
            <button className={style.btn}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default Modal
