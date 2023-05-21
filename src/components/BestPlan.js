import * as React from 'react'
import './BestPlan.css'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const BestPlan = () => {
  return(
    <div>
    <div class="container">
        <img src="/static/images/avatar/bg2img.jpg" alt="back-groun image" style={{ width: "100%" }} />
        <div class="top-left">
          <h1>$95.9</h1>
          <p>Per Month</p>
        </div>
        <div class="bottom-left">Choose Best Plan For You!</div>
      </div>
      <Stack spacing={2} direction="row">
        <Button variant="text">Details</Button>
        <Button variant="contained">Upgrade</Button>
      </Stack>
    </div>
  );
}
export default BestPlan
