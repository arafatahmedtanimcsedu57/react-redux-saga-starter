import React from "react";

import User from "./User";

const UserGrid = ({ users, loading }) =>
  loading === true ? (
    <p>Loading Users ...</p>
  ) : (
    <ul>
      {users.map((user) => (
        <User key={user.id} user={user} />
      ))}
    </ul>
  );

export default UserGrid;
