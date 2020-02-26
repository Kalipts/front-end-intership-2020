import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import StyledProfile from './StyledProfile';

const Profile = props => {
  const { src, name } = props;
  return (
    <tr style={{ borderBottom: '1px solid #e9e9e9' }}>
      <td style={{ height: '46px' }}>
        <div
          style={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            paddingRight: '5px !important',
            fontSize: '14px',
            fontWeight: '500'
          }}
        >
          <StyledProfile>
            <Avatar alt="profile" src={src} />
            <div>{name}</div>
          </StyledProfile>{' '}
        </div>
      </td>
    </tr>
  );
};

export default Profile;
