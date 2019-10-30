/* eslint-disable no-undef */
// eslint-disable-next-line react/prefer-stateless-function
import React, { useState } from 'react';
import {
  Card, CardImg, CardBody, CardTitle,
} from 'reactstrap';
import UserModel from '../modules/users';

function UserPage() {
  const { match: { params: { username } } } = useState(props);
  const user = UserModel.getUserByUsername(username);
  // const user = UserModel.getUser(id);
  const { profile } = user;
  return (
    <div>
      <Card>
        <CardImg style={{ width: 200, height: 200 }} className="avatar" src={profile.avatar} />
        <CardBody>
          <CardTitle>{profile.firstName}</CardTitle>
          <CardTitle>{profile.lastName}</CardTitle>
        </CardBody>
      </Card>
    </div>
  );
}

export default UserPage;
