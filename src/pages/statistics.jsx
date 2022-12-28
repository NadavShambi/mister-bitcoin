import React, { Component } from 'react';
import { Chart } from '../cmps/Chart';
import { bitcoinService } from '../services/bitcoin.service';

export class statistics extends Component {
  state = {
    chartA: null,
  };

  componentDidMount() {
    this.loadChart();
  }

  loadChart = async () => {
    try {
      const chartA = await bitcoinService.getChartA();
      this.setState({ chartA });
    } catch (err) {
      console.log('had a big poopoo :', err);
    }
  };
  render() {
    const { chartA } = this.state;
    if (!chartA) return <div className='loader'>loading...</div>;

    return <div> {chartA && <Chart chart={chartA} />}</div>;
  }
}
