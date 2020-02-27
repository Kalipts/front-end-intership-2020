import React from 'react';
import { useContext } from 'react';
import Avatar from '@material-ui/core/Avatar';

import StyledProfile from './Style/StyledProfile';
import ResourceItem from './Style/ResourceItem';
import Name from './Style/Name';
import { CalendarContext } from '../../../context/Calendar';

const Profile = props => {
  const { src, name,indexResource } = props;
  const calendarContext = useContext(CalendarContext);
  const { getMaxTotalOverlapBooking } = calendarContext;

  return (
    <ResourceItem>
      <StyledProfile numberBookingOverlap={getMaxTotalOverlapBooking(indexResource)}>
        <Avatar alt="profile" src={src} />
        <Name>{name}</Name>
      </StyledProfile>{' '}
    </ResourceItem>
  );
};

export default Profile;
