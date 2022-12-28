import React, { Component } from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from 'recharts';

export class Chart extends Component {
  render() {
    const data = this.props.chart.values.map((val, idx) => ({
      date: 'Hour - '+idx,
      value: val.y,
    }));

    return (
      <div>
        {/* <Sparklines data={data}>
          <SparklinesLine color='#558784' />
        </Sparklines> */}

        <LineChart width={600} height={300} data={data}>
          <Line type='monotone' dataKey='value' stroke='#8884d8' />
          {/* <CartesianGrid stroke='#ccc' /> */}
          <CartesianGrid stroke='#ccc'  />
          <XAxis dataKey='date' />
          <Tooltip />
        </LineChart>

        
      </div>
    );
  }
}
