"use client"
import React from "react";
import Image from "next/image";
import "./Profiles.css";
import git from "/public/github.png";
import leet from "/public/leet.png";
import insta from "/public/insta.jpg";
import lnkd from "/public/lnkd.png";
import { Cursor, useTypewriter } from 'react-simple-typewriter'
const Profiles = () => {
  const [text] = useTypewriter({
    words:['You Can Connect With Me On...'],
    loop: {},
  });
  return (
    <>
      <section id="profiles" className="profile">
        <hr className="h" />
        <div className="inside">
          <div className="ph">
            <div className="pu">
              <a
                className="lp"
                target="_blank"
                href="https://github.com/AashishKr27"
              >
                <Image className="pr" src={git} alt=''/>
              </a>
              <a
                className="lp"
                target="_blank"
                href="https://leetcode.com/Ashish_Kumar_Sa_2003/"
              >
                <Image className="pr" src={leet} alt=''/>
              </a>
              <a
                className="lp"
                target="_blank"
                href="https://www.instagram.com/kumar_ashish_sa.27/"
              >
                <Image className="pr" src={insta} alt=''/>
              </a>
              <a
                className="lp"
                target="_blank"
                href="https://www.linkedin.com/in/ashish-kumar-3a692b2b4/"
              >
                <Image className="pr" src={lnkd} alt=''/>
              </a>
            </div>
          </div>
          <div className="jj">
            <div className="ji">
              {text}<Cursor/>
            </div>
          </div>
        </div>
        <hr className="h" />
      </section>
    </>
  );
};

export default Profiles;
