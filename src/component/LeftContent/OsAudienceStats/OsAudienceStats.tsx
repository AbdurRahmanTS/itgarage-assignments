import React from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./OsAudienceStats.css"
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const OsAudienceStats = () => {
  const data = {
    labels: [],
    datasets: [
      {
        label: "My First Dataset",
        data: [21, 48, 32, 9],
        backgroundColor: ["#e64c65", "#11a8ab", "#4fc4f6", "#fcb150"],
        hoverOffset: 4,
      },
    ],
  };
  return (
    <div
      style={{
        marginBottom: "25px",
        background: "#394264",
        borderRadius: "5px",
      }}
    >
      <h2 style={{paddingTop: "25px"}}>OS AUDIENCE STATS</h2>
      <div style={{width: "230px", margin: "auto"}}>
      <Doughnut data={data} />
      </div>
      <div>
        <ul className="os-percentages">
          <li>
            <p className="ios os scnd-font-color">iOS</p>
            <p className="os-percentage">
              21<sup>%</sup>
            </p>
          </li>
          <li>
            <p className="mac os scnd-font-color">Mac</p>
            <p className="os-percentage">
              48<sup>%</sup>
            </p>
          </li>
          <li>
            <p className="linux os scnd-font-color">Linux</p>
            <p className="os-percentage">
              9<sup>%</sup>
            </p>
          </li>
          <li>
            <p className="win os scnd-font-color">Win</p>
            <p className="os-percentage">
              32<sup>%</sup>
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default OsAudienceStats;
