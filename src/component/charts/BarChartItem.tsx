import { Box } from "@mui/material";
import { User } from "../../pages/Dashboard/Dashboard";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

export const BarChartItem = (key: string, userItem: User) => {
  return (
    <Box key={key} className="chart-card">
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
};

export default BarChart;
