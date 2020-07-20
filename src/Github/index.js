import React, { Component } from 'react';
import { connect } from 'react-redux';

import RepoGrid from './components/RepoGrid';
import actions from './actions';

class Github extends Component {
  componentDidMount() {
    this.props.fetchRepos();
  }

  render() {
    return (
      <div>
        <h2>Github Repositories</h2>
        <RepoGrid repos={this.props.repos} loading={this.props.loading} />
      </div>
    );
  }
}

const mapStateToProps = ({ github }) => ({
  repos: github.repos,
  loading: github.loading
});

const mapDispatchToProps = {
  fetchRepos: actions.fetchRepos
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Github);