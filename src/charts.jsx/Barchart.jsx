import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const RoundedRectangle = (props) => {
  const { x, y, width, height } = props;
  const radius = 5;

  return (
    <path
      d={`M${x},${y + radius} 
         A${radius},${radius} 0 0 1 ${x + radius},${y} 
         L${x + width - radius},${y} 
         A${radius},${radius} 0 0 1 ${x + width},${y + radius} 
         L${x + width},${y + height - radius} 
         A${radius},${radius} 0 0 1 ${x + width - radius},${y + height} 
         L${x + radius},${y + height} 
         A${radius},${radius} 0 0 1 ${x},${y + height - radius} 
         L${x},${y + radius} 
         Z`}
      fill={props.fill}
    />
  );
};

const Barchart1 = () => {
  const [data, setData] = useState([]);
  const customYTicks = [0, 100, 200, 300, 400, 500];

  useEffect(() => {
    fetch("https://api-production-5b69.up.railway.app/bar")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <ResponsiveContainer height="100%" width="100%">
      <BarChart
        width={900}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid vertical={false} />
        <XAxis dataKey="name" />
        <YAxis
          ticks={customYTicks}
          domain={[0, 500]}
          axisLine={false}
          tickMargin={10}
        />
        <Tooltip />
        <Bar
          dataKey="pv"
          fill="#98D89E"
          shape={<RoundedRectangle />}
          barSize={45}
        />
        <Bar
          dataKey="uv"
          fill="#E9A0A0"
          shape={<RoundedRectangle />}
          barSize={45}
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Barchart1;
