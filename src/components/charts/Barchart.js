import React, { PureComponent } from 'react';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    name: 'Sep',
    shopA: 800,
    shopB: 2400,
    shopC: 2400,
  },
  {
    name: 'Oct',
    shopA: 3000,
    shopB: 1398,
    shopC: 2210,
  },
  {
    name: 'Nov',
    shopA: 2000,
    shopB: 9800,
    shopC: 2290,
  },
  {
    name: 'Dec',
    shopA: 2780,
    shopB: 3908,
    shopC: 2000,
  },
  {
    name: 'Jan',
    shopA: 1890,
    shopB: 4800,
    shopC: 2181,
  },
  {
    name: 'Feb',
    shopA: 2390,
    shopB: 3800,
    shopC: 2500,
  },
];

export default class Barchart extends PureComponent {
  render() {
    return (
      <ResponsiveContainer width="100%" height="80%">
        <BarChart
          width={500}
          height={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="shopA" fill="#8884d8" />
          <Bar dataKey="shopB" fill="#82ca9d" />
          <Bar dataKey="shopA" fill="orange" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
