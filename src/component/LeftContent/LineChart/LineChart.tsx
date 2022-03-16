import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import "./LineChart.css";
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const labels = ["Apr", "May", "Jun"];
  const data = {
    labels: labels,
    datasets: [
      {
        label: "My First dataset",
        backgroundColor: "white",
        borderColor: "white",
        data: [0, 10, 20, 30],
      },
    ],
  };
  return (
    <div
      style={{
        marginBottom: "25px",
        background: "#394264",
        borderRadius: "5px",
        color: "white",
      }}
    >
      <div className="line-chart">
        <Line data={data} />
      </div>
      <div>
        <ul className="time-lenght horizontal-list">
          <li>
            <a className="time-lenght-btn" href="#14">
              Week
            </a>
          </li>
          <li>
            <a className="time-lenght-btn" href="#15">
              Month
            </a>
          </li>
          <li>
            <a className="time-lenght-btn" href="#16">
              Year
            </a>
          </li>
        </ul>
        <div>
          <ul className="month-data">
            <li>
              <p>
                APR<span className="scnd-font-color"> 2013</span>
              </p>
              <p>
                <span className="increment"> </span>21<sup>%</sup>
              </p>
            </li>
            <li>
              <p>
                MAY<span className="scnd-font-color"> 2013</span>
              </p>
              <p>
                <span className="increment"> </span>48<sup>%</sup>
              </p>
            </li>
            <li>
              <p>
                JUN<span className="scnd-font-color"> 2013</span>
              </p>
              <p>
                <span className="increment"> </span>35<sup>%</sup>
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LineChart;
