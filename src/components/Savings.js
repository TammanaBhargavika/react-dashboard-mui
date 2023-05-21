import React from 'react';
import { CChart } from '@coreui/react-chartjs'

function Savings() {
  return (
    <div>
      <h3>Savings</h3>
      <CChart
        type="line"
        data={{
          labels: ["January", "February", "March", "April", "May", "June", "July"],
          datasets: [
            {
              label: "My First dataset",
              backgroundColor: "rgba(151, 187, 205, 0.2)",
              borderColor: "rgba(151, 187, 205, 1)",
              pointBackgroundColor: "rgba(220, 220, 220, 1)",
              pointBorderColor: "#fff",
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40]
            }
          ],
        }}
      />
    </div>
  )
}
export default Savings