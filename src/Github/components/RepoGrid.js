import React from 'react';

import Repo from './Repo';

const RepoGrid = ({ repos, loading }) =>
    loading === true ? (
        <p>Loading repositories ...</p>
    ) : (
            <ul>
                {repos.map(repo => (
                    <Repo key={repo.id} repo={repo} />
                ))}
            </ul>
        );

export default RepoGrid;