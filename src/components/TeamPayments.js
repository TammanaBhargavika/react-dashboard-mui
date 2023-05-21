import React from 'react'
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import DateRangeIcon from '@mui/icons-material/DateRange';

function TeamPayments() {
  return (
    <div>
      <h3>Team Payments
      <span>
      <NotificationsIcon/>
      </span>
      </h3>
      
      <h5>
      <DateRangeIcon color="primary"/>
        07 Dec Approval</h5>
      
      <AvatarGroup total={24}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
      <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
    </AvatarGroup>
    </div>
  )
}

export default TeamPayments