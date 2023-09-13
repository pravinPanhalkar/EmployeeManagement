import React, { useEffect } from "react";
import GridLayout from "react-grid-layout";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts";
import { useEmployeeContext } from "../../context/useContext";

const Dashboard = () => {
  const { emp } = useEmployeeContext();
  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 4, y: 0, w: 1, h: 2 },
  ];
  useEffect(() => {
    console.log(emp);
  });

  const barChart = emp.map((userItem, index) => {
    if (userItem.graphkey === 1) {
      return (
        <div key={index} className="chart-card">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={800}
              height={700}
              data={userItem.salary}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="amount" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
          <p>{userItem.name}</p>
        </div>
      );
    }

    if (userItem.graphkey === 2) {
      return (
        <div key={index} className="chart-card">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              width={500}
              height={400}
              data={userItem.salary}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </ResponsiveContainer>
          <p>{userItem.name}</p>
        </div>
      );
    }

    if (userItem.graphkey === 3) {
      return (
        <div key={index} className="chart-card">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={userItem.salary}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="amount"
                stroke="#8884d8"
                strokeDasharray="5 5"
              />
            </LineChart>
          </ResponsiveContainer>
          <p>{userItem.name}</p>
        </div>
      );
    }
  });

  return (
    <div>
      <GridLayout layout={layout} cols={12} rowHeight={30} width={1200}>
        {barChart}
      </GridLayout>
    </div>
  );
};

export default Dashboard;
