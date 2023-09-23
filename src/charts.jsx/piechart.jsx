import React, { useState, useEffect } from "react";
import { ResponsiveContainer } from "recharts";
import axios from "axios";

const COLORS = ["#EE8484", "#F6DC7D", "#98D89E"];

const calculatePath = (startAngle, endAngle, innerRadius, outerRadius) => {
  const startRad = (startAngle * Math.PI) / 180;
  const endRad = (endAngle * Math.PI) / 180;
  const x1 = Math.cos(startRad) * innerRadius;
  const y1 = Math.sin(startRad) * innerRadius;
  const x2 = Math.cos(startRad) * outerRadius;
  const y2 = Math.sin(startRad) * outerRadius;
  const x3 = Math.cos(endRad) * outerRadius;
  const y3 = Math.sin(endRad) * outerRadius;
  const x4 = Math.cos(endRad) * innerRadius;
  const y4 = Math.sin(endRad) * innerRadius;

  const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;

  const path = [
    `M ${x1},${y1}`,
    `L ${x2},${y2}`,
    `A ${outerRadius},${outerRadius} 0 ${largeArcFlag} 1 ${x3},${y3}`,
    `L ${x4},${y4}`,
    `A ${innerRadius},${innerRadius} 0 ${largeArcFlag} 0 ${x1},${y1}`,
  ].join(" ");

  return path;
};

const Piechart1 = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-production-5b69.up.railway.app/pie")
      .then((response) => {
        const parsedData = response.data.map((entry) => ({
          name: entry.name,
          value: parseInt(entry.value, 10),
        }));
        setData(parsedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const totalValue = data.reduce((acc, entry) => acc + entry.value, 0);
  let startAngle = 0;

  return (
    <ResponsiveContainer>
      <svg width="100%" height="100%">
        <g transform={`translate(${100},${100})`}>
          {data.map((entry, index) => {
            const endAngle =
              (startAngle + (entry.value / totalValue) * 360) % 360;
            const path = calculatePath(startAngle, endAngle, 60, 80);
            startAngle = endAngle;
            return (
              <path
                key={`slice-${index}`}
                d={path}
                fill={COLORS[index % COLORS.length]}
              />
            );
          })}
        </g>
      </svg>
    </ResponsiveContainer>
  );
};

export default Piechart1;
