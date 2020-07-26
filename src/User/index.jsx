import React, { Component } from "react";
import { connect } from "react-redux";

import UserGrid from "./components/UserGrid";
import actions from "./actions";

class User extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <div>
        <h2>Users</h2>
        <UserGrid users={this.props.users} loading={this.props.loading} />
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: users.users,
  loading: users.loading,
});

const mapDispatchToProps = {
  fetchUsers: actions.fetchUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
