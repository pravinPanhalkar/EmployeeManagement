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
import { BarChartItem } from "../../component/charts/BarChartItem";
import Box from "@mui/material/Box";

export const Dashboard = () => {
  const { emp } = useEmployeeContext();
  const layout = [
    { i: "card1", x: 0, y: 0, w: 2, h: 2 },
    { i: "card2", x: 0, y: 0, w: 2, h: 2, minW: 2, maxW: 4 },
    { i: "card3", x: 4, y: 0, w: 2, h: 2 },
    { i: "card4", x: 4, y: 4, w: 2, h: 2 },
  ];

  const getCharts = emp.map((userItem: User) => {
    if (userItem.graphkey === 1) {
      return (
        <Box key="card1" className="chart-card" data-testid="card-item">
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
        </Box>
      );
    }

    if (userItem.graphkey === 2) {
      return (
        <Box key="card2" className="chart-card" data-testid="card-item">
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
        </Box>
      );
    }

    if (userItem.graphkey === 3) {
      return (
        <Box key="card3" className="chart-card" data-testid="card-item">
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
        </Box>
      );
    }

    if (userItem.graphkey === 4) {
      return (
        <Box key="card4" className="chart-card" data-testid="card-item">
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
        </Box>
      );
    }
  });

  return (
    <Box data-testid="chart-container">
      <GridLayout layout={layout} cols={12} rowHeight={100} width={1200}>
        {getCharts}
      </GridLayout>
    </Box>
  );
};

export type User = {
  id?: number;
  name?: string;
  address?: string;
  graphkey?: number;
  salary?: [];
};
