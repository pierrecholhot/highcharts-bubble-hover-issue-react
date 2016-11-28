import React, { Component } from 'react'
import Highcharts from 'highcharts'

require('highcharts-more')(Highcharts)

class Chart extends Component {
  componentDidMount() {
    this.instance = new Highcharts.Chart(this.chart, this.props.options)
  }
  componentWillUnmount() {
    this.instance.destroy()
  }
  render() {
    return <div ref={(c) => { this.chart = c }} />
  }
}

export default Chart
