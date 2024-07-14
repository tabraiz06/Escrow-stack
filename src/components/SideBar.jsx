import React from "react";
import "./assign.css";
import vector1 from "../assets/Vector (1).png";
import vector2 from "../assets/Vector.png";
import text1 from "../assets/text2.png";
import text2 from "../assets/text3.png";
import text3 from "../assets/text9.png";
import text4 from "../assets/text6.png";
import text5 from "../assets/text1.png";
import text6 from "../assets/text4.png";
import text7 from "../assets/text5.png";
import text8 from "../assets/text10.png";
import text9 from "../assets/text8.png";
import arrow from "../assets/downArrow.png";
import box from "../assets/box.png";
import statement from "../assets/statement.png";
import journal from "../assets/journal.png";
import uparrow from "../assets/arrowUP.png";
import downArrow from "../assets/arrowDown.png";
import box2 from "../assets/box2.png";
import sideArrow from "../assets/sideArrow.png";
const Assign = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <div className="logo">
          <div className="img">
            <img src={vector1} alt="vector1" id="v1" />
            <img src={vector2} alt="vector2" id="v2" />
          </div>
          <div className="text">
            <img src={text1} alt="" className="text1" />
            <img src={text2} alt="" className="text2" />
            <img src={text3} alt="" className="text3" />
            <img src={text4} alt="" className="text4" />
            <img src={text5} alt="" className="text5" />
            <img src={text2} alt="" className="text6" />
            <img src={text4} alt="" className="text4" />
            <img src={text6} alt="" className="text8" />
            <img src={text7} alt="" className="text9" />
            <img src={text8} alt="" className="text10" />
            <img src={text9} alt="" className="text11" />
          </div>
        </div>
        <div className="menus">
          <div className="loads">
            <div>
              <img src={arrow} alt="arrow" className="arrow" />
              <img src={box} alt="box" className="box" />
            </div>
            <span className="loadText">Loads</span>
          </div>
          <div className="statement">
            <div>
              <img src={journal} alt="" />
              <img src={statement} alt="" className="stateImg" />
            </div>
            <span>Statements</span>
          </div>
          <div className="transiction">
            <div>
              <img src={uparrow} alt="" />
              <img src={downArrow} alt="" />
            </div>
            <span>Transactions</span>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="logout">
          <div>
            <img src={box2} alt="" />
            <img src={sideArrow} alt="" className="sideArrow" />
          </div>
          <span>Logout</span>
        </div>
      </div>
    </div>
  );
};

export default Assign;
