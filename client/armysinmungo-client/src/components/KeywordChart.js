import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '코로나',
    uv: 65,
    pv: 65,
    amt: 65,
  },
  {
    name: '근무',
    uv: 47,
    pv: 47,
    amt: 47,
  },
  {
    name: '휴가',
    uv: 32,
    pv: 32,
    amt: 32,
  },
  {
    name: '시간',
    uv: 15,
    pv: 15,
    amt: 15,
  },
  {
    name: '취사',
    uv: 12,
    pv: 12,
    amt: 12,
  },

];

const getIntroOfPage = (label) => {
  if (label === 'Page A') {
    return "Page A is about men's clothing";
  }
  if (label === 'Page B') {
    return "Page B is about women's dress";
  }
  if (label === 'Page C') {
    return "Page C is about women's bag";
  }
  if (label === 'Page D') {
    return 'Page D is about household goods';
  }
  if (label === 'Page E') {
    return 'Page E is about food';
  }
  return '';
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        {/* <p className="label">{`${label} : ${payload[0].value}`}</p> */}
        {/* <p className="intro">{getIntroOfPage(label)}</p> */}
        <p className="desc">{`${label} : ${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
};

export default class Example extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/tooltip-with-customized-content-lyxvs';

  render() {
    return (
      <ResponsiveContainer width="100%" height="90%">
        <BarChart
          width={500}
          height={300}
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
          <Tooltip content={<CustomTooltip />} />
          {/* <Legend /> */}
          <Bar dataKey="pv" barSize={20} fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    );
  }
}
