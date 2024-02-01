import React from 'react'
import './Skills.css'

import react from "../../assets/skills/react.svg";
import btc from "../../assets/skills/btc.png";
import eth from "../../assets/skills/eth.png";
import truffle from "../../assets/skills/truffle.png";
import gns from "../../assets/skills/gns.png";
import polygon from "../../assets/skills/polygon.png";
import node from "../../assets/skills/node.svg";
import c from "../../assets/skills/c.png";
import c1 from "../../assets/skills/c1.jpg";
import s1 from "../../assets/skills/s1.png";
import net from "../../assets/skills/net.png";
import sq from "../../assets/skills/sq.png";


const Skills = () => {
  return (
    <section className="skills-section">

        <img src={eth} alt="eth-icon" />
        <img src={polygon} alt="polygon-icon" />
        <img src={c} alt="c-icon" />
        <img src={c1} alt="c1-icon" />
        <img src={s1} alt="s1-icon" />
        <img src={net} alt="net-icon" />
        <img src={sq} alt="sq-icon" />
    </section>
  )
}

export default Skills
