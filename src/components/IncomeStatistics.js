import React from 'react'
import { CChart } from '@coreui/react-chartjs'

function IncomeStatistics() {
  return (
    <div>
      <h3>Income Statistics</h3>
      <CChart
  type="bar"
  data={{
    labels: ['', '',''],
    datasets: [
      {
        label: 'Income',
        data: [15,21,32],
        backgroundColor: ["#b0cfb5", "#d6e6f5", "#ff9900"], 
      },
    ],
  }}
  labels="months"
/>
    </div>
  )
}

export default IncomeStatistics