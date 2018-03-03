import React from "react";
import SideNav, { Nav, NavIcon, NavText } from "react-sidenav";
import SvgIcon from "react-icons-kit";
import { ic_aspect_ratio } from "react-icons-kit/md/ic_aspect_ratio";
import { ic_business } from "react-icons-kit/md/ic_business";
import { wrench } from "react-icons-kit/fa/wrench";
import { globe } from "react-icons-kit/fa/globe";
import { home } from 'react-icons-kit/fa/home'; 


const SideNavi = props => {
  return (
    <div
      id="orchestradeNav"
      style={{ background: "#cea43e", color: "#FFF", width: 220 }}
    >
      <SideNav
        highlightColor="#000"
        highlightBgColor="#c0c0c0"
        defaultSelected="sales"
      >
        <Nav id="orchestradeSettings">
          <NavIcon>
            <SvgIcon size={20} icon={ic_aspect_ratio} />
          </NavIcon>
          <NavText> Orchestrade Settings </NavText>
        </Nav>
        <hr />
        <Nav id="home">
          <NavIcon>
            <SvgIcon size={20} icon={home} />
          </NavIcon>
          <NavText><a className="sideLink" href="/"> Home </a></NavText>
        </Nav>
        <Nav id="account">
          <NavIcon>
            <SvgIcon size={20} icon={ic_business} />
          </NavIcon>
          <NavText><a data-value="account" onClick={props.aLinkClicked}> Account</a> </NavText>
        </Nav>
        <Nav id="privacy"  onClick={props.linkClicked} >
          <NavIcon>
            <SvgIcon size={20} icon={wrench} />
          </NavIcon>
          <NavText><a data-value="privacy" onClick={props.aLinkClicked}> Privacy & Settings </a></NavText>
        </Nav>
        <Nav id="about">
          <NavIcon>
            <SvgIcon size={20} icon={globe} />
          </NavIcon>
          <NavText><a className="sideLink" href="/about"> About Orchestrade </a></NavText>
        </Nav>
      </SideNav>
    </div>
  );
};

export default SideNavi;
