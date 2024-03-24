"use client";
import React from "react";
import "./Skills.css";
import { Line, Circle } from "rc-progress";
import CountUp from "react-countup";
const percentage = 75;
const Skills = () => {
  return (
    <>
      <section id="skills" className="scc">
        <span className="uu">
          My Skills
        </span>
        <div className="skills">
          <div className="sk">
            <Circle
              className="ki"
              percent={75}
              strokeWidth={7}
              trailWidth={4}
              trailColor="white"
              strokeColor="#1279d1"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="ad"
            >
              {percentage}%
            </text>
            <div className="kj c">C</div>
          </div>
          <div className="sk">
            <Circle
              className="ki"
              percent={75}
              strokeWidth={7}
              trailWidth={4}
              trailColor="white"
              strokeColor="#1279d1"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="ad"
            >
              {percentage}%
            </text>
            <div className="kj cpp">C++</div>
          </div>
          <div className="sk">
            <Circle
              className="ki"
              percent={75}
              strokeWidth={7}
              trailWidth={4}
              trailColor="white"
              strokeColor="#1279d1"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="ad"
            >
              {percentage}%
            </text>
            <div className="kj rjs">React JS</div>
          </div>
          <div className="sk">
            <Circle
              className="ki"
              percent={75}
              strokeWidth={7}
              trailWidth={4}
              trailColor="white"
              strokeColor="#1279d1"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="ad"
            >
              {percentage}%
            </text>
            <div className="kj njs">Next JS</div>
          </div>
          <div className="sk">
            <Circle
              className="ki"
              percent={75}
              strokeWidth={7}
              trailWidth={4}
              trailColor="white"
              strokeColor="#1279d1"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="ad"
            >
              {percentage}%
            </text>
            <div className="kj html">HTML</div>
          </div>
          <div className="sk">
            <Circle
              className="ki"
              percent={75}
              strokeWidth={7}
              trailWidth={4}
              trailColor="white"
              strokeColor="#1279d1"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="ad"
            >
              {percentage}%
            </text>
            <div className="kj css">CSS</div>
          </div>
          <div className="sk">
            <Circle
              className="ki"
              percent={75}
              strokeWidth={7}
              trailWidth={4}
              trailColor="white"
              strokeColor="#1279d1"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="ad"
            >
              {percentage}%
            </text>
            <div className="kj js">
              JavaScript
            </div>
          </div>
          <div className="sk">
            <Circle
              className="ki"
              percent={75}
              strokeWidth={7}
              trailWidth={4}
              trailColor="white"
              strokeColor="#1279d1"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="ad"
            >
              {percentage}%
            </text>
            <div className="kj dsa">DSA</div>
          </div>
          <div className="sk">
            <Circle
              className="ki"
              percent={75}
              strokeWidth={7}
              trailWidth={4}
              trailColor="white"
              strokeColor="#1279d1"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="ad"
            >
              {percentage}%
            </text>
            <div className="kj frn fe">
              FrontEnd
            </div>
          </div>
          <div className="sk">
            <Circle
              className="ki"
              percent={75}
              strokeWidth={7}
              trailWidth={4}
              trailColor="white"
              strokeColor="#1279d1"
            />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="ad"
            >
              {percentage}%
            </text>
            <div className="kj tw fe">
              Tailwind
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
